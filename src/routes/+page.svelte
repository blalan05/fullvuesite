<script>
  import { page } from '$app/state';
  import AppLauncher from '$lib/app-launcher.svelte';
  import ShotCarousel from '$lib/shot-carousel.svelte';
  import ThemeShot from '$lib/theme-shot.svelte';

  import logo from '$lib/logo.png';

  const demoVideos = [
    { id: 'S18ptA8cySc', title: 'Jobs and core workflows' },
    { id: 'dBojug0hTr8', title: 'Customers and CRM-style context' },
    { id: 'jeWbM4vBzkE', title: 'Field service' },
    { id: 'SYIZux4tCZU', title: 'Sales pipeline and quotes' }
  ];

  const screenshots = [
    { slug: 'landing', alt: 'FullVue home dashboard with widgets for jobs, invoices, and AR', caption: 'Home' },
    { slug: 'search', alt: 'FullVue global search open across jobs and records', caption: 'Search' },
    { slug: 'jobs', alt: 'FullVue jobs dashboard listing active jobs with status and customer context', caption: 'Jobs' },
    { slug: 'job', alt: 'FullVue job detail with tasks, time, and materials', caption: 'Job detail' },
    { slug: 'customer', alt: 'FullVue customer record with jobs and contact context', caption: 'Customers' },
    { slug: 'scheduling', alt: 'FullVue job schedule view for crew coordination', caption: 'Schedule' },
    { slug: 'field', alt: 'FullVue field / road sheet for on-site work', caption: 'Field' },
    { slug: 'sales', alt: 'FullVue sales pipeline with opportunities', caption: 'Sales' },
    { slug: 'quotes', alt: 'FullVue quotes list for proposals and e-sign', caption: 'Quotes' },
    { slug: 'customer-quote', alt: 'Customer-facing quote signing page', caption: 'Quote sign' },
    { slug: 'purchasing', alt: 'FullVue purchasing workflow tied to vendors and stock', caption: 'Purchasing' },
    { slug: 'purchase-request', alt: 'FullVue purchase request queue', caption: 'Purchase requests' },
    { slug: 'purchasing-order', alt: 'FullVue purchase order with lines and totals', caption: 'Purchase orders' },
    { slug: 'vendor', alt: 'FullVue vendor record with purchasing history', caption: 'Vendors' },
    { slug: 'inventory', alt: 'FullVue inventory dashboard for parts and stock', caption: 'Inventory' },
    { slug: 'products', alt: 'FullVue products catalog with serialized trailer units', caption: 'Products' },
    { slug: 'counter', alt: 'FullVue counter / point of sale register', caption: 'Counter' },
    { slug: 'assets', alt: 'FullVue assets register for equipment and assignments', caption: 'Assets' },
    { slug: 'field-fleet-inspections', alt: 'FullVue fleet inspection checklist for a service truck', caption: 'Fleet inspections' },
    { slug: 'attendance', alt: 'FullVue attendance and staff scheduling', caption: 'Attendance' },
    { slug: 'tether', alt: 'FullVue Tether messaging channels', caption: 'Tether' },
    { slug: 'sms-settings', alt: 'FullVue SMS settings for consented customer texting', caption: 'SMS' },
    { slug: 'sds', alt: 'FullVue SDS library previewing a safety data sheet', caption: 'SDS' },
    { slug: 'huddle', alt: 'FullVue production meeting huddle with jobs by department', caption: 'Production Meetings' },
    { slug: 'todos', alt: 'FullVue to-do with tasks, notes, and owner', caption: 'To-Dos' },
    { slug: 'accounting', alt: 'FullVue accounting dashboard with ledger, AR, AP, and reports', caption: 'Accounting' },
    { slug: 'qbo', alt: 'FullVue QuickBooks Online connection with one-way push mappings', caption: 'QuickBooks Online' },
    { slug: 'ai', alt: 'Ask FullVue answering a question about purchase orders', caption: 'AI' }
  ];
</script>

{#if page.data.isAppLauncher}
  <AppLauncher />
{:else}
<article class="home">
  <section class="hero fv-card">
    <div class="hero-copy">
      <p class="hero-eyebrow">Operations software for owners who run jobs, crews, and the books</p>
      <h1>Run operations in FullVue. Close the books in QuickBooks. Ask AI about the rest.</h1>
      <p class="hero-lead fv-muted">
        FullVue connects sales, jobs, field work, purchasing, invoicing, and payments in one system—then pushes invoices,
        bills, and payments one-way to
        <strong><a href="/integrations/quickbooks">QuickBooks Online</a></strong>
        for your accountant.
        <strong><a href="/modules/ai">Ask FullVue</a></strong>
        answers questions about your data without silently changing it.
      </p>
      <div class="hero-cta">
        <a href="/trial" class="fv-btn fv-btn--primary">Start free trial</a>
        <a href="/pricing" class="fv-btn fv-btn--ghost">See pricing</a>
        <a href="/contact" class="fv-btn fv-btn--ghost">Contact us</a>
      </div>
      <ul class="hero-points" aria-label="What FullVue helps with">
        <li>QuickBooks Online — one-way push, not two-way sync theater</li>
        <li>Ask FullVue — permission-aware answers from your live data</li>
        <li>Jobs, field, invoicing, and payments on the same record</li>
        <li>Modules that match your business—not a suite you never use</li>
      </ul>
    </div>
    <div class="hero-visual">
      <img class="hero-logo" src={logo} alt="FullVue" width="280" />
      <div class="device-stack">
        <div class="pc_demo_container">
          <ThemeShot
            slug="landing"
            device="desktop"
            alt="FullVue home dashboard on desktop"
            loading="eager"
            class="hero-shot"
          />
        </div>
        <div class="mobile_demo_container">
          <ThemeShot
            slug="jobs"
            device="phone"
            alt="FullVue jobs list on a phone"
            loading="eager"
            class="hero-shot"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="strip">
    <h2 class="strip-title">Too many tools, not enough truth</h2>
    <p class="strip-text fv-muted">
      When quotes live in one place, schedules in another, and invoices somewhere else, margin disappears in the gaps.
      FullVue keeps the job as the spine—from opportunity to cash—and keeps your accountant and your team out of retyping hell.
    </p>
  </section>

  <section class="flagship-grid">
    <article class="flagship fv-card flagship--shot">
      <p class="flagship-eyebrow">Flagship</p>
      <h2>Your accountant stays in QuickBooks. You stay in FullVue.</h2>
      <p class="fv-muted">
        Connect QuickBooks Online and push invoices, credit memos, bills, and payments one-way into QBO. Jobs, purchase
        orders, and inventory stay where work happens. No two-way sync theater—just the cash documents your books need.
      </p>
      <div class="flagship-shot">
        <ThemeShot slug="qbo" alt="FullVue QuickBooks Online connection with one-way push mappings" />
      </div>
      <a href="/integrations/quickbooks" class="fv-btn fv-btn--ghost">See how QuickBooks connects</a>
    </article>
    <article class="flagship fv-card flagship--shot">
      <p class="flagship-eyebrow">Flagship</p>
      <h2>Ask your business a question—get an answer from your data.</h2>
      <p class="fv-muted">
        Ask FullVue is a permission-aware assistant that helps owners and managers find what’s in FullVue—jobs, sales,
        reports, and more—plus assist-tier polish and table explanations. It does not rewrite invoices or post behind your
        back. Metered with AI credits.
      </p>
      <div class="flagship-shot">
        <ThemeShot slug="ai" alt="Ask FullVue answering a materials purchasing question" />
      </div>
      <a href="/modules/ai" class="fv-btn fv-btn--ghost">See Ask FullVue</a>
    </article>
  </section>

  <section class="pillars fv-card">
    <h2>How it works</h2>
    <ol class="pillar-list">
      <li>
        <strong>Sell and schedule.</strong>
        Quotes, e-sign, job schedules, and field road sheets in the same workspace.
      </li>
      <li>
        <strong>Execute and bill.</strong>
        Time, materials, closeout, invoices, and card pay links tied to the work.
      </li>
      <li>
        <strong>Close and understand.</strong>
        One-way QuickBooks Online push for the accountant; Ask FullVue when you need answers fast.
      </li>
    </ol>
  </section>

  <section class="demo_gallery">
    <header class="gallery-head">
      <h2>See the workflows your team lives in</h2>
      <p class="fv-muted">
        Product grabs from the demo tenant—toggle light/dark in the nav to match how your team runs the app.
      </p>
    </header>

    <div class="video-grid">
      {#each demoVideos as v}
        <div class="video-cell">
          <iframe
            width="100%"
            height="100%"
            src={'https://www.youtube.com/embed/' + v.id + '?rel=0'}
            title={v.title}
            frameborder="0"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      {/each}
    </div>

    <ShotCarousel shots={screenshots} />
  </section>

  <section class="cta_bottom fv-card">
    <h2>Ready to run it on your workflows?</h2>
    <p class="fv-muted">
      Start a 14-day free trial with auto-provisioned sample data for the modules you pick—no credit card. Prefer to talk first?
      <a href="/contact">Contact us</a>.
    </p>
    <a href="/trial" class="fv-btn fv-btn--primary">Start free trial</a>
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
    position: relative;
    z-index: 2;
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
    aspect-ratio: 16/10;
    overflow: hidden;
    border-radius: var(--fv-radius-md, 10px);
    border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
  }

  .mobile_demo_container {
    position: absolute;
    right: 4%;
    bottom: -10%;
    height: 82%;
    width: auto;
    aspect-ratio: 9/16;
    overflow: hidden;
    border-radius: var(--fv-radius-md, 10px);
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }

  .pc_demo_container :global(.hero-shot),
  .mobile_demo_container :global(.hero-shot),
  .pc_demo_container :global(img),
  .mobile_demo_container :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    display: block;
  }

  .strip {
    text-align: center;
    padding: var(--fv-space-6, 32px) var(--fv-space-5, 24px);
    border-radius: var(--fv-radius-lg, 14px);
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.16));
    background: linear-gradient(
      165deg,
      color-mix(in srgb, var(--fv-bg-elevated) 65%, transparent),
      color-mix(in srgb, var(--fv-bg-page) 96%, transparent)
    );
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.04) inset,
      0 20px 50px rgba(0, 0, 0, 0.18);
    position: relative;
    overflow: hidden;
  }

  .strip-title {
    margin: 0 0 var(--fv-space-2, 8px);
  }

  .strip-text {
    margin: 0 auto;
    max-width: 62ch;
  }

  .flagship-grid {
    display: grid;
    gap: var(--fv-space-4, 16px);

    @media (min-width: 800px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .flagship {
    padding: var(--fv-space-5, 24px);

    h2 {
      margin: 0 0 var(--fv-space-3, 12px);
      font-size: 1.25rem;
    }

    p {
      margin: 0 0 var(--fv-space-4, 16px);
      max-width: 56ch;
    }
  }

  .flagship-eyebrow {
    margin: 0 0 var(--fv-space-2, 8px);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--fv-accent-hover, #5485b8);
  }

  .flagship-shot {
    margin: 0 0 var(--fv-space-4, 16px);
    border-radius: var(--fv-radius-md, 10px);
    overflow: hidden;
    border: 1px solid var(--fv-border);

    :global(img) {
      width: 100%;
      aspect-ratio: 16/10;
      object-fit: cover;
      object-position: top center;
    }
  }

  .pillars {
    padding: var(--fv-space-5, 24px);

    h2 {
      margin: 0 0 var(--fv-space-3, 12px);
      text-align: center;
    }
  }

  .pillar-list {
    margin: 0 auto;
    padding-left: 1.2rem;
    max-width: 68ch;
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-3, 12px);

    li {
      color: var(--fv-text-muted, #b8c0cc);
    }

    strong {
      color: var(--fv-text, #f4f6f8);
    }
  }

  .demo_gallery {
    position: relative;
    padding-top: var(--fv-space-2, 8px);

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

    .video-grid {
      display: grid;
      gap: var(--fv-space-4, 16px);
      margin-bottom: var(--fv-space-5, 24px);

      @media (min-width: 720px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .video-cell {
      aspect-ratio: 16/9;
      border-radius: var(--fv-radius-lg, 14px);
      overflow: hidden;
      border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);

      iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }
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
      padding-top: var(--fv-space-4, 16px);
    }

    .device-stack {
      min-height: 280px;
    }

    .mobile_demo_container {
      height: 84%;
    }
  }
</style>
