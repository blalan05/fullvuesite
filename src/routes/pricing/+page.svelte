<script lang="ts">
  import { writable } from "svelte/store";
  import { watch } from "$lib/watch";

  let employeeCount = writable(10);
  let selModules = writable({
    coreMod: true,
    fieldMod: false,
    invoiceMod: false,
    salesMod: false,
    purchasingMod: false,
    todosMod: false,
    sdsMod: false,
    hrMod: false,
    productMod: false,
    supportMod: false,
    huddleMod: false,
    payrollMod: false,
  });
  let periodMod = writable(true);
  let totalEst = 0;
  let moduleCost = [];
  let rateIncrease = [];

  watch([employeeCount, selModules, periodMod], ([$count, $mods, $period]) => {
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
    if ($mods.payrollMod) {
      moduleCost.push(400);
      rateIncrease.push(0.05);
    }
    if ($count > 10) {
      for (let i = 0; i < moduleCost.length; i++) {
        let singleModule = moduleCost[i];
        singleModule += moduleCost[i] * rateIncrease[i] * ($count - 10);
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

<article>
  <section class="pricing_header">
    <h2>Pricing</h2>
    <h3>A Small Business Tool, should be priced for small business</h3>
    <p>
      We understand that the majority of small business can't afford the medium
      and large business tools priced in the 5 or 6 figure range.
    </p>
    <p>
      Our pricing is based on the modules you choose, employee count, and
      subscription length.
    </p>
  </section>
  <section class="pricing_form">
    <div class="inputWrapper">
      <label for="employeeCount">Number of Employees:</label>
      <input
        type="number"
        bind:value={$employeeCount}
        id="employeeCount"
        max="50"
        min="10"
        step="5"
        inputmode="numeric"
        pattern="\d*"
      />
    </div>
    <div class="inputWrapper">
      <label for="period">Subscription Term:</label>
      <select id="period" bind:value={$periodMod}>
        <option value={true}>Annual</option>
        <option value={false}>Monthly</option>
      </select>
    </div>
    <p class="pricingTotal">
      <strong>Total: </strong>{Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
      }).format(!$periodMod ? totalEst / 12 : totalEst)}
    </p>
    <hr />
    <table class="pricingTable">
      <tr>
        <th style="border-bottom: 1px solid black">Sel.</th>
        <th style="border-bottom: 1px solid black">Module</th>
        <th style="border-bottom: 1px solid black">Desc.</th>
      </tr>
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
        <td class="nameCol" style="text-align: center; padding-top: 12px;"
          >Core</td
        >
        <td class="descCol" style="padding-top: 12px"
          >Customers and Job Management</td
        >
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
        <td class="nameCol" style="text-align: center">Field</td>
        <td class="descCol"
          >Additional features supporting business with field services.</td
        >
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
        <td class="nameCol" style="text-align: center">Invoicing</td>
        <td class="descCol"
          >Module to assist generating invoices and tracking payments.</td
        >
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
        <td class="nameCol" style="text-align: center">Sales</td>
        <td class="descCol"
          >Tracking Sales Opportunities and tools to generate/build and send
          quotes.</td
        >
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
        <td class="nameCol" style="text-align: center"
          >Purchasing/Adv. Inventory</td
        >
        <td class="descCol"
          >Module for generating purchase orders and tracking inventory counts.</td
        >
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
        <td class="nameCol" style="text-align: center">To-dos</td>
        <td class="descCol"
          >Improved method for communicating/documenting non-job related tasks
          with employees.</td
        >
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
        <td class="nameCol" style="text-align: center">SDS</td>
        <td class="descCol"
          >Module for storing and improving accessibility and keeping up-to-date
          companies needed SDS.</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input type="checkbox" id="hrMod" bind:checked={$selModules.hrMod} />
          <label for="hrMod" class="check-box"> </label></td
        >
        <td class="nameCol" style="text-align: center">Human Resources</td>
        <td class="descCol"
          >Module extends the core tools for managing employees and their
          benefits, reviews and reports.</td
        >
      </tr>
      <tr>
        <td class="checkbox-wrapper">
          <input
            type="checkbox"
            id="payrollMod"
            bind:checked={$selModules.payrollMod}
          />
          <label for="payrollMod" class="check-box"> </label></td
        >
        <td class="nameCol" style="text-align: center">Payroll</td>
        <td class="descCol"
          >Track employee's Absence requests and hours, and generate reports for
          submitting to Payroll Provider</td
        >
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
        <td class="nameCol" style="text-align: center">Products</td>
        <td class="descCol"
          >Record detailed infomation about your products, for look-ups before
          and during repairs.</td
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
        <td class="nameCol" style="text-align: center">Customer Support</td>
        <td class="descCol"
          >Extend the Product Module to include troubleshooting discussions, and
          tracking time/parts to be billed.</td
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
        <td class="nameCol" style="text-align: center">Production Meeting</td>
        <td class="descCol"
          >Improve communication before, during and after your regular meetings.</td
        >
      </tr>
    </table>
  </section>
  <section class="cta_bottom">
    <h3>Setup a customized demo today!</h3>
    <p>
      We can customized our software to your business lickety-split and show you
      how you can grow your small business
    </p>
    <a href="/contact" title="Contact Us" class="cta_contact">Schedule Today</a>
  </section>
</article>

<style lang="scss">
  article {
    width: 100%;
    padding: 0 12px;
  }
  .pricing_form {
    .inputWrapper {
      padding: 12px 0;
      label {
        font-size: 1.25em;
        display: inline-block;
        min-width: 90px;
        font-weight: bold;
      }
      input,
      select {
        min-width: 260px;
        border-radius: 5px;
        background: rgb(249, 250, 250);
        border: 1px solid rgb(181, 189, 196);
        font-size: 16px;
        height: 40px;
        line-height: 24px;
        padding: 7px 8px;
        color: rgb(8, 9, 10);
        box-shadow: none;
        :focus {
          background-color: #fff;
          border-color: #3b49df;
          box-shadow: 1px 1px 0 #3b49df;
        }
      }
    }
    .pricingTotal {
      font-size: 1.25em;
      padding-bottom: 12px;
      text-align: center;
    }
    .pricingTable {
      table-layout: fixed;
      tr {
        font-size: 1.2em;
        min-height: 1.5em;
        td {
          word-break: break-word;
        }
      }
      .nameCol {
        font-weight: bold;
        padding: 0 8px;
      }
      .descCol {
        padding: 0 1em;
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
    border: calc(var(--checkbox-height) * 0.1) solid #000;
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
  @media screen and (min-width: 920px) {
    article {
      max-width: 920px;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1200px) {
    article {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>
