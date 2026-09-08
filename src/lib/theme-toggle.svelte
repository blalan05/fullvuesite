<script lang="ts">
	import { theme } from '$lib/theme.svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	const label = $derived(theme.current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
</script>

<button
	type="button"
	class="theme-toggle {className}"
	onclick={() => theme.toggle()}
	aria-label={label}
	title={label}
>
	{#if theme.current === 'dark'}
		<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
			<path
				fill="currentColor"
				d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-2.5a1 1 0 1 1 0-2H18a1 1 0 1 1 0 2h1.5ZM6 12a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H5a1 1 0 0 1 1 1Zm10.95 5.45a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM9.52 5.08A1 1 0 0 1 8.1 6.5L7.05 5.44A1 1 0 0 1 8.46 4L9.52 5.08Zm7.43-1.06a1 1 0 0 1 0 1.41L15.89 6.5A1 1 0 1 1 14.48 5.1l1.06-1.07a1 1 0 0 1 1.41 0ZM8.1 15.89a1 1 0 0 1 1.42 1.41L8.46 18.36A1 1 0 1 1 7.05 16.95l1.06-1.06ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Z"
			/>
		</svg>
	{:else}
		<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
			<path
				fill="currentColor"
				d="M12.5 3.5a1 1 0 0 0-1.7-.7A8.5 8.5 0 1 0 20.2 13.2a1 1 0 0 0-.7-1.7 6.5 6.5 0 0 1-7-7.999Z"
			/>
		</svg>
	{/if}
	<span class="label">{theme.current === 'dark' ? 'Light' : 'Dark'}</span>
</button>

<style>
	.theme-toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.4rem 0.75rem;
		border-radius: 999px;
		border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
		background: rgba(255, 255, 255, 0.04);
		color: var(--fv-text-muted, #b0b8c4);
		font-family: var(--fv-font-display, inherit);
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
		transition:
			color 0.15s ease,
			background 0.15s ease,
			border-color 0.15s ease;
	}

	.theme-toggle:hover {
		color: var(--fv-text, #f4f6f8);
		border-color: var(--fv-accent-hover, #5485b8);
		background: rgba(65, 106, 152, 0.18);
	}

	.icon {
		flex-shrink: 0;
	}

	@media (max-width: 767px) {
		.label {
			/* Keep the word on mobile nav for clarity */
		}
	}
</style>
