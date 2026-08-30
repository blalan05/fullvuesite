<section class="module_container">
    <h1>From opportunity to signed quote without a side system</h1>
  <div class="col_container">
    <div class="video_container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SYIZux4tCZU?si=m7nyVXzfQr239m0s&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="module_summary">
      <p>Sales manages opportunities, quotes, and customer e-sign so proposals become jobs without retyping into another tool.</p>
      <ul>
        <li>Track opportunities and surveys through the pipeline</li>
        <li>Build quotes and quote plots your team can revise quickly</li>
        <li>Send customer-facing e-sign links—no customer login required</li>
        <li>Hand off into jobs and invoicing in the same product</li>
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
<section class="industry-fits">
  <p>
    Shops that lean on this module: <a href="/industries/machine-shop">machine & fab shops</a>, <a href="/industries/computer-repair">computer & tech repair</a> — or browse
    <a href="/industries">all industries</a>.
  </p>
</section>

<style lang="scss">
  .module_container {
    width: 100%;
    h1 {
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
        // background: url('$lib/products.webp');
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