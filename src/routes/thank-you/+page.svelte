<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { form: 'contact' });
    }
  });
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<article class="thanks-page">
  <section class="fv-card thanks-card">
    <p class="eyebrow">Message received</p>
    <h1>Thanks — a real person will reply within one business day.</h1>
    <p class="lead fv-muted">
      Your note goes straight to the team that builds FullVue, not a ticket queue. While you wait, here's more worth a look:
    </p>
    <div class="thanks-links">
      <a class="fv-btn fv-btn--primary" href="/modules">Explore the modules</a>
      <a class="fv-btn" href="/pricing">See pricing</a>
      <a class="fv-btn" href="/industries">Find your industry</a>
    </div>
  </section>
</article>

<style lang="scss">
  .thanks-page {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding-bottom: var(--fv-space-5, 24px);
  }

  .thanks-card {
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

  .thanks-card h1 {
    margin: 0 0 var(--fv-space-3, 12px);
  }

  .lead {
    margin: 0 auto var(--fv-space-4, 16px);
    max-width: 48ch;
    font-size: 1.05rem;
  }

  .thanks-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fv-space-3, 12px);
    justify-content: center;
  }
</style>
