<script>
  import { browser } from '$app/environment';
  import ThemeShot from '$lib/theme-shot.svelte';

  let browseOpen = $state(false);

  function openBrowse() {
    browseOpen = true;
  }

  function closeBrowse() {
    browseOpen = false;
  }

  function toggleBrowse() {
    browseOpen = !browseOpen;
  }

  function onJumpClick() {
    closeBrowse();
  }

  $effect(() => {
    if (!browser) return;

    const onKey = (e) => {
      if (e.key === 'Escape' && browseOpen) closeBrowse();
    };

    document.body.classList.toggle('browse-drawer-open', browseOpen);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('browse-drawer-open');
    };
  });
</script>

<section class="hub-header fv-card">
  <p class="eyebrow">Module overview</p>
  <h1>Pick the areas that match how you operate</h1>
  <p class="lead fv-muted">
    FullVue is modular. Enable Field, Counter, Accounting, Rentals, Email, and more when they fit how you operate—without
    buying a separate product for each department. Sales, jobs, field, invoicing, purchasing, and workforce tools share
    one permissioned system.
  </p>
  <div class="hub-actions">
    <a href="/trial" class="fv-btn fv-btn--primary">Start free trial</a>
    <a href="/pricing" class="fv-btn fv-btn--ghost">Estimate pricing</a>
    <a href="/contact" class="fv-btn fv-btn--ghost">Contact us</a>
    <button type="button" class="fv-btn fv-btn--ghost browse-open-inline" onclick={openBrowse}>
      Browse by focus
    </button>
  </div>
</section>

<button
  type="button"
  class="browse-fab"
  class:is-hidden={browseOpen}
  onclick={toggleBrowse}
  aria-expanded={browseOpen}
  aria-controls="browse-drawer"
>
  Browse modules
</button>

{#if browseOpen}
  <button
    type="button"
    class="browse-backdrop"
    aria-label="Close browse modules"
    onclick={closeBrowse}
  ></button>
{/if}

<aside
  id="browse-drawer"
  class="browse-drawer"
  class:is-open={browseOpen}
  aria-hidden={!browseOpen}
  inert={!browseOpen}
  aria-label="Browse modules by focus"
>
  <div class="browse-drawer-head">
    <p class="jump-title" id="browse-drawer-title">Browse by focus</p>
    <button type="button" class="browse-close" onclick={closeBrowse} aria-label="Close browse modules">
      Close
    </button>
  </div>
  <nav class="jump-nav" aria-labelledby="browse-drawer-title">
    <div class="jump-groups">
      <div class="jump-group">
        <span class="jump-label">AI</span>
        <div class="jump-links">
          <a href="#ai" onclick={onJumpClick}>AI</a>
        </div>
      </div>
      <div class="jump-group">
        <span class="jump-label">Sell &amp; quote</span>
        <div class="jump-links">
          <a href="#sales" onclick={onJumpClick}>Sales</a>
          <a href="#counter" onclick={onJumpClick}>Counter</a>
        </div>
      </div>
      <div class="jump-group">
        <span class="jump-label">Jobs &amp; field</span>
        <div class="jump-links">
          <a href="#core" onclick={onJumpClick}>Core</a>
          <a href="#field" onclick={onJumpClick}>Field</a>
        </div>
      </div>
      <div class="jump-group">
        <span class="jump-label">Cash &amp; buying</span>
        <div class="jump-links">
          <a href="#invoicing" onclick={onJumpClick}>Invoicing</a>
          <a href="#purchasing" onclick={onJumpClick}>Purchasing</a>
          <a href="#accounting" onclick={onJumpClick}>Accounting</a>
        </div>
      </div>
      <div class="jump-group">
        <span class="jump-label">People</span>
        <div class="jump-links">
          <a href="#hr" onclick={onJumpClick}>Human Resources</a>
          <a href="#attendance" onclick={onJumpClick}>Attendance</a>
        </div>
      </div>
      <div class="jump-group">
        <span class="jump-label">Operations</span>
        <div class="jump-links">
          <a href="#todos" onclick={onJumpClick}>To-Dos</a>
          <a href="#huddle" onclick={onJumpClick}>Production Meetings</a>
          <a href="#support" onclick={onJumpClick}>Customer Support</a>
          <a href="#products" onclick={onJumpClick}>Products</a>
          <a href="#tether" onclick={onJumpClick}>Tether</a>
          <a href="#planner" onclick={onJumpClick}>Planner</a>
          <a href="#email" onclick={onJumpClick}>Email</a>
          <a href="#sms" onclick={onJumpClick}>SMS</a>
        </div>
      </div>
      <div class="jump-group">
        <span class="jump-label">Assets &amp; compliance</span>
        <div class="jump-links">
          <a href="#assets" onclick={onJumpClick}>Assets</a>
          <a href="#rentals" onclick={onJumpClick}>Rentals</a>
          <a href="#sds" onclick={onJumpClick}>SDS</a>
        </div>
      </div>
    </div>
  </nav>
</aside>

<section class="module_container" id="ai">
  <h2><a href="/modules/ai">AI</a></h2>
  <p class="problem"><strong>Pain:</strong> Answers live in reports and tabs—owners spend Monday hunting instead of deciding.</p>
  <p class="solution">
    <strong>Outcome:</strong> A permission-aware assistant that answers questions from your FullVue data, plus assist-tier polish and table explanations. Read and assist only—metered with AI credits, no silent edits.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="ai" alt="Ask FullVue answering a purchase-order materials question" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Ask natural-language questions about jobs, sales, and operational data you can already see</li>
        <li>Get answers grounded in FullVue—not a generic chatbot</li>
        <li>Use assist-tier polish and table explain for everyday clarity</li>
        <li>No write mode—it does not post invoices or rewrite jobs</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/ai" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="core">
  <h2><a href="/modules/jobs">Core</a></h2>
  <p class="problem"><strong>Pain:</strong> Job detail, labor, materials, and customer context live in different places.</p>
  <p class="solution">
    <strong>Outcome:</strong> Core is the company hub—customers and vendors, jobs with costing, inventory, permissions, search, and settings—so every other module has a single source of truth. Invited customers can use the portal for jobs, quotes, invoices, and documents where you enable it.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="jobs" alt="FullVue jobs dashboard with status chips and customer context" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Run jobs with tasks, materials, mileage, extras, and audit-ready states</li>
        <li>Maintain customers, vendors, locations, and role-based access</li>
        <li>Find records fast with global search and home dashboard widgets</li>
        <li>Configure PDF templates, announcements, and onboarding for new teams</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/jobs" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="field">
  <h2><a href="/modules/field">Field</a></h2>
  <p class="problem"><strong>Pain:</strong> Dispatch and field staff do not see the same schedule and job context.</p>
  <p class="solution">
    <strong>Outcome:</strong> Field turns daily road sheets, schedules, mileage, and on-site closeout into operational truth—so office and crew stop arguing from different notes.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="field" alt="FullVue field sheet with time, materials, and mileage on a job" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Capture daily field records tied to jobs</li>
        <li>Schedule field work and track job mileage</li>
        <li>Close out on site with photos and customer signature when configured</li>
        <li>Keep working with offline-friendly field sync when signal drops</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/field" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="invoicing">
  <h2><a href="/modules/invoicing">Invoicing</a></h2>
  <p class="problem"><strong>Pain:</strong> Billing drifts away from what crews logged on the job.</p>
  <p class="solution">
    <strong>Outcome:</strong> Turn completed work into invoices and payments, including public pay-by-link so customers can pay by card after FoundTech Payments is set up.
  </p>
  <div class="col_container">
    <div class="video_container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/EOlB8r5srIU?si=xedSZUsqgaLJ7v1z&rel=0"
        title="Invoicing module"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="module_summary">
      <ul>
        <li>Create and send invoices tied to jobs and sales</li>
        <li>Record payments and track AR in the same system</li>
        <li>Share pay links customers can open without a staff login</li>
        <li>Keep billing documents on brand with templates</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/invoicing" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="sales">
  <h2><a href="/modules/sales">Sales</a></h2>
  <p class="problem"><strong>Pain:</strong> Opportunities die in inboxes and quotes never tie cleanly to executed jobs.</p>
  <p class="solution">
    <strong>Outcome:</strong> Track pipeline work, build structured quotes, collect signatures on customer-facing quote links, and convert wins into jobs with estimates you can compare to actuals later.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="sales" alt="FullVue sales opportunities pipeline" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Opportunity tracking with structured detail</li>
        <li>Quote builders and customer-facing quote signing links</li>
        <li>Convert accepted quotes into jobs for downstream billing</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/sales" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="accounting">
  <h2><a href="/modules/accounting">Accounting</a></h2>
  <p class="problem"><strong>Pain:</strong> Operators who need a real ledger still retype cash documents into a side system—or get sold a fake “sync.”</p>
  <p class="solution">
    <strong>Outcome:</strong> An in-app general ledger—AR/AP, journals, bank reconciliation, budgets, and financial reports—with file-based bank import. Pair it with one-way QuickBooks Online push when your accountant lives in QBO.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="accounting" alt="FullVue accounting dashboard with ledger, AR, AP, and reports" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Maintain chart of accounts, journals, and fiscal periods</li>
        <li>Reconcile bank accounts and import CSV/OFX/QFX files</li>
        <li>Run financial reports without exporting to a side spreadsheet first</li>
        <li>Optional one-way QuickBooks Online push—not two-way sync, not live bank feeds</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/accounting" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="purchasing">
  <h2><a href="/modules/purchasing">Purchasing</a></h2>
  <p class="problem"><strong>Pain:</strong> Parts orders outrun receiving and invoices rarely tie back to jobs.</p>
  <p class="solution">
    <strong>Outcome:</strong> Formal POs, vendor records, bills, and inventory balances stay aligned so crews bill what they actually used.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="purchasing-order" alt="FullVue purchase order with lines, totals, and vendor context" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Create purchase orders routed to vendors</li>
        <li>Follow PO lifecycle from submitted through received</li>
        <li>Match vendor bills and payments</li>
        <li>Inventory counts tied into operational workflows</li>
        <li>Units conversions between stocking and selling when sizes differ</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/purchasing" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="todos">
  <h2><a href="/modules/to-dos">To-Dos</a></h2>
  <p class="problem"><strong>Pain:</strong> Non-job tasks disappear into sticky notes.</p>
  <p class="solution">
    <strong>Outcome:</strong> Shared execution lists with owners, statuses, and notes so operational follow-through stays visible.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="todos" alt="FullVue to-do with tasks, notes, and owner" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Capture assignments outside formal jobs</li>
        <li>Track progress with notes hand-offs between shifts</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/to-dos" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="sds">
  <h2><a href="/modules/sds">SDS</a></h2>
  <p class="problem"><strong>Pain:</strong> Compliance binders do not travel with crews.</p>
  <p class="solution">
    <strong>Outcome:</strong> Central SDS library that stays searchable—especially valuable when hazardous materials documentation matters for audits or safety meetings.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="sds" alt="FullVue SDS library previewing a safety data sheet" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Upload SDS revisions once</li>
        <li>Search quickly when crews ask “which revision is current?”</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/sds" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="hr">
  <h2><a href="/modules/hr">Human Resources</a></h2>
  <p class="problem"><strong>Pain:</strong> Personnel notes scatter across email and folders.</p>
  <p class="solution">
    <strong>Outcome:</strong> Structured HR records—benefits, pay bands, reviews, kudos, and corrective notes—with timelines people can act on.
  </p>
  <div class="col_container">
    <div class="video_container hr"></div>
    <div class="module_summary">
      <ul>
        <li>Benefits enrollment snapshots per employee</li>
        <li>Performance reviews tied to roles</li>
        <li>Document coaching moments for accountability</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/hr" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="products">
  <h2><a href="/modules/products">Products</a></h2>
  <p class="problem"><strong>Pain:</strong> Serial numbers, BOM hints, and repair history live on paper.</p>
  <p class="solution">
    <strong>Outcome:</strong> Product catalog entries linked into sales and support conversations so technicians quote parts confidently.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="products" alt="FullVue products catalog with serialized units and customer context" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Structured specs per SKU or assembly</li>
        <li>Faster lookups when diagnosing repeat repairs</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/products" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="support">
  <h2><a href="/modules/support">Customer Support</a></h2>
  <p class="problem"><strong>Pain:</strong> Callbacks bounce between voicemail and spreadsheets.</p>
  <p class="solution">
    <strong>Outcome:</strong> Tickets anchored to customers and installed products so resolutions capture labor and parts when billing applies.
  </p>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Issue threads alongside catalog context</li>
        <li>Track shipped parts or onsite labor for invoices</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/support" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="huddle">
  <h2><a href="/modules/production-meeting">Production Meetings</a></h2>
  <p class="problem"><strong>Pain:</strong> Morning huddles never capture commitments.</p>
  <p class="solution">
    <strong>Outcome:</strong> Standing agenda tooling before, during, and after meetings so production rhythms leave an audit trail.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="huddle" alt="FullVue production meeting huddle with jobs by department" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Central place for notes and follow-ups tied to ops cadence</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/production-meeting" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="assets">
  <h2><a href="/modules/assets">Assets</a></h2>
  <p class="problem"><strong>Pain:</strong> Fleet tools, shop equipment, laptops, and software licenses live in separate registers—or nowhere at all.</p>
  <p class="solution">
    <strong>Outcome:</strong> One unified asset register for equipment, devices, components, and software—with assignments, costs, attachments, and links between records.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="assets" alt="FullVue assets register for equipment and assignments" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Shop and fleet equipment with assignments and utilization</li>
        <li>Devices, components, and software in the same module</li>
        <li>Configurable asset types and ties to Rentals when enabled</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/assets" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="rentals">
  <h2><a href="/modules/rentals">Rentals</a></h2>
  <p class="problem"><strong>Pain:</strong> Rental reservations and returns do not connect to the assets you bill or dispatch.</p>
  <p class="solution">
    <strong>Outcome:</strong> Reservations, checkout, and returns tie to rentable asset types—aligned with jobs and customer visibility in the portal.
  </p>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Rental reservations and checkout workflows</li>
        <li>Returns tracking against rented assets</li>
        <li>Connected to Assets categories you mark as rentable</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/rentals" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="counter">
  <h2><a href="/modules/counter">Counter</a></h2>
  <p class="problem"><strong>Pain:</strong> Counter sales and memberships sit outside the job software your crews already use.</p>
  <p class="solution">
    <strong>Outcome:</strong> Register-oriented dashboards, promotions, memberships, loyalty, punch cards, promo codes, fees, and stored value—alongside traditional sales and job permissions.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="counter" alt="FullVue counter / point of sale register" />
    </div>
    <div class="module_summary">
      <ul>
        <li>POS dashboard and register workflows</li>
        <li>Promotions, memberships, loyalty, and stored value</li>
        <li>Permissioned with the sales and job areas you already run</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/counter" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="tether">
  <h2><a href="/modules/tether">Tether</a></h2>
  <p class="problem"><strong>Pain:</strong> Decisions made in texts and email never tie back to jobs or customers.</p>
  <p class="solution">
    <strong>Outcome:</strong> Team channels, DMs, customer chat for staff, and personal notes—coordination inside FullVue instead of another chat app.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="tether" alt="FullVue Tether messaging channels and conversations" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Group channels and direct messages</li>
        <li>Customer chat for service conversations</li>
        <li>Voice notes with optional transcription</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/tether" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="planner">
  <h2><a href="/modules/planner">Planner</a></h2>
  <p class="problem"><strong>Pain:</strong> Personal calendars ignore the jobs, quotes, and todos already in your system.</p>
  <p class="solution">
    <strong>Outcome:</strong> Time-blocking with reminders on a calendar layered on operational items—jobs, quotes, todos—so individuals see their day in context.
  </p>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Personal schedule blocks with reminders</li>
        <li>Layers for jobs, quotes, and todos</li>
        <li>Complements Field schedules—not a replacement for dispatch</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/planner" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="email">
  <h2><a href="/modules/email">Email</a></h2>
  <p class="problem"><strong>Pain:</strong> Work lives in FullVue; the inbox lives in another tab—and context never meets.</p>
  <p class="solution">
    <strong>Outcome:</strong> Employees connect Google, Microsoft, or IMAP mailboxes to read and send from FullVue—separate from company transactional document email.
  </p>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Connect per-employee Google, Microsoft, or IMAP accounts</li>
        <li>Work inbox and compose without leaving FullVue</li>
        <li>Keep mailbox access distinct from Resend document senders</li>
        <li>Reduce tab-hopping between CRM-ish work and the inbox</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/email" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="sms">
  <h2><a href="/modules/sms">SMS</a></h2>
  <p class="problem"><strong>Pain:</strong> Job updates and review asks live in personal phones—or never go out at all.</p>
  <p class="solution">
    <strong>Outcome:</strong> Consented job texts, opt-in handling, review invites, and an optional AI receptionist for unmatched inbound leads—texting as a module, not a side spreadsheet.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="sms-settings" alt="FullVue SMS settings for consented customer texting" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Text customers about jobs with consent-aware messaging</li>
        <li>Manage opt-in and opt-out the right way</li>
        <li>Optional AI receptionist for after-hours lead capture—not a full phone agent</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/sms" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="module_container" id="attendance">
  <h2><a href="/modules/attendance">Attendance</a></h2>
  <p class="problem"><strong>Pain:</strong> Clock punches and schedules are reconciled in spreadsheets after payroll is already wrong.</p>
  <p class="solution">
    <strong>Outcome:</strong> A time clock plus staff scheduling that produces payroll-ready reports your bookkeeper or payroll provider runs with—and lets leadership compare punch time to job time.
  </p>
  <div class="col_container">
    <div class="video_container product-shot">
      <ThemeShot slug="attendance" alt="FullVue attendance and staff scheduling view" />
    </div>
    <div class="module_summary">
      <ul>
        <li>Quick in/out punches from navigation</li>
        <li>Week rosters, shift swaps, availability, and PTO accruals</li>
        <li>Period hours generated from punches—export for your payroll provider</li>
        <li>Aligns with Human Resources workflows</li>
      </ul>
      <div class="learn_more_container">
        <a href="/modules/attendance" class="fv-btn fv-btn--primary">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section class="cta_bottom fv-card">
  <h2>Need help sequencing modules?</h2>
  <p class="fv-muted">Start a trial with Core plus the areas you leak margin—usually jobs and invoicing—then add purchasing, attendance, or Accounting as the data trusts the system.</p>
  <div class="hub-actions">
    <a href="/trial" class="fv-btn fv-btn--primary">Start free trial</a>
    <a href="/pricing" class="fv-btn fv-btn--ghost">Pricing calculator</a>
  </div>
</section>

<style lang="scss">
  .hub-header {
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);
    text-align: center;
  }

  .eyebrow {
    margin: 0 0 var(--fv-space-2, 8px);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fv-accent-hover, #5485b8);
    font-weight: 600;
  }

  .hub-header h1 {
    margin: 0 0 var(--fv-space-3, 12px);
  }

  .lead {
    margin: 0 auto var(--fv-space-4, 16px);
    max-width: 62ch;
  }

  .hub-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fv-space-3, 12px);
    justify-content: center;
  }

  .browse-fab {
    position: fixed;
    right: max(1rem, env(safe-area-inset-right));
    bottom: max(1rem, env(safe-area-inset-bottom));
    z-index: 110;
    padding: 0.7rem 1.05rem;
    border-radius: 999px;
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
    background: var(--fv-accent, #416a98);
    color: #fff;
    font-family: var(--fv-font-display, inherit);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;

    &.is-hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateY(8px);
    }

    &:hover {
      background: var(--fv-accent-hover, #5485b8);
    }
  }

  .browse-backdrop {
    position: fixed;
    inset: 0;
    z-index: 120;
    border: 0;
    padding: 0;
    margin: 0;
    background: rgba(10, 14, 20, 0.55);
    cursor: pointer;
  }

  .browse-drawer {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 130;
    width: min(22rem, 92vw);
    height: 100%;
    padding: var(--fv-space-4, 16px);
    background: var(--fv-bg-elevated, #1e232b);
    border-left: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
    box-shadow: -16px 0 48px rgba(0, 0, 0, 0.35);
    transform: translateX(105%);
    transition: transform 0.2s ease;
    overflow-y: auto;
    overscroll-behavior: contain;
    pointer-events: none;
    visibility: hidden;

    &.is-open {
      transform: translateX(0);
      pointer-events: auto;
      visibility: visible;
    }
  }

  .browse-drawer-head {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--fv-space-3, 12px);
    margin: calc(-1 * var(--fv-space-4, 16px)) calc(-1 * var(--fv-space-4, 16px)) var(--fv-space-4, 16px);
    padding: var(--fv-space-4, 16px);
    background: var(--fv-bg-elevated, #1e232b);
    border-bottom: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
  }

  .browse-close {
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
    background: transparent;
    color: var(--fv-text-muted, #b8c0cc);
    font-size: 0.85rem;
    cursor: pointer;

    &:hover {
      color: var(--fv-text, #f4f6f8);
      border-color: var(--fv-accent-hover, #5485b8);
    }
  }

  .jump-nav {
    padding: 0;
    margin: 0;
  }

  .jump-title {
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
    color: var(--fv-text, #f4f6f8);
  }

  .jump-groups {
    display: grid;
    gap: var(--fv-space-4, 16px);
  }

  .jump-label {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--fv-text-muted, #b8c0cc);
    margin-bottom: var(--fv-space-2, 8px);
  }

  .jump-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fv-space-2, 8px);

    a {
      padding: 0.35rem 0.65rem;
      border-radius: var(--fv-radius-sm, 6px);
      border: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
      color: var(--fv-text, #f4f6f8);
      text-decoration: none;
      font-size: 0.875rem;

      &:hover {
        border-color: var(--fv-accent-hover, #5485b8);
        background: rgba(65, 106, 152, 0.18);
      }
    }
  }

  :global(body.browse-drawer-open) {
    overflow: hidden;
  }

  .module_container {
    padding: var(--fv-space-5, 24px);
    margin: var(--fv-space-5, 24px) 0;
    border-radius: var(--fv-radius-lg, 14px);
    border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
    background: var(--fv-bg-card, #2e3540);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.22);

    &.coming-soon {
      opacity: 0.92;
      border-style: dashed;
    }

    h2 {
      text-align: center;
      margin: 0 0 var(--fv-space-3, 12px);
      font-size: 1.35rem;

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          color: var(--fv-accent-hover, #5485b8);
        }
      }
    }
  }

  .problem,
  .solution {
    max-width: 72ch;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .problem {
    margin-bottom: var(--fv-space-2, 8px);
    color: var(--fv-text-muted, #b8c0cc);
  }

  .solution {
    margin-top: 0;
    margin-bottom: var(--fv-space-4, 16px);
  }

  .col_container {
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-4, 16px);
    align-items: stretch;
    width: 100%;

    .module_summary {
      width: 100%;

      ul {
        margin-top: 0;
        padding-left: 1.15rem;
      }

      .learn_more_container {
        text-align: center;
        margin-top: var(--fv-space-4, 16px);
      }
    }

    .video_container {
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: var(--fv-radius-md, 10px);
      overflow: hidden;
      border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
      background: var(--fv-bg-elevated, #252a32);

      :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top left;
      }

      &.purchasing {
        background: url('$lib/purchasing.webp');
        background-size: cover;
      }

      &.hr {
        background: url('$lib/hr.webp');
        background-size: cover;
      }

      &.payroll {
        background: url('$lib/payroll.webp');
        background-size: cover;
      }

      &.production-meeting {
        background: url('$lib/production_meeting.webp');
        background-size: cover;
      }

    }
  }

  @media screen and (min-width: 920px) {
    .module_container .col_container {
      flex-direction: row-reverse;
      align-items: flex-start;

      .video_container {
        flex: 1.1;
      }

      .module_summary {
        flex: 1;
      }
    }
  }

  .cta_bottom {
    text-align: center;
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);
    margin-bottom: var(--fv-space-5, 24px);

    h2 {
      margin-bottom: var(--fv-space-2, 8px);
    }

    p {
      margin: 0 auto var(--fv-space-4, 16px);
      max-width: 54ch;
    }

    .hub-actions {
      justify-content: center;
    }
  }
</style>
