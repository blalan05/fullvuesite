<script>
  // @ts-ignore
  import Carousel from 'svelte-carousel'
  import { browser } from '$app/environment'
  /**
     * @type {{ goTo: (arg0: any) => void; }}
     */
  let carousel;
  let carousel2;
  
  const goToItem = (/** @type {{ detail: any; }} */ event) => { carousel.goTo(event.detail)}
</script>
<svelte:head>
  <title>Small Business Tools | FullVue</title>
  <meta name="description" content="Cloud software for small businesses offering tools for job tracking and management, sales, and invoicing/billing." />
  <meta name="keywords" content="Small Business, Cloud, Software, System, Program, App, Tools, ERP, CRM, Service, Billing, Invoicing, Management, Tracking, Sales" />
</svelte:head>

<article>
  <section class="header_container">
    <h1>FullVue</h1>
    <h2>Small Business Toolbox</h2>
    <a href="/pricing" title="Get Pricing Now" class="cta_pricing">Get Pricing Now</a>
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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S18ptA8cySc?si=4WbS5nHNeroPAlb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="ssone">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dBojug0hTr8?si=4WbS5nHNeroPAlb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="sstwo">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jeWbM4vBzkE?si=4WbS5nHNeroPAlb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="ssthree">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SYIZux4tCZU?si=m7nyVXzfQr239m0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Carousel>
      </div>
      <div class="thumbs">
        <Carousel bind:this={carousel2} dots={false} particlesToShow={3} on:pageChange={goToItem}>
          <div class="vid" on:click={carousel.goTo(0)}></div>
          <div class="ssone" on:click={carousel.goTo(1)}></div>
          <div class="sstwo" on:click={carousel.goTo(2)}></div>
          <div class="ssthree" on:click={carousel.goTo(3)}></div>
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
      <li><em>Drill</em></li>
      <li><em>Connect</em></li>
      <li><em>File</em> away</li>
      <li><em>Cut</em></li>
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
    <p>We can customized our software to your business lickety-split and show you how you can grow your small business</p>
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
      .vid, .ssone, .sstwo {
        font-size: 2em;
        aspect-ratio: 16/9;
        width: 90%;
      }
    }
  }
  .thumbs {
    margin-top: 8px;
    .vid, .ssone, .sstwo {
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
