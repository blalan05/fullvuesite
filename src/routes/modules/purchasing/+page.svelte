<script>
  import ThemeShot from '$lib/theme-shot.svelte';
</script>

<section class="module_container">
    <h1>Buy what the job needs—then receive it into stock</h1>
  <div class="col_container">
    <div class="shot-stack">
      <div class="video_container product-shot">
        <ThemeShot slug="purchasing-order" alt="FullVue purchase order with lines, totals, and vendor context" />
      </div>
      <div class="video_container product-shot">
        <ThemeShot slug="purchase-request" alt="FullVue purchase request queue for parts and materials" />
      </div>
      <div class="video_container product-shot">
        <ThemeShot slug="vendor" alt="FullVue vendor record with purchasing history" />
      </div>
    </div>
    <div class="module_summary">
      <p>Purchasing covers purchase requests, POs, receiving, vendor bills, and paylists so AP reflects what you actually ordered and received.</p>
      <ul>
        <li>Raise purchase requests and issue purchase orders</li>
        <li>Receive inventory against what was ordered</li>
        <li>Enter vendor bills and run paylists</li>
        <li>Keep vendors and parts tied to real purchasing history</li>
      </ul>
    </div>
  </div>
</section>
<section>
  <h4>Related Modules</h4>
  <div class="related">
    <a href="/modules/sds" title="Safety Data Sheets Module">
      <div class="module sds">
        <div class="module_background"></div>
        <div class="module_overlay">SDS</div>
      </div>
    </a>
    <a href="/modules/hr" title="Human Resources Module">
      <div class="module hr">
        <div class="module_background"></div>
        <div class="module_overlay">Human Resources</div>
      </div>
    </a>
    <a href="/modules/jobs" title="">
      <div class="module core">
        <div class="module_background"></div>
        <div class="module_overlay">Core (Jobs)</div>
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
    .shot-stack {
      display: flex;
      flex-direction: column;
      gap: var(--fv-space-3, 12px);
      width: 100%;
    }

    .video_container {
      width: 100%;
      aspect-ratio: 16 / 10;
      border-radius: var(--fv-radius-md, 10px);
      overflow: hidden;
      border: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));

      :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top left;
      }
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
      .module.sds .module_background {
        background: url('$lib/sds.webp');
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