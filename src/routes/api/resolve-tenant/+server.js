import tenantsData from '$lib/tenants.json';
import { findTenant } from '$lib/app-launcher';
import { env } from '$env/dynamic/private';

// Freshly provisioned trials never appear in the static tenants.json, so when
// the static list misses we ask the control plane (same env vars as the trial
// flow). The static list stays as both the fast path and the fallback when the
// control plane is unreachable or not configured.
const UPSTREAM_TIMEOUT_MS = 5_000;
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,62}$/;

/** @param {string} slug @returns {Promise<string | null>} the canonical slug, or null */
async function resolveViaControlPlane(slug) {
	if (!env.FOUNDTECH_DASH_URL || !env.FOUNDTECH_DASH_API_KEY) return null;
	try {
		const upstream = await fetch(
			`${env.FOUNDTECH_DASH_URL}/api/public/apps/fullvue/tenants/${encodeURIComponent(slug)}`,
			{
				headers: { 'X-API-Key': env.FOUNDTECH_DASH_API_KEY },
				signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS)
			}
		);
		if (!upstream.ok) return null;
		const data = await upstream.json().catch(() => null);
		return typeof data?.slug === 'string' && data.slug ? data.slug : null;
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('[resolve-tenant] control plane lookup failed:', message);
		return null;
	}
}

// Best-effort per-IP throttle: slows dictionary enumeration of tenant slugs.
// (In-memory, so it resets per serverless instance — a burst limiter, not a guarantee.)
const attempts = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

/** @param {string} ip */
function throttled(ip) {
	const now = Date.now();
	const entry = attempts.get(ip);
	if (!entry || now - entry.start > WINDOW_MS) {
		attempts.set(ip, { start: now, count: 1 });
		return false;
	}
	entry.count += 1;
	if (attempts.size > 5000) attempts.clear();
	return entry.count > MAX_PER_WINDOW;
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, getClientAddress }) {
	let ip = 'unknown';
	try {
		ip = getClientAddress();
	} catch {
		// prerender/dev contexts may not provide an address
	}

	if (throttled(ip)) {
		return new Response(JSON.stringify({ ok: false }), {
			status: 429,
			headers: { 'Content-Type': 'application/json', 'Retry-After': '60' }
		});
	}

	let body;

	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ ok: false }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const requested = String(body?.slug ?? '');
	let slug = findTenant(requested, tenantsData.tenants)?.slug ?? null;

	if (!slug) {
		const normalized = requested.trim().toLowerCase();
		if (SLUG_RE.test(normalized)) {
			slug = await resolveViaControlPlane(normalized);
		}
	}

	if (!slug) {
		return new Response(JSON.stringify({ ok: false }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Deliberately no display name in the response: confirming a slug is required
	// for the launcher to work, but customer names are not enumerable from here.
	return new Response(JSON.stringify({ ok: true, slug }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
