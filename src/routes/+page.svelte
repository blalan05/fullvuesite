<script>
  import { page } from '$app/state';
  import AppLauncher from '$lib/app-launcher.svelte';

  import logo from '$lib/logo.png';
  import laptopShot from '$lib/laptop_core_cost_sheet.webp';
  import mobileShot from '$lib/mobile_core_cost_sheet.webp';
  import coreJobs from '$lib/core-jobs.webp';
  import coreCustomers from '$lib/core-customers.webp';
  import fieldShot from '$lib/field.webp';
  import salesShot from '$lib/sales.webp';
  import purchasingShot from '$lib/purchasing.webp';
  import invoicingShot from '$lib/invoicing.webp';
  import hrShot from '$lib/hr.webp';
  import sdsShot from '$lib/sds.webp';
  import todosShot from '$lib/to-dos.webp';
  import huddleShot from '$lib/production_meeting.webp';

  const demoVideos = [
    { id: 'S18ptA8cySc', title: 'Jobs and core workflows' },
    { id: 'dBojug0hTr8', title: 'Customers and CRM-style context' },
    { id: 'jeWbM4vBzkE', title: 'Field service' },
    { id: 'SYIZux4tCZU', title: 'Sales pipeline and quotes' }
  ];

  const screenshots = [
    { src: coreJobs, alt: 'FullVue jobs dashboard listing active jobs with status and customer context', caption: 'Jobs' },
    { src: coreCustomers, alt: 'FullVue customers dashboard with contact and site details', caption: 'Customers' },
    { src: fieldShot, alt: 'FullVue field view with road sheets and job schedule for crews', caption: 'Field' },
    { src: salesShot, alt: 'FullVue sales pipeline with opportunities and quotes', caption: 'Sales' },
    { src: purchasingShot, alt: 'FullVue purchase orders tied to vendors and inventory', caption: 'Purchasing' },
    { src: invoicingShot, alt: 'FullVue invoice built from recorded job data', caption: 'Invoicing' },
    { src: hrShot, alt: 'FullVue human resources records and reports', caption: 'HR' },
    { src: sdsShot, alt: 'FullVue safety data sheet library with search', caption: 'SDS' },
    { src: todosShot, alt: 'FullVue to-do lists tracking team follow-ups', caption: 'To-dos' },
    { src: huddleShot, alt: 'FullVue production meeting view with live pipeline', caption: 'Production meetings' }
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
          <img src={laptopShot} alt="FullVue job cost sheet on a laptop showing labor, materials, and margin" loading="lazy" />
        </div>
        <div class="mobile_demo_container">
          <img src={mobileShot} alt="FullVue cost sheet on a phone for crews in the field" loading="lazy" />
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
    <article class="flagship fv-card">
      <p class="flagship-eyebrow">Flagship</p>
      <h2>Your accountant stays in QuickBooks. You stay in FullVue.</h2>
      <p class="fv-muted">
        Connect QuickBooks Online and push invoices, credit memos, bills, and payments one-way into QBO. Jobs, purchase
        orders, and inventory stay where work happens. No two-way sync theater—just the cash documents your books need.
      </p>
      <a href="/integrations/quickbooks" class="fv-btn fv-btn--ghost">See how QuickBooks connects</a>
    </article>
    <article class="flagship fv-card">
      <p class="flagship-eyebrow">Flagship</p>
      <h2>Ask your business a question—get an answer from your data.</h2>
      <p class="fv-muted">
        Ask FullVue is a permission-aware assistant that helps owners and managers find what’s in FullVue—jobs, sales,
        reports, and more—plus assist-tier polish and table explanations. It does not rewrite invoices or post behind your
        back. Metered with AI credits.
      </p>
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
        Short videos and product grabs across jobs, sales, field service, billing, HR, compliance, and shop-floor rhythm.
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

    <div class="shot-grid">
      {#each screenshots as shot}
        <figure class="shot-cell">
          <img src={shot.src} alt={shot.alt} loading="lazy" />
          <figcaption class="fv-muted">{shot.caption}</figcaption>
        </figure>
      {/each}
    </div>

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
    aspect-ratio: 16/9;
    overflow: hidden;
    border-radius: var(--fv-radius-md, 10px);
    border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
  }

  .mobile_demo_container {
    position: absolute;
    right: 4%;
    bottom: -10%;
    /* Height-driven sizing: the phone can never grow taller than the
       stack, so it overlaps the laptop's corner but not the logo above. */
    height: 82%;
    width: auto;
    aspect-ratio: 259/540;
    overflow: hidden;
    border-radius: var(--fv-radius-md, 10px);
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }

  .pc_demo_container img,
  .mobile_demo_container img {
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
      box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 24px 60px rgba(0, 0, 0, 0.45);

      iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }
    }

    .shot-grid {
      display: grid;
      gap: var(--fv-space-4, 16px);
      grid-template-columns: repeat(2, minmax(0, 1fr));

      @media (min-width: 720px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media (min-width: 1080px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
    }

    .shot-cell {
      margin: 0;

      img {
        display: block;
        width: 100%;
        aspect-ratio: 16/10;
        object-fit: cover;
        object-position: top left;
        border-radius: var(--fv-radius-md, 10px);
        border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
      }

      figcaption {
        margin-top: var(--fv-space-2, 8px);
        font-size: 0.85rem;
        text-align: center;
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
      position: relative;
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
