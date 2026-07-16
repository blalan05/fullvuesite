import tenantsData from '$lib/tenants.json';
import { findTenant } from '$lib/app-launcher';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
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

	return new Response(JSON.stringify({ ok: true, slug: tenant.slug, name: tenant.name }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
