import tenantsData from '$lib/tenants.json';
import { findTenant } from '$lib/app-launcher';

// Best-effort per-IP throttle: slows dictionary enumeration of tenant slugs.
// (In-memory, so it resets per serverless instance — a burst limiter, not a guarantee.)
const attempts = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

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

	const tenant = findTenant(String(body?.slug ?? ''), tenantsData.tenants);

	if (!tenant) {
		return new Response(JSON.stringify({ ok: false }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Deliberately no display name in the response: confirming a slug is required
	// for the launcher to work, but customer names are not enumerable from here.
	return new Response(JSON.stringify({ ok: true, slug: tenant.slug }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
