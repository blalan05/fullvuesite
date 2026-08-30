# Fullvue feature site — agent brief (marketing copy)

**How to use this file:** Copy into your [fullvue.io](https://fullvue.io) codebase as `AGENTS.md` (repo root), or split into a Cursor rule under `.cursor/rules/` with frontmatter `alwaysApply: false` and globs like `**/*.{md,mdx,vue,tsx,jsx}` so it loads when editing marketing pages.

This document grounds copy in the **Fullvue ERP application** (this monorepo). Treat it as the source of truth for **what the product actually includes**. Do not promise capabilities that are not described here unless you confirm them in the ERP codebase or with the product owner.

**Important framing:** Fullvue is **modular**. Deployments enable modules via `FULL_VUE_MODULES` / `VITE_FULL_VUE_MODULES` (plus demo overrides). Prefer “available when enabled” or “modules that match your business” over “every customer gets everything.”

---

## Your role

You help improve **marketing and feature-site copy**: headlines, module pages, comparison language, CTAs, meta descriptions, and short blurbs. Prioritize outcomes **business owners and operations leaders** care about: revenue, margin, labor accuracy, scheduling chaos, inventory/purchasing leakage, cash collection, compliance touches, and replacing disconnected tools.

---

## Audience and positioning

**Primary readers:** Owners and GMs of small and mid-sized operating businesses—especially those who run **jobs or projects**, **field crews**, **counter/retail-style selling**, and **back-office** in parallel (trades, services, distribution-light retail, mixed operations).

**Core promise (fact-aligned):** Fullvue is a **unified operational system** spanning sales through cash—jobs, field, purchasing, invoicing, payments, and modular add-ons—with two **flagship bridges** customers care about: **QuickBooks Online** (one-way push of invoices, bills, and payments so accountants close books in QBO) and **Ask FullVue** (permission-aware AI that answers questions about your business data without silently rewriting records).

**Flagship features (highlight on homepage and nav—not buried under “integrations”):**

1. **QuickBooks Online link** — Owners run operations in Fullvue; accountants get AR/AP cash documents in QBO without retyping. Honest framing only: **one-way push**, not two-way sync, not a QBO replacement.
2. **Ask FullVue (AI)** — Natural-language answers over live operational data, plus assist-tier polish/table explain. Honest framing only: **read/assist**, metered credits, **no write mode**.

**Pain-led angles (use where accurate):**

- **Fragmentation:** Replacing spreadsheets + separate CRM + field tools + inventory + payroll spreadsheets + chat apps + mailbox hopping.
- **Job profitability:** Jobs with field/road work, schedules, time/materials, closeout, invoicing tied to work done.
- **Books without double entry:** Operations in Fullvue; one-way QuickBooks Online push for the accountant (**lead with this** on accounting/close stories).
- **Answers without hunting:** Ask FullVue instead of digging through reports and tabs (**lead with this** on productivity/AI stories).
- **Counter + back office:** Retail-like promotions, memberships, punch cards, loyalty, stored value alongside traditional job/sales flows.
- **Cash collection:** Invoice pay links and portal payments via FoundTech Payments (Merchant360)—not a separate processor the customer has to invent.
- **Governance:** Role-based permissions across modules; diary/audit-style tracking in core patterns.
- **Compliance adjacency:** SDS module for hazmat documentation; SMS consent/opt-in for texting—use for the right verticals only.
- **Coordination:** Tether messaging, Planner calendar, connected employee email, and job SMS reduce “where did we agree that?” friction.

---

## Voice and quality bar

- **Clear over clever.** Owners skim; say what the module *does* for their day.
- **Specific beats generic.** Prefer “schedule field work and invoice from the same job record” over “streamline workflows.”
- **Outcome-first headlines.** Lead with money, time, risk, or clarity; feature names second.
- **No filler superlatives** (“world-class,” “revolutionary”) unless backed by a concrete claim.
- **Consistent naming:** Use **Fullvue** as the product name; match module names below when referring to product areas.

**Naming notes (important):**

- Legacy marketing or env configs may still say **Equipment** or **IT Database (ITDB)**. In the current product these are unified under **Assets** (`assets`). Do not list Equipment and ITDB as separate product modules.
- The field / road-sheet area uses module slug **`field`** with display title **Field** (not a separate `road` module slug). In-app you may still see “road sheet” language for daily field records—fine in copy when explaining field ops.

---

## Module and capability catalog (ERP-derived)

Canonical deployment module slugs and display titles live in **`client/src/shared/fullVueModules.ts`**. Use these names on the marketing site. Expand with owner-friendly examples; do not contradict scope.

| Module slug | User-facing name | What it covers (from product structure) |
|-------------|------------------|----------------------------------------|
| **core** | Core | Base platform: company settings, locations, users/permissions, customers & vendors, **jobs** (tasks, materials, mileage, extras, contractors, packages, audit states), inventory/parts, diary, PDF templates, announcements, global search, notifications, onboarding, data export |
| **field** | Field | Daily field records (“road sheets”), field scheduling, job mileage, on-site **closeout** (photos + customer signature when configured) |
| **sales** | Sales | Opportunities/surveys, quotes and quote plots, **customer-facing quote e-sign** (public, no login), quick estimates; ties into counter/POS when Counter is enabled |
| **counter** | Counter | POS register, promotions, memberships, punch cards, promo codes, POS fees, stored value, loyalty |
| **purchasing** | Purchasing | Purchase orders, purchase requests, vendor bills, paylists, receiving into inventory |
| **invoicing** | Invoicing | Invoice lifecycle, payment recording, public **pay-by-link** for customers |
| **accounting** | Accounting | In-app GL: chart of accounts, journals, AR/AP, bank accounts/reconciliation, **file-based** bank import (CSV/OFX/QFX—not live bank feeds), budgets, fixed assets, financial reports; optional QBO bridge (see Integrations) |
| **support** | Customer Support | Support tickets with customer/product/job context |
| **products** | Products | Serialized / configurable product catalog (types, fields, groups) |
| **assets** | **Assets** | Unified asset register: shop/fleet **equipment**, **devices**, **components**, **software**, assignments, costs, attachments, optional **fleet inspections**—replaces former separate Equipment and ITDB modules |
| **rentals** | Rentals | Equipment rental reservations, calendar, checkout/returns; public claim/signup flows |
| **sds** | SDS | Safety Data Sheets library and lookup |
| **todos** | To-Dos | Company task lists (statuses, notes, attachments) |
| **huddle** | Production Meetings | Huddle / production meeting workflows |
| **tether** | Tether | Team messaging channels (DMs, groups, customer chat for staff, personal notes-to-self; voice notes with optional transcription where enabled) |
| **planner** | Planner | Personal time-blocking calendar with reminders; layers jobs, quotes, todos, absences, etc. |
| **attendance** | Attendance | Time punches (including nav In/Out), schedules, absences, payroll-period attendance/reporting, shift compliance (UI often labeled under payroll workflows) |
| **hr** | Human Resources | Benefits, employee HR data, reviews, HR reports |
| **email** | Email | **Connected employee mailboxes** (Google, Microsoft, IMAP)—inbox/compose in-app. Distinct from Core **transactional** document email (Resend templates / outbound log) |
| **sms** | SMS | Plivo texting: job texts, customer consent/opt-in, review invites; optional **AI receptionist** for unmatched inbound leads |

**References nav cluster (not separate modules):** Customers, vendors, inventory/parts, products, SDS, assets, rentals—grouped in-app under **References** for lookup workflows.

**Admin / operations cluster:** Settings, employees, assets (also reachable here), production meetings, reports, to-dos, tether archive (admin).

**Payroll / time (often with attendance + HR):** Time punches, shifts, absences, payroll reports/items/accruals—widgets can compare punch time vs job time.

### Company / cross-module capabilities (not a single module slug)

| Capability | What to say (fact-aligned) |
|------------|----------------------------|
| **Customer portal** | Invited contacts get a branded portal for jobs, quotes, invoices, documents, service requests, and related self-service (`/portal`). |
| **Vendor portal** | Subcontractors/vendors can access assigned job visibility (`/vendor-portal`). |
| **Online booking** | Public self-service booking (`/book`) when configured. |
| **FoundTech Payments (Merchant360)** | Tenants can accept **card payments from their customers** on invoice pay links, portal, and related flows after merchant onboarding—separate from Fullvue subscription billing. |
| **Fullvue subscription / AI credits** | FoundTech bills the tenant for the product (modules, seats) and metered **AI credits**; trial/past-due can put the workspace in read-only lock. |
| **QuickBooks Online** | OAuth connect + account mappings; **one-way push** of invoices, credit memos, bills, customer payments, and bill payments. Jobs, POs, and inventory stay in Fullvue. Nothing is pulled back from QBO. |
| **QuickBooks Desktop** | Separate **IIF export** path for Desktop import—do not conflate with live QBO push. |
| **Ask FullVue (AI)** | Permission-aware **read** assistant over business data (citations/tools); Assist-tier polish and table explain. **No AI write mode** ships today. Metered via AI credits. |
| **Transactional email** | Document senders and templates via Resend (Core/Communications)—not the same as the **Email** module’s personal mailboxes. |
| **Offline field sync** | Field-oriented offline queue (e.g. punches, road sheets, job time/materials, closeout) with sync status in the shell. |
| **Global search** | Ctrl+K-style search across jobs, partners, documents, etc. |
| **Support contact** | In-app **Support** opens mail to `support@fullvue.io` with a prefilled subject/body. |

---

## Differentiators to highlight (honest framing)

**Lead with these two on the homepage hero strip / feature band:**

1. **QuickBooks Online without living in QuickBooks:** Connect QBO and push invoices, credit memos, bills, and payments one-way so the accountant closes books there while owners stay in Fullvue. Do **not** claim two-way sync, Desktop live sync, or “replaces QuickBooks.”
2. **Ask FullVue — AI that knows your shop:** Permission-aware answers over jobs, sales, and reports; assist-tier polish and table explain. Do **not** claim it edits invoices, posts journals, or “runs the business for you.”

**Then reinforce the platform:**

3. **Breadth without splitting vendors:** Sales → job → field schedule/closeout → invoice → purchasing/inventory, plus counter/POS, portals, SMS/email, and optional GL—unusual vs pure PSA or pure retail POS.
4. **Built for operators who live in jobs:** Road sheets, schedules, audit states, closeout, and widgets around overdue/audit-ready work support **execution visibility**, not just quoting.
5. **Workforce and job alignment:** Attendance/payroll features and widgets that relate **punches to job time** support labor honesty narratives (verify exact UI strings against product).
6. **Accounting choice:** Run books in Fullvue Accounting **and/or** use the QBO bridge above—same story, two depths.
7. **Cash in the same system:** FoundTech Payments for customer cards; FoundTech subscription billing for the product.
8. **Physical operations in one place:** **Assets**, **Rentals**, and **SDS**—use selectively by segment.
9. **Team coordination:** **Tether**, **Planner**, connected **Email**, and consented **SMS** (optional AI receptionist for after-hours lead capture).

---

## Screenshots and grabs for the marketing site

Use **demo or sanitized data** (fake company name, fake people, round-dollar amounts). Turn off personal browser extensions; use a **clean browser profile** if needed. Capture **light and dark** theme only if both ship—otherwise stay consistent site-wide.

**Exports:** Prefer **PNG** for UI. Keep **2× resolution** for retina (e.g. 2880×1600 viewport scaled captures for heroes). For video, short **MP4/GIF** loops of search, schedule drag, POS checkout, portal pay, or Ask FullVue read well on landing pages.

### P0 — Hero, homepage, and primary story

| # | Grab | Where to capture (in-app) | Notes |
|---|------|---------------------------|--------|
| 1 | **Home / landing dashboard** | Authenticated home after login (`landing`) | Show real widgets if demo data is rich (jobs, sales, overdue). Good “single pane of glass” shot. |
| 2 | **Global search open** | Nav search + results (`Ctrl+K` hint) | Clean “find anything” story. |
| 3 | **Jobs dashboard** | Jobs list/dashboard (`jobsDashboard`) | Bread-and-butter operations story. |
| 4 | **Single job (detail)** | Open one job with tasks/time/materials visible | Prefer labor + billing relevance without clutter. |
| 5 | **Schedule** | Job schedule view (`jobSchedule`) | Strong visual for coordination messaging. |
| 6 | **Field / road sheet** | Field dashboard or road sheet (`roadDashboard` / field routes) | Field-service differentiation; optional closeout step. |
| 7 | **Opportunities (sales)** | Sales dashboard (`salesDashboard`) | Pipeline—sanitize names. |
| 8 | **Quotes list + quote detail** | Quotes dashboard + single quote | Sales → proposal story. |
| 9 | **Customer-facing quote signing** | Public quote sign URL (`/sales/quotes/sign/:id`) — **logged out** | Critical trust shot. |
| 10 | **Invoices + pay link** | Invoice detail and/or public Pay Invoice | AR / cash collection. |
| 11 | **Purchasing** | PO dashboard + vendor context | Ops buying story. |
| 12 | **Counter + POS register** | Counter dashboard + POS (`counterDashboard`, `posDashboard`) | Merchandising vs checkout. |
| 13 | **Payroll / time** | Punch list, pay period, or report; optional nav **In/Out** | Workforce story. |
| 14 | **Mobile shell** | Jobs or Home at **narrow viewport** | Field usability. |
| 15 | **QuickBooks Online** | Settings → QuickBooks: Connected + mappings (or Connect) | **Flagship** — button/state only; never tokens. Pair with homepage QBO band. |
| 16 | **Ask FullVue** | Assistant dialog or page (`Ctrl+.`) with a real question answered | **Flagship** — read-only Q&A; no fake “AI rewrote your invoice.” |

### P1 — Modules that round out “full operations platform”

| # | Grab | Where to capture | Notes |
|---|------|------------------|--------|
| 17 | **Purchase requests / bills** | Purchasing → Requests, Bills | Procurement depth beyond POs. |
| 18 | **Inventory** | Inventory dashboard / assembly | Parts/stock story. |
| 19 | **Customers / vendors** | Customer and vendor dashboards | Relationship hubs—blur PII. |
| 20 | **Support tickets** | Support dashboard | Service-after-sale. |
| 21 | **Products** | Product dashboard + detail | Catalog / serialization story. |
| 22 | **Assets** | Assets list + single asset | Equipment + devices + software in one register. |
| 23 | **Rentals** | Rentals dashboard / calendar | When module enabled. |
| 24 | **SDS** | SDS dashboard | Compliance vertical only if content is OK to show. |
| 25 | **Production meeting (huddle)** | Huddle dashboard | Ops rhythm. |
| 26 | **To-dos** | Todo dashboard | Execution discipline. |
| 27 | **Tether** | Channel view | Team messaging. |
| 28 | **Planner** | Planner calendar | Personal schedule layered on ops data. |
| 29 | **Customer portal** | Portal home — **as portal user** | Self-service; sanitize branding. |
| 30 | **Vendor portal** | Vendor portal job list | Subcontractor story. |
| 31 | **Accounting hub** | Chart of accounts or reports hub | In-app GL—pair with the P0 QBO story, don’t bury QBO here. |
| 32 | **Reports hub** | Operations reports dashboard | Analytical depth; good Ask FullVue “before” contrast. |
| 33 | **Settings hub** | Settings dashboard | Control center—**no secrets** (tokens, keys). |
| 34 | **Mail (connected inbox)** | Email module inbox when enabled | Employee mailbox—not transactional templates. |
| 35 | **SMS settings / job text** | SMS general settings or job message thread | Consent-aware texting story. |

### P2 — Nice-to-have / segment-specific

| # | Grab | Where to capture | Notes |
|---|------|------------------|--------|
| 36 | **Counter extras** | Promotions, memberships, loyalty, stored value | Pick 1–2 that demo best. |
| 37 | **POS terminals / receipt settings** | Settings → POS terminals / receipt layout | Retail-ready credibility. |
| 38 | **In-house jobs / auditing** | `/jobs/in-house`, `/jobs/auditing` | Shop vs field; revenue recognition angle. |
| 39 | **Online booking** | Public `/book` | Self-serve intake. |
| 40 | **Payment & billing settings** | Settings → Payment & Billing | FoundTech subscription + merchant status—no secrets. |
| 41 | **Fleet inspection** | Field fleet inspect / asset inspection | Assets + field combo. |
| 42 | **Offline sync chip** | Field workflow with sync status visible | “Works when the truck loses signal.” |
| 43 | **Login** | Login page | Trust/security section only if needed. |
| 44 | **Asset types settings** | Settings → Asset types | Configurable categories. |

### Capture checklist (logistics)

- [ ] One **consistent demo tenant** so dates, logos, and naming match across all grabs.
- [ ] **Crop consistently** (same left nav expanded vs collapsed—pick one).
- [ ] **Blur or replace** real emails, phone numbers, addresses on customer/vendor screens.
- [ ] Export **filename convention:** `fullvue-{module}-{screen}-{theme}-{approxWidth}px.png`.
- [ ] Optional **annotation layer** (sales deck only): callouts in Figma, not burned into canonical assets.
- [ ] Do **not** use legacy route names `equipmentDashboard` or `itdbDashboard`—use **Assets** under `/assets`.
- [ ] Do **not** show OAuth tokens, API keys, encryption secrets, or live card data.

Route names above match Vue router `name` values where noted—use devtools or `router.resolve` if paths differ by environment.

---

## Tasks you should perform on the feature site repo

1. **Inventory pages** against the module catalog; flag **missing** major areas. **Treat QuickBooks Online and Ask FullVue as first-class site sections** (homepage bands + dedicated pages)—not a footnote under Integrations.
2. **Retire legacy copy** that lists **Equipment** and **ITDB** as separate modules—replace with **Assets**.
3. **Retire “road module” slug confusion**—use **Field**; “road sheets” remain OK as a feature phrase.
4. **Rewrite hero and section copy** using outcome-led headings; keep module pages parallel (problem → capability → proof-oriented detail → CTA).
5. **Sharpen CTAs:** primary is **Start free trial** → `/trial` (auto-provisioning). Keep `/contact` for questions. In-product Support uses `mailto:support@fullvue.io`.
6. **Improve module blurbs** to 1–2 sentences for scanners plus a short bullet list of concrete in-app tasks.
7. **SEO hygiene:** meaningful titles/descriptions per major module **and** for `/quickbooks` (or equivalent) and `/ai` / Ask FullVue pages; avoid duplicate thin copy.
8. **Consistency pass:** Same terminology as the tables above; marketing should use clean labels (**Assets**, **Field**, **Customer Support**, **Accounting**, **QuickBooks Online**, **Ask FullVue**).

---

## Guardrails

- **Never invent integrations, certifications, or industries** not confirmed by the team or codebase.
- **Do not claim exclusive superiority** without evidence; prefer “purpose-built for…” and concrete workflows.
- When unsure whether a feature is customer-visible or pilot-only, **say so** or omit until verified.
- Prefer linking **fullvue.io** trial (`/trial`) and pricing flows as given by stakeholders; do not invent pricing.
- **Do not reference deprecated module slugs** `equipment` or `itdb`—use **`assets`**.
- **QuickBooks:** one-way push only; no pull; jobs/POs/inventory not sent; do not claim Desktop live sync (IIF export is separate).
- **AI:** no write mode; assistant is read/assist; SMS receptionist is a constrained lead-capture flow, not a full phone agent.
- **Banking:** file import only—do not claim Plaid/live bank feeds.
- **Modules:** provisioned by FoundTech / deployment—not a self-serve module marketplace.
- **Payments:** Merchant360 requires onboarding; do not imply instant card acceptance for every tenant on day one.
- **Integrations** (QuickBooks, FoundTech Payments, connected email/SMS) are capabilities, not a standalone marketing “module page.”

---

## Maintenance

When the ERP ships new modules or renames nav groups, update this brief from:

- **`client/src/shared/fullVueModules.ts`** — canonical module slugs, display titles, and deployment toggles (**start here**).
- `client/src/App.vue` — `mainNav` entries (primary navigation truth).
- `client/src/core/helpers/settingsCatalog.ts` — settings groups and company-wide links.
- `client/src/core/pages/settings/business/settingsQuickBooks.vue` and `settingsPaymentBilling.vue` — QBO and payments positioning.
- AI: `client/src/core/stores/aiStore.ts` and server AI access (`grantable` modes)—confirm before promising AI capabilities.

Refresh the **Screenshots and grabs** section when navigation or route names change (`meta.title` and route `name` in `**/routers/**/*.ts`, `**/routes/**/*.ts`).

---

## Quick reference: demo modules (settings)

Configurable demo / deployment modules in-app (from `fullVueModules.ts`, `deploymentToggle: true` only):

**Accounting**, **Assets**, **Attendance**, **Core**, **Counter**, **Email**, **Field**, **Human Resources**, **Production Meetings**, **Invoicing**, **Planner**, **Products**, **Purchasing**, **Rentals**, **Sales**, **SDS**, **SMS**, **Customer Support**, **Tether**, **To-Dos**

Use for “try the areas that match your business” messaging on the marketing site.

**Marketing-site exceptions:**

- Do **not** list **SMS** as a pickable / self-serve module on fullvue.io (hub, pricing, or a dedicated module page). SMS needs FoundTech support to set up. Industry or compare copy may still mention consented texting as a capability.
- **Ask FullVue** is not a `FULL_VUE_MODULES` slug, but the marketing site treats it as a module page at **`/modules/ai`** (hub section + nav). Metered AI credits—not a priced checkbox on `/pricing`.

**Legacy reminder:** If older docs or env files list `equipment` or `itdb`, map both to **Assets** (`assets`). If they list `road` as a module slug, map to **Field** (`field`).

---

## Copy drafts (homepage + module pages)

Ready-to-adapt blurbs for fullvue.io. Primary CTA is **Start free trial** → `/trial`; use Contact for questions. Prefer “when enabled” for module-specific claims. Do not invent pricing.

### Homepage

**Hero headline:** Run operations in Fullvue. Close the books in QuickBooks. Ask AI about the rest.

**Hero headline (alt, shorter):** Jobs, field, and cash—linked to QuickBooks, with AI that knows your shop.

**Hero subhead:** Fullvue connects sales, jobs, field work, purchasing, invoicing, and payments in one system—then pushes invoices, bills, and payments one-way to QuickBooks Online for your accountant. Ask FullVue answers questions about your data without silently changing it.

**Hero proof chips (optional):** QuickBooks Online · Ask FullVue · Jobs & field · Invoicing & payments

**Hero CTA primary:** Start free trial → `/trial` (auto-provisioned workspace)  
**Hero CTA secondary:** See pricing / Contact us

**Section — The problem:** Too many tools, not enough truth.  
When quotes live in one place, schedules in another, and invoices somewhere else, margin disappears in the gaps. Fullvue keeps the job as the spine—from opportunity to cash—and keeps your accountant and your team out of retyping hell.

**Section — Flagship: QuickBooks Online**  
**Headline:** Your accountant stays in QuickBooks. You stay in Fullvue.  
**Body:** Connect QuickBooks Online and push invoices, credit memos, bills, and payments one-way into QBO. Jobs, purchase orders, and inventory stay where work happens. No two-way sync theater—just the cash documents your books need.  
**CTA:** See how QuickBooks connects

**Section — Flagship: Ask FullVue**  
**Headline:** Ask your business a question—get an answer from your data.  
**Body:** Ask FullVue is a permission-aware assistant that helps owners and managers find and understand what’s in Fullvue—jobs, sales, reports, and more—plus assist-tier polish and table explanations. It does not rewrite your invoices or post behind your back. Metered with AI credits.  
**CTA:** See Ask FullVue

**Section — How it works (3 pillars):**

1. **Sell and schedule** — Quotes, e-sign, job schedules, and field road sheets in the same workspace.
2. **Execute and bill** — Time, materials, closeout, invoices, and card pay links tied to the work.
3. **Close and understand** — One-way QuickBooks Online push for the accountant; Ask FullVue when you need answers fast.

**Section — Built for operators:** Field crews, counter staff, office, and owners share one system with role-based permissions—not five logins and a Friday spreadsheet.

**Section — Modules that match your business:** Fullvue is modular. Enable Field, Counter, Accounting, Rentals, SMS, and more when they fit how you operate—without buying a separate product for each department.

**Section — Cash collection:** Accept customer card payments with FoundTech Payments after merchant onboarding—on invoice pay links and the customer portal.

**Section — Portals and communication:** Give customers a portal for jobs, quotes, and invoices. Text customers with consented SMS. Connect employee mailboxes when teams need inbox and CRM in one place.

**Meta description (homepage):** Fullvue runs jobs, field, and invoicing in one system—with one-way QuickBooks Online push and Ask FullVue AI for answers from your data.

---

### Module pages

Each module page pattern: **H1 (outcome)** → **1–2 sentence blurb** → **bullets (concrete tasks)** → **CTA**. Meta descriptions stay under ~160 characters.

#### Core

**H1:** Your company hub—jobs, people, and inventory in one place  
**Blurb:** Core is the Fullvue foundation: customers and vendors, jobs with costing, inventory, permissions, search, and company settings so every other module has a single source of truth.  
**Bullets:**

- Run jobs with tasks, materials, mileage, extras, and audit-ready states
- Maintain customers, vendors, locations, and role-based access
- Find records fast with global search and home dashboard widgets
- Configure PDF templates, announcements, and onboarding for new teams

**Meta:** Fullvue Core centralizes jobs, customers, vendors, inventory, permissions, and company settings.

#### Field

**H1:** Field work that feeds the same job record  
**Blurb:** Field turns daily road sheets, schedules, mileage, and on-site closeout into operational truth—so office and crew stop arguing from different notes.  
**Bullets:**

- Capture daily field records tied to jobs
- Schedule field work and track job mileage
- Close out on site with photos and customer signature when configured
- Keep working with offline-friendly field sync when signal drops

**Meta:** Fullvue Field covers road sheets, field scheduling, mileage, and job closeout with photos and signatures.

#### Sales

**H1:** From opportunity to signed quote without a side system  
**Blurb:** Sales manages opportunities, quotes, and customer e-sign so proposals become jobs without retyping into another tool.  
**Bullets:**

- Track opportunities and surveys through the pipeline
- Build quotes and quote plots your team can revise quickly
- Send customer-facing e-sign links—no customer login required
- Hand off into jobs and invoicing in the same product

**Meta:** Fullvue Sales manages opportunities, quotes, and customer e-sign from estimate to approval.

#### Counter

**H1:** Counter and POS without a separate retail stack  
**Blurb:** Counter adds register checkout plus promotions, memberships, punch cards, loyalty, and stored value—alongside the same customers and inventory your jobs already use.  
**Bullets:**

- Run a point-of-sale register for walk-in and counter sales
- Configure promotions, promo codes, and POS fees
- Manage memberships, punch cards, loyalty, and stored value
- Keep counter activity aligned with your catalog and customers

**Meta:** Fullvue Counter adds POS checkout, promotions, memberships, loyalty, and stored value.

#### Purchasing

**H1:** Buy what the job needs—then receive it into stock  
**Blurb:** Purchasing covers purchase requests, POs, receiving, vendor bills, and paylists so AP reflects what you actually ordered and received.  
**Bullets:**

- Raise purchase requests and issue purchase orders
- Receive inventory against what was ordered
- Enter vendor bills and run paylists
- Keep vendors and parts tied to real purchasing history

**Meta:** Fullvue Purchasing handles POs, requests, receiving, vendor bills, and paylists.

#### Invoicing

**H1:** Invoice the work—and get paid online  
**Blurb:** Invoicing turns completed work into invoices and payments, including public pay-by-link so customers can pay by card after FoundTech Payments is set up.  
**Bullets:**

- Create and send invoices tied to jobs and sales
- Record payments and track AR in the same system
- Share pay links customers can open without a staff login
- Keep billing documents on brand with templates

**Meta:** Fullvue Invoicing covers invoices, payment recording, and customer pay-by-link.

#### Accounting

**H1:** Books for operators who need a real ledger  
**Blurb:** Accounting adds an in-app general ledger—AR/AP, journals, bank reconciliation, budgets, and financial reports—with file-based bank import when you need statement detail in Fullvue.  
**Bullets:**

- Maintain chart of accounts, journals, and fiscal periods
- Reconcile bank accounts and import CSV/OFX/QFX files
- Run financial reports without exporting to a side spreadsheet first
- Pair with one-way QuickBooks Online push when your accountant lives in QBO

**Meta:** Fullvue Accounting provides GL, AR/AP, bank reconciliation, budgets, and financial reports.

#### Customer Support

**H1:** Service tickets that know the customer and the job  
**Blurb:** Customer Support tracks tickets with customer, product, and job context so after-sale issues do not float in a separate helpdesk.  
**Bullets:**

- Open and assign support tickets with clear reasons
- Link tickets to customers, products, and jobs
- Keep service history visible to the team that sold and installed the work
- Coordinate follow-up without losing the operational thread

**Meta:** Fullvue Customer Support manages tickets tied to customers, products, and jobs.

#### Products

**H1:** A catalog built for real configurations  
**Blurb:** Products manages your catalog with configurable types and fields—so serialized or structured items stay consistent across sales, support, and inventory.  
**Bullets:**

- Define product types, fields, and groups that match how you sell
- Keep catalog data consistent across quotes, jobs, and support
- Track the product detail your team needs for warranty and service
- Avoid one-off spreadsheets for “special” items

**Meta:** Fullvue Products is a configurable catalog for sales, support, and inventory.

#### Assets

**H1:** One register for equipment, devices, and software  
**Blurb:** Assets unifies shop and fleet equipment with IT-style devices, components, and software—assignments, costs, attachments, and optional fleet inspections in one place.  
**Bullets:**

- Track equipment, devices, components, and software together
- Assign assets, attach files, and capture costs
- Run fleet inspections when you need checklist discipline in the field
- Retire separate “equipment vs ITDB” tool sprawl

**Meta:** Fullvue Assets tracks equipment, devices, components, software, and fleet inspections.

#### Rentals

**H1:** Reserve, check out, and return rental equipment  
**Blurb:** Rentals manages reservations, calendar availability, checkout, and returns—with public claim/signup flows when customers need self-serve access.  
**Bullets:**

- Book rental reservations against your equipment
- See availability on a rental calendar
- Check out and return assets without a side rental app
- Offer public claim/signup links when that fits your process

**Meta:** Fullvue Rentals handles equipment reservations, calendar, checkout, and returns.

#### SDS

**H1:** Safety data sheets where the team already works  
**Blurb:** SDS keeps safety data sheets searchable in Fullvue so hazmat documentation is not buried in a shared drive.  
**Bullets:**

- Maintain an SDS library with tags for fast lookup
- Give operations and field teams one place to find sheets
- Support compliance-minded workflows without a separate binder app
- Use selectively for verticals that handle hazardous materials

**Meta:** Fullvue SDS provides an in-app safety data sheet library and lookup.

#### To-Dos

**H1:** Company task lists that do not live in chat  
**Blurb:** To-Dos give teams shared task lists with statuses, notes, and attachments—so follow-ups survive beyond a message thread.  
**Bullets:**

- Create task lists for ops, office, or project follow-through
- Track status, notes, and attachments on each item
- Keep execution visible without inventing another board tool
- Pair with Planner when people need personal time-blocking too

**Meta:** Fullvue To-Dos are shared task lists with statuses, notes, and attachments.

#### Production Meetings (Huddle)

**H1:** Production meetings with an operational rhythm  
**Blurb:** Production Meetings (Huddle) structure huddle workflows so shop-floor and ops standups stay tied to how work actually runs.  
**Bullets:**

- Run production meeting workflows in-product
- Keep standup structure consistent across days and crews
- Reduce “we talked about it” with a durable meeting habit
- Pair with jobs and to-dos for follow-through

**Meta:** Fullvue Production Meetings structure huddle and shop-floor meeting workflows.

#### Tether

**H1:** Team messaging inside the system of record  
**Blurb:** Tether is in-app messaging—channels, DMs, customer-related chat for staff, and notes-to-self—so coordination does not vanish into personal text threads.  
**Bullets:**

- Message in channels and direct conversations
- Keep customer-related staff chat near the work
- Capture personal notes-to-self from the home experience
- Archive history for admins when you need continuity

**Meta:** Fullvue Tether is team messaging with channels, DMs, and notes inside your operations system.

#### Planner

**H1:** Your day, layered on real operational data  
**Blurb:** Planner is a personal time-blocking calendar with reminders that can surface jobs, quotes, to-dos, and absences—so “my day” matches the business.  
**Bullets:**

- Block personal time with reminders
- See schedule, due work, and absences in one calendar view
- Reduce double-booking between field work and office tasks
- Keep planning inside Fullvue instead of a separate calendar silo

**Meta:** Fullvue Planner is a personal calendar that layers jobs, to-dos, and absences.

#### Attendance

**H1:** Time and schedules that can face the job clock  
**Blurb:** Attendance covers punches, schedules, absences, and payroll-period reporting—so labor data is captured where work is managed.  
**Bullets:**

- Clock in and out from the app (including nav In/Out)
- Manage schedules, shifts, and absences
- Report attendance by payroll period
- Compare workforce time against job time where your reports support it

**Meta:** Fullvue Attendance covers time punches, schedules, absences, and payroll-period reports.

#### Human Resources

**H1:** Employee HR records beside the people who run the work  
**Blurb:** Human Resources holds benefits, employee HR data, reviews, and HR reports—so people data is not stranded outside operations.  
**Bullets:**

- Maintain employee HR profiles and benefits information
- Run reviews and HR reporting when enabled
- Keep workforce data under the same permissions model as the rest of Fullvue
- Pair with Attendance for a fuller people + time story

**Meta:** Fullvue Human Resources manages benefits, employee HR data, reviews, and HR reports.

#### Email

**H1:** Connected mailboxes for the people doing the work  
**Blurb:** Email lets employees connect Google, Microsoft, or IMAP mailboxes to read and send from Fullvue—separate from company transactional document email.  
**Bullets:**

- Connect per-employee Google, Microsoft, or IMAP accounts
- Work inbox and compose without leaving Fullvue
- Keep personal/work mailbox access distinct from Resend document senders
- Reduce tab-hopping between CRM-ish work and the inbox

**Meta:** Fullvue Email connects Google, Microsoft, or IMAP employee mailboxes in-app.

#### SMS

**H1:** Job texts with consent—not a rogue texting spreadsheet  
**Blurb:** SMS sends job-related texts through Plivo with customer consent and opt-in handling, plus review invites and an optional AI receptionist for unmatched inbound leads.  
**Bullets:**

- Text customers about jobs with consent-aware messaging
- Manage opt-in / opt-out the right way
- Send review invites when that fits your process
- Optionally capture after-hours inbound leads with AI receptionist (constrained lead capture—not a full phone agent)

**Meta:** Fullvue SMS handles consented job texting, review invites, and optional AI lead capture.

---

### Cross-cutting pages (not modules)

#### Customer portal

**H1:** Let customers see jobs, quotes, and invoices without calling the office  
**Blurb:** The customer portal gives invited contacts a branded place for jobs, quotes, invoices, documents, and service requests.  
**Bullets:** Jobs and billing visibility · Quote and invoice access · Service requests · Fewer status-call interruptions

#### Vendor portal

**H1:** Give subcontractors job visibility without a full staff seat  
**Blurb:** The vendor portal lets vendors access assigned job information so field partners stay coordinated without living in your internal tools.

#### Online booking

**H1:** Let customers request work on their schedule  
**Blurb:** Public online booking gives prospects and customers a self-serve path to request work when you enable it.

#### QuickBooks Online (flagship page — give it top-level nav or a homepage primary band)

**H1:** Operations in Fullvue. Books in QuickBooks—without retyping.  
**Blurb:** Connect QuickBooks Online to push invoices, credit memos, bills, customer payments, and bill payments one-way into QBO. Your team keeps running jobs in Fullvue; your accountant gets the documents they need to close. Nothing is pulled back from QuickBooks, and jobs, POs, and inventory stay in Fullvue.  
**Bullets:**

- Connect with OAuth and map income, expense, deposit, and payment accounts
- Push invoices and credit memos when you send (or create) them
- Push bills, customer payments, and bill payments so AR/AP cash matches operations
- Review sync errors in Settings without failing the Fullvue save
- Owners and managers do not need a daily QuickBooks login
- Separate IIF export exists for QuickBooks Desktop—do not call that live sync

**What we do not claim:** Two-way sync · inventory/job sync into QBO · “Fullvue replaces QuickBooks”

**Meta:** Push Fullvue invoices, bills, and payments one-way to QuickBooks Online so accountants close books without retyping.

#### FoundTech Payments

**H1:** Take card payments on invoices and in the portal  
**Blurb:** After merchant onboarding, FoundTech Payments (Merchant360) lets your customers pay invoices by card on pay links and portal flows—alongside FoundTech billing for your Fullvue subscription.

#### Ask FullVue (flagship page — give it top-level nav or a homepage primary band)

**H1:** Ask FullVue—AI that knows your shop  
**Blurb:** Ask FullVue is a permission-aware assistant that answers questions from your Fullvue data—so owners and managers spend less time hunting reports and more time deciding. Assist-tier polish and table explanations help clean up language and understand grids. It does not silently change records. Usage is metered with AI credits.  
**Bullets:**

- Ask natural-language questions about jobs, sales, and operational data you already have access to
- Get answers grounded in Fullvue—not a generic chatbot that invents your backlog
- Use assist-tier polish and table explain for everyday clarity
- Respect the same permissions model as the rest of the product
- Open quickly from the app (including keyboard shortcut where enabled)

**What we do not claim:** AI that posts invoices/journals · autonomous agents that rewrite jobs · “unlimited free AI”

**Meta:** Ask FullVue answers questions about your Fullvue data with permission-aware AI—read and assist, not silent edits.

#### Offline field sync

**H1:** Keep field capture moving when the signal does not  
**Blurb:** Field-oriented offline sync queues punches, road sheets, job time/materials, and closeout so crews can keep recording and sync when they are back online.
