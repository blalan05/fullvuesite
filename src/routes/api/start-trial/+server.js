import { env } from '$env/dynamic/private';
import { LEGAL } from '$lib/legal.js';

// Server-to-server proxy to the FoundTech control plane: creates a 14-day
// trial tenant (random two-word slug, auto-placed on a trial node) with the
// modules the visitor picked. The API key never reaches the browser.
// Configure in Netlify env:
//   FOUNDTECH_DASH_URL     e.g. https://dash.foundtechsolutions.com
//   FOUNDTECH_DASH_API_KEY minted in FoundTech Dash -> Settings -> API clients

// Best-effort per-IP throttle, same shape as resolve-tenant.
const attempts = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

// Signup kicks off database + deploy work upstream, so allow a slow answer —
// but never hang a serverless invocation on an unresponsive control plane.
const UPSTREAM_TIMEOUT_MS = 15_000;

// Catalog keys, same shape the control plane validates.
const MODULE_KEY_RE = /^[a-z][a-z0-9-]{0,31}$/;
const MAX_MODULES = 40;

// Company-size band keys and the phone shape the control plane validates —
// checked here so an obviously bad payload never costs an upstream round trip.
const COMPANY_SIZE_KEYS = ['1-5', '6-10', '11-20', '21-50', '51-250', '250+'];
const PHONE_RE = /^[0-9+()\-.\s]{7,40}$/;

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

/**
 * @param {unknown} raw
 * @returns {string[]}
 */
function cleanModules(raw) {
	if (!Array.isArray(raw)) return [];
	/** @type {string[]} */
	const keys = [];
	for (const value of raw) {
		const key = String(value ?? '').trim();
		if (!MODULE_KEY_RE.test(key) || keys.includes(key)) continue;
		keys.push(key);
		if (keys.length >= MAX_MODULES) break;
	}
	return keys;
}

/**
 * @param {number} status
 * @param {Record<string, unknown>} body
 * @param {Record<string, string>} [headers]
 */
const json = (status, body, headers = {}) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json', ...headers }
	});

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, getClientAddress }) {
	let ip = 'unknown';
	try {
		ip = getClientAddress();
	} catch {
		// prerender/dev contexts may not provide an address
	}
	if (throttled(ip)) return json(429, { ok: false, reason: 'throttled' });

	if (!env.FOUNDTECH_DASH_URL || !env.FOUNDTECH_DASH_API_KEY) {
		return json(503, { ok: false, reason: 'not-configured' });
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return json(400, { ok: false, reason: 'bad-request' });
	}

	// Honeypot: bots fill every field; humans never see this one.
	if (body?.website) return json(400, { ok: false, reason: 'bad-request' });

	const companyName = String(body?.companyName ?? '').trim();
	const firstName = String(body?.firstName ?? '').trim();
	const lastName = String(body?.lastName ?? '').trim();
	// Legacy alias from before the form split the name in two; the split
	// fields win upstream whenever they are present.
	const contactName = `${firstName} ${lastName}`.trim() || String(body?.contactName ?? '').trim();
	const contactEmail = String(body?.contactEmail ?? '').trim();
	const phone = String(body?.phone ?? '').trim();
	const companySize = String(body?.companySize ?? '').trim();
	const modules = cleanModules(body?.modules);
	if (!companyName || !firstName || !lastName || !contactEmail || !/.+@.+\..+/.test(contactEmail)) {
		return json(400, { ok: false, reason: 'bad-request' });
	}
	// Company size is optional — trials run uncapped, so a blank one costs the
	// visitor nothing. A value that IS supplied must be a known band, since a
	// junk one would be rejected upstream anyway.
	if (companySize && !COMPANY_SIZE_KEYS.includes(companySize)) {
		return json(400, { ok: false, reason: 'bad-request' });
	}
	if (phone && !PHONE_RE.test(phone)) {
		return json(400, { ok: false, reason: 'bad-request' });
	}
	// Clickwrap gate: no signup without affirmative acceptance. The versions are
	// stamped server-side from $lib/legal.js (deployed atomically with the
	// documents), so the record always reflects what was live — the client only
	// says "the box was ticked".
	if (body?.termsAccepted !== true) {
		return json(400, { ok: false, reason: 'bad-request' });
	}
	// The control plane strips unknown payload fields, so the durable acceptance
	// record rides in `notes`, which is stored verbatim on the tenant.
	const notes =
		'Signed up via fullvue.io trial form. ' +
		`Accepted Subscription Agreement v${LEGAL.subscriptionAgreement.version} ` +
		`and acknowledged Privacy Policy v${LEGAL.privacyPolicy.version} ` +
		`via required checkbox at ${new Date().toISOString()}.`;

	let upstream;
	try {
		upstream = await fetch(`${env.FOUNDTECH_DASH_URL}/api/public/signups`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-Key': env.FOUNDTECH_DASH_API_KEY
			},
			body: JSON.stringify({
				appSlug: 'fullvue',
				companyName,
				firstName,
				lastName,
				contactName: contactName || null,
				contactEmail,
				phone: phone || null,
				companySize: companySize || null,
				modules,
				notes
			}),
			signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS)
		});
	} catch (error) {
		// AbortSignal.timeout rejects with a DOMException named TimeoutError —
		// some runtimes surface it as the fetch error's cause instead.
		const thrown = /** @type {{ name?: string, cause?: { name?: string } } | null} */ (error);
		const timedOut =
			thrown?.name === 'TimeoutError' || thrown?.cause?.name === 'TimeoutError';
		return json(timedOut ? 504 : 502, {
			ok: false,
			reason: timedOut ? 'upstream-timeout' : 'upstream-unreachable'
		});
	}

	const data = await upstream.json().catch(() => ({}));

	if (upstream.status === 201) {
		return json(200, {
			ok: true,
			slug: data.slug,
			instanceUrl: data.instanceUrl,
			trialEndsAt: data.trialEndsAt,
			// "queued" | "manual" | "no-capacity" — drives honest success copy.
			provisioning: data.provisioning ?? null,
			// Only true when the control plane says a welcome email was queued;
			// nothing is sent unless it has a mail key configured.
			emailQueued: data.emailQueued === true
		});
	}
	// A stolen-key or burst limit upstream is a throttle, not a broken site.
	if (upstream.status === 429) {
		const retryAfter = upstream.headers.get('retry-after');
		return json(
			429,
			{ ok: false, reason: 'throttled' },
			retryAfter ? { 'Retry-After': retryAfter } : {}
		);
	}
	// Deliberately no slug/id/status: an existing tenant must not be
	// enumerable by anyone who can guess an email address.
	if (upstream.status === 409) {
		return json(409, { ok: false, reason: 'exists' });
	}
	// Usually a module key that vanished from the catalog since the page loaded.
	if (upstream.status === 400) {
		return json(400, { ok: false, reason: 'invalid' });
	}
	return json(502, { ok: false, reason: 'upstream-error' });
}
