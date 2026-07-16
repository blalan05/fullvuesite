<script lang="ts">
  import { writable } from "svelte/store";
  import { watch } from "$lib/watch";

  type SelectedModules = {
    coreMod: boolean;
    fieldMod: boolean;
    invoiceMod: boolean;
    salesMod: boolean;
    counterMod: boolean;
    purchasingMod: boolean;
    todosMod: boolean;
    sdsMod: boolean;
    hrMod: boolean;
    productMod: boolean;
    supportMod: boolean;
    huddleMod: boolean;
    attendanceMod: boolean;
    assetsMod: boolean;
    rentalsMod: boolean;
    tetherMod: boolean;
    plannerMod: boolean;
    accountingMod: boolean;
  };

  let employeeCount = writable(10);
  let selModules = writable<SelectedModules>({
    coreMod: true,
    fieldMod: false,
    invoiceMod: false,
    salesMod: false,
    counterMod: false,
    purchasingMod: false,
    todosMod: false,
    sdsMod: false,
    hrMod: false,
    productMod: false,
    supportMod: false,
    huddleMod: false,
    attendanceMod: false,
    assetsMod: false,
    rentalsMod: false,
    tetherMod: false,
    plannerMod: false,
    accountingMod: false,
  });
  let periodMod = writable(true);
  let totalEst = 0;
  let overCap = false;
  let moduleCost = [];
  let rateIncrease = [];

  watch([employeeCount, selModules, periodMod], (values) => {
    const [$count, $mods, $period] = values as [number, SelectedModules, boolean];
    moduleCost = [];
    rateIncrease = [];
    totalEst = 0;
    if ($mods.coreMod) {
      moduleCost.push(1500);
      rateIncrease.push(0.03);
    }
    if ($mods.fieldMod) {
      moduleCost.push(200);
      rateIncrease.push(0.05);
    }
    if ($mods.invoiceMod) {
      moduleCost.push(400);
      rateIncrease.push(0.05);
    }
    if ($mods.salesMod) {
      moduleCost.push(400);
      rateIncrease.push(0.05);
    }
    if ($mods.counterMod) {
      moduleCost.push(400);
      rateIncrease.push(0.05);
    }
    if ($mods.purchasingMod) {
      moduleCost.push(400);
      rateIncrease.push(0.05);
    }
    if ($mods.todosMod) {
      moduleCost.push(0);
      rateIncrease.push(0);
    }
    if ($mods.sdsMod) {
      moduleCost.push(50);
      rateIncrease.push(0.1);
    }
    if ($mods.hrMod) {
      moduleCost.push(200);
      rateIncrease.push(0.1);
    }
    if ($mods.productMod) {
      moduleCost.push(200);
      rateIncrease.push(0.04);
    }
    if ($mods.supportMod) {
      moduleCost.push(150);
      rateIncrease.push(0.05);
    }
    if ($mods.huddleMod) {
      moduleCost.push(150);
      rateIncrease.push(0.04);
    }
    if ($mods.attendanceMod) {
      moduleCost.push(200);
      rateIncrease.push(0.05);
    }
    if ($mods.assetsMod) {
      moduleCost.push(200);
      rateIncrease.push(0.05);
    }
    if ($mods.rentalsMod) {
      moduleCost.push(150);
      rateIncrease.push(0.04);
    }
    if ($mods.tetherMod) {
      moduleCost.push(150);
      rateIncrease.push(0.04);
    }
    if ($mods.plannerMod) {
      moduleCost.push(50);
      rateIncrease.push(0.04);
    }
    if ($mods.accountingMod) {
      moduleCost.push(400);
      rateIncrease.push(0.05);
    }
    overCap = $count > 50;
    if (overCap) return;

    // Pricing steps in five-employee brackets: 11-15 prices as 15, 16-20 as 20, etc.
    // Ten or fewer employees pay base module prices.
    const band = Math.max(10, Math.ceil($count / 5) * 5);
    if (band > 10) {
      for (let i = 0; i < moduleCost.length; i++) {
        let singleModule = moduleCost[i];
        singleModule += moduleCost[i] * rateIncrease[i] * (band - 10);
        totalEst += singleModule;
      }
    } else {
      for (let i = 0; i < moduleCost.length; i++) {
        totalEst += moduleCost[i];
      }
    }
    totalEst = !$period ? totalEst * 0.125 + totalEst : totalEst;
  });
</script>

<article class="pricing-page">
  <section class="pricing_header fv-card">
    <p class="eyebrow">Transparent estimates</p>
    <h1>Pricing built around modules you actually need</h1>
    <p class="lead fv-muted">
      Enterprise suites priced for Fortune budgets rarely fit operators running crews and counters together. FullVue stays
      modular—pick areas such as jobs, field service, invoicing, counter/POS, purchasing, assets, attendance, and HR—then scale employee tiers as you grow.
    </p>
    <p class="lead fv-muted">
      Totals combine <strong>selected modules</strong>, <strong>employee count</strong> (steps of five starting at ten seats),
      and <strong>annual vs monthly billing</strong>. Core is required because it anchors customers and jobs across the suite.
    </p>
  </section>

  <section class="bundles fv-card" aria-labelledby="bundles-heading">
    <h2 id="bundles-heading">Two popular configurations</h2>
    <p class="fv-muted bundles-note">
      Every price on this page is real — no demo required to see a number. Start anywhere: Core is
      $1,500/yr (about $125/mo) and every other module adds $50&ndash;$400/yr at the 10-employee base.
      <strong>Annual billing saves ~11% vs monthly.</strong>
    </p>
    <div class="bundle-grid">
      <div class="bundle">
        <h3>Field Service</h3>
        <p class="bundle-mods fv-muted">Core + Field + Sales + Invoicing + Purchasing</p>
        <p class="bundle-price"><strong>~$242/mo</strong> billed annually ($2,900/yr)</p>
        <p class="bundle-alt fv-muted">~$272/mo billed monthly</p>
      </div>
      <div class="bundle">
        <h3>Full Suite</h3>
        <p class="bundle-mods fv-muted">Every module, including Counter/POS, Attendance, Assets, Rentals, SDS, and Tether</p>
        <p class="bundle-price"><strong>~$433/mo</strong> billed annually ($5,200/yr)</p>
        <p class="bundle-alt fv-muted">~$488/mo billed monthly</p>
      </div>
    </div>
    <p class="fv-muted bundles-fineprint">
      Prices shown at the 10-employee bracket; larger teams step up in five-employee brackets using the
      per-module rates below.
    </p>
  </section>
  <section class="pricing_form fv-card">
    <div class="pricing-controls">
      <div class="inputWrapper">
        <label for="employeeCount">Employees</label>
        <input
          type="number"
          bind:value={$employeeCount}
          id="employeeCount"
          class="fv-field"
          min="1"
          step="5"
          inputmode="numeric"
          pattern="\d*"
        />
        <p class="field-hint fv-muted">
          Ten or fewer employees pay the base module prices. Above ten, pricing steps up in five-employee brackets (11&ndash;15 prices as 15, and so on). Over 50 employees? <a href="/contact">Contact us</a> for a quote.
        </p>
      </div>
      <div class="inputWrapper">
        <label for="period">Billing cadence</label>
        <select id="period" bind:value={$periodMod} class="fv-field pricing-select">
          <option value={true}>Annual</option>
          <option value={false}>Monthly</option>
        </select>
      </div>
    </div>
    <div class="pricingTotal" role="status" aria-live="polite">
      {#if overCap}
        <span class="pricingTotal-label"
          ><strong>Teams over 50: <a href="/contact">contact us</a> for a tailored quote.</strong></span
        >
      {:else}
        <span class="pricingTotal-label"
          ><strong>{!$periodMod ? 'Estimated monthly payment' : 'Estimated annual total'}: </strong></span
        >
        <span class="pricingTotal-amount">{Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(!$periodMod ? totalEst / 12 : totalEst)}</span>
        <span class="billing-note fv-muted">
          {!$periodMod ? 'Monthly billing runs 12.5% above the annual rate — switch to annual to save ~11%.' : 'Billed annually. Prefer monthly? Add 12.5%.'}
        </span>
      {/if}
    </div>
    <table class="pricingTable">
      <thead>
        <tr>
          <th class="pricing-table-head spacer"></th>
          <th class="pricing-table-head">Module</th>
          <th class="pricing-table-head">Base price</th>
          <th class="pricing-table-head">Description</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td class="checkbox-wrapper" style="padding-top: 12px">
          <input
            type="checkbox"
            id="coreMod"
            bind:checked={$selModules.coreMod}
            disabled
          />
          <label for="coreMod" class="check-box"> </label></td
        >
        <td class="nameCol" style="padding-top: 12px;">Core</td>
        <td class="priceCol">$1,500/yr</td>
        <td class="descCol" style="padding-top: 12px"
          >Customer and Job Management</td
        >
      </tr>
      <tr class="module-group">
        <td colspan="4">Field service, invoicing &amp; pipeline</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="fieldMod"
            bind:checked={$selModules.fieldMod}
          />
          <label for="fieldMod" class="check-box"> </label></td
        >
        <td class="nameCol">Field</td>
        <td class="priceCol">+$200/yr</td>
        <td class="descCol">Additional Field Service features</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="invoicingMod"
            bind:checked={$selModules.invoiceMod}
          />
          <label for="invoicingMod" class="check-box"> </label></td
        >
        <td class="nameCol">Invoicing</td>
        <td class="priceCol">+$400/yr</td>
        <td class="descCol">Generate invoices and track payments</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="salesMod"
            bind:checked={$selModules.salesMod}
          />
          <label for="salesMod" class="check-box"> </label></td
        >
        <td class="nameCol">Sales</td>
        <td class="priceCol">+$400/yr</td>
        <td class="descCol"
          >Track Sales Opportunities, and build and send quotes</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="counterMod"
            bind:checked={$selModules.counterMod}
          />
          <label for="counterMod" class="check-box"> </label></td
        >
        <td class="nameCol">Counter / POS</td>
        <td class="priceCol">+$400/yr</td>
        <td class="descCol"
          >Register selling, promotions, memberships, loyalty, and stored value</td
        >
      </tr>
      <tr class="module-group">
        <td colspan="4">Purchasing, coordination &amp; safety</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="purchasingMod"
            bind:checked={$selModules.purchasingMod}
          />
          <label for="purchasingMod" class="check-box"> </label></td
        >
        <td class="nameCol">Purchasing & Adv. Inventory</td>
        <td class="priceCol">+$400/yr</td>
        <td class="descCol">Generate purchase orders and track inventory</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="todoMod"
            bind:checked={$selModules.todosMod}
          />
          <label for="todoMod" class="check-box"> </label></td
        >
        <td class="nameCol">To-dos</td>
        <td class="priceCol">Free</td>
        <td class="descCol">Communicate and document non-job related tasks</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="sdsMod"
            bind:checked={$selModules.sdsMod}
          />
          <label for="sdsMod" class="check-box"> </label></td
        >
        <td class="nameCol">SDS</td>
        <td class="priceCol">+$50/yr</td>
        <td class="descCol"
          >Store and provide improved accessibility to Safety Data Sheets</td
        >
      </tr>
      <tr class="module-group">
        <td colspan="4">Workforce</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input type="checkbox" id="hrMod" bind:checked={$selModules.hrMod} />
          <label for="hrMod" class="check-box"> </label></td
        >
        <td class="nameCol">Human Resources</td>
        <td class="priceCol">+$200/yr</td>
        <td class="descCol"
          >Extends Core Tools to manage employees and their benefits, reviews
          and reports</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="attendanceMod"
            bind:checked={$selModules.attendanceMod}
          />
          <label for="attendanceMod" class="check-box"> </label></td
        >
        <td class="nameCol">Attendance</td>
        <td class="priceCol">+$200/yr</td>
        <td class="descCol"
          >Time punches, schedules, and payroll-period attendance reporting</td
        >
      </tr>
      <tr class="module-group">
        <td colspan="4">Products, assets &amp; rentals</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="productMod"
            bind:checked={$selModules.productMod}
          />
          <label for="productMod" class="check-box"> </label></td
        >
        <td class="nameCol">Products</td>
        <td class="priceCol">+$200/yr</td>
        <td class="descCol">Maintain detailed information about your products</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="supportMod"
            bind:checked={$selModules.supportMod}
          />
          <label for="supportMod" class="check-box"> </label></td
        >
        <td class="nameCol">Customer Support</td>
        <td class="priceCol">+$150/yr</td>
        <td class="descCol"
          >Extend the Product Module to include troubleshooting discussions, and
          link time/parts to be billed</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="huddleMod"
            bind:checked={$selModules.huddleMod}
          />
          <label for="huddleMod" class="check-box"> </label></td
        >
        <td class="nameCol">Production Meeting</td>
        <td class="priceCol">+$150/yr</td>
        <td class="descCol"
          >Improve communication before, during and after your regular meetings</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="assetsMod"
            bind:checked={$selModules.assetsMod}
          />
          <label for="assetsMod" class="check-box"> </label></td
        >
        <td class="nameCol">Assets</td>
        <td class="priceCol">+$200/yr</td>
        <td class="descCol"
          >Unified register for fleet, tools, devices, components, and software</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="rentalsMod"
            bind:checked={$selModules.rentalsMod}
          />
          <label for="rentalsMod" class="check-box"> </label></td
        >
        <td class="nameCol">Rentals</td>
        <td class="priceCol">+$150/yr</td>
        <td class="descCol"
          >Rental reservations, checkout, and returns tied to rentable assets</td
        >
      </tr>
      <tr class="module-group">
        <td colspan="4">Coordination</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="tetherMod"
            bind:checked={$selModules.tetherMod}
          />
          <label for="tetherMod" class="check-box"> </label></td
        >
        <td class="nameCol">Tether</td>
        <td class="priceCol">+$150/yr</td>
        <td class="descCol"
          >Team messaging, customer chat for staff, and voice notes—includes 20GB of data</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="plannerMod"
            bind:checked={$selModules.plannerMod}
          />
          <label for="plannerMod" class="check-box"> </label></td
        >
        <td class="nameCol">Planner</td>
        <td class="priceCol">+$50/yr</td>
        <td class="descCol"
          >Personal calendar layered on jobs, quotes, and todos</td
        >
      </tr>
      <tr class="module-group">
        <td colspan="4">Accounting &amp; integrations</td>
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="accountingMod"
            bind:checked={$selModules.accountingMod}
          />
          <label for="accountingMod" class="check-box"> </label></td
        >
        <td class="nameCol">Accounting</td>
        <td class="priceCol">+$400/yr</td>
        <td class="descCol"
          >QuickBooks Online connection—send invoices and bills to QBO from your operational data</td
        >
      </tr>
      </tbody>
    </table>
  </section>
  <section class="cta_bottom fv-card">
    <h2>Want numbers validated against your rollout?</h2>
    <p class="fv-muted">
      Tell us which modules matter first—we’ll tailor the workspace and confirm estimates before you commit.
    </p>
    <a href="/contact" title="Contact Us" class="fv-btn fv-btn--primary">Schedule a demo</a>
  </section>
</article>

<style lang="scss">
  .bundles {
      padding: var(--fv-space-5, 24px);

      h2 {
        margin: 0 0 var(--fv-space-2, 8px);
        font-size: 1.35rem;
      }

      .bundles-note {
        margin: 0 0 var(--fv-space-4, 16px);
        max-width: 68ch;
      }

      .bundle-grid {
        display: grid;
        gap: var(--fv-space-4, 16px);

        @media (min-width: 640px) {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      .bundle {
        border: 1px solid rgba(92, 142, 196, 0.35);
        border-radius: var(--fv-radius-lg, 14px);
        padding: var(--fv-space-4, 16px) var(--fv-space-5, 24px);

        h3 {
          margin: 0 0 var(--fv-space-2, 8px);
        }

        p {
          margin: 0 0 var(--fv-space-2, 8px);
        }

        .bundle-price {
          font-size: 1.15rem;
        }
      }

      .bundles-fineprint {
        margin: var(--fv-space-4, 16px) 0 0;
        font-size: 0.85rem;
      }
    }

  .pricing-page {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--fv-space-5, 24px);
  }

  .pricing_header {
    text-align: center;
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);

    h1 {
      margin: var(--fv-space-2, 8px) 0 var(--fv-space-3, 12px);
    }
  }

  .eyebrow {
    margin: 0;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fv-accent-hover, #5485b8);
    font-weight: 600;
  }

  .lead {
    margin: 0 auto var(--fv-space-3, 12px);
    max-width: 68ch;
  }

  .pricing_form {
    margin-top: 0;
    padding: var(--fv-space-5, 24px);
    border-radius: var(--fv-radius-lg, 14px);

    .pricing-select {
      max-width: 320px;
      cursor: pointer;
      min-height: 44px;
    }

    .pricing-controls {
      display: grid;
      gap: var(--fv-space-4, 16px);
      margin-bottom: var(--fv-space-3, 12px);
    }

    .inputWrapper {
      padding: 0;

      label {
        font-size: 1rem;
        display: block;
        margin-bottom: var(--fv-space-2, 8px);
        font-weight: 600;
        color: var(--fv-text, #f4f6f8);
      }

      .field-hint {
        margin: var(--fv-space-2, 8px) 0 0;
        font-size: 0.875rem;
        max-width: 52ch;
      }

      .fv-field {
        max-width: 320px;
        min-height: 44px;
      }
    }
    

    .billing-note {
      flex-basis: 100%;
      font-size: 0.9rem;
    }

    .priceCol {
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
      padding-right: var(--fv-space-3, 12px);
    }

    .pricingTotal {
      margin: var(--fv-space-4, 16px) 0;
      padding: var(--fv-space-4, 16px) var(--fv-space-5, 24px);
      border-radius: var(--fv-radius-lg, 14px);
      text-align: center;
      border: 1px solid rgba(92, 142, 196, 0.35);
      background: linear-gradient(
        155deg,
        rgba(92, 142, 196, 0.18),
        rgba(18, 20, 26, 0.55)
      );
      box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 12px 32px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: center;
      gap: 0.35rem 0.75rem;

      &-label strong {
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      &-amount {
        font-size: clamp(1.25rem, 2.8vw, 1.65rem);
        font-weight: 650;
        font-family: var(--fv-font-display, inherit);
        color: var(--fv-text, #f4f6f8);
        text-shadow: 0 2px 18px rgba(92, 142, 196, 0.35);
      }
    }
    .pricingTable {
      width: 100%;
      display: block;
      overflow-x: auto;
      table-layout: fixed;
      border-collapse: collapse;
      margin-top: var(--fv-space-3, 12px);
      padding-top: var(--fv-space-3, 12px);
      border-top: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));

      .pricing-table-head {
        padding: 0 0 var(--fv-space-3, 12px);
        font-size: 0.82rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fv-text-muted, #b0b8c4);
        font-weight: 600;
        border-bottom: 1px solid var(--fv-border-strong, rgba(255, 255, 255, 0.14));
      }

      tr {
        font-size: 1.05em;
        transition: background 0.15s ease;
      }

      tbody tr:not(.module-group):hover {
        background: rgba(65, 106, 152, 0.08);
      }

      tbody tr {
        border-bottom: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
      }

      tbody tr.module-group td {
        padding: var(--fv-space-3, 12px) 8px var(--fv-space-2, 8px);
        font-size: 0.78rem;
        font-weight: 650;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: var(--fv-accent-hover, #5c8ec4);
        background: rgba(255, 255, 255, 0.02);
      }

      th {
        text-align: left;
      }

      td {
        word-break: break-word;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .nameCol {
        font-size: 0.92em;
        font-weight: 700;
        padding: 0 8px;
      }

      .descCol {
        padding: 0 1em;
        color: var(--fv-text-muted, #b0b8c4);
        font-size: 0.88em;
        line-height: 1.45;
      }
    }
  }
  .checkbox-wrapper {
    box-sizing: border-box;
    --background-color: #fff;
    --checkbox-height: 25px;
  }

  @-moz-keyframes dothabottomcheck {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @-webkit-keyframes dothabottomcheck {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothabottomcheck {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothatopcheck {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-webkit-keyframes dothatopcheck {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-moz-keyframes dothatopcheck {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  .checkbox-wrapper input[type="checkbox"] {
    display: none;
  }

  .checkbox-wrapper .check-box {
    height: var(--checkbox-height);
    width: var(--checkbox-height);
    background-color: transparent;
    border: calc(var(--checkbox-height) * 0.1) solid #fff;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor: pointer;
  }
  .checkbox-wrapper .check-box::before,
  .checkbox-wrapper .check-box::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: calc(var(--checkbox-height) * 0.2);
    background-color: #34b93d;
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5;
    -moz-transition: opacity ease 0.5;
    transition: opacity ease 0.5;
  }
  .checkbox-wrapper .check-box::before {
    top: calc(var(--checkbox-height) * 0.72);
    left: calc(var(--checkbox-height) * 0.41);
    box-shadow: 0 0 0 calc(var(--checkbox-height) * 0.05)
      var(--background-color);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .checkbox-wrapper .check-box::after {
    top: calc(var(--checkbox-height) * 0.37);
    left: calc(var(--checkbox-height) * 0.05);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .checkbox-wrapper input[type="checkbox"]:checked + .check-box {
    border-color: #34b93d;
  }
  .checkbox-wrapper input[type="checkbox"]:checked + .check-box::after {
    height: calc(var(--checkbox-height) / 2);
    -moz-animation: dothabottomcheck 0.2s ease 0s forwards;
    -o-animation: dothabottomcheck 0.2s ease 0s forwards;
    -webkit-animation: dothabottomcheck 0.2s ease 0s forwards;
    animation: dothabottomcheck 0.2s ease 0s forwards;
  }
  .checkbox-wrapper input[type="checkbox"]:checked + .check-box::before {
    height: calc(var(--checkbox-height) * 1.2);
    -moz-animation: dothatopcheck 0.4s ease 0s forwards;
    -o-animation: dothatopcheck 0.4s ease 0s forwards;
    -webkit-animation: dothatopcheck 0.4s ease 0s forwards;
    animation: dothatopcheck 0.4s ease 0s forwards;
  }

  .cta_bottom {
    text-align: center;
    margin-bottom: var(--fv-space-5, 24px);
    padding: var(--fv-space-6, 32px) var(--fv-space-4, 16px);

    h2 {
      margin-bottom: var(--fv-space-2, 8px);
    }

    p {
      margin: 0 auto var(--fv-space-4, 16px);
      max-width: 54ch;
    }
  }

  @media screen and (min-width: 920px) {
    .pricing-page {
      max-width: 920px;
      margin: 0 auto;
    }

    .pricing_form .pricing-controls {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }
  }

  @media screen and (min-width: 1200px) {
    .pricing-page {
      max-width: 1120px;
    }
  }
</style>
