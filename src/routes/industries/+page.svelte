<script lang="ts">
  const groups = [
    {
      title: 'Built environment & trades',
      accent: 'rgb(118, 174, 226)',
      intro:
        'Quote complex work once, run it as structured jobs, and invoice from what crews actually logged—without losing margin in the gaps.',
      links: [
        { href: '/industries/remodeling', label: 'Remodeling' },
        { href: '/industries/carpentry', label: 'Carpentry' },
        { href: '/industries/cabinetry', label: 'Cabinetry' },
        { href: '/industries/plumbing', label: 'Plumbing' },
        { href: '/industries/electrical', label: 'Electrical' },
        { href: '/industries/hvac-heating-cooling', label: 'HVAC & heating/cooling' },
        { href: '/industries/roofing', label: 'Roofing' },
        { href: '/industries/painting', label: 'Painting' },
        { href: '/industries/window-door-installation', label: 'Window & door installation' },
        { href: '/industries/garage-door', label: 'Garage door' },
        { href: '/industries/fireplace', label: 'Fireplace' },
        { href: '/industries/chimney-maintenance', label: 'Chimney maintenance' },
        { href: '/industries/handyman', label: 'Handyman' },
      ],
    },
    {
      title: 'Manufacturing & fabrication',
      accent: 'rgb(196, 164, 227)',
      intro:
        'Tie estimates and POs to shop work so labor and materials roll up to invoices customers recognize—not stale spreadsheets.',
      links: [
        { href: '/industries/manufacturing', label: 'Manufacturing' },
        { href: '/industries/machine-shop', label: 'Machine shop' },
      ],
    },
    {
      title: 'Field operations & seasonal demand',
      accent: 'rgb(120, 206, 178)',
      intro:
        'Schedules, mobile-ready jobs, and purchasing stay aligned when weather and routes spike—or when contracts repeat every season.',
      links: [
        { href: '/industries/landscaping', label: 'Landscaping' },
        { href: '/industries/lawn-care', label: 'Lawn care' },
        { href: '/industries/tree-cutting', label: 'Tree cutting' },
        { href: '/industries/plowing', label: 'Snow plowing' },
        { href: '/industries/window-cleaning', label: 'Window cleaning' },
        { href: '/industries/home-cleaning', label: 'Home cleaning' },
        { href: '/industries/pest-control', label: 'Pest control' },
      ],
    },
    {
      title: 'Heavy equipment & specialty lifting',
      accent: 'rgb(230, 178, 118)',
      intro:
        'Large crews and asset-heavy operators still need clean job costing: dispatch clarity, PO discipline, and invoices tied to signed-off work.',
      links: [{ href: '/industries/crane-and-rigging', label: 'Crane & rigging' }],
    },
    {
      title: 'Residential services',
      accent: 'rgb(228, 154, 174)',
      intro:
        'High-touch homeowner workflows pair well with structured quotes, appointment-driven jobs, and materials tracked through purchasing.',
      links: [{ href: '/industries/appliance-repair', label: 'Appliance repair' }],
    },
  ];
</script>

<article class="industries-hub">
  <header class="hub-hero fv-card">
    <p class="eyebrow">Who Fullvue fits</p>
    <h1>Operational software shaped around how service businesses actually run</h1>
    <p class="lead">
      Owners pick modules that mirror real life—quotes and jobs, field schedules, invoicing, purchasing and inventory, time and payroll exports—and plug into
      <strong>QuickBooks Online</strong> when accounting belongs there.
    </p>
    <div class="cta-row">
      <a href="/contact" class="fv-btn fv-btn--primary">Schedule a demo</a>
      <a href="/pricing" class="fv-btn fv-btn--ghost">Estimate pricing</a>
    </div>
  </header>

  {#each groups as group}
    <section class="group fv-card" style:--group-accent={group.accent}>
      <h2>{group.title}</h2>
      <p class="group-intro">{group.intro}</p>
      <ul class="link-grid">
        {#each group.links as link}
          <li>
            <a href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </section>
  {/each}

  <section class="more fv-card">
    <h2>Need something adjacent?</h2>
    <p>
      Mixed retail counters, memberships, rental-ish workflows—tell us how revenue hits your bank and how crews move. If Fullvue fits, we’ll map modules honestly; if not,
      we’ll say so.
    </p>
    <a href="/contact" class="fv-btn fv-btn--primary">Describe your operation</a>
  </section>
</article>

<style lang="scss">
  .industries-hub {
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-5, 24px);
    padding-bottom: var(--fv-space-6, 32px);
    width: 100%;
    max-width: var(--fv-max-content, 1120px);
    margin: 0 auto;
  }

  .hub-hero {
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);
    text-align: center;

    .eyebrow {
      margin: 0 0 var(--fv-space-2, 8px);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      font-weight: 600;
      color: var(--fv-accent-hover, #5485b8);
    }

    h1 {
      margin: 0 0 var(--fv-space-3, 12px);
      font-size: clamp(1.45rem, 3.8vw, 2rem);
      line-height: 1.15;
    }

    .lead {
      margin: 0 auto var(--fv-space-4, 16px);
      max-width: 62ch;
      color: var(--fv-text-muted, #b8c0cc);
      font-size: 1.05rem;
      text-align: left;

      strong {
        color: var(--fv-text, #f4f6f8);
      }
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: var(--fv-space-3, 12px);
      justify-content: center;
    }
  }

  .group {
    position: relative;
    padding: var(--fv-space-5, 24px) var(--fv-space-5, 24px) var(--fv-space-5, 24px)
      calc(var(--fv-space-5, 24px) + 6px);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14%;
      bottom: 14%;
      width: 4px;
      border-radius: 2px;
      background: linear-gradient(
        180deg,
        var(--group-accent, var(--fv-accent-hover)),
        color-mix(in srgb, var(--group-accent, var(--fv-accent-hover)) 12%, transparent)
      );
      box-shadow: 0 0 18px color-mix(in srgb, var(--group-accent) 35%, transparent);
    }

    h2 {
      margin: 0 0 var(--fv-space-2, 8px);
      font-size: 1.25rem;
    }

    .group-intro {
      margin: 0 0 var(--fv-space-4, 16px);
      color: var(--fv-text-muted, #b8c0cc);
      max-width: 72ch;
    }
  }

  .link-grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: var(--fv-space-2, 8px);
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

    a {
      display: block;
      padding: var(--fv-space-3, 12px) var(--fv-space-3, 12px);
      border-radius: var(--fv-radius-md, 10px);
      border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
      color: var(--fv-text, #f4f6f8);
      text-decoration: none;
      font-weight: 550;
      transition:
        border-color 0.15s ease,
        background 0.15s ease,
        transform 0.15s ease,
        box-shadow 0.15s ease;

      &:hover {
        border-color: var(--fv-accent-hover, #5485b8);
        background: rgba(65, 106, 152, 0.18);
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .more {
    padding: var(--fv-space-5, 24px);
    text-align: center;

    h2 {
      margin-bottom: var(--fv-space-2, 8px);
    }

    p {
      margin: 0 auto var(--fv-space-4, 16px);
      max-width: 56ch;
      color: var(--fv-text-muted, #b8c0cc);
    }
  }
</style>
