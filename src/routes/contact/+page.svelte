<article class="contact-page">
  <header class="contact-hero fv-card">
    <p class="eyebrow">We’re here to help</p>
    <h1>Contact FullVue</h1>
    <p class="lead fv-muted">
      Questions, a tailored walkthrough, or help scoping modules for your crew—send a note and we’ll reply with next steps.
    </p>
  </header>

  <section class="contact-form-wrap fv-card" aria-labelledby="contact-form-heading">
    <h2 id="contact-form-heading" class="form-title">Send a message</h2>
    <p class="form-hint fv-muted">
      Include how you quote, dispatch, and invoice today if you want a demo mapped to your workflow.
    </p>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thank-you"
      class="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden-field" aria-hidden="true">
        <label>Don't fill this out if you're human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div class="field-grid">
        <div class="field">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="fv-field"
            required
            autocomplete="name"
            placeholder="Your name"
          />
        </div>
        <div class="field">
          <label for="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            class="fv-field"
            required
            autocomplete="organization"
            placeholder="Business name"
          />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="fv-field"
            required
            autocomplete="email"
            placeholder="you@company.com"
          />
        </div>
        <div class="field">
          <label for="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            class="fv-field"
            autocomplete="tel"
            placeholder="Optional"
          />
        </div>
        <div class="field field--full">
          <label for="message">Message</label>
          <textarea name="message" id="message" class="fv-field" rows="6" required placeholder="What would you like to explore?"></textarea>
        </div>
      </div>
      <div class="submit-row">
        <button type="submit" class="fv-btn fv-btn--primary">Submit</button>
      </div>
    </form>
  </section>
</article>

<style lang="scss">
  .contact-page {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-5, 24px);
    padding-bottom: var(--fv-space-5, 24px);
  }

  .contact-hero {
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

  .contact-hero h1 {
    margin: 0 0 var(--fv-space-3, 12px);
  }

  .lead {
    margin: 0;
    max-width: 48ch;
    margin-inline: auto;
    font-size: 1.05rem;
  }

  .contact-form-wrap {
    padding: var(--fv-space-5, 24px);
  }

  .form-title {
    margin: 0 0 var(--fv-space-2, 8px);
    font-size: 1.25rem;
  }

  .form-hint {
    margin: 0 0 var(--fv-space-4, 16px);
    font-size: 0.95rem;
    max-width: 52ch;
  }

  .field-grid {
    display: grid;
    gap: var(--fv-space-4, 16px);
  }

  .field label {
    display: block;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: var(--fv-space-2, 8px);
    color: var(--fv-text, #f4f6f8);
  }

  .field--full {
    grid-column: 1 / -1;
  }

  .hidden-field {
    position: absolute;
    left: -9999px;
    height: 0;
    width: 0;
    overflow: hidden;
  }

  .submit-row {
    margin-top: var(--fv-space-5, 24px);
  }

  @media (min-width: 560px) {
    .field-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
