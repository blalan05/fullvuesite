# FullVue feature site — agent brief (marketing copy)

This document grounds copy in the **FullVue ERP application** (separate product codebase). Treat it as the source of truth for **what the product actually includes**. Do not promise capabilities that are not described here unless you confirm them in the ERP codebase or with the product owner.

**This repo** is the [fullvue.io](https://fullvue.io) marketing / feature site (SvelteKit). ERP paths below (e.g. `client/src/shared/fullVueModules.ts`) refer to the ERP repo, not files in this repo.

---

## Your role

You help improve **marketing and feature-site copy**: headlines, module pages, comparison language, CTAs, meta descriptions, and short blurbs. Prioritize outcomes **business owners and operations leaders** care about: revenue, margin, labor accuracy, scheduling chaos, inventory/purchasing leakage, compliance touches, and replacing disconnected tools.

---

## Audience and positioning

**Primary readers:** Owners and GMs of small and mid-sized operating businesses—especially those who run **jobs or projects**, **field crews**, **counter/retail-style selling**, and **back-office** in parallel (trades, services, distribution-light retail, mixed operations).

**Core promise (fact-aligned):** FullVue is a **unified operational system** spanning sales through cash: opportunities and quotes, jobs and scheduling, purchasing and inventory, invoicing, POS-style counter selling, support, HR/payroll/time, team messaging, personal planning, rentals, and reference data (customers, vendors, products, assets). **QuickBooks Online** can be connected for accounting sync workflows (e.g. pushing invoices/bills—implementation lives under integrations).

**Pain-led angles (use where accurate):**

- **Fragmentation:** Replacing spreadsheets + separate CRM + field tools + inventory + payroll spreadsheets + chat apps.
- **Job profitability:** Jobs with road work, schedules, time/materials, invoicing tied to work done.
- **Counter + back office:** Retail-like promotions, memberships, punch cards, loyalty, stored value alongside traditional job/sales flows (Counter/POS areas in-app).
- **Governance:** Role-based permissions across modules; diary/audit-style tracking exists in core patterns.
- **Compliance adjacency:** SDS (Safety Data Sheets) module signals suitability for operations that manage hazardous materials documentation—not every ERP leads with this; use for the right verticals only.
- **Coordination:** Tether messaging and Planner calendar reduce “where did we agree that?” friction between office, field, and shop.

---

## Voice and quality bar

- **Clear over clever.** Owners skim; say what the module *does* for their day.
- **Specific beats generic.** Prefer “schedule field work and invoice from the same job record” over “streamline workflows.”
- **Outcome-first headlines.** Lead with money, time, risk, or clarity; feature names second.
- **No filler superlatives** (“world-class,” “revolutionary”) unless backed by a concrete claim.
- **Consistent naming:** Use **FullVue** as the product name; match module names below when referring to product areas.

**Naming note (important):** Legacy marketing or env configs may still say **Equipment** or **IT Database (ITDB)**. In the current product these are unified under **Assets** (`assets` module slug). Do not list Equipment and ITDB as separate product modules on the marketing site.

---

## Module and capability catalog (ERP-derived)

Canonical deployment module slugs and display titles live in `client/src/shared/fullVueModules.ts` (ERP repo). Use these names on the marketing site. Expand with owner-friendly examples; do not contradict scope.

| Module slug | User-facing name | What it covers (from product structure) |
|-------------|------------------|----------------------------------------|
| **core** | Core, Company hub | Company settings, locations, users and permissions, geography/reference data, diary, PDF templates, SMS-related settings, announcements, tasks/rates structure, **customer portal** (jobs, invoices, quotes, rentals, chat for invited contacts) |
| **sales** | Sales, Pipeline | Opportunities/surveys, quotes, quote workflows including **customer-facing quote signing** (public route—no login), customer records linked to sales |
| **counter** | Counter, Point of sale | Register/POS dashboard, promotions, memberships, punch cards, promo codes, POS fees, stored value, loyalty—alongside traditional sales/job permissions |
| **purchasing** | Purchasing | Purchase orders, purchase requests, bills, vendors, ties to inventory |
| **road** | Field, Jobs & field | Jobs dashboard, **road sheets**, **job schedule**, in-house job views, **audit-ready job states**, invoicing and customers in the same cluster—strong **field service / job shop** story |
| **invoicing** | Invoicing, AR | Invoice lifecycle aligned with jobs/sales; email templates for billing documents |
| **support** | Support, Service desk | Support tickets with customer and product context |
| **products** | Products, Catalog | Product records tied into sales/support flows |
| **assets** | Assets | Unified asset register: shop/fleet equipment, devices, components, software, assignments, costs, attachments, and links between assets—**replaces former separate Equipment and ITDB modules** |
| **rentals** | Rentals | Equipment rental reservations, checkout, returns; ties to rentable asset types |
| **sds** | SDS | Safety Data Sheets library and lookup |
| **todos** | To-Dos | Task lists and todo workflows |
| **huddle** | Production Meetings | Huddle / production meeting workflows |
| **tether** | Tether | Team messaging channels (DMs, groups, customer chat for staff, personal notes-to-self, voice notes with optional transcription) |
| **planner** | Planner | Personal time-blocking calendar with reminders; layers for jobs, quotes, todos, etc. |
| **attendance** | Attendance | Time punches, schedules, payroll-period attendance reporting (deployable alongside HR/payroll features) |
| **hr** | Human Resources | Benefits, employee HR data, HR reports |
| **integration** | Integrations | Permission tag for QuickBooks, Square, etc.—not a standalone env toggle |

**References nav cluster** (not separate modules): Customers, vendors, inventory/parts, products, SDS, assets, rentals—grouped in-app under References for lookup workflows.

**Admin / operations cluster:** Settings, employees, assets (also reachable here), production meetings, reports, to-dos, tether archive (admin).

**Payroll / time** (often enabled with attendance + HR): Time punches (including quick in/out from nav), shifts, absences, payroll reports/items/accruals—widgets compare punch time vs job time.

**Accounting (data layer):** Journal/chart-oriented models exist—position carefully; **lead with QuickBooks integration** for external accounting rather than claiming a full GL replacement unless product confirms.

**Integrations (verified in codebase):** **QuickBooks Online** OAuth, token refresh, workflows such as sending invoices and bills into QuickBooks.

**UX/product traits worth mentioning when relevant:**

- **Global search** (including Ctrl+K-style entry in navigation).
- **Configurable home/dashboard widgets** (e.g. newest customers/jobs, overdue jobs, audit-ready jobs, sales engagement, payroll/absence snapshots, open job time, tether notes).
- **Mobile-aware shell** (responsive app bar / drawer patterns).
- **Granular permissions** driving which nav areas appear—good for “grow without losing control” messaging.
- **Customer portal** for invited contacts (jobs, billing, quotes, rentals, support chat)—extends the “single system” story beyond internal staff.

---

## Differentiators to highlight (honest framing)

1. **Breadth without splitting vendors:** Same product family connects **sales → job → field schedule → invoice → purchasing/inventory** plus **counter/POS-style** capabilities—unusual compared to pure PSA or pure retail POS.
2. **Built for operators who live in jobs:** Road sheets, schedules, audit states, and widgets around overdue/audit-ready work support **execution visibility**, not just quoting.
3. **Workforce and job alignment:** Payroll/time features and widgets that relate **punches to job time** support labor honesty narratives (verify exact UI strings on site against product).
4. **Accounting bridge:** QuickBooks connection for teams that want operations in FullVue and books in QBO.
5. **Physical operations in one place:** Assets covers fleet/tools and IT-style devices/components/software; Rentals and SDS add rental ops and compliance hooks—use selectively by segment.
6. **Team coordination:** Tether (messaging + customer chat) and Planner (personal calendar layered on operational data) reduce tool sprawl for shops that still live in email and texts.

---

## Screenshots and grabs for the marketing site

Use **demo or sanitized data** (fake company name, fake people, round-dollar amounts). Turn off personal browser extensions; use a **clean browser profile** if needed. Capture **light and dark** theme only if both ship—otherwise stay consistent site-wide.

**Exports:** Prefer **PNG** for UI. Keep **2× resolution** for retina (e.g. 2880×1600 viewport scaled captures for heroes). For video, short **MP4/GIF** loops of search, schedule drag, or POS line-item flow read well on landing pages.

### P0 — Hero, homepage, and primary story

| # | Grab | Where to capture (in-app) | Notes |
|---|------|---------------------------|--------|
| 1 | **Home / landing dashboard** | Authenticated home after login (`landing`) | Show real widgets if demo data is rich (jobs, sales, overdue). Good “single pane of glass” shot. |
| 2 | **Global search open** | Nav search field + results dropdown (`Ctrl+K` hint visible) | Route: search experience from drawer; optional dedicated Search page from core router. |
| 3 | **Jobs dashboard** | Jobs list/dashboard (`jobsDashboard`) | Bread-and-butter operations story. |
| 4 | **Single job (detail)** | Open one job with tasks/time/materials visible | Prefer a job that shows labor + billing relevance without clutter. |
| 5 | **Schedule** | Job schedule view (`jobSchedule`) | Strong visual for “coordination” messaging. |
| 6 | **Road / field** | Road dashboard (`roadDashboard`) | Field-service differentiation. |
| 7 | **Opportunities (sales)** | Sales dashboard (`salesDashboard`) | Pipeline / surveys list—sanitize customer names. |
| 8 | **Quotes list + quote detail** | Quotes dashboard + single quote (`quotesDashboard`, quote view/edit) | Sales → proposal story. |
| 9 | **Customer-facing quote signing** | Public quote sign URL (`/sales/quotes/sign/:id`) — **logged out** | Capture the **customer** experience (clean URL bar or staged domain). Critical trust shot. |
| 10 | **Invoices** | Invoices dashboard + single invoice (`invoicingDashboard`, invoice detail) | AR / billing story. |
| 11 | **Purchasing** | PO dashboard + vendor tie-in if visible (`purchasingDashboard`) | Ops buying story. |
| 12 | **Counter overview + POS register** | Counter dashboard + POS (`counterDashboard`, `posDashboard`) | Two grabs: merchandising/config vs register/checkout metaphor. |
| 13 | **Payroll / time** | Partner payroll or payroll admin — punch list, pay period, or report (`partnerPayroll`, payroll routes as permissions allow) | Optional nav showing **In/Out** punch chip if that fits brand. |
| 14 | **Mobile shell** | Same key screen (Jobs or Home) **narrow viewport** | App bar + drawer; proves field usability. |

### P1 — Modules that round out “full ERP”

| # | Grab | Where to capture | Notes |
|---|------|------------------|--------|
| 15 | **Purchase requests / bills** | Purchasing → Requests, Bills (`purchasingRequests`, `purchasingBills`) | Shows procurement depth beyond POs. |
| 16 | **Inventory** | Inventory dashboard / assembly views (`inventoryDashboard`) | Parts/stock story. |
| 17 | **Customers** | Customers dashboard (`customersDashboard`) | Relationship hub—blur emails if needed. |
| 18 | **Vendors** | Vendor dashboard (`vendorDashboard`) | Supplier management. |
| 19 | **Support tickets** | Support dashboard (`supportDashboard`) | Service-after-sale. |
| 20 | **Products** | Products dashboard + product detail (`productDashboard`) | Catalog story. |
| 21 | **Assets** | Assets list + single asset (`assetsDashboard`, `assetSingle`) | Unified equipment, devices, components, software—replaces old Equipment + ITDB grabs. Filter tabs by category if demo data allows. |
| 22 | **Rentals** | Rentals dashboard (`rentalsDashboard`) | Rental reservations/checkout story when module enabled. |
| 23 | **SDS** | SDS dashboard (`sdsDashboard`) | Compliance vertical—only if demo SDS content is acceptable to display. |
| 24 | **Production meeting (huddle)** | Huddle dashboard (`huddleDashboard`) | Ops rhythm / shop-floor culture angle. |
| 25 | **To-dos** | Todo dashboard (`todoDashboard`) | Execution discipline. |
| 26 | **Tether** | Tether channel view (`tetherDashboard`, `tetherChannel`) | Team messaging; optional voice note or convert-to-job story. |
| 27 | **Planner** | Planner calendar (`plannerCalendar`) | Personal scheduling layered on jobs/quotes/todos. |
| 28 | **Customer portal** | Portal home or chat (`portalHome`, `portalChat`) — logged in as portal user | Customer self-service; sanitize branding. |
| 29 | **Reports hub** | Reports dashboard (`reportsDashboard`) | Shows analytical depth; capture one report drilled in if allowed (`WIP Jobs Report`, etc.). |
| 30 | **Settings hub** | Settings dashboard (`settingsDashboard`) | High-level “control center”—avoid exposing secrets (SMS keys, integration tokens). |
| 31 | **QuickBooks connect moment** | Settings area with **Connect QB** visible *or* success state without tokens | No OAuth secrets or keys in frame—button/state only. |

### P2 — Nice-to-have / segment-specific

| # | Grab | Where to capture | Notes |
|---|------|------------------|--------|
| 32 | **Counter extras** | Promotions, memberships, loyalty, stored value, punch cards (counter sub-routes) | Pick 1–2 that demo best. |
| 33 | **POS terminals / receipt settings** | Settings → POS terminals, receipt layout (`settingsPosTerminals`, thermal receipt settings) | For “retail-ready” narrative—not flashy but credible. |
| 34 | **In-house jobs filter** | Jobs with in-house query (`/jobs/in-house`) | Differentiator for shop work vs field. |
| 35 | **Auditing / ready-for-audit** | Jobs auditing view (`/jobs/auditing` with status query) | Quality and revenue recognition angle. |
| 36 | **Partner portal slices** | Partner jobs, partner POs/bills (`partnerLanding` and partner subpages as permitted) | **Employee/partner** experience vs admin—great for “everyone in one system.” |
| 37 | **Login** | Login page (`login`) | Neutral branded capture if ever needed for security/trust section. |
| 38 | **Pay invoice (public)** | Pay Invoice route (invoicing router — “Pay Invoice”) | Customer payment experience—sanitize gateway branding per compliance. |
| 39 | **Asset types settings** | Settings → Asset types (`settingsAssetTypes`) | Shows configurable asset categories including equipment vs device. |

### Capture checklist (logistics)

- [ ] One **consistent demo tenant** so dates, logos, and naming match across all grabs.
- [ ] **Crop consistently** (same left nav expanded vs collapsed—pick one).
- [ ] **Blur or replace** real emails, phone numbers, addresses on customer/vendor screens.
- [ ] Export **filename convention:** `fullvue-{module}-{screen}-{theme}-{approxWidth}px.png`.
- [ ] Optional **annotation layer** (for sales deck only): simple callouts in Figma, not burned into canonical assets.
- [ ] Do **not** use legacy route names `equipmentDashboard` or `itdbDashboard`—use **Assets** routes under `/assets`.

Route names above match Vue router `name` values where noted—use devtools or `router.resolve` if paths differ by environment.

---

## Tasks you should perform on the feature site repo

1. **Inventory pages** against the module catalog; flag **missing** major areas (Counter/POS, Attendance, Assets, Rentals, Tether, Planner, Payroll, Huddle, SDS, Customer portal) if absent or buried.
2. **Retire legacy copy** that lists Equipment and ITDB as separate modules—replace with **Assets** and the unified story above.
3. **Rewrite hero and section copy** using outcome-led headings; keep module pages parallel in structure (problem → capability → proof-oriented detail → CTA).
4. **Sharpen CTAs** for demo, contact, or trial—match whatever the live site actually offers.
5. **Improve module blurbs** to 1–2 sentences for scanners plus a short bullet list of concrete tasks users perform in-app.
6. **SEO hygiene:** meaningful titles/descriptions per major module; avoid duplicate thin copy.
7. **Consistency pass:** Same terminology as the table above; fix internal UI typos only when mirroring product (marketing should use clean labels, e.g. **Assets** not “IT Databaee”).

---

## Guardrails

- **Never invent integrations, certifications, or industries** not confirmed by the team or codebase.
- **Do not claim exclusive superiority** without evidence; prefer “purpose-built for…” and concrete workflows.
- When unsure whether a feature is customer-visible or pilot-only, **say so** or omit until verified.
- Prefer linking **fullvue.io** pricing/demo flows as given by stakeholders; do not invent pricing.
- Do **not** reference deprecated module slugs `equipment` or `itdb` in env examples or feature lists—use **assets**.

---

## Maintenance

When the ERP ships new modules or renames nav groups, update this brief from:

- `client/src/shared/fullVueModules.ts` — canonical module slugs, display titles, and deployment toggles (**start here**).
- `client/src/App.vue` — `mainNav` entries (primary navigation truth).
- `client/src/core/pages/settings/settingsDashboard.vue` — `deploymentModuleSelectItems` (demo module picker).

Refresh the **Screenshots and grabs** section when navigation or route names change (`meta.title` and route `name` in `**/routers/**/*.ts`, `**/routes/**/*.ts`).

---

## Quick reference: demo modules (settings)

Configurable demo modules in-app (from `fullVueModules.ts`, deployment toggles only):

Assets, Attendance, Core, Counter, Rentals, Field (road), Human Resources, Production Meetings, Invoicing, Products, Planner, Purchasing, Sales, SDS, Customer Support, Tether, To-Dos

Use for “try the areas that match your business” messaging on the marketing site.

**Legacy reminder:** If older docs or env files list `equipment` or `itdb`, map both to **Assets** (`assets`).
