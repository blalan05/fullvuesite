export const TENANT_DOMAIN = 'fullvue.io';
export const TENANT_SLUG_KEY = 'fv-tenant-slug';
export const TENANT_NAME_KEY = 'fv-tenant-name';

export interface Tenant {
	slug: string;
	name: string;
	region?: string;
}

export interface TenantsFile {
	tenants: Tenant[];
}

const SLUG_PATTERN = /^[a-z0-9-]+$/;

export function normalizeSubdomainInput(input: string): string {
	let slug = input.trim().toLowerCase();
	slug = slug.replace(/^https?:\/\//, '');
	slug = slug.split('/')[0] ?? slug;

	if (slug.endsWith('.fullvue.io')) {
		slug = slug.slice(0, -'.fullvue.io'.length);
	}

	return slug;
}

export function findTenant(slug: string, tenants: Tenant[]): Tenant | null {
	const normalized = normalizeSubdomainInput(slug);

	if (!SLUG_PATTERN.test(normalized)) {
		return null;
	}

	return tenants.find((tenant) => tenant.slug === normalized) ?? null;
}

export function tenantUrl(slug: string): string {
	if (!SLUG_PATTERN.test(slug)) {
		throw new Error('Invalid tenant');
	}

	return `https://${slug}.${TENANT_DOMAIN}/`;
}

export function rememberTenant(slug: string, name?: string): void {
	if (typeof localStorage === 'undefined') {
		return;
	}

	localStorage.setItem(TENANT_SLUG_KEY, slug);
	if (name) {
		localStorage.setItem(TENANT_NAME_KEY, name);
	}
}

export function clearTenant(): void {
	if (typeof localStorage === 'undefined') {
		return;
	}

	localStorage.removeItem(TENANT_SLUG_KEY);
	localStorage.removeItem(TENANT_NAME_KEY);
}

export function getRememberedTenant(): { slug: string; name: string | null } | null {
	if (typeof localStorage === 'undefined') {
		return null;
	}
	const slug = localStorage.getItem(TENANT_SLUG_KEY);
	if (!slug) {
		return null;
	}

	return {
		slug,
		name: localStorage.getItem(TENANT_NAME_KEY)
	};
}

export function isValidTenantSlug(slug: string, tenants: Tenant[]): boolean {
	return findTenant(slug, tenants) !== null;
}

export async function resolveTenant(
	slug: string
): Promise<{ slug: string; name: string } | null> {
	const response = await fetch('/api/resolve-tenant', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ slug })
	});

	if (!response.ok) {
		return null;
	}

	const data = (await response.json()) as { ok: boolean; slug?: string; name?: string };

	if (!data.ok || !data.slug) {
		return null;
	}

	return { slug: data.slug, name: data.name ?? data.slug };
}

export function goToTenant(slug: string): void {
	window.location.replace(tenantUrl(slug));
}
