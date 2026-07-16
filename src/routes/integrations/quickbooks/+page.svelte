<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does the QuickBooks integration sync both ways?","acceptedAnswer":{"@type":"Answer","text":"No — and we won't pretend it does. It's a one-way push: you send invoices and bills from FullVue to QuickBooks Online. Changes made in QuickBooks don't flow back into FullVue, and FullVue never edits your books on its own. If your operation truly needs a field-by-field two-way sync, we're not the right fit — we'd rather tell you that now than after you've migrated."}},{"@type":"Question","name":"What exactly gets sent to QuickBooks Online?","acceptedAnswer":{"@type":"Answer","text":"Invoices and bills, when you choose to send them. Quotes, jobs, schedules, time punches, purchase orders, and inventory stay in FullVue — that's the operational side QuickBooks was never built to run."}},{"@type":"Question","name":"Do we have to move our books out of QuickBooks?","acceptedAnswer":{"@type":"Answer","text":"No. Your books stay in QuickBooks Online, and your accountant or bookkeeper keeps working exactly the way they do today. FullVue runs the work; QuickBooks keeps the books."}},{"@type":"Question","name":"How does job costing work if the books live in QuickBooks?","acceptedAnswer":{"@type":"Answer","text":"Job costing happens in FullVue, while the job is running. Labor from the time clock and materials from inventory post against the job as they happen, so you can see where a job stands before it closes — not after month-end. QuickBooks receives the finished invoice and bill; FullVue holds the job-level detail behind them."}}]})}</${'script'}>`}
</svelte:head>

<article class="content-page">
  <header class="hero fv-card">
    <p class="eyebrow">Integrations</p>
    <h1>Field service and job costing software that works with QuickBooks Online</h1>
    <p class="lead fv-muted">You run the work in FullVue — quotes, jobs, hours, materials, purchasing. When it's time to bill, you send the invoice to QuickBooks Online. Your books stay in QuickBooks, your accountant stays happy, and nobody re-types anything.</p>
    <div class="cta-row">
      <a href="/contact" class="fv-btn fv-btn--primary">Schedule a demo</a>
      <a href="/pricing" class="fv-btn fv-btn--ghost">See pricing</a>
      <a href="/modules" class="fv-btn fv-btn--ghost">Explore modules</a>
    </div>
  </header>

  <section class="fv-card section">
    <h2>One-way push, on purpose</h2>
    <p class="fv-muted">FullVue's QuickBooks Online integration is a one-way push, and that's deliberate. You quote the job, run it, and track hours and materials against it in FullVue. When the work is billed, you send the invoice to QuickBooks Online. Bills from purchasing push the same way. That's the whole integration — and that's the point.</p>
    <p class="fv-muted">Nothing writes back the other direction, and nothing runs in the background quietly editing your inventory, your customers, or your books. If you've ever fought a "seamless" two-way sync that adjusted inventory on its own, you already know why we built it this way: data moves in one direction, when you send it.</p>
  </section>

  <section class="fv-card section">
    <h2>What pushes to QuickBooks — and what stays in FullVue</h2>
    <p class="fv-muted">The dividing line is simple: QuickBooks Online keeps the books, FullVue runs the work.</p>
    <ul>
      <li>Pushes to QuickBooks Online: invoices you send, built from the job's actual time and materials — and bills you send, entered against purchase orders and receipts in FullVue.</li>
      <li>Stays in FullVue: quotes and e-signatures, jobs and schedules, time clock punches, purchase orders and receipts, inventory, counter sales, rentals, and the customer portal.</li>
      <li>Stays in QuickBooks: your chart of accounts, reconciliation, financial reports, and everything your accountant touches at tax time.</li>
    </ul>
  </section>

  <section class="fv-card section">
    <h2>Why a push beats re-keying</h2>
    <p class="fv-muted">Without an integration, somebody spends Friday afternoon re-typing finished jobs into QuickBooks — and every re-typed invoice is a chance to drop a line item, fat-finger a quantity, or bill the wrong customer. With FullVue, the invoice is built from what actually happened on the job: the hours punched against it and the materials pulled for it. Sending it to QuickBooks is the last step, not a second job.</p>
    <p class="fv-muted">Job costing works the same way. Because labor and materials post against the job while it's running, you see margin before the job closes — not weeks later when the books are reconciled. QuickBooks tells you how the month went. FullVue tells you how the job is going.</p>
  </section>

  <section class="fv-card section">
    <h2>Your accountant keeps QuickBooks</h2>
    <p class="fv-muted">The fastest way to kill a software change is to ask your bookkeeper to switch systems. So don't. With FullVue, nothing changes on the accounting side: same QuickBooks Online file, same reports, same tax-time workflow. The only difference your accountant notices is that invoices and bills show up already entered instead of arriving as a shoebox of paper.</p>
    <p class="fv-muted">FullVue isn't trying to be your general ledger. Your books stay in QuickBooks, your accountant stays in the tool they trust, and you stop being the human sync between the shop floor and the bookkeeping.</p>
  </section>

  <section class="fv-card section">
    <h2>From signed quote to sent invoice</h2>
    <p class="fv-muted">Here's the loop end to end. You send a quote link; the customer signs it from their phone — no login, no DocuSign account. The signature creates the job automatically, with the quote's tasks and materials carried over. Your crew punches time against the job, materials come out of inventory, and the invoice is built from the actuals. Then you send it to QuickBooks Online, and the books are current.</p>
    <p class="fv-muted">The Field Service bundle starts around $242/mo billed annually, priced in five-employee brackets. Base prices are posted on the pricing page — no email gate.</p>
  </section>

  <section class="fv-card section faq">
    <h2>Questions owners actually ask</h2>
    <h3>Does the QuickBooks integration sync both ways?</h3>
    <p class="fv-muted">No — and we won't pretend it does. It's a one-way push: you send invoices and bills from FullVue to QuickBooks Online. Changes made in QuickBooks don't flow back into FullVue, and FullVue never edits your books on its own. If your operation truly needs a field-by-field two-way sync, we're not the right fit — we'd rather tell you that now than after you've migrated.</p>
    <h3>What exactly gets sent to QuickBooks Online?</h3>
    <p class="fv-muted">Invoices and bills, when you choose to send them. Quotes, jobs, schedules, time punches, purchase orders, and inventory stay in FullVue — that's the operational side QuickBooks was never built to run.</p>
    <h3>Do we have to move our books out of QuickBooks?</h3>
    <p class="fv-muted">No. Your books stay in QuickBooks Online, and your accountant or bookkeeper keeps working exactly the way they do today. FullVue runs the work; QuickBooks keeps the books.</p>
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
      Tell us how you quote, run work, and bill today — we'll walk the same loop through FullVue and you can
      judge the fit yourself.
    </p>
    <div class="cta-row">
      <a href="/contact" class="fv-btn fv-btn--primary">Schedule a demo</a>
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
