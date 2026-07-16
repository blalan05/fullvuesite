<section class="module_container">
  <h1>Rentals</h1>
  <p class="lead">
    When you rent equipment to customers, reservations and returns should trace back to the same asset and job records
    your shop already trusts.
  </p>
  <div class="col_container">
    <div class="video_container placeholder">
      <span class="fv-muted">Screenshot placeholder — Rentals dashboard.</span>
    </div>
    <div class="module_summary">
      <p><strong>Outcome:</strong> Rental reservations, checkout, and returns connect to rentable asset types in Assets—so availability and billing stay aligned with operations.</p>
      <ul>
        <li>Rental reservations and checkout workflows</li>
        <li>Returns tracking against rented assets</li>
        <li>Ties to rentable categories configured in Assets</li>
        <li>Customer portal visibility for invited contacts where enabled</li>
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

    .video_container {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: var(--fv-radius-md, 10px);
      border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
      background: var(--fv-bg-elevated, #252a32);

      &.placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--fv-space-4, 16px);
        text-align: center;
      }
    }
  }
</style>
