<script lang="ts">
  import { writable } from 'svelte/store';
  import { watch } from '$lib/watch'

  let employeeCount = writable(10)
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
    payrollMod: false
  })
  let periodMod = writable(true)
  let totalEst = 0
  let employeeMod = 0

  watch([employeeCount, selModules, periodMod], ([$count, $mods, $period]) => {
    totalEst = 0
    employeeMod = 0
    if ($mods.coreMod) {
      totalEst += 1500
      employeeMod += 0.2
    }
    if ($mods.fieldMod) {
      totalEst += 200
      employeeMod += 0.1
    }
    if ($mods.invoiceMod) {
      totalEst += 400
      employeeMod += 0.2
    }
    if ($mods.salesMod) {
      totalEst += 400
      employeeMod += 0.2
    }
    if ($mods.purchasingMod) {
      totalEst += 400
      employeeMod += 0.2
    }
    if ($mods.todosMod) {
      totalEst += 0
      employeeMod += 0
    }
    if ($mods.sdsMod) {
      totalEst += 50
      employeeMod += 0.05
    }
    if ($mods.hrMod) {
      totalEst += 200
      employeeMod += 0.1
    }
    if ($mods.productMod) {
      totalEst += 200
      employeeMod += 0.1
    }
    if ($mods.supportMod) {
      totalEst += 150
      employeeMod += 0.05
    }
    if ($mods.huddleMod) {
      totalEst += 150
      employeeMod += 0.05
    }
    if ($mods.payrollMod) {
      totalEst += 400
      employeeMod += 0.1
    }
    totalEst += $count > 10 ? (60 * employeeMod * $count) : 0
    totalEst += !$period ? totalEst * 0.15 : 0
  })


</script>

<article>
  <section class="pricing_header">
    <h2>Pricing</h2>
    <h3>A Small Business Tool, should be priced for small business</h3>
    <p>We understand that the majority of small business can't afford the medium and large business tools priced in the 5 or 6 figure range.</p>
    <p>Our pricing is based on the modules you choose, employee count, and subscription length.</p>
  </section>
  <section class="pricing_form">
    <label for="employeeCount">Number of Employees:</label>
    <input type="number" bind:value={$employeeCount} id="employeeCount" max="50" min="10" step="5" inputmode="numeric" pattern="\d*" />
    <br />
    <label for="period">Subscription Term:</label>
    <select id="period" bind:value={$periodMod}>
      <option value={true}>Annual</option>
      <option value={false}>Monthly</option>
    </select>
    <p>{ Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(!$periodMod ? (totalEst / 12) : totalEst) }</p>
    <table>
      <tr>
        <th>Sel.</th>
        <th>Module</th>
        <th>Desc.</th>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.coreMod} disabled />
        </td>
        <td style="text-align: center">Core</td>
        <td>Customers and Job Management</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.fieldMod} />
        </td>
        <td style="text-align: center">Field</td>
        <td>Additional features supporting business with field services.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.invoiceMod} />
        </td>
        <td style="text-align: center">Invoicing</td>
        <td>Module to assist generating invoices and tracking payments.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.salesMod} />
        </td>
        <td style="text-align: center">Sales</td>
        <td>Tracking Sales Opportunities and tools to generate/build and send quotes.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.purchasingMod} />
        </td>
        <td style="text-align: center">Purchasing/Adv. Inventory</td>
        <td>Module for generating purchase orders and tracking inventory counts.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.todosMod} />
        </td>
        <td style="text-align: center">To-dos</td>
        <td>Improved method for communicating/documenting non-job related tasks with employees.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.sdsMod} />
        </td>
        <td style="text-align: center">SDS</td>
        <td>Module for storing and improving accessibility and keeping up-to-date companies needed SDS.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.hrMod} />
        </td>
        <td style="text-align: center">Human Resources</td>
        <td>Module extends the core tools for managing employees and their benefits, reviews and reports.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.payrollMod} />
        </td>
        <td style="text-align: center">Payroll</td>
        <td>Track employee's Absence requests and hours, and generate reports for submitting to Payroll Provider</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.productMod} />
        </td>
        <td style="text-align: center">Products</td>
        <td>Record detailed infomation about your products, for look-ups before and during repairs.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.supportMod} />
        </td>
        <td style="text-align: center">Customer Support</td>
        <td>Extend the Product Module to include troubleshooting discussions, and tracking time/parts to be billed.</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" bind:checked={$selModules.huddleMod} />
        </td>
        <td style="text-align: center">Production Meeting</td>
        <td>Improve communication before, during and after your regular meetings.</td>
      </tr>
    </table>
  </section>
  <section class="cta_bottom">
    <h3>Setup a customized demo today!</h3>
    <p>We can customized our software to your business lickety-split and show you how you can grow your small business</p>
    <a href="/contact" title="Contact Us" class="cta_contact">Schedule Today</a>
  </section>
</article>
<style lang="scss">
  article {
    width: 100%;
    padding: 12px;
  }
  .pricing_header {
    padding: 0 16px;
  }
  .pricing_form {
    padding: 16px;
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