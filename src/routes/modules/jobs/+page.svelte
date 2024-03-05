<section class="module_container">
  <h1>FullVue</h1>
  <h3>Core (Jobs)</h3>
  <div>
    <div class="video_container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S18ptA8cySc?si=4WbS5nHNeroPAlb1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="module_summary">
      <p>At the base of FullVue are your partners and job management:</p>
      <ul>
        <li>Employees and customers</li>
        <li>Customer connections and locations (addresses and Lat/Lng markers)</li>
        <li>Group customers in Industries</li>
        <li>Log time, materials and additional <em>extras</em></li>
        <li>Customizable departments to visualize workflows</li>
        <li>Cost Sheet report shows profit margins and profit losses</li>
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
    <a href="/modules/payroll" title="Payroll Module">
      <div class="module payroll">
        <div class="module_background"></div>
        <div class="module_overlay">Payroll</div>
      </div>
    </a>
  </div>
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