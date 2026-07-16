<section class="module_container">
  <h1>Planner</h1>
  <p class="lead">
    Personal schedules scattered across phone calendars do not reflect the jobs, quotes, and follow-ups your team already
    tracks in FullVue.
  </p>
  <div class="col_container">
    <div class="video_container placeholder">
      <span class="fv-muted">Screenshot placeholder — Planner calendar.</span>
    </div>
    <div class="module_summary">
      <p><strong>Outcome:</strong> Block time with reminders on a calendar that layers operational items—jobs, quotes, todos—so individuals see their day in context.</p>
      <ul>
        <li>Personal time-blocking with reminders</li>
        <li>Layers for jobs, quotes, todos, and related work</li>
        <li>Complements team schedules in Field—not a replacement for dispatch boards</li>
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
