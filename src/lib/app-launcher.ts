export const TENANT_DOMAIN = 'fullvue.io';
export const TENANT_SLUG_KEY = 'fv-tenant-slug';
export const TENANT_NAME_KEY = 'fv-tenant-name';
export const LAST_TENANT_COOKIE = 'fullvue_last_tenant';
export const LAST_TENANT_HOST_KEY = 'fv-last-tenant-host';

const BLOCKED_LAST_TENANT_HOSTS = new Set(['app.fullvue.io', 'www.fullvue.io', 'fullvue.io']);
const LAST_TENANT_HOST_PATTERN = /^[a-z0-9-]+\.fullvue\.io$/;

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

	return `https://${slug}.${TENANT_DOMAIN}/login`;
}

export function tenantOriginUrl(host: string): string {
	const parsed = parseLastTenantHost(host);
	if (!parsed) {
		throw new Error('Invalid tenant host');
	}

	return `https://${parsed}/`;
}

/** Accept only a host like bosstables.fullvue.io. */
export function parseLastTenantHost(value: string | null | undefined): string | null {
	if (!value) {
		return null;
	}

	const host = value.trim().toLowerCase();
	if (!host || host.includes('/') || host.includes(':')) {
		return null;
	}

	if (!LAST_TENANT_HOST_PATTERN.test(host) || BLOCKED_LAST_TENANT_HOSTS.has(host)) {
		return null;
	}

	const slug = host.slice(0, -`.${TENANT_DOMAIN}`.length);
	if (!SLUG_PATTERN.test(slug) || slug === 'app' || slug === 'www') {
		return null;
	}

	return host;
}

export function readLastTenantCookie(cookieSource?: string): string | null {
	const source = cookieSource ?? (typeof document === 'undefined' ? '' : document.cookie);
	if (!source) {
		return null;
	}

	for (const part of source.split(';')) {
		const trimmed = part.trim();
		const eq = trimmed.indexOf('=');
		if (eq === -1) {
			continue;
		}

		const name = trimmed.slice(0, eq).trim();
		if (name !== LAST_TENANT_COOKIE) {
			continue;
		}

		try {
			return parseLastTenantHost(decodeURIComponent(trimmed.slice(eq + 1).trim()));
		} catch {
			return null;
		}
	}

	return null;
}

export function rememberLastTenantHost(hostOrSlug: string): void {
	if (typeof localStorage === 'undefined') {
		return;
	}

	const host =
		parseLastTenantHost(hostOrSlug) ??
		parseLastTenantHost(`${normalizeSubdomainInput(hostOrSlug)}.${TENANT_DOMAIN}`);
	if (!host) {
		return;
	}

	localStorage.setItem(LAST_TENANT_HOST_KEY, host);
}

export function getStoredLastTenantHost(): string | null {
	if (typeof localStorage === 'undefined') {
		return null;
	}

	return parseLastTenantHost(localStorage.getItem(LAST_TENANT_HOST_KEY));
}

/** Cookie first (ERP updates this after signed-in visits); localStorage only if the cookie is missing. */
export function getLastTenantHost(cookieSource?: string): string | null {
	return readLastTenantCookie(cookieSource) ?? getStoredLastTenantHost();
}

export function rememberTenant(slug: string, name?: string): void {
	if (typeof localStorage === 'undefined') {
		return;
	}

	localStorage.setItem(TENANT_SLUG_KEY, slug);
	if (name) {
		localStorage.setItem(TENANT_NAME_KEY, name);
	}

	rememberLastTenantHost(`${slug}.${TENANT_DOMAIN}`);
}

export function clearTenant(): void {
	if (typeof localStorage === 'undefined') {
		return;
	}

	localStorage.removeItem(TENANT_SLUG_KEY);
	localStorage.removeItem(TENANT_NAME_KEY);
	localStorage.removeItem(LAST_TENANT_HOST_KEY);
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

export function goToLastTenant(host: string): void {
	window.location.replace(tenantOriginUrl(host));
}
