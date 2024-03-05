<section class="module_container">
  <h1>FullVue</h1>
  <h3>Production Meeting</h3>
  <div class="col_container">
    <div class="video_container"></div>
    <div class="module_summary">
      <ul>
        <li>Improve communication before, during, and after regular meetings</li>
      </ul>
    </div>
  </div>
</section>
<section>
  <h4>Related Modules</h4>
  <div class="related">
    <a href="/modules/to-dos" title="To-dos Module">
      <div class="module to-dos">
        <div class="module_background"></div>
        <div class="module_overlay">To-dos</div>
      </div>
    </a>
    <a href="/modules/hr" title="Human Resources Module">
      <div class="module hr">
        <div class="module_background"></div>
        <div class="module_overlay">Human Resources</div>
      </div>
    </a>
    <a href="/modules/core">
      <div class="module core">
        <div class="module_background"></div>
        <div class="module_overlay">Core (Jobs)</div>
      </div>
    </a>
  </div>
</section>
<style lang="scss">
  .module_container {
    width: 100%;
    h3 {
      margin-top: 0;
    }
    .video_container {
      width: 100%;
      aspect-ratio: 16 / 9;
      background: url('$lib/production_meeting.webp');
      background-size: cover;
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
          text-align: center;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          padding: 0 12px;
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
      .module.to-dos .module_background {
        background: url('$lib/to-dos.webp');
        background-size: cover;
      }
      .module.hr .module_background {
        background: url('$lib/hr.webp');
        background-size: cover;
      }
      .module.core .module_background {
        background: url('$lib/core-jobs.webp');
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