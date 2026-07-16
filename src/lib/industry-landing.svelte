<script lang="ts">
  interface Props {
    headline: string;
    lead: string;
    painPoints: string[];
    fitBullets: string[];
    painTitle?: string;
    fitTitle?: string;
    closing?: string;
  }

  let {
    headline,
    lead,
    painPoints,
    fitBullets,
    painTitle = 'Operational friction we hear about',
    fitTitle = 'What FullVue gives your team',
    closing = 'Walk through quotes, jobs, field work, billing, and purchasing with your workflows—we’ll show where modules earn their keep.',
  }: Props = $props();
</script>

<article class="industry-page">
  <header class="hero fv-card">
    <p class="eyebrow"><a href="/industries">Industries</a></p>
    <h1>{headline}</h1>
    <p class="lead">{lead}</p>
    <div class="cta-row">
      <a href="/contact" class="fv-btn fv-btn--primary">Schedule a demo</a>
      <a href="/pricing" class="fv-btn fv-btn--ghost">See pricing</a>
      <a href="/modules" class="fv-btn fv-btn--ghost">Explore modules</a>
    </div>
  </header>

  <section class="fv-card section">
    <h2>{painTitle}</h2>
    <ul class="bullet-list">
      {#each painPoints as point}
        <li>{point}</li>
      {/each}
    </ul>
  </section>

  <section class="fv-card section">
    <h2>{fitTitle}</h2>
    <p class="fit-intro">
      FullVue ties sales and quotes to jobs, schedules, time and materials, invoicing, and purchasing—so crews and the office stop debating “what happened on that job.” Connect
      <strong>QuickBooks Online</strong> when you want billing synced without running operations out of spreadsheets.
    </p>
    <ul class="bullet-list">
      {#each fitBullets as item}
        <li>{item}</li>
      {/each}
    </ul>
  </section>

  <footer class="fv-card closing">
    <p>{closing}</p>
    <a href="/contact" class="fv-btn fv-btn--primary">Talk with us</a>
  </footer>
</article>

<style lang="scss">
  .industry-page {
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-5, 24px);
    padding-bottom: var(--fv-space-5, 24px);
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

  .hero {
    position: relative;
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);
    text-align: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: -55% -30% auto;
      height: 140%;
      background: radial-gradient(circle at 70% 28%, rgba(92, 142, 196, 0.22), transparent 52%);
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      inset: auto -20% -55% -20%;
      height: 95%;
      background: radial-gradient(circle at 28% 92%, rgba(120, 88, 170, 0.1), transparent 50%);
      pointer-events: none;
    }

    > * {
      position: relative;
      z-index: 1;
    }

    .eyebrow {
      margin: 0 0 var(--fv-space-2, 8px);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      font-weight: 600;
      color: var(--fv-accent-hover, #5485b8);

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    h1 {
      margin: 0 0 var(--fv-space-3, 12px);
      font-size: clamp(1.35rem, 3.5vw, 1.85rem);
      line-height: 1.2;
    }

    .lead {
      margin: 0 0 var(--fv-space-4, 16px);
      color: var(--fv-text-muted, #b8c0cc);
      font-size: 1.05rem;
      text-align: left;
      max-width: 62ch;
      margin-inline: auto;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: var(--fv-space-3, 12px);
      justify-content: center;
    }
  }

  .section {
    padding: var(--fv-space-5, 24px);
    text-align: left;
    border-left: 3px solid rgba(92, 142, 196, 0.45);

    &:nth-of-type(even) {
      border-left-color: rgba(168, 130, 210, 0.45);
    }

    h2 {
      margin: 0 0 var(--fv-space-3, 12px);
      font-size: 1.2rem;
    }

    .fit-intro {
      margin: 0 0 var(--fv-space-3, 12px);
      color: var(--fv-text-muted, #b8c0cc);

      strong {
        color: var(--fv-text, #f4f6f8);
      }
    }
  }

  .bullet-list {
    margin: 0;
    padding-left: 0;
    list-style: none;

    li {
      margin-bottom: 0.55rem;
      padding-left: 1.35rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.55rem;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--fv-accent-hover, #5c8ec4), transparent);
        box-shadow: 0 0 12px rgba(92, 142, 196, 0.45);
      }
    }
  }

  .closing {
    padding: var(--fv-space-5, 24px);
    text-align: center;

    p {
      margin: 0 0 var(--fv-space-4, 16px);
      color: var(--fv-text-muted, #b8c0cc);
      max-width: 54ch;
      margin-inline: auto;
    }
  }

  @media (min-width: 920px) {
    .industry-page {
      max-width: 880px;
    }
  }
</style>
