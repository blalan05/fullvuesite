<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does the QuickBooks integration sync both ways?","acceptedAnswer":{"@type":"Answer","text":"No — and we won't pretend it does. It's a one-way push: invoices, credit memos, bills, customer payments, and bill payments go from FullVue to QuickBooks Online. Nothing is pulled back from QBO. If your operation truly needs a field-by-field two-way sync, we're not the right fit — we'd rather tell you that now than after you've migrated."}},{"@type":"Question","name":"What exactly gets sent to QuickBooks Online?","acceptedAnswer":{"@type":"Answer","text":"Invoices, credit memos, bills, customer payments, and bill payments—when you send them. Jobs, purchase orders, and inventory stay in FullVue. A separate IIF export exists for QuickBooks Desktop; that is not live sync."}},{"@type":"Question","name":"Do we have to move our books out of QuickBooks?","acceptedAnswer":{"@type":"Answer","text":"No. Most teams keep the accountant in QuickBooks Online and run operations in FullVue. If you also want an in-app ledger, the Accounting module can sit alongside the QBO push—same close story, two depths."}},{"@type":"Question","name":"How does job costing work if the books live in QuickBooks?","acceptedAnswer":{"@type":"Answer","text":"Job costing happens in FullVue, while the job is running. Labor and materials post against the job as they happen, so you can see where a job stands before it closes — not after month-end. QuickBooks receives the cash documents; FullVue holds the job-level detail behind them."}}]})}</${'script'}>`}
</svelte:head>

<article class="content-page">
  <header class="hero fv-card">
    <p class="eyebrow">Integrations</p>
    <h1>Operations in FullVue. Books in QuickBooks—without retyping.</h1>
    <p class="lead fv-muted">Connect QuickBooks Online to push invoices, credit memos, bills, customer payments, and bill payments one-way into QBO. Your team keeps running jobs in FullVue; your accountant gets the documents they need to close. Nothing is pulled back from QuickBooks, and jobs, POs, and inventory stay in FullVue.</p>
    <div class="cta-row">
      <a href="/trial" class="fv-btn fv-btn--primary">Start free trial</a>
      <a href="/pricing" class="fv-btn fv-btn--ghost">See pricing</a>
      <a href="/contact" class="fv-btn fv-btn--ghost">Contact us</a>
    </div>
  </header>

  <section class="fv-card section">
    <h2>One-way push, on purpose</h2>
    <p class="fv-muted">FullVue's QuickBooks Online integration is a one-way push, and that's deliberate. You quote the job, run it, and track hours and materials against it in FullVue. When cash documents are ready, you push invoices, credit memos, bills, and payments into QuickBooks Online. That's the whole integration — and that's the point.</p>
    <p class="fv-muted">Nothing writes back the other direction, and nothing runs in the background quietly editing your inventory, your customers, or your books. If you've ever fought a "seamless" two-way sync that adjusted inventory on its own, you already know why we built it this way: data moves in one direction, when you send it.</p>
  </section>

  <section class="fv-card section">
    <h2>What pushes to QuickBooks — and what stays in FullVue</h2>
    <p class="fv-muted">The dividing line is simple: QuickBooks Online keeps the books, FullVue runs the work.</p>
    <ul>
      <li>Pushes to QuickBooks Online: invoices, credit memos, bills, customer payments, and bill payments—when you send them.</li>
      <li>Stays in FullVue: jobs, purchase orders, inventory, quotes and e-sign, schedules, time punches, counter sales, rentals, and the customer portal.</li>
      <li>Closes in QuickBooks: the cash documents your accountant needs. Teams that also want an in-app ledger can enable the Accounting module—that is a choice, not a replacement for this push.</li>
    </ul>
  </section>

  <section class="fv-card section">
    <h2>Why a push beats re-keying</h2>
    <p class="fv-muted">Without an integration, somebody spends Friday afternoon re-typing finished jobs into QuickBooks — and every re-typed invoice is a chance to drop a line item, fat-finger a quantity, or bill the wrong customer. With FullVue, the invoice is built from what actually happened on the job: the hours punched against it and the materials pulled for it. Sending it to QuickBooks is the last step, not a second job.</p>
    <p class="fv-muted">Job costing works the same way. Because labor and materials post against the job while it's running, you see margin before the job closes — not weeks later when the books are reconciled. QuickBooks tells you how the month went. FullVue tells you how the job is going.</p>
  </section>

  <section class="fv-card section">
    <h2>Your accountant keeps QuickBooks</h2>
    <p class="fv-muted">The fastest way to kill a software change is to ask your bookkeeper to switch systems. So don't. With FullVue, the QBO file, reports, and tax-time workflow stay put. The only difference your accountant notices is that invoices, bills, and payments show up already entered instead of arriving as a shoebox of paper.</p>
    <p class="fv-muted">Owners and managers do not need a daily QuickBooks login. Run operations in FullVue; push the cash documents. If you later want an in-app general ledger as well, <a href="/modules/accounting">Accounting</a> is available when enabled. A separate IIF export exists for QuickBooks Desktop—do not call that live sync.</p>
  </section>

  <section class="fv-card section">
    <h2>From signed quote to sent invoice</h2>
    <p class="fv-muted">Here's the loop end to end. You send a quote link; the customer signs it from their phone — no login, no DocuSign account. The signature creates the job automatically, with the quote's tasks and materials carried over. Your crew punches time against the job, materials come out of inventory, and the invoice is built from the actuals. Then you send it to QuickBooks Online, and the books are current.</p>
    <p class="fv-muted">The Field Service bundle starts around $242/mo billed annually, priced in five-employee brackets. Base prices are posted on the pricing page — no email gate.</p>
  </section>

  <section class="fv-card section faq">
    <h2>Questions owners actually ask</h2>
    <h3>Does the QuickBooks integration sync both ways?</h3>
    <p class="fv-muted">No — and we won't pretend it does. It's a one-way push: invoices, credit memos, bills, customer payments, and bill payments go from FullVue to QuickBooks Online. Nothing is pulled back from QBO. If your operation truly needs a field-by-field two-way sync, we're not the right fit — we'd rather tell you that now than after you've migrated.</p>
    <h3>What exactly gets sent to QuickBooks Online?</h3>
    <p class="fv-muted">Invoices, credit memos, bills, customer payments, and bill payments—when you send them. Jobs, purchase orders, and inventory stay in FullVue. A separate IIF export exists for QuickBooks Desktop; that is not live sync.</p>
    <h3>Do we have to move our books out of QuickBooks?</h3>
    <p class="fv-muted">No. Most teams keep the accountant in QuickBooks Online and run operations in FullVue. If you also want an in-app ledger, the Accounting module can sit alongside the QBO push—same close story, two depths.</p>
    <h3>How does job costing work if the books live in QuickBooks?</h3>
    <p class="fv-muted">Job costing happens in FullVue, while the job is running. Labor from the time clock and materials from inventory post against the job as they happen, so you can see where a job stands before it closes — not after month-end. QuickBooks receives the finished invoice and bill; FullVue holds the job-level detail behind them.</p>
  </section>

  <section class="fv-card section">
    <p class="fv-muted fineprint">
      QuickBooks and QuickBooks Online are registered trademarks of Intuit Inc. FullVue is not affiliated
      with or endorsed by Intuit.
    </p>
  </section>

  <section class="fv-card section">
    <h2>See it with your own workflow</h2>
    <p class="fv-muted">
      Start a free trial and walk quote → job → invoice → QuickBooks push yourself—or
      <a href="/contact">contact us</a> if you have questions first.
    </p>
    <div class="cta-row">
      <a href="/trial" class="fv-btn fv-btn--primary">Start free trial</a>
      <a href="/pricing" class="fv-btn fv-btn--ghost">See pricing</a>
    </div>
  </section>
</article>

<style lang="scss">
  .content-page {
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-5, 24px);
    padding-bottom: var(--fv-space-5, 24px);
  }

  .hero {
    padding: var(--fv-space-6, 32px) var(--fv-space-5, 24px);

    .eyebrow {
      margin: 0 0 var(--fv-space-2, 8px);
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--fv-accent-hover, #5c8ec4);
    }

    h1 {
      margin: 0 0 var(--fv-space-3, 12px);
    }

    .lead {
      margin: 0 0 var(--fv-space-4, 16px);
      max-width: 68ch;
      font-size: 1.05rem;
    }
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fv-space-3, 12px);
  }

  .section {
    padding: var(--fv-space-5, 24px);

    h2 {
      margin: 0 0 var(--fv-space-3, 12px);
    }

    p {
      max-width: 72ch;
    }

    ul {
      margin: var(--fv-space-3, 12px) 0 0;
      padding-left: 1.2em;
      display: flex;
      flex-direction: column;
      gap: var(--fv-space-2, 8px);
      max-width: 72ch;
    }
  }

  

  

  .faq {
    h3 {
      margin: var(--fv-space-4, 16px) 0 var(--fv-space-2, 8px);
      font-size: 1.05rem;
    }

    p {
      margin: 0;
    }
  }

  .fineprint {
    font-size: 0.8rem;
  }
</style>
