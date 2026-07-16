<script>
  import { page } from '$app/state';
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<article class="error-page">
  <section class="fv-card error-card">
    <p class="eyebrow">{page.status}</p>
    <h1>{page.status === 404 ? "That page doesn't exist." : 'Something went wrong.'}</h1>
    <p class="lead fv-muted">Here's where most people are headed:</p>
    <div class="error-links">
      <a class="fv-btn fv-btn--primary" href="/modules">Explore the modules</a>
      <a class="fv-btn" href="/pricing">See pricing</a>
      <a class="fv-btn" href="/industries">Find your industry</a>
      <a class="fv-btn" href="/contact">Contact us</a>
    </div>
  </section>
</article>

<style lang="scss">
  .error-page {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding-bottom: var(--fv-space-5, 24px);
  }

  .error-card {
    padding: var(--fv-space-6, 32px) var(--fv-space-5, 24px);
    text-align: center;
  }

  .eyebrow {
    margin: 0 0 var(--fv-space-2, 8px);
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    font-weight: 600;
    color: var(--fv-accent-hover, #5c8ec4);
  }

  .error-card h1 {
    margin: 0 0 var(--fv-space-3, 12px);
  }

  .lead {
    margin: 0 auto var(--fv-space-4, 16px);
    max-width: 48ch;
  }

  .error-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fv-space-3, 12px);
    justify-content: center;
  }
</style>
