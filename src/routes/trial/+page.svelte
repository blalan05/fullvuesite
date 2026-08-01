<script>
	import { onMount } from 'svelte';
	import { LEGAL } from '$lib/legal.js';

	// The same six bands the control plane validates. Deliberately denser at the
	// small end — two bands at or below ten people. Optional: a blank answer is
	// fine, because trials run without a seat cap.
	const COMPANY_SIZES = [
		{ key: '1-5', label: '1 – 5 employees' },
		{ key: '6-10', label: '6 – 10 employees' },
		{ key: '11-20', label: '11 – 20 employees' },
		{ key: '21-50', label: '21 – 50 employees' },
		{ key: '51-250', label: '51 – 250 employees' },
		{ key: '250+', label: 'More than 250' }
	];

	// Mirrors the control plane's phone guard so a bad number is caught by the
	// browser rather than coming back as a generic error. Parens are escaped
	// because browsers compile `pattern` with the RegExp `v` flag.
	const PHONE_PATTERN = '[0-9+\\(\\)\\-.\\s]{7,40}';

	let companyName = $state('');
	let firstName = $state('');
	let lastName = $state('');
	let contactEmail = $state('');
	let phone = $state('');
	let companySize = $state('');
	// Clickwrap: starts unchecked and must be affirmatively ticked. The server
	// refuses signups without it and stamps the accepted document versions into
	// the control-plane record, so keep this a real checkbox — not pre-checked.
	let acceptedTerms = $state(false);
	let website = $state(''); // honeypot

	/** @type {{ key: string, label: string, description: string, required: boolean }[]} */
	let modules = $state([]);
	/** @type {Record<string, boolean>} */
	let selected = $state({});
	let modulesLoading = $state(true);
	let modulesFailed = $state(false);

	let submitting = $state(false);
	/** @type {{ slug?: string, instanceUrl?: string, trialEndsAt?: string, provisioning?: string | null, emailQueued?: boolean } | null} */
	let result = $state(null);
	/** @type {string[]} */
	let chosenLabels = $state([]);
	let errorMessage = $state('');

	// Required modules are switched on for every workspace; the control plane
	// adds them back regardless, but send them so the request says what we showed.
	const chosenKeys = $derived(
		modules.filter((mod) => mod.required || selected[mod.key]).map((mod) => mod.key)
	);

	onMount(async () => {
		try {
			const response = await fetch('/api/trial-modules');
			const data = await response.json();
			if (!response.ok || !Array.isArray(data?.modules) || data.modules.length === 0) {
				throw new Error('no modules');
			}
			modules = data.modules;
			selected = Object.fromEntries(modules.map((mod) => [mod.key, mod.required === true]));
		} catch {
			modulesFailed = true;
		} finally {
			modulesLoading = false;
		}
	});

	/** @param {SubmitEvent} event */
	async function startTrial(event) {
		event.preventDefault();
		errorMessage = '';
		// The browser blocks an incomplete form first; this is the fallback for
		// anything that submits anyway, using the same error treatment.
		if (!firstName.trim() || !lastName.trim()) {
			errorMessage = 'Add your first and last name so we know whose workspace this is.';
			return;
		}
		if (!contactEmail.trim()) {
			errorMessage = 'Add a work email — that’s where your login details go.';
			return;
		}
		if (!acceptedTerms) {
			errorMessage =
				'Please review and accept the Subscription Agreement and Privacy Policy to start your trial.';
			return;
		}
		submitting = true;
		const submittedKeys = chosenKeys;
		try {
			const response = await fetch('/api/start-trial', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					companyName,
					firstName,
					lastName,
					contactEmail,
					phone,
					companySize,
					modules: submittedKeys,
					termsAccepted: acceptedTerms,
					website
				})
			});
			const data = await response.json().catch(() => ({}));

			if (response.ok && data.ok) {
				chosenLabels = modules
					.filter((mod) => submittedKeys.includes(mod.key))
					.map((mod) => mod.label);
				result = data;
			} else if (response.status === 409) {
				errorMessage =
					'That email already has a FullVue workspace. Contact us and we’ll get you back into it.';
			} else if (response.status === 429) {
				errorMessage = 'Too many attempts — give it a minute and try again.';
			} else if (response.status === 400 && data.reason === 'invalid') {
				errorMessage =
					'One of the selected modules is no longer available. Reload the page and try again.';
			} else if (response.status === 400 && data.reason === 'bad-request') {
				errorMessage =
					'Check your details — company, first and last name, and work email are required, and the agreement box must be checked.';
			} else {
				errorMessage = 'Something went wrong starting your trial. Try again, or contact us.';
			}
		} catch {
			errorMessage = 'Something went wrong starting your trial. Try again, or contact us.';
		} finally {
			submitting = false;
		}
	}

	/** @param {string} iso */
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
		<p class="eyebrow">14 days · your modules · no credit card</p>
		<h1>Start your FullVue trial</h1>
		<p class="lead fv-muted">
			You get your own private FullVue workspace pre-loaded with realistic sample data, so you can
			see quoting, dispatch, payroll, and invoicing working on day one. Keep it — your trial becomes
			your production workspace when you subscribe.
		</p>
	</header>

	{#if result}
		<section class="trial-success fv-card" aria-live="polite">
			<h2>You're in — we're building your workspace</h2>
			<p class="fv-muted">
				Your trial workspace address is
				{#if result.instanceUrl}
					<a href={result.instanceUrl} rel="external">{result.instanceUrl}</a>
				{:else}
					<strong>{result.slug}</strong>
				{/if}
				— save it now.
			</p>
			{#if result.provisioning === 'queued'}
				<p class="fv-muted">
					Setup is running: we create your database, load the sample data for the modules you picked,
					and start your instance. That usually takes a few minutes, so the address won't answer
					right away.
				</p>
			{:else}
				<p class="fv-muted">
					We've reserved your workspace and someone here is finishing the setup by hand. It will be
					ready shortly — <a href="/contact">reach out</a> any time for a status.
				</p>
			{/if}
			{#if result.emailQueued}
				<p class="fv-muted">
					We'll email <strong>{contactEmail}</strong> the moment it's live, with your login details.
				</p>
			{:else}
				<p class="fv-muted">
					Bookmark the address — it's the fastest way back in. If you lose it,
					<a href="/contact">contact us</a> and we'll resend it.
				</p>
			{/if}
			{#if chosenLabels.length > 0}
				<p class="fv-muted small">Modules included: {chosenLabels.join(', ')}.</p>
			{/if}
			{#if result.trialEndsAt}
				<p class="fv-muted">
					Your free trial runs through <strong>{trialEndDate(result.trialEndsAt)}</strong>.
				</p>
			{/if}
			<p class="fv-muted small">
				Tip: the address is intentionally easy to remember. When you subscribe, it changes to your
				company name.
			</p>
		</section>
	{:else}
		<section class="trial-form-wrap fv-card" aria-labelledby="trial-form-heading">
			<h2 id="trial-form-heading" class="form-title">Create your workspace</h2>
			<form class="trial-form" method="post" onsubmit={startTrial}>
				<p class="hidden-field" aria-hidden="true">
					<label>Don't fill this out if you're human: <input name="website" bind:value={website} tabindex="-1" autocomplete="off" /></label>
				</p>
				<div class="field-grid">
					<div class="field field--full">
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
						<label for="trial-first-name">First name</label>
						<input
							type="text"
							id="trial-first-name"
							class="fv-field"
							required
							maxlength="60"
							autocomplete="given-name"
							placeholder="Jane"
							bind:value={firstName}
						/>
					</div>
					<div class="field">
						<label for="trial-last-name">Last name</label>
						<input
							type="text"
							id="trial-last-name"
							class="fv-field"
							required
							maxlength="60"
							autocomplete="family-name"
							placeholder="Doe"
							bind:value={lastName}
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
					<div class="field">
						<label for="trial-phone">Phone number <span class="optional">(optional)</span></label>
						<input
							type="tel"
							id="trial-phone"
							class="fv-field"
							maxlength="40"
							autocomplete="tel"
							placeholder="(555) 555-0123"
							pattern={PHONE_PATTERN}
							title="Digits, spaces and + ( ) - . only"
							bind:value={phone}
						/>
					</div>
					<div class="field">
						<label for="trial-company-size">Company size <span class="optional">(optional)</span></label>
						<select
							id="trial-company-size"
							class="fv-field size-select"
							bind:value={companySize}
						>
							<!-- Company size is optional: trials run without a seat cap, so a
							     blank answer costs the visitor nothing. A supplied band must
							     still be one the control plane knows. -->
							<option value="">Prefer not to say</option>
							{#each COMPANY_SIZES as size (size.key)}
								<option value={size.key}>{size.label}</option>
							{/each}
						</select>
					</div>
				</div>

				<fieldset class="modules" aria-busy={modulesLoading}>
					<legend class="modules-legend">Modules to set up</legend>
					<p class="modules-hint fv-muted">
						Everything you tick is switched on in your workspace with matching sample data. Not sure?
						Start with Core — we can turn more on while you're trialing.
					</p>

					{#if modulesLoading}
						<p class="modules-status fv-muted" role="status">Loading modules…</p>
					{:else if modulesFailed}
						<p class="modules-status fv-muted" role="status">
							We couldn't load the module list just now. We'll set you up with Core and can switch on
							anything else once you're in.
						</p>
					{:else}
						<ul class="module-list" role="list">
							{#each modules as mod (mod.key)}
								<li class="module-item">
									<input
										type="checkbox"
										id="module-{mod.key}"
										class="module-check"
										bind:checked={selected[mod.key]}
										disabled={mod.required || submitting}
									/>
									<label class="module-label" for="module-{mod.key}">
										<span class="module-name">
											{mod.label}
											{#if mod.required}
												<span class="module-badge">Always included</span>
											{/if}
										</span>
										{#if mod.description}
											<span class="module-desc fv-muted">{mod.description}</span>
										{/if}
									</label>
								</li>
							{/each}
						</ul>
					{/if}
				</fieldset>

				{#if errorMessage}
					<p class="error" role="alert">{errorMessage}</p>
				{/if}
				<div class="submit-row">
					<div class="accept-row">
						<input
							type="checkbox"
							id="trial-accept-terms"
							class="accept-check"
							required
							bind:checked={acceptedTerms}
							disabled={submitting}
						/>
						<label class="accept-label" for="trial-accept-terms">
							I have read and agree, on behalf of my company, to the FullVue
							<a href="/subscription-agreement" target="_blank" rel="noopener"
								>Subscription Agreement (v{LEGAL.subscriptionAgreement.version})</a
							>, and I acknowledge the
							<a href="/privacypolicy" target="_blank" rel="noopener">Privacy Policy</a>.
						</label>
					</div>
					<button type="submit" class="fv-btn fv-btn--primary" disabled={submitting}>
						{submitting ? 'Creating your workspace…' : 'Start free trial'}
					</button>
					<p class="legal fv-muted small">
						Free for 14 days. No credit card, no automatic charge — your trial simply expires unless
						you subscribe.
					</p>
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

	/* Everything except phone and company size is required, so marking the two
	   optional ones is shorter than marking the rest. */
	.field label .optional {
		font-weight: 400;
		opacity: 0.7;
	}

	.field--full {
		grid-column: 1 / -1;
	}

	.size-select {
		cursor: pointer;
	}

	.hidden-field {
		position: absolute;
		left: -9999px;
		height: 0;
		width: 0;
		overflow: hidden;
	}

	.modules {
		margin: var(--fv-space-5, 24px) 0 0;
		padding: 0;
		border: 0;
		min-width: 0;
	}

	.modules-legend {
		padding: 0;
		font-weight: 600;
		font-size: 0.9rem;
		color: var(--fv-text, #f4f6f8);
	}

	.modules-hint {
		margin: var(--fv-space-2, 8px) 0 var(--fv-space-3, 12px);
		font-size: 0.9rem;
		max-width: 52ch;
	}

	.modules-status {
		margin: 0;
		font-size: 0.9rem;
	}

	.module-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--fv-space-2, 8px);
	}

	.module-item {
		display: flex;
		align-items: flex-start;
		gap: var(--fv-space-3, 12px);
		padding: var(--fv-space-3, 12px);
		border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.085));
		border-radius: var(--fv-radius-sm, 6px);
		background: rgba(12, 14, 18, 0.35);
		transition: border-color 0.15s ease, background 0.15s ease;
	}

	.module-item:hover:has(.module-check:enabled) {
		border-color: var(--fv-border-strong, rgba(255, 255, 255, 0.16));
	}

	.module-item:has(.module-check:checked) {
		border-color: var(--fv-accent-muted, rgba(65, 106, 152, 0.42));
		background: rgba(65, 106, 152, 0.1);
	}

	.module-check {
		flex: none;
		width: 1.15rem;
		height: 1.15rem;
		margin: 0.1rem 0 0;
		accent-color: var(--fv-accent, #416a98);
		cursor: pointer;
	}

	.module-check:disabled {
		cursor: default;
		opacity: 0.75;
	}

	.module-label {
		display: block;
		flex: 1;
		min-width: 0;
		cursor: pointer;
	}

	.module-check:disabled + .module-label {
		cursor: default;
	}

	.module-name {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--fv-space-2, 8px);
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--fv-text, #f4f6f8);
	}

	.module-badge {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: 0.1rem 0.4rem;
		border-radius: 999px;
		border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.16));
		color: var(--fv-text-muted, #b0b8c4);
	}

	.module-desc {
		display: block;
		margin-top: 0.15rem;
		font-size: 0.85rem;
		line-height: 1.4;
	}

	.error {
		margin: var(--fv-space-4, 16px) 0 0;
		color: #e57373;
		font-size: 0.95rem;
	}

	.submit-row {
		margin-top: var(--fv-space-5, 24px);
	}

	.accept-row {
		display: flex;
		align-items: flex-start;
		gap: var(--fv-space-3, 12px);
		margin-bottom: var(--fv-space-4, 16px);
	}

	.accept-check {
		flex: none;
		width: 1.15rem;
		height: 1.15rem;
		margin: 0.2rem 0 0;
		accent-color: var(--fv-accent, #416a98);
		cursor: pointer;
	}

	.accept-label {
		font-size: 0.95rem;
		line-height: 1.5;
		max-width: 52ch;
		cursor: pointer;
	}

	.accept-label a {
		text-decoration: underline;
	}

	.legal {
		margin: var(--fv-space-3, 12px) 0 0;
		max-width: 52ch;
	}

	.trial-success h2 {
		margin: 0 0 var(--fv-space-3, 12px);
	}

	.trial-success p {
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
