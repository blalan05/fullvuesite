<script>
  import ThemeShot from '$lib/theme-shot.svelte';
</script>

<section class="module_container">
    <h1>A catalog built for real configurations</h1>
  <div class="col_container">
    <div class="product-shot">
      <ThemeShot slug="products" alt="FullVue products catalog with serialized units and customer context" />
    </div>
    <div class="module_summary">
      <p>Products manages your catalog with configurable types and fields—so serialized or structured items stay consistent across sales, support, and inventory.</p>
      <ul>
        <li>Define product types, fields, and groups that match how you sell</li>
        <li>Keep catalog data consistent across quotes, jobs, and support</li>
        <li>Track the product detail your team needs for warranty and service</li>
        <li>Avoid one-off spreadsheets for “special” items</li>
      </ul>
    </div>
  </div>
</section>
<style lang="scss">
  .module_container {
    width: 100%;
    h1 {
      margin-top: 0;
    }
    .video_container {
      width: 100%;
      aspect-ratio: 16 / 9;
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