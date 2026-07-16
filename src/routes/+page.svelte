<script>
  // @ts-ignore
  import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import AppLauncher from '$lib/app-launcher.svelte';

  import logo from '$lib/logo.png';

  /** @type {{ goTo: (arg0: number) => void }} */
  let carousel;
  /** @type {{ goTo: (arg0: number) => void }} */
  let carousel2;

  /** @param {{ detail: number }} event */
  const goToItem = (event) => {
    carousel?.goTo(event.detail);
  };
</script>

{#if page.data.isAppLauncher}
  <AppLauncher />
{:else}
<article class="home">
  <section class="hero fv-card">
    <div class="hero-copy">
      <p class="hero-eyebrow">Operations software for owners who run jobs, crews, and the books</p>
      <h1>Run sales, jobs, field work, billing, and purchasing in one place</h1>
      <p class="hero-lead fv-muted">
        Fullvue replaces scattered spreadsheets and disconnected tools with a single operational system—from
        opportunities and quotes through scheduling, invoicing, counter/POS, inventory buying, assets, messaging, time,
        and HR. Connect <strong>QuickBooks Online</strong> when you want invoices and bills reflected in your accounting.
      </p>
      <div class="hero-cta">
        <a href="/pricing" class="fv-btn fv-btn--primary">See pricing</a>
        <a href="/contact" class="fv-btn fv-btn--ghost">Schedule a demo</a>
      </div>
      <ul class="hero-points" aria-label="What Fullvue helps with">
        <li>Quote and schedule work without losing context</li>
        <li>Invoice from job data; tighten labor and materials visibility</li>
        <li>Purchasing, assets, and counter flows tied to real operations</li>
        <li>Tether and Planner reduce coordination outside the system</li>
        <li>Role-based permissions so teams see only what they need</li>
      </ul>
    </div>
    <div class="hero-visual">
      <img class="hero-logo" src={logo} alt="Fullvue" width="280" height="auto" />
      <div class="device-stack">
        <div class="pc_demo_container" aria-hidden="true"></div>
        <div class="mobile_demo_container" aria-hidden="true"></div>
      </div>
    </div>
  </section>

  <section class="strip">
    <h2 class="strip-title">Less swivel-chairing between apps</h2>
    <p class="strip-text fv-muted">
      Built for businesses that sell work, dispatch crews, stock parts, and still need counter-ready flows—without
      maintaining five different subscriptions.
    </p>
  </section>

  <section class="demo_gallery">
    <header class="gallery-head">
      <h2>See the workflows your team lives in</h2>
      <p class="fv-muted">
        Short videos and product grabs across jobs, sales, field service, billing, HR, compliance, and shop-floor rhythm.
        Drop in your own screenshots anytime—they slot right into this carousel.
      </p>
    </header>

    {#if browser}
      <div class="viewer">
        <Carousel bind:this={carousel} dots={false} arrows={false} swiping={false}>
          <div class="vid">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/S18ptA8cySc?si=4WbS5nHNeroPAlb1&rel=0"
              title="Jobs and core workflows"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="ssone">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dBojug0hTr8?si=4WbS5nHNeroPAlb1&rel=0"
              title="Customers and CRM-style context"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="sstwo">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jeWbM4vBzkE?si=4WbS5nHNeroPAlb1&rel=0"
              title="Field service"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="ssthree">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SYIZux4tCZU?si=m7nyVXzfQr239m0s&rel=0"
              title="Sales pipeline and quotes"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="ssfour"></div>
          <div class="ssfive"></div>
          <div class="sssix"></div>
          <div class="ssseven"></div>
          <div class="sseight"></div>
          <div class="ssnine"></div>
          <div class="ssten"></div>
        </Carousel>
      </div>
      <div class="thumbs">
        <Carousel bind:this={carousel2} dots={false} particlesToShow={3} on:pageChange={goToItem}>
          <div class="vid" role="button" tabindex="0" onclick={() => carousel?.goTo(0)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(0)}></div>
          <div class="ssone" role="button" tabindex="0" onclick={() => carousel?.goTo(1)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(1)}></div>
          <div class="sstwo" role="button" tabindex="0" onclick={() => carousel?.goTo(2)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(2)}></div>
          <div class="ssthree" role="button" tabindex="0" onclick={() => carousel?.goTo(3)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(3)}></div>
          <div class="ssfour" role="button" tabindex="0" onclick={() => carousel?.goTo(4)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(4)}></div>
          <div class="ssfive" role="button" tabindex="0" onclick={() => carousel?.goTo(5)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(5)}></div>
          <div class="sssix" role="button" tabindex="0" onclick={() => carousel?.goTo(6)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(6)}></div>
          <div class="ssseven" role="button" tabindex="0" onclick={() => carousel?.goTo(7)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(7)}></div>
          <div class="sseight" role="button" tabindex="0" onclick={() => carousel?.goTo(8)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(8)}></div>
          <div class="ssnine" role="button" tabindex="0" onclick={() => carousel?.goTo(9)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(9)}></div>
          <div class="ssten" role="button" tabindex="0" onclick={() => carousel?.goTo(10)} onkeydown={(e) => e.key === 'Enter' && carousel?.goTo(10)}></div>
        </Carousel>
      </div>
    {/if}
  </section>

  <section class="cta_bottom fv-card">
    <h2>Want a walkthrough tuned to how you operate?</h2>
    <p class="fv-muted">
      Tell us how you quote, dispatch, buy parts, and pay people—we’ll map the modules that matter and show the handoff
      to QuickBooks when you’re ready.
    </p>
    <a href="/contact" class="fv-btn fv-btn--primary">Schedule a demo</a>
  </section>
</article>
{/if}

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-6, 32px);
  }

  .hero {
    position: relative;
    display: grid;
    gap: var(--fv-space-5, 24px);
    padding: var(--fv-space-5, 24px);
    align-items: center;
    overflow: hidden;
    isolation: isolate;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: -8% -12% auto;
    height: min(340px, 55%);
    background: radial-gradient(ellipse at 72% 0%, rgba(92, 142, 196, 0.26), transparent 58%);
    pointer-events: none;
    z-index: 0;
  }

  .hero-copy,
  .hero-visual {
    position: relative;
    z-index: 1;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: auto -25% -50% auto;
    width: min(480px, 70%);
    height: min(240px, 45%);
    background: radial-gradient(ellipse at 100% 100%, rgba(130, 100, 180, 0.12), transparent 55%);
    pointer-events: none;
    z-index: 0;
  }

  .hero-copy h1 {
    margin: var(--fv-space-2, 8px) 0 var(--fv-space-3, 12px);
  }

  .hero-eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--fv-accent-hover, #5485b8);
    margin: 0;
    font-weight: 600;
  }

  .hero-lead {
    max-width: 52ch;
    margin: 0 0 var(--fv-space-4, 16px);
  }

  .hero-lead strong {
    color: var(--fv-text, #f4f6f8);
    font-weight: 600;
  }

  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fv-space-3, 12px);
    margin-bottom: var(--fv-space-4, 16px);
  }

  .hero-points {
    margin: 0;
    padding-left: 1.15rem;
    color: var(--fv-text-muted, #b8c0cc);
    max-width: 52ch;

    li {
      margin-bottom: 0.35rem;
    }
  }

  .hero-visual {
    position: relative;
    min-height: 200px;
    text-align: center;
  }

  .hero-logo {
    margin: 0 auto var(--fv-space-3, 12px);
    width: min(240px, 70%);
    height: auto;
  }

  .device-stack {
    position: relative;
    min-height: 220px;
    margin-top: var(--fv-space-4, 16px);
  }

  .pc_demo_container {
    margin: 0 auto;
    width: 88%;
    max-width: 520px;
    aspect-ratio: 16/9;
    background: url('$lib/laptop_core_cost_sheet.webp');
    background-size: cover;
    border-radius: var(--fv-radius-md, 10px);
    border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
  }

  .mobile_demo_container {
    position: absolute;
    right: 4%;
    bottom: -12%;
    width: 38%;
    max-width: 140px;
    aspect-ratio: 259/540;
    background: url('$lib/mobile_core_cost_sheet.webp');
    background-size: cover;
    border-radius: var(--fv-radius-md, 10px);
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }

  .strip {
    text-align: center;
    padding: var(--fv-space-6, 32px) var(--fv-space-5, 24px);
    border-radius: var(--fv-radius-lg, 14px);
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.16));
    background: linear-gradient(
      165deg,
      rgba(40, 48, 60, 0.65),
      rgba(22, 25, 32, 0.96)
    );
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.04) inset,
      0 20px 50px rgba(0, 0, 0, 0.32);
    position: relative;
    overflow: hidden;
  }

  .strip::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12%;
    right: 12%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(140, 180, 228, 0.4),
      transparent
    );
  }

  .strip-title {
    margin: 0 0 var(--fv-space-2, 8px);
    position: relative;
    z-index: 1;
  }

  .strip-text {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 62ch;
  }

  .demo_gallery {
    position: relative;
    padding-top: var(--fv-space-2, 8px);

    &::before {
      content: '';
      display: block;
      height: 1px;
      max-width: 120px;
      margin: 0 auto var(--fv-space-5, 24px);
      border-radius: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(140, 180, 228, 0.45),
        transparent
      );
    }
    .gallery-head {
      text-align: center;
      max-width: 62ch;
      margin: 0 auto var(--fv-space-4, 16px);

      h2 {
        margin-bottom: var(--fv-space-2, 8px);
      }

      p {
        margin: 0;
      }
    }

    .viewer {
      aspect-ratio: 16/9;
      max-height: min(90vh, 640px);
      margin: auto;
      border-radius: var(--fv-radius-lg, 14px);
      overflow: hidden;
      border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
      box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 24px 60px rgba(0, 0, 0, 0.45),
        0 0 80px -36px rgba(92, 142, 196, 0.35);

      .vid,
      .ssone,
      .sstwo,
      .ssthree,
      .ssfour,
      .ssfive,
      .sssix,
      .ssseven,
      .sseight,
      .ssnine,
      .ssten {
        aspect-ratio: 16/9;
        width: 90%;
      }

      .ssfour {
        background: url('$lib/purchasing.webp');
        background-size: cover;
      }

      .ssfive {
        background: url('$lib/invoicing.webp');
        background-size: cover;
      }

      .sssix {
        background: url('$lib/hr.webp');
        background-size: cover;
      }

      .ssseven {
        background: url('$lib/payroll.webp');
        background-size: cover;
      }

      .sseight {
        background: url('$lib/sds.webp');
        background-size: cover;
      }

      .ssnine {
        background: url('$lib/to-dos.webp');
        background-size: cover;
      }

      .ssten {
        background: url('$lib/production_meeting.webp');
        background-size: cover;
      }
    }
  }

  .thumbs {
    margin-top: var(--fv-space-3, 12px);

    .vid,
    .ssone,
    .sstwo,
    .ssthree,
    .ssfour,
    .ssfive,
    .sssix,
    .ssseven,
    .sseight,
    .ssnine,
    .ssten {
      cursor: pointer;
      width: 90%;
      aspect-ratio: 16/9;
      margin: 3px 4px;
      border-radius: var(--fv-radius-sm, 6px);
      border: 2px solid transparent;
      transition: border-color 0.15s ease;

      &:focus-visible {
        border-color: var(--fv-focus-ring, #8eb4e0);
      }

      &:hover {
        border-color: rgba(255, 255, 255, 0.25);
      }
    }

    .vid {
      background: url('$lib/core-jobs.webp');
      background-size: cover;
    }

    .ssone {
      background: url('$lib/core-customers.webp');
      background-size: cover;
    }

    .sstwo {
      background: url('$lib/field.webp');
      background-size: cover;
    }

    .ssthree {
      background: url('$lib/sales.webp');
      background-size: cover;
    }

    .ssfour {
      background: url('$lib/purchasing.webp');
      background-size: cover;
    }

    .ssfive {
      background: url('$lib/invoicing.webp');
      background-size: cover;
    }

    .sssix {
      background: url('$lib/hr.webp');
      background-size: cover;
    }

    .ssseven {
      background: url('$lib/payroll.webp');
      background-size: cover;
    }

    .sseight {
      background: url('$lib/sds.webp');
      background-size: cover;
    }

    .ssnine {
      background: url('$lib/to-dos.webp');
      background-size: cover;
    }

    .ssten {
      background: url('$lib/production_meeting.webp');
      background-size: cover;
    }
  }

  .cta_bottom {
    text-align: center;
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);

    h2 {
      margin-bottom: var(--fv-space-2, 8px);
    }

    p {
      margin: 0 auto var(--fv-space-4, 16px);
      max-width: 54ch;
    }
  }

  @media screen and (min-width: 900px) {
    .hero {
      grid-template-columns: 1fr minmax(280px, 1fr);
      padding: var(--fv-space-6, 32px) var(--fv-space-6, 32px);
      align-items: start;
    }

    .hero-visual {
      position: relative;
      padding-top: var(--fv-space-4, 16px);
    }

    .device-stack {
      min-height: 280px;
    }

    .mobile_demo_container {
      max-width: 180px;
    }
  }
</style>
