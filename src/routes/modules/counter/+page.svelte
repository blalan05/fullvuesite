<script>
  import ThemeShot from '$lib/theme-shot.svelte';
</script>

<section class="module_container">
  <h1>Counter and POS without a separate retail stack</h1>
  <p class="lead">
    Counter adds register checkout plus promotions, memberships, punch cards, loyalty, and stored value—alongside the
    same customers and inventory your jobs already use.
  </p>
  <div class="product-shot">
    <ThemeShot slug="counter" alt="FullVue counter / point of sale register" />
  </div>
  <div class="product-shot">
    <ThemeShot slug="counter-settings" alt="FullVue Counter settings for promotions, memberships, and loyalty" />
  </div>
  <div class="product-shot">
    <ThemeShot slug="counter-receipt" alt="FullVue POS receipt layout settings for thermal printers" />
  </div>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Run a point-of-sale register for walk-in and counter sales</li>
        <li>Configure promotions, promo codes, and POS fees</li>
        <li>Manage memberships, punch cards, loyalty, and stored value</li>
        <li>Keep counter activity aligned with your catalog and customers</li>
      </ul>
    </div>
  </div>
</section>

<section class="industry-fits">
  <p>
    Shops that lean on this module: <a href="/industries/computer-repair">computer & tech repair</a>, <a href="/industries/fireplace">fireplace & hearth stores</a> — or browse
    <a href="/industries">all industries</a>.
  </p>
</section>

<style lang="scss">
  .module_container {
    width: 100%;

    h1 {
      margin-top: 0;
    }

    .lead {
      max-width: 68ch;
      margin-bottom: var(--fv-space-4, 16px);
    }

    .product-shot {
      margin-bottom: var(--fv-space-4, 16px);
      border-radius: var(--fv-radius-md, 10px);
      overflow: hidden;
      border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));

      :global(img) {
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        object-position: top left;
      }
    }
  }
</style>
