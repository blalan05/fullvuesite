<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

{#if page.data.pageTitle}
	<nav class="breadcrumb fv-card" aria-label="Breadcrumb">
		<ol class="breadcrumb-list">
			<li><a href="/modules">Modules</a></li>
			<li aria-hidden="true" class="sep">/</li>
			<li aria-current="page">{page.data.pageTitle}</li>
		</ol>
	</nav>
{/if}
<article id="top" class="module-article">
	{@render children()}
</article>

<a href="#top" class="btt fv-btn fv-btn--ghost">Top</a>

<style lang="scss">
	.module-article {
		padding: 0;
	}

	nav.breadcrumb {
		padding: var(--fv-space-3, 12px) var(--fv-space-4, 16px);
		margin-bottom: var(--fv-space-4, 16px);
		position: sticky;
		top: 52px;
		z-index: 8;

		.breadcrumb-list {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.35rem 0.5rem;
			font-size: 0.9rem;
		}

		.sep {
			color: var(--fv-text-muted, #b8c0cc);
			user-select: none;
		}

		a {
			color: var(--fv-accent-hover, #5485b8);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		li[aria-current='page'] {
			color: var(--fv-text-muted, #b8c0cc);
		}
	}

	.btt {
		position: fixed;
		bottom: 4.5rem;
		right: var(--fv-space-4, 16px);
		z-index: 90;
		padding: 0.5rem 0.85rem;
		font-size: 0.85rem;
		background: var(--fv-bg-card, #2e3540);
		border-color: var(--fv-border-strong, rgba(255, 255, 255, 0.14));
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
	}

	@media screen and (min-width: 920px) {
		.module-article {
			max-width: 920px;
			margin: 0 auto;
		}

		nav.breadcrumb {
			max-width: 920px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media screen and (min-width: 1200px) {
		.module-article,
		nav.breadcrumb {
			max-width: 1120px;
		}
	}
</style>
