<section class="module_container">
    <h1>Your company hub—jobs, people, and inventory in one place</h1>
  <div>
    <div class="video_container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S18ptA8cySc?si=4WbS5nHNeroPAlb1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="module_summary">
      <p>Core is the FullVue foundation: customers and vendors, jobs with costing, inventory, permissions, search, and company settings so every other module has a single source of truth.</p>
      <ul>
        <li>Run jobs with tasks, materials, mileage, extras, and audit-ready states</li>
        <li>Maintain customers, vendors, locations, and role-based access</li>
        <li>Find records fast with global search and home dashboard widgets</li>
        <li>Configure PDF templates, announcements, and onboarding for new teams</li>
      </ul>
    </div>
    <div class="video_container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dBojug0hTr8?si=4WbS5nHNeroPAlb1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</section>
<section>
  <h4>Related Modules</h4>
  <div class="related">
    <a href="/modules/field" title="Field Module">
      <div class="module field">
        <div class="module_background"></div>
        <div class="module_overlay">Field</div>
      </div>
    </a>
    <a href="/modules/invoicing" title="Invoicing Module">
      <div class="module invoicing">
        <div class="module_background"></div>
        <div class="module_overlay">Invoicing</div>
      </div>
    </a>
    <a href="/modules/attendance" title="Attendance Module">
      <div class="module payroll">
        <div class="module_background"></div>
        <div class="module_overlay">Attendance</div>
      </div>
    </a>
  </div>
</section>
<section class="industry-fits">
  <p>
    Shops that lean on this module: <a href="/industries/machine-shop">machine & fab shops</a>, <a href="/industries/computer-repair">computer & tech repair</a>, <a href="/industries/video-production">video production</a> — or browse
    <a href="/industries">all industries</a>.
  </p>
</section>

<style lang="scss">
  .module_container {
    width: 100%;
    .video_container {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }
  h4 {
    font-size: 1.8em;
    margin-bottom: 0.36em;
  }
  .related {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    margin-bottom: 1em;
    a {
      display: inline-block;
      width: 100%;
      color: white;
      .module {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        .module_background {
          width: 100%;
          height: 100%;
        }
        .module_overlay {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          font-size: 2.4em;
          background-color: #416a98;
          color: white;
          transition: height 0.4s;
          overflow: hidden;
        }
        &:hover {
          .module_overlay {
            height: 100%;
          }
        }
      }
      .module.field .module_background {
        background: url('$lib/field.webp');
        background-size: cover;
      }
      .module.invoicing .module_background {
        background: url('$lib/invoicing.webp');
        background-size: cover;
      }
      .module.payroll .module_background {
        background: url('$lib/payroll.webp');
        background-size: cover;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .related {
      flex-direction: row;
    }
  }
</style>