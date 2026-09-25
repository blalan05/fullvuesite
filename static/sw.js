const CACHE_NAME = 'fv-launcher-v1';
const PRECACHE_PATHS = [
	'/',
	'/manifest.webmanifest',
	'/root.css',
	'/favicon.ico',
	'/favicon.png',
	'/icons/icon-192x192.png',
	'/icons/icon-512x512.png',
	'/icons/icon-maskable-512x512.png'
];

function isLauncherOrigin(hostname) {
	return hostname.startsWith('app.') || hostname === 'localhost' || hostname.endsWith('.localhost');
}

function collectShellUrls(html, origin) {
	const urls = new Set();
	const pattern = /(?:src|href)=["']([^"']+)["']/gi;
	let match;
	while ((match = pattern.exec(html))) {
		try {
			const url = new URL(match[1], origin);
			if (url.origin !== origin) {
				continue;
			}
			if (
				url.pathname.startsWith('/_app/') ||
				url.pathname.endsWith('.css') ||
				url.pathname.endsWith('.js') ||
				url.pathname.endsWith('.png') ||
				url.pathname.endsWith('.woff2')
			) {
				urls.add(`${url.pathname}${url.search}`);
			}
		} catch {
			// Ignore malformed URLs in HTML.
		}
	}
	return [...urls];
}

async function cacheAll(cache, urls) {
	await Promise.all(
		urls.map((url) =>
			cache.add(url).catch(() => {
				// Optional assets (missing favicon aliases, etc.) must not fail install.
			})
		)
	);
}

async function precacheLauncher() {
	const cache = await caches.open(CACHE_NAME);
	await cacheAll(cache, PRECACHE_PATHS);

	const home = (await cache.match('/')) || (await fetch('/'));
	if (home.ok) {
		await cache.put('/', home.clone());
		const html = await home.text();
		await cacheAll(cache, collectShellUrls(html, self.location.origin));
	}
}

self.addEventListener('install', (event) => {
	event.waitUntil(
		precacheLauncher().then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
			await self.clients.claim();
		})()
	);
});

self.addEventListener('fetch', (event) => {
	const { request } = event;
	if (request.method !== 'GET') {
		return;
	}

	const url = new URL(request.url);
	if (url.origin !== self.location.origin) {
		return;
	}

	if (!isLauncherOrigin(self.location.hostname)) {
		return;
	}

	if (url.pathname.startsWith('/api/')) {
		return;
	}

	if (request.mode === 'navigate') {
		event.respondWith(
			(async () => {
				const cache = await caches.open(CACHE_NAME);
				try {
					const fresh = await fetch(request);
					if (fresh.ok) {
						await cache.put('/', fresh.clone());
						await cache.put(request, fresh.clone());
						const html = await fresh.clone().text();
						await cacheAll(cache, collectShellUrls(html, self.location.origin));
					}
					return fresh;
				} catch {
					return (
						(await cache.match('/')) ||
						(await cache.match(request)) ||
						new Response('FullVue is unavailable offline until this device has opened the app once while online.', {
							status: 503,
							headers: { 'Content-Type': 'text/plain; charset=utf-8' }
						})
					);
				}
			})()
		);
		return;
	}

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE_NAME);
			const cached = await cache.match(request);
			if (cached) {
				fetch(request)
					.then((fresh) => {
						if (fresh.ok) {
							return cache.put(request, fresh);
						}
					})
					.catch(() => {});
				return cached;
			}

			try {
				const fresh = await fetch(request);
				if (fresh.ok) {
					await cache.put(request, fresh.clone());
				}
				return fresh;
			} catch {
				return new Response('', { status: 503 });
			}
		})()
	);
});
