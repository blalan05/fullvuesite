<section class="module_container">
  <h1>Time and schedules that can face the job clock</h1>
  <p class="lead">
    Attendance covers punches, schedules, absences, and payroll-period reporting—so labor data is captured where work is
    managed.
  </p>
  <div class="col_container">
    <div class="video_container attendance-shot"></div>
    <div class="module_summary">
      <ul>
        <li>Clock in and out from the app (including nav In/Out)</li>
        <li>Manage schedules, shifts, and absences</li>
        <li>Report attendance by payroll period</li>
        <li>Compare workforce time against job time where your reports support it</li>
      </ul>
    </div>
  </div>
</section>

<section class="industry-fits">
  <p>
    Shops that lean on this module: <a href="/industries/machine-shop">machine & fab shops</a> — or browse
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
