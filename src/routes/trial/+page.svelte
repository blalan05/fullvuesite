<script>
	let companyName = $state('');
	let contactName = $state('');
	let contactEmail = $state('');
	let website = $state(''); // honeypot

	let submitting = $state(false);
	let result = $state(null); // { slug, instanceUrl, trialEndsAt }
	let errorMessage = $state('');

	async function startTrial(event) {
		event.preventDefault();
		errorMessage = '';
		submitting = true;
		try {
			const response = await fetch('/api/start-trial', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ companyName, contactName, contactEmail, website })
			});
			const data = await response.json().catch(() => ({}));

			if (response.ok && data.ok) {
				result = data;
			} else if (response.status === 409) {
				errorMessage =
					'A workspace already exists for that email. Check your inbox for its address, or contact us and we’ll get you back in.';
			} else if (response.status === 429) {
				errorMessage = 'Too many attempts — give it a minute and try again.';
			} else {
				errorMessage = 'Something went wrong starting your trial. Try again, or contact us.';
			}
		} catch {
			errorMessage = 'Something went wrong starting your trial. Try again, or contact us.';
		} finally {
			submitting = false;
		}
	}

	function trialEndDate(iso) {
		try {
			return new Date(iso).toLocaleDateString(undefined, {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			});
		} catch {
			return '';
		}
	}
</script>

<article class="trial-page">
	<header class="trial-hero fv-card">
		<p class="eyebrow">14 days · every module · no credit card</p>
		<h1>Start your FullVue trial</h1>
		<p class="lead fv-muted">
			You get your own private FullVue workspace pre-loaded with realistic sample data, so you can
			see quoting, dispatch, payroll, and invoicing working on day one. Keep it — your trial becomes
			your production workspace when you subscribe.
		</p>
	</header>

	{#if result}
		<section class="trial-success fv-card" aria-live="polite">
			<h2>You're in — we're setting up your workspace</h2>
			<p class="fv-muted">
				Your trial workspace address is
				{#if result.instanceUrl}
					<a href={result.instanceUrl} rel="external">{result.instanceUrl}</a>
				{:else}
					<strong>{result.slug}</strong>
				{/if}
				— it's being prepared now, and we'll email
				<strong>{contactEmail}</strong> the moment it's live with your login details.
			</p>
			{#if result.trialEndsAt}
				<p class="fv-muted">Your free trial runs through <strong>{trialEndDate(result.trialEndsAt)}</strong>.</p>
			{/if}
			<p class="fv-muted small">
				Tip: the address is intentionally easy to remember. When you subscribe, it changes to your
				company name.
			</p>
		</section>
	{:else}
		<section class="trial-form-wrap fv-card" aria-labelledby="trial-form-heading">
			<h2 id="trial-form-heading" class="form-title">Create your workspace</h2>
			<form class="trial-form" onsubmit={startTrial}>
				<p class="hidden-field" aria-hidden="true">
					<label>Don't fill this out if you're human: <input name="website" bind:value={website} tabindex="-1" autocomplete="off" /></label>
				</p>
				<div class="field-grid">
					<div class="field">
						<label for="trial-company">Company</label>
						<input
							type="text"
							id="trial-company"
							class="fv-field"
							required
							autocomplete="organization"
							placeholder="Business name"
							bind:value={companyName}
						/>
					</div>
					<div class="field">
						<label for="trial-name">Your name</label>
						<input
							type="text"
							id="trial-name"
							class="fv-field"
							autocomplete="name"
							placeholder="Optional"
							bind:value={contactName}
						/>
					</div>
					<div class="field field--full">
						<label for="trial-email">Work email</label>
						<input
							type="email"
							id="trial-email"
							class="fv-field"
							required
							autocomplete="email"
							placeholder="you@company.com"
							bind:value={contactEmail}
						/>
					</div>
				</div>
				{#if errorMessage}
					<p class="error" role="alert">{errorMessage}</p>
				{/if}
				<div class="submit-row">
					<button type="submit" class="fv-btn fv-btn--primary" disabled={submitting}>
						{submitting ? 'Creating your workspace…' : 'Start free trial'}
					</button>
				</div>
			</form>
		</section>
	{/if}
</article>

<style lang="scss">
	.trial-page {
		width: 100%;
		max-width: 640px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: var(--fv-space-5, 24px);
		padding-bottom: var(--fv-space-5, 24px);
	}

	.trial-hero {
		padding: var(--fv-space-6, 32px) var(--fv-space-5, 24px);
		text-align: center;
	}

	.eyebrow {
		margin: 0 0 var(--fv-space-2, 8px);
		font-size: 0.8rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--fv-accent-hover, #5c8ec4);
	}

	.trial-hero h1 {
		margin: 0 0 var(--fv-space-3, 12px);
	}

	.lead {
		margin: 0;
		max-width: 52ch;
		margin-inline: auto;
		font-size: 1.05rem;
	}

	.trial-form-wrap,
	.trial-success {
		padding: var(--fv-space-5, 24px);
	}

	.form-title {
		margin: 0 0 var(--fv-space-4, 16px);
		font-size: 1.25rem;
	}

	.field-grid {
		display: grid;
		gap: var(--fv-space-4, 16px);
	}

	.field label {
		display: block;
		font-weight: 600;
		font-size: 0.9rem;
		margin-bottom: var(--fv-space-2, 8px);
		color: var(--fv-text, #f4f6f8);
	}

	.field--full {
		grid-column: 1 / -1;
	}

	.hidden-field {
		position: absolute;
		left: -9999px;
		height: 0;
		width: 0;
		overflow: hidden;
	}

	.error {
		margin: var(--fv-space-4, 16px) 0 0;
		color: #e57373;
		font-size: 0.95rem;
	}

	.submit-row {
		margin-top: var(--fv-space-5, 24px);
	}

	.trial-success h2 {
		margin: 0 0 var(--fv-space-3, 12px);
	}

	.small {
		font-size: 0.9rem;
	}

	@media (min-width: 560px) {
		.field-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
