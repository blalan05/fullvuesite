/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const host = event.request.headers.get('host') ?? '';
	const hostname = host.split(':')[0];
	const localHost =
		hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.localhost');
	const marketingHost = hostname === 'fullvue.io' || hostname === 'www.fullvue.io';
	const launcherQuery =
		event.url.searchParams.has('app') || event.url.searchParams.get('signedOut') === '1';

	event.locals.isAppLauncher =
		hostname.startsWith('app.') || (launcherQuery && (localHost || marketingHost));

	if (event.locals.isAppLauncher) {
		const { pathname } = event.url;
		const launcherAsset =
			pathname === '/' ||
			pathname.startsWith('/_app') ||
			pathname.startsWith('/.well-known') ||
			pathname.startsWith('/icons') ||
			pathname === '/api/resolve-tenant' ||
			pathname === '/manifest.webmanifest' ||
			pathname === '/sw.js' ||
			pathname === '/root.css' ||
			pathname === '/favicon.ico';

		if (!launcherAsset) {
			return Response.redirect(new URL(`/${event.url.search}`, event.url), 302);
		}
	}

	return resolve(event);
}
