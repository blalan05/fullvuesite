import { env } from '$env/dynamic/private';

// Server-to-server proxy to the FoundTech control plane: creates a 14-day
// trial tenant (random two-word slug, auto-placed on a trial node). The API
// key never reaches the browser. Configure in Netlify env:
//   FOUNDTECH_DASH_URL     e.g. https://dash.foundtechsolutions.com
//   FOUNDTECH_DASH_API_KEY minted in FoundTech Dash -> Settings -> API clients

// Best-effort per-IP throttle, same shape as resolve-tenant.
const attempts = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

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

const json = (status, body) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' }
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
	const contactName = String(body?.contactName ?? '').trim();
	const contactEmail = String(body?.contactEmail ?? '').trim();
	if (!companyName || !contactEmail || !/.+@.+\..+/.test(contactEmail)) {
		return json(400, { ok: false, reason: 'bad-request' });
	}

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
				contactName: contactName || null,
				contactEmail,
				notes: 'Signed up via fullvue.io trial form'
			})
		});
	} catch {
		return json(502, { ok: false, reason: 'upstream-unreachable' });
	}

	const data = await upstream.json().catch(() => ({}));

	if (upstream.status === 201) {
		return json(200, {
			ok: true,
			slug: data.slug,
			instanceUrl: data.instanceUrl,
			trialEndsAt: data.trialEndsAt
		});
	}
	if (upstream.status === 409) {
		return json(409, { ok: false, reason: 'exists', slug: data.slug ?? null });
	}
	return json(502, { ok: false, reason: 'upstream-error' });
}
