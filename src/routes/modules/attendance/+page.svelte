<section class="module_container">
  <h1>Attendance</h1>
  <p class="lead">
    Punches and schedules need to reconcile with job time before payroll runs—not after disputes in a group chat.
  </p>
  <div class="col_container">
    <div class="video_container attendance-shot"></div>
    <div class="module_summary">
      <p><strong>Outcome:</strong> Time punches, schedules, and payroll-period attendance reporting sit beside HR so leadership compares clock time to job time—and exports payroll-ready reports for your bookkeeper or payroll provider.</p>
      <ul>
        <li>Time punches including quick in/out from navigation</li>
        <li>Week rosters, shift swaps, availability, and PTO accruals</li>
        <li>Payroll-period attendance reporting</li>
        <li>Works alongside the Human Resources module</li>
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

      &.attendance-shot {
        background: url('$lib/payroll.webp');
        background-size: cover;
        background-position: top left;
      }
    }
  }
</style>
