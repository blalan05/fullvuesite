<script lang="ts">
	import { browser } from '$app/environment';
	import ThemeShot from '$lib/theme-shot.svelte';

	interface Shot {
		slug: string;
		alt: string;
		caption: string;
	}

	interface Props {
		shots: Shot[];
		/** Auto-advance interval in ms; 0 disables. */
		intervalMs?: number;
	}

	let { shots, intervalMs = 5500 }: Props = $props();

	let index = $state(0);
	let paused = $state(false);
	let reduceMotion = $state(false);
	let lightboxOpen = $state(false);
	/** Fine pointer (mouse) can click the image; coarse/touch uses the expand icon only. */
	let imageClickable = $state(false);
	let touchStartX = $state<number | null>(null);
	let touchStartY = $state<number | null>(null);

	const current = $derived(shots[index] ?? shots[0]);
	const count = $derived(shots.length);

	function go(delta: number) {
		if (!count) return;
		index = (index + delta + count) % count;
	}

	function goTo(i: number) {
		if (i < 0 || i >= count) return;
		index = i;
	}

	function openLightbox() {
		lightboxOpen = true;
		paused = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
	}

	function onKeydown(e: KeyboardEvent) {
		if (lightboxOpen) {
			if (e.key === 'Escape') {
				e.preventDefault();
				closeLightbox();
			} else if (e.key === 'ArrowLeft') {
				e.preventDefault();
				go(-1);
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				go(1);
			}
			return;
		}

		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			go(-1);
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			go(1);
		}
	}

	function onPointerDown(e: PointerEvent) {
		touchStartX = e.clientX;
		touchStartY = e.clientY;
	}

	function onPointerUp(e: PointerEvent) {
		if (touchStartX == null || touchStartY == null) return;
		const dx = e.clientX - touchStartX;
		const dy = e.clientY - touchStartY;
		touchStartX = null;
		touchStartY = null;

		if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy)) {
			go(dx < 0 ? 1 : -1);
			return;
		}

		// Desktop only: tap/click the image (not chrome) opens lightbox.
		if (!imageClickable) return;
		const target = e.target as HTMLElement | null;
		if (!target?.closest?.('.slide-media')) return;
		if (target.closest('button')) return;
		openLightbox();
	}

	$effect(() => {
		if (!browser) return;
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
		const sync = () => {
			imageClickable = fine.matches;
		};
		sync();
		fine.addEventListener('change', sync);
		return () => fine.removeEventListener('change', sync);
	});

	$effect(() => {
		if (!browser || !intervalMs || paused || reduceMotion || count < 2 || lightboxOpen) return;

		const id = window.setInterval(() => go(1), intervalMs);
		return () => window.clearInterval(id);
	});

	$effect(() => {
		if (!browser) return;

		document.body.classList.toggle('shot-lightbox-open', lightboxOpen);

		const onDocKey = (e: KeyboardEvent) => {
			if (!lightboxOpen) return;
			onKeydown(e);
		};
		window.addEventListener('keydown', onDocKey);

		return () => {
			window.removeEventListener('keydown', onDocKey);
			document.body.classList.remove('shot-lightbox-open');
		};
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="shot-carousel"
	role="region"
	tabindex="0"
	aria-roledescription="carousel"
	aria-label="Product screenshots"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => {
		if (!lightboxOpen) paused = false;
	}}
	onfocusin={() => (paused = true)}
	onfocusout={() => {
		if (!lightboxOpen) paused = false;
	}}
	onkeydown={onKeydown}
>
	<div class="stage" onpointerdown={onPointerDown} onpointerup={onPointerUp}>
		{#if current}
			<figure class="slide">
				<div class="slide-media" class:is-clickable={imageClickable}>
					<ThemeShot slug={current.slug} alt={current.alt} loading="lazy" />
				</div>
				<figcaption>
					<span class="caption">{current.caption}</span>
					<span class="count fv-muted" aria-live="polite">{index + 1} / {count}</span>
				</figcaption>
			</figure>
		{/if}

		<button
			type="button"
			class="expand"
			onclick={openLightbox}
			aria-label="View screenshot full screen"
			title="View full screen"
		>
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
				<path
					fill="currentColor"
					d="M4 9V4h5v2H6v3H4Zm10-5h5v5h-2V6h-3V4ZM4 15h2v3h3v2H4v-5Zm16 0v5h-5v-2h3v-3h2Z"
				/>
			</svg>
		</button>

		<button type="button" class="nav prev" onclick={() => go(-1)} aria-label="Previous screenshot">
			‹
		</button>
		<button type="button" class="nav next" onclick={() => go(1)} aria-label="Next screenshot">
			›
		</button>
	</div>

	<div class="dots" role="tablist" aria-label="Choose screenshot">
		{#each shots as shot, i}
			<button
				type="button"
				class="dot"
				class:is-active={i === index}
				role="tab"
				aria-selected={i === index}
				aria-label={shot.caption}
				onclick={() => goTo(i)}
			></button>
		{/each}
	</div>
</div>

{#if lightboxOpen && current}
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div class="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onclick={closeLightbox}>
		<div class="lightbox-inner" onclick={(e) => e.stopPropagation()}>
			<header class="lightbox-bar">
				<p class="lightbox-caption">
					{current.caption}
					<span class="fv-muted">· {index + 1} / {count}</span>
				</p>
				<button type="button" class="lightbox-close" onclick={closeLightbox} aria-label="Close full screen">
					Close
				</button>
			</header>

			<div class="lightbox-stage">
				<button
					type="button"
					class="nav prev"
					onclick={() => go(-1)}
					aria-label="Previous screenshot"
				>
					‹
				</button>
				<ThemeShot slug={current.slug} alt={current.alt} loading="eager" class="lightbox-img" />
				<button type="button" class="nav next" onclick={() => go(1)} aria-label="Next screenshot">
					›
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.shot-carousel {
		outline: none;
	}

	.stage {
		position: relative;
		border-radius: var(--fv-radius-lg, 14px);
		overflow: hidden;
		border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
		background: var(--fv-bg-elevated, #1e232b);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
		touch-action: pan-y;
	}

	.slide {
		margin: 0;
	}

	.slide-media :global(img) {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top left;
	}

	.slide-media.is-clickable {
		cursor: zoom-in;
	}

	.slide figcaption {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
		background: color-mix(in srgb, var(--fv-bg-card, #262c36) 92%, transparent);
	}

	.caption {
		font-weight: 600;
		color: var(--fv-text, #f4f6f8);
	}

	.count {
		font-size: 0.85rem;
		white-space: nowrap;
	}

	.expand,
	.nav {
		position: absolute;
		z-index: 2;
		border-radius: 999px;
		border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.18));
		background: color-mix(in srgb, var(--fv-bg-elevated, #1e232b) 82%, transparent);
		color: var(--fv-text, #f4f6f8);
		cursor: pointer;
		backdrop-filter: blur(6px);
	}

	.expand {
		top: 0.65rem;
		right: 0.65rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		padding: 0;
	}

	.nav {
		top: 50%;
		transform: translateY(-50%);
		width: 2.4rem;
		height: 2.4rem;
		font-size: 1.6rem;
		line-height: 1;
	}

	.expand:hover,
	.nav:hover {
		border-color: var(--fv-accent-hover, #5485b8);
		background: rgba(65, 106, 152, 0.35);
	}

	.nav.prev {
		left: 0.65rem;
	}

	.nav.next {
		right: 0.65rem;
	}

	.dots {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.4rem;
		margin-top: var(--fv-space-3, 12px);
		padding: 0 0.25rem;
	}

	.dot {
		width: 0.55rem;
		height: 0.55rem;
		padding: 0;
		border: 0;
		border-radius: 999px;
		background: color-mix(in srgb, var(--fv-text-muted, #b0b8c4) 45%, transparent);
		cursor: pointer;
		transition:
			transform 0.15s ease,
			background 0.15s ease;
	}

	.dot.is-active {
		background: var(--fv-accent, #416a98);
		transform: scale(1.25);
	}

	.dot:hover {
		background: var(--fv-accent-hover, #5485b8);
	}

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: grid;
		place-items: center;
		padding: max(0.75rem, env(safe-area-inset-top)) max(0.75rem, env(safe-area-inset-right))
			max(0.75rem, env(safe-area-inset-bottom)) max(0.75rem, env(safe-area-inset-left));
		background: rgba(8, 10, 14, 0.88);
		backdrop-filter: blur(4px);
	}

	.lightbox-inner {
		width: min(1120px, 100%);
		max-height: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.lightbox-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.lightbox-caption {
		margin: 0;
		color: #f4f6f8;
		font-weight: 600;
	}

	.lightbox-close {
		padding: 0.4rem 0.85rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.06);
		color: #f4f6f8;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.lightbox-close:hover {
		border-color: var(--fv-accent-hover, #5485b8);
		background: rgba(65, 106, 152, 0.35);
	}

	.lightbox-stage {
		position: relative;
		border-radius: var(--fv-radius-lg, 14px);
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: #11151b;
	}

	.lightbox-stage :global(.lightbox-img) {
		display: block;
		width: 100%;
		max-height: min(78vh, 820px);
		object-fit: contain;
		object-position: top center;
		background: #11151b;
	}

	:global(body.shot-lightbox-open) {
		overflow: hidden;
	}

	@media (max-width: 639px) {
		.nav {
			width: 2.1rem;
			height: 2.1rem;
			font-size: 1.35rem;
		}

		.expand {
			width: 2.1rem;
			height: 2.1rem;
		}

		.lightbox-stage .nav {
			/* Keep nav usable in lightbox on small screens */
			background: rgba(17, 21, 27, 0.75);
		}
	}
</style>
