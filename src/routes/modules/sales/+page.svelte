<section class="module_container">
  <h1>FullVue</h1>
  <h3>Sales</h3>
  <div class="col_container">
    <div class="video_container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SYIZux4tCZU?si=m7nyVXzfQr239m0s&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="module_summary">
      <ul>
        <li>Improve your sales record-keeping and team communication with Opportunities and Details</li>
        <li>Tools for thorough quote building and price generation</li>
        <li>Convert signed quotes to jobs, and compare estimated vs. actual to improve future quotes</li>
      </ul>
    </div>
  </div>
</section>
<section>
  <h4>Related Modules</h4>
  <div class="related">
    <a href="/modules/products" title="Products Module">
      <div class="module products">
        <div class="module_background"></div>
        <div class="module_overlay">Products</div>
      </div>
    </a>
    <a href="/modules/invoicing" title="Invoicing">
      <div class="module invoicing">
        <div class="module_background"></div>
        <div class="module_overlay">Invoicing</div>
      </div>
    </a>
    <a href="/modules/production-meeting" title="Production Meeting">
      <div class="module production-meeting">
        <div class="module_background"></div>
        <div class="module_overlay">Production Meeting</div>
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
      .module.products .module_background {
        background: url('$lib/products.webp');
        background-size: cover;
      }
      .module.invoicing .module_background {
        background: url('$lib/invoicing.webp');
        background-size: cover;
      }
      .module.production-meeting .module_background {
        background: url('$lib/production_meeting.webp');
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