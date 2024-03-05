<script>
  // @ts-ignore
  import Carousel from 'svelte-carousel'
  import { browser } from '$app/environment'

  import logo from '$lib/logo.png';
  /**
     * @type {{ goTo: (arg0: any) => void; }}
     */
  let carousel;
  let carousel2;
  
  const goToItem = (/** @type {{ detail: any; }} */ event) => { carousel.goTo(event.detail)}
</script>

<article>
  <section class="header_container">
    <img src={ logo } alt="FullVue Logo" />
    <a href="/pricing" title="Get Pricing Now" class="cta_pricing">Get Pricing Now</a>
    <h1 style="font-size: 0.1em">FullVue</h1>
    <h2 style="font-size: 0.1em">Small Business Toolbox</h2>
    <div class="pc_demo_container"></div>
    <div class="mobile_demo_container"></div>
  </section>
  <section class="tagline_container">
    <p class="tagline">Tools built to help you maximize your profits and improve efficiency</p>
  </section>
  <section class="keywords_container">
    <p>In our toolbox, you will find tools for time and materials tracking, sales visibility, streamlined invoicing, up-to-date inventory counts, essential employee administration and more!</p>
  </section>
  <section class="demo_gallery">
    <h3>Take a look at what is in the toolbox</h3>
    {#if browser}
      <div class="viewer">
        <Carousel bind:this={carousel} dots={false} arrows={false} swiping={false}>
          <div class="vid">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S18ptA8cySc?si=4WbS5nHNeroPAlb1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="ssone">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dBojug0hTr8?si=4WbS5nHNeroPAlb1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="sstwo">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jeWbM4vBzkE?si=4WbS5nHNeroPAlb1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="ssthree">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SYIZux4tCZU?si=m7nyVXzfQr239m0s&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="ssfour">
          </div>
          <div class="ssfive">
          </div>
          <div class="sssix">
          </div>
          <div class="ssseven">
          </div>
          <div class="sseight">
          </div>
          <div class="ssnine">
          </div>
          <div class="ssten">
          </div>
        </Carousel>
      </div>
      <div class="thumbs">
        <Carousel bind:this={carousel2} dots={false} particlesToShow={3} on:pageChange={goToItem}>
          <div class="vid" on:click={carousel.goTo(0)}></div>
          <div class="ssone" on:click={carousel.goTo(1)}></div>
          <div class="sstwo" on:click={carousel.goTo(2)}></div>
          <div class="ssthree" on:click={carousel.goTo(3)}></div>
          <div class="ssfour" on:click={carousel.goTo(4)}></div>
          <div class="ssfive" on:click={carousel.goTo(5)}></div>
          <div class="sssix" on:click={carousel.goTo(6)}></div>
          <div class="ssseven" on:click={carousel.goTo(7)}></div>
          <div class="sseight" on:click={carousel.goTo(8)}></div>
          <div class="ssnine" on:click={carousel.goTo(9)}></div>
          <div class="ssten" on:click={carousel.goTo(10)}></div>
        </Carousel>
      </div>
    {/if}
  </section>
  <section class="puns_container">
    <h3>Beware scrolling further</h3>
    <h4>Bad Puns below!</h4>
    <ul>
      <li><em>Hit</em> your cash flow goals</li>
      <li><em>Measure</em> employee's effiency</li>
      <li><em>Turn</em> completed jobs into invoices <em>faster</em></li>
      <li><em>Tighten</em> down on wasted time</li>
      <li><em>Drill</em> into what makes you money</li>
      <li><em>Connect</em> employee's hours to invoice lines</li>
      <li><em>File</em> down on inefficient meetings</li>
      <li><em>Cut</em> large projects in to managable tasks</li>
      <li><em>Trim</em></li>
      <li><em>Bore</em></li>
      <li><em>Reduce leaks</em></li>
      <li><em>Tape</em></li>
      <li><em>Fix</em></li>
      <li><em>Hammer</em></li>
      <li><em>Prune</em></li>
      <li><em>Chop</em></li>
    </ul>
  </section>
  <section class="cta_bottom">
    <h3>Setup a customized demo today!</h3>
    <p>We can customize our software to your business lickety-split and show you how you can grow your small business</p>
    <a href="/contact" title="Contact Us" class="cta_contact">Schedule Today</a>
  </section>
</article>

<style lang="scss">
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  
  .header_container {
    position: relative;
    min-height: 480px;
    text-align: center;
    h2 {
      margin-top: 8px;
    }
    img {
      margin: 1em auto;
      width: 60%;
      max-width: 360px;
    }
    .cta_pricing {
      display: inline-block;
      font-size: 1.2em;
      margin-top: 0.5em;
      padding: 6px 14px;
      background-color: #416a98;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    .pc_demo_container {
      position: absolute;
      bottom: 0;
      width: 90%;
      margin: auto;
      aspect-ratio: 16/9;
      background: url('$lib/laptop_core_cost_sheet.webp');
      background-size: cover;
    }
    .mobile_demo_container {
      position: absolute;
      right: 5%;
      bottom: -10%;
      width: 40%;
      max-width: 360px;
      aspect-ratio: 259/540;
      background: url('$lib/mobile_core_cost_sheet.webp');
      background-size: cover;
    }
  }
  .tagline_container {
    background: #416a98;
    padding: 3.5em 8px;
    .tagline {
      color: white;
      margin-top: 0;
      font-size: 1.4em;
      text-align: center;
    }
  }

  .keywords_container {
    padding: 8px 16px;
  }

  .demo_gallery {
    h3 {
      text-align: center;
      margin-bottom: 12px;
      padding: 0 16px;
    }
    .viewer {
      aspect-ratio: 16/9;
      max-height: 90vh;
      margin: auto;
      .vid, .ssone, .sstwo, .ssthree, .ssfour, .ssfive, .sssix, .ssseven, .sseight, .ssnine, .ssten {
        font-size: 2em;
        aspect-ratio: 16/9;
        width: 90%;
      }
      .ssfour {
      background: url('$lib/purchasing.webp');
      background-size: cover;
    }
    .ssfive {
      background: url('$lib/invoicing.webp');
      background-size: cover;
    }
    .sssix {
      background: url('$lib/hr.webp');
      background-size: cover;
    }
    .ssseven {
      background: url('$lib/payroll.webp');
      background-size: cover;
    }
    .sseight {
      background: url('$lib/sds.webp');
      background-size: cover;
    }
    .ssnine {
      background: url('$lib/to-dos.webp');
      background-size: cover;
    }
    .ssten {
      background: url('$lib/production_meeting.webp');
      background-size: cover;
    }
    }
  }
  .thumbs {
    margin-top: 8px;
    .vid, .ssone, .sstwo, .ssthree, .ssfour, .ssfive, .sssix, .ssseven, .sseight, .ssnine, .ssten  {
      font-size: 1.6em;
      width: 90%;
      aspect-ratio: 16/9;
      margin: 3px 4px;
    }
    .vid {
      background: url('$lib/core-jobs.webp');
      background-size: cover;
    }
    .ssone {
      background: url('$lib/core-customers.webp');
      background-size: cover;
    }
    .sstwo {
      background: url('$lib/field.webp');
      background-size: cover;
    }
    .ssthree {
      background: url('$lib/sales.webp');
      background-size: cover;
    }
    .ssfour {
      background: url('$lib/purchasing.webp');
      background-size: cover;
    }
    .ssfive {
      background: url('$lib/invoicing.webp');
      background-size: cover;
    }
    .sssix {
      background: url('$lib/hr.webp');
      background-size: cover;
    }
    .ssseven {
      background: url('$lib/payroll.webp');
      background-size: cover;
    }
    .sseight {
      background: url('$lib/sds.webp');
      background-size: cover;
    }
    .ssnine {
      background: url('$lib/to-dos.webp');
      background-size: cover;
    }
    .ssten {
      background: url('$lib/production_meeting.webp');
      background-size: cover;
    }

  }
  .puns_container {
    padding: 2em 16px;
    h3 {
      margin-bottom: 6px;
      text-align: center;
      color: orange;
    }
    h4 {
      font-size: 1.4em;
      margin-top: 6px;
      text-align: center;
      color: orange;
    }
  }
  .cta_bottom {
    text-align: center;
    margin-bottom: 2em;
    h3 {
      text-align: center;
      padding: 0 16px;
    }
    p {
      padding: 0 16px;
    }
    a {
      display: inline-block;
      font-size: 1.2em;
      margin-top: 0.5em;
      padding: 6px 14px;
      background-color: #416a98;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
  }
  @media screen and (min-width: 420px) {
    .header_container {
      min-height: 540px;
      max-width: 480px;
      margin: auto;
      .pc_demo_container {
        max-width: 640px;
      }
      .mobile_demo_container {
        max-width: 240px;
        right: 5%;
      }
    }
    .tagline_container {
      padding: 5.5em 8px;
    }
  }
  
  @media screen and (min-width: 600px) {
    .header_container {
      min-height: 648px;
      max-width: 1024px;
      img {
        width: 50%;
        max-width: 320px;
      }
      .pc_demo_container {
        left: 5%;
      }
    }
    .keywords_container {
      max-width: 640px;
      margin: auto;
    }
  }
</style>
