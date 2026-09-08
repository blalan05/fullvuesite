<script lang="ts">
	import { browser } from '$app/environment';
	import type { SiteTheme } from '$lib/theme.svelte';

	interface Props {
		/** Folder under /shots, e.g. landing, jobs, ai */
		slug: string;
		alt: string;
		/** Prefer desktop for galleries; phone for mobile hero stacks */
		device?: 'desktop' | 'tablet' | 'phone';
		class?: string;
		loading?: 'lazy' | 'eager';
	}

	let {
		slug,
		alt,
		device = 'desktop',
		class: className = '',
		loading = 'lazy'
	}: Props = $props();

	function readPainted(): SiteTheme {
		if (!browser) return 'dark';
		const t = document.documentElement.dataset.theme;
		return t === 'light' || t === 'dark' ? t : 'dark';
	}

	let painted: SiteTheme = $state(readPainted());

	$effect(() => {
		if (!browser) return;

		const sync = () => {
			painted = readPainted();
		};
		sync();

		const obs = new MutationObserver(sync);
		obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
		return () => obs.disconnect();
	});

	const preferredSrc = $derived(`/shots/${slug}/${device}-${painted}.webp`);
	const fallbackSrc = $derived(
		`/shots/${slug}/${device}-${painted === 'dark' ? 'light' : 'dark'}.webp`
	);

	let activeSrc = $state('');

	$effect(() => {
		const preferred = preferredSrc;
		const fallback = fallbackSrc;

		if (!browser) {
			activeSrc = preferred;
			return;
		}

		let cancelled = false;
		activeSrc = preferred;

		const probe = new Image();
		probe.onload = () => {
			if (!cancelled) activeSrc = preferred;
		};
		probe.onerror = () => {
			if (!cancelled) activeSrc = fallback;
		};
		// Cache-bust the probe only — display URL stays clean.
		probe.src = `${preferred}?probe=1`;

		return () => {
			cancelled = true;
		};
	});
</script>

{#if activeSrc}
	<img src={activeSrc} {alt} {loading} class={className} data-theme-shot={painted} />
{/if}
