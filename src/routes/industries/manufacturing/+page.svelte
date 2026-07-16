<script lang="ts">
  import IndustryLanding from '$lib/industry-landing.svelte';
</script>

<IndustryLanding
  headline="Light manufacturing stays profitable when ops and purchasing share a spine"
  lead="Fab shops, assembly cells, and mixed jobbers juggle BOM drifts, expedited POs, and ship dates. Margin is a team sport—your software should behave that way."
  painPoints={[
    'Production supers override planning, but costing never updates.',
    'Raw inventory and WIP counts disagree with finance’s month-end snapshot.',
    'Shipping and invoicing timelines split, so revenue recognition feels murky.',
  ]}
  fitBullets={[
    'Jobs coordinate build steps, labor, and materials for each order line.',
    'Purchasing catches suppliers, receivers, and bills in one operational trail.',
    'Inventory reflects consumption tied to jobs—not orphaned adjustments.',
    'QuickBooks-bound invoicing keeps accounting aligned once billing fires.',
  ]}
/>
