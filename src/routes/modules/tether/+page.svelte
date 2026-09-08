<script>
  import ThemeShot from '$lib/theme-shot.svelte';
</script>

<section class="module_container">
  <h1>Team messaging inside the system of record</h1>
  <p class="lead">
    Tether is in-app messaging—channels, DMs, customer-related chat for staff, and notes-to-self—so coordination does
    not vanish into personal text threads.
  </p>
  <div class="product-shot">
    <ThemeShot slug="tether" alt="FullVue Tether messaging channels and conversations" />
  </div>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Message in channels and direct conversations</li>
        <li>Keep customer-related staff chat near the work</li>
        <li>Capture personal notes-to-self from the home experience</li>
        <li>Archive history for admins when you need continuity</li>
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