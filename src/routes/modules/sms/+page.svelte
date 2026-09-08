<script>
  import ThemeShot from '$lib/theme-shot.svelte';
</script>

<section class="module_container">
  <h1>Job texts with consent—not a rogue texting spreadsheet</h1>
  <p class="lead">
    SMS sends job-related texts with customer consent and opt-in handling, plus review invites and an optional AI
    receptionist for unmatched inbound leads.
  </p>
  <div class="product-shot">
    <ThemeShot slug="sms-settings" alt="FullVue SMS settings for consented customer texting" />
  </div>
  <div class="col_container">
    <div class="module_summary">
      <ul>
        <li>Text customers about jobs with consent-aware messaging</li>
        <li>Manage opt-in and opt-out the right way</li>
        <li>Send review invites when that fits your process</li>
        <li>Optionally capture after-hours inbound leads with AI receptionist—constrained lead capture, not a full phone agent</li>
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
