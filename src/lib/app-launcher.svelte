<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { afterNavigate, replaceState } from '$app/navigation';
	import { page } from '$app/state';
	import logo from '$lib/logo.png';
	import {
		clearTenant,
		getRememberedTenant,
		goToTenant,
		rememberTenant,
		resolveTenant
	} from '$lib/app-launcher';

	type View = 'loading' | 'redirecting' | 'form';

	let view = $state<View>('loading');
	let subdomain = $state('');
	let signedOutNotice = $state(false);
	let errorMessage = $state('');
	let submitting = $state(false);
	let stripSignedOutQueued = $state(false);

	const canContinue = $derived(subdomain.trim().length > 0 && !submitting);

	function stripSignedOutFromUrl() {
		if (!stripSignedOutQueued) {
			return;
		}

		const url = new URL(page.url);
		if (!url.searchParams.has('signedOut')) {
			stripSignedOutQueued = false;
			return;
		}

		url.searchParams.delete('signedOut');

		try {
			replaceState(url, {});
			stripSignedOutQueued = false;
		} catch {
			// Router not ready yet; onMount/afterNavigate will retry.
		}
	}

	function handleSwitchCompany() {
		clearTenant();
		subdomain = '';
		errorMessage = '';
		signedOutNotice = false;
		view = 'form';

		const url = new URL(page.url);
		url.searchParams.set('pick', '1');
		url.searchParams.delete('signedOut');

		try {
			replaceState(url, {});
		} catch {
			// User-initiated; router should be ready, but avoid crashing if not.
		}
	}

	async function handleContinue() {
		errorMessage = '';
		submitting = true;

		try {
			const tenant = await resolveTenant(subdomain);

			if (!tenant) {
				errorMessage =
					"We couldn't find that company. Check the subdomain with your administrator.";
				return;
			}

			rememberTenant(tenant.slug, tenant.name);
			goToTenant(tenant.slug);
		} catch {
			errorMessage = 'Something went wrong. Please try again.';
		} finally {
			submitting = false;
		}
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (canContinue) {
			handleContinue();
		}
	}

	$effect(() => {
		if (!browser) {
			return;
		}

		const params = page.url.searchParams;
		const signedOut = params.get('signedOut') === '1';
		const forceForm = params.has('pick') || signedOut;

		if (signedOut) {
			clearTenant();
			signedOutNotice = true;
			subdomain = '';
			errorMessage = '';
			view = 'form';
			stripSignedOutQueued = true;
			void tick().then(stripSignedOutFromUrl);
			return;
		}

		let cancelled = false;

		(async () => {
			if (forceForm) {
				if (params.has('pick')) {
					clearTenant();
					subdomain = '';
					signedOutNotice = false;
				}

				view = 'form';
				return;
			}

			const remembered = getRememberedTenant();

			if (!remembered) {
				subdomain = '';
				view = 'form';
				return;
			}

			view = 'redirecting';
			const tenant = await resolveTenant(remembered.slug);

			if (cancelled) {
				return;
			}

			if (tenant) {
				goToTenant(tenant.slug);
				return;
			}

			clearTenant();
			subdomain = '';
			view = 'form';
		})();

		return () => {
			cancelled = true;
		};
	});

	onMount(() => {
		stripSignedOutFromUrl();
	});

	afterNavigate(() => {
		stripSignedOutFromUrl();
	});
</script>

<div class="launcher">
	<header class="launcher-header">
		<img class="launcher-logo" src={logo} alt="FullVue" width="180" height="112" />
	</header>

	{#if view === 'loading'}
		<div class="launcher-card" role="status" aria-live="polite">
			<p class="launcher-status">Loading…</p>
		</div>
	{:else if view === 'redirecting'}
		<div class="launcher-card" role="status" aria-live="polite">
			<p class="launcher-status">Opening your company…</p>
			<button type="button" class="launcher-link" onclick={handleSwitchCompany}>
				Switch company
			</button>
		</div>
	{:else}
		<div class="launcher-card">
			<h1>Connect to your company</h1>

			{#if signedOutNotice}
				<p class="launcher-notice" role="status">Signed out. Enter your company subdomain to continue.</p>
			{/if}

			<form class="launcher-form" onsubmit={handleSubmit}>
				<label class="launcher-field" for="tenant-subdomain">
					<span class="launcher-label">Company subdomain</span>
					<div class="subdomain-input">
						<input
							id="tenant-subdomain"
							type="text"
							inputmode="url"
							autocapitalize="off"
							autocomplete="off"
							spellcheck="false"
							placeholder="your-company"
							bind:value={subdomain}
							aria-describedby={errorMessage ? 'subdomain-error' : 'subdomain-hint'}
							aria-invalid={errorMessage ? 'true' : undefined}
						/>
						<span class="subdomain-suffix" aria-hidden="true">.fullvue.io</span>
					</div>
					<p id="subdomain-hint" class="launcher-hint">
						Enter the subdomain your administrator provided (the part before .fullvue.io).
					</p>
				</label>

				{#if errorMessage}
					<p id="subdomain-error" class="launcher-error" role="alert">{errorMessage}</p>
				{/if}

				<button type="submit" class="launcher-continue" disabled={!canContinue}>
					{submitting ? 'Checking…' : 'Continue'}
				</button>
			</form>

			<footer class="launcher-footer">
				<a href="https://fullvue.io">About FullVue</a>
			</footer>
		</div>
	{/if}
</div>

<style lang="scss">
	.launcher {
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding:
			max(1.5rem, env(safe-area-inset-top))
			max(1rem, env(safe-area-inset-right))
			max(1.5rem, env(safe-area-inset-bottom))
			max(1rem, env(safe-area-inset-left));
		background: #f8e71c;
		color: #1a1f14;
	}

	.launcher-header {
		margin-bottom: 1.5rem;
	}

	.launcher-logo {
		display: block;
		max-width: min(180px, 60vw);
		height: auto;
	}

	.launcher-card {
		width: min(100%, 420px);
		background: #fff;
		border-radius: 14px;
		padding: 1.5rem;
		box-shadow:
			0 1px 2px rgba(26, 31, 20, 0.08),
			0 12px 32px rgba(26, 31, 20, 0.12);
	}

	h1 {
		margin: 0 0 1rem;
		font-family: var(--fv-font-display, inherit);
		font-size: 1.35rem;
		font-weight: 650;
		line-height: 1.25;
		color: #1a1f14;
	}

	.launcher-status {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 500;
		text-align: center;
	}

	.launcher-notice {
		margin: 0 0 1rem;
		padding: 0.65rem 0.75rem;
		border-radius: 8px;
		background: rgba(65, 117, 5, 0.1);
		color: #2d5010;
		font-size: 0.9rem;
	}

	.launcher-form {
		margin: 0;
	}

	.launcher-field {
		display: block;
		margin-bottom: 1rem;
	}

	.launcher-label {
		display: block;
		margin-bottom: 0.35rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #3d4a32;
	}

	.subdomain-input {
		display: flex;
		align-items: stretch;
		border: 1px solid rgba(26, 31, 20, 0.18);
		border-radius: 8px;
		overflow: hidden;
		background: #fff;

		&:focus-within {
			outline: 2px solid #417505;
			outline-offset: 1px;
			border-color: #417505;
		}
	}

	input[type='text'] {
		flex: 1;
		min-width: 0;
		padding: 0.7rem 0.85rem;
		border: none;
		font: inherit;
		background: transparent;
		color: #1a1f14;

		&:focus {
			outline: none;
		}
	}

	.subdomain-suffix {
		display: flex;
		align-items: center;
		padding: 0 0.85rem;
		background: rgba(26, 31, 20, 0.05);
		color: #5a6650;
		font-size: 0.9rem;
		white-space: nowrap;
		border-left: 1px solid rgba(26, 31, 20, 0.1);
	}

	.launcher-hint {
		margin: 0.5rem 0 0;
		font-size: 0.82rem;
		color: #5a6650;
		line-height: 1.45;
	}

	.launcher-error {
		margin: 0 0 1rem;
		padding: 0.65rem 0.75rem;
		border-radius: 8px;
		background: rgba(180, 40, 40, 0.08);
		color: #8b1a1a;
		font-size: 0.9rem;
	}

	.launcher-continue {
		width: 100%;
		padding: 0.85rem 1rem;
		border: none;
		border-radius: 999px;
		background: #417505;
		color: #fff;
		font: inherit;
		font-weight: 650;
		cursor: pointer;
		transition:
			background 0.15s ease,
			opacity 0.15s ease;

		&:hover:not(:disabled) {
			background: #356004;
		}

		&:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}
	}

	.launcher-footer {
		margin-top: 1rem;
		text-align: center;
		font-size: 0.875rem;

		a {
			color: #417505;
			text-decoration: none;
			font-weight: 600;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.launcher-link {
		display: block;
		margin: 1rem auto 0;
		padding: 0;
		border: none;
		background: none;
		color: #417505;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
		text-decoration: underline;
	}
</style>
