import { env } from '$env/dynamic/private';

// Module catalog for the /trial picker. Proxies the FoundTech control plane so
// the API key stays server-side. The catalog changes about never, so successful
// responses are held in memory for five minutes; when the control plane is
// unreachable we serve a hardcoded list so the trial form still works.
//   FOUNDTECH_DASH_URL     e.g. https://dash.foundtechsolutions.com
//   FOUNDTECH_DASH_API_KEY minted in FoundTech Dash -> Settings -> API clients

const CACHE_TTL_MS = 5 * 60_000;
// Don't hammer a control plane that just failed, but recover quickly once it's back.
const FALLBACK_TTL_MS = 30_000;
const UPSTREAM_TIMEOUT_MS = 8_000;

// Same shape the control plane validates catalog keys with.
const KEY_RE = /^[a-z][a-z0-9-]{0,31}$/;

/** @typedef {{ key: string, label: string, description: string, required: boolean }} TrialModule */

// Mirrors the control plane's default catalog, trimmed to what the page renders.
// Only used when the upstream call fails — a stale-but-sane list beats a dead form.
/** @type {TrialModule[]} */
const FALLBACK_MODULES = [
	{
		key: 'core',
		label: 'Core',
		description: 'Customers, employees, jobs, scheduling — always included.',
		required: true
	},
	{
		key: 'field',
		label: 'Field Service',
		description: 'Dispatch, routes, mobile field app.',
		required: false
	},
	{ key: 'sales', label: 'Sales', description: 'Quotes, orders, pipeline.', required: false },
	{
		key: 'invoicing',
		label: 'Invoicing',
		description: 'Invoices, payments, customer portal.',
		required: false
	},
	{
		key: 'purchasing',
		label: 'Purchasing',
		description: 'POs, receiving, vendors.',
		required: false
	},
	{
		key: 'products',
		label: 'Products',
		description: 'Catalog and inventory items.',
		required: false
	},
	{ key: 'hr', label: 'HR', description: 'Employee records and reviews.', required: false },
	{ key: 'attendance', label: 'Attendance & Payroll', description: 'Time clock, attendance, accruals, and payroll periods.', required: false }
];

/** @type {{ modules: TrialModule[], expires: number, upstream: boolean } | null} */
let cache = null;

/**
 * Keep only the fields the page renders, and only entries that look like a
 * catalog entry — the control plane's catalog is operator-editable.
 * @param {unknown} list
 * @returns {TrialModule[]}
 */
function sanitize(list) {
	if (!Array.isArray(list)) return [];
	const seen = new Set();
	/** @type {TrialModule[]} */
	const modules = [];
	for (const entry of list) {
		const key = String(entry?.key ?? '').trim();
		if (!KEY_RE.test(key) || seen.has(key)) continue;
		seen.add(key);
		modules.push({
			key,
			label: String(entry?.label ?? key).trim().slice(0, 60) || key,
			description: String(entry?.description ?? '').trim().slice(0, 240),
			required: entry?.required === true
		});
	}
	return modules;
}

/**
 * @param {TrialModule[]} modules
 * @param {boolean} upstream whether the list came from the control plane
 */
function respond(modules, upstream) {
	return new Response(JSON.stringify({ modules }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			// Never let a CDN pin the fallback list in place for five minutes.
			'Cache-Control': upstream ? 'public, max-age=300' : 'no-store'
		}
	});
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const now = Date.now();
	if (cache && cache.expires > now) {
		return respond(cache.modules, cache.upstream);
	}

	/** @type {TrialModule[]} */
	let modules = [];

	if (env.FOUNDTECH_DASH_URL && env.FOUNDTECH_DASH_API_KEY) {
		try {
			const upstream = await fetch(
				`${env.FOUNDTECH_DASH_URL}/api/public/apps/fullvue/modules`,
				{
					headers: { 'X-API-Key': env.FOUNDTECH_DASH_API_KEY },
					signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS)
				}
			);
			if (upstream.ok) {
				const data = await upstream.json().catch(() => ({}));
				modules = sanitize(data?.modules);
			}
		} catch {
			// Unreachable, timed out, or not JSON — fall through to the hardcoded list.
		}
	}

	const fromUpstream = modules.length > 0;
	if (!fromUpstream) modules = FALLBACK_MODULES;

	cache = {
		modules,
		upstream: fromUpstream,
		expires: now + (fromUpstream ? CACHE_TTL_MS : FALLBACK_TTL_MS)
	};

	return respond(modules, fromUpstream);
}
