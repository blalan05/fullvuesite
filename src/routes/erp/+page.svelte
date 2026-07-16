<article class="erp-page">
  <header class="erp-hero fv-card">
    <h1>What ERP means for operators like you</h1>
    <p class="lead fv-muted">
      “ERP” (enterprise resource planning) is simply shared software for running the business: customers, jobs,
      schedules, bills, inventory, time, and HR records live together instead of in separate spreadsheets and apps.
    </p>
  </header>

  <section class="erp-section erp-section--problem fv-card">
    <h2>The problem ERP solves</h2>
    <p>
      Small and mid-sized operators often stitch together a CRM, a scheduling tool, spreadsheets for job costing, a
      separate inventory or PO system, and something else for payroll. Data is re-typed, reports disagree, and nobody
      has one trustworthy picture of margin or backlog.
    </p>
    <p>
      FullVue is built for owners and GMs who sell work, dispatch crews (or run a shop floor), buy parts, invoice
      customers, and manage people—in parallel.
    </p>
  </section>

  <section class="erp-pillars" aria-labelledby="erp-pillars-heading">
    <h2 id="erp-pillars-heading" class="pillars-intro">What stays inside FullVue</h2>
    <p class="pillars-lead fv-muted">
      Modules mirror how work actually flows—pick depth where you leak time or dollars, tighten the rest later.
    </p>
    <div class="pillar-grid">
      <div class="pillar">
        <h3>Sales</h3>
        <p class="fv-muted">
          Opportunities, quotes (including customer-facing quote signing where you use it).
        </p>
      </div>
      <div class="pillar">
        <h3>Jobs &amp; field</h3>
        <p class="fv-muted">Jobs, schedules, road sheets, time and materials tied to work.</p>
      </div>
      <div class="pillar">
        <h3>Cash &amp; counter</h3>
        <p class="fv-muted">Invoicing aligned with jobs and sales; Counter/POS-style selling where you need it.</p>
      </div>
      <div class="pillar">
        <h3>Purchasing &amp; inventory</h3>
        <p class="fv-muted">POs, vendors, bills, stock tied to operations.</p>
      </div>
      <div class="pillar">
        <h3>People</h3>
        <p class="fv-muted">
          HR records, time punches, payroll-oriented reporting alongside job time.
        </p>
      </div>
      <div class="pillar">
        <h3>Operations depth</h3>
        <p class="fv-muted">
          Support tickets, unified Assets, Rentals, SDS, production meetings, to-dos, Tether messaging, and Planner
          calendars—plus a customer portal for invited contacts. Pick what matches your business.
        </p>
      </div>
    </div>
    <p class="fv-muted pillars-footnote">
      Granular permissions control what each role sees in navigation—useful as you grow without losing control.
    </p>
  </section>

  <section class="erp-section erp-section--alt fv-card">
    <h2>Accounting and QuickBooks Online</h2>
    <p>
      FullVue is positioned around running operations day-to-day. For organizations that keep their books in
      <strong>QuickBooks Online</strong>, FullVue supports connecting that accounting layer—for example pushing invoices
      and bills—so finance stays where your accountant expects it while work stays connected to jobs.
    </p>
  </section>

  <section class="erp-section fv-card">
    <h2>Is implementing ERP worth it?</h2>
    <p>
      Moving off spreadsheets takes effort. The payoff is fewer disputes about job cost, faster invoicing after work is
      done, tighter purchasing, and clearer labor visibility when punches relate back to jobs you actually ran.
    </p>
    <p>If that matches where your team is stuck, it’s worth mapping modules to how you operate—starting where you leak time or margin.</p>
  </section>

  <section class="cta fv-card">
    <h2>See FullVue against your workflows</h2>
    <p class="fv-muted">Walk through quotes → jobs → field → billing → purchasing with your terminology.</p>
    <a href="/contact" class="fv-btn fv-btn--primary">Schedule a demo</a>
  </section>
</article>

<style lang="scss">
  .erp-page {
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-5, 24px);
    padding-bottom: var(--fv-space-4, 16px);
  }

  .erp-hero,
  .erp-section,
  .cta {
    padding: var(--fv-space-5, 24px);
  }

  .erp-section--problem {
    border-left: 3px solid rgba(92, 142, 196, 0.65);
  }

  .erp-section--alt {
    border-left: 3px solid rgba(180, 140, 220, 0.45);
  }

  .erp-hero h1 {
    margin: 0 0 var(--fv-space-3, 12px);
    text-align: center;
  }

  .lead {
    margin: 0;
    text-align: center;
    max-width: 65ch;
    margin-inline: auto;
    font-size: 1.05rem;
  }

  .erp-section h2 {
    margin: 0 0 var(--fv-space-3, 12px);
    font-size: 1.35rem;
  }

  .erp-section p {
    margin: 0 0 var(--fv-space-3, 12px);
    max-width: 72ch;
    text-align: left;
    hyphens: none;
  }

  .erp-section p:last-child {
    margin-bottom: 0;
  }

  .erp-pillars {
    padding: var(--fv-space-2, 8px) 0;
  }

  .pillars-intro {
    margin: 0 0 var(--fv-space-2, 8px);
    font-size: 1.35rem;
    text-align: center;
  }

  .pillars-lead {
    margin: 0 auto var(--fv-space-4, 16px);
    max-width: 56ch;
    text-align: center;
    font-size: 1rem;
  }

  .pillar-grid {
    display: grid;
    gap: var(--fv-space-3, 12px);
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  .pillar {
    position: relative;
    padding: var(--fv-space-4, 16px);
    border-radius: var(--fv-radius-md, 10px);
    background: linear-gradient(
      145deg,
      rgba(92, 142, 196, 0.1),
      rgba(18, 20, 26, 0.55)
    );
    border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.085));
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);

    h3 {
      margin: 0 0 var(--fv-space-2, 8px);
      font-size: 1.05rem;
    }

    p {
      margin: 0;
      font-size: 0.925rem;
      line-height: 1.55;
    }
  }

  .pillars-footnote {
    margin: var(--fv-space-4, 16px) 0 0;
    max-width: 72ch;
    margin-inline: auto;
    text-align: center;
    font-size: 0.95rem;
  }

  .cta {
    text-align: center;

    h2 {
      margin-bottom: var(--fv-space-2, 8px);
    }

    p {
      margin: 0 auto var(--fv-space-4, 16px);
      max-width: 52ch;
    }
  }
</style>
