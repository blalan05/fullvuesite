# Fullvue feature site — agent brief (marketing copy)

**How to use this file:** Copy into your [fullvue.io](https://fullvue.io) codebase as `AGENTS.md` (repo root), or split into a Cursor rule under `.cursor/rules/` with frontmatter `alwaysApply: false` and globs like `**/*.{md,mdx,vue,tsx,jsx}` so it loads when editing marketing pages.

This document grounds copy in the **Fullvue ERP application** (this monorepo). Treat it as the source of truth for **what the product actually includes**. Do not promise capabilities that are not described here unless you confirm them in the ERP codebase or with the product owner.

---

## Your role

You help improve **marketing and feature-site copy**: headlines, module pages, comparison language, CTAs, meta descriptions, and short blurbs. Prioritize outcomes **business owners and operations leaders** care about: revenue, margin, labor accuracy, scheduling chaos, inventory/purchasing leakage, compliance touches, and replacing disconnected tools.

---

## Audience and positioning

**Primary readers:** Owners and GMs of small and mid-sized operating businesses—especially those who run **jobs or projects**, **field crews**, **counter/retail-style selling**, and **back-office** in parallel (trades, services, distribution-light retail, mixed operations).

**Core promise (fact-aligned):** Fullvue is a **unified operational system** spanning sales through cash: opportunities and quotes, jobs and scheduling, purchasing and inventory, invoicing, POS-style counter selling, support, HR/payroll/time, and reference data (customers, vendors, products, equipment). **QuickBooks Online** can be connected for accounting sync workflows (e.g. pushing invoices/bills—implementation lives under integrations).

**Pain-led angles (use where accurate):**

- **Fragmentation:** Replacing spreadsheets + separate CRM + field tools + inventory + payroll spreadsheets.
- **Job profitability:** Jobs with road work, schedules, time/materials, invoicing tied to work done.
- **Counter + back office:** Retail-like promotions, memberships, punch cards, loyalty, stored value alongside traditional job/sales flows (Counter/POS areas in-app).
- **Governance:** Role-based permissions across modules; diary/audit-style tracking exists in core patterns.
- **Compliance adjacency:** SDS (Safety Data Sheets) module signals suitability for operations that manage hazardous materials documentation—not every ERP leads with this; use for the right verticals only.

---

## Voice and quality bar

- **Clear over clever.** Owners skim; say what the module *does* for their day.
- **Specific beats generic.** Prefer “schedule field work and invoice from the same job record” over “streamline workflows.”
- **Outcome-first headlines.** Lead with money, time, risk, or clarity; feature names second.
- **No filler superlatives** (“world-class,” “revolutionary”) unless backed by a concrete claim.
- **Consistent naming:** Use **Fullvue** as the product name; match module names below when referring to product areas.

---

## Module and capability catalog (ERP-derived)

Use these names and descriptions on the marketing site. Expand with owner-friendly examples; do not contradict scope.

| Area | User-facing name ideas | What it covers (from product structure) |
|------|-------------------------|----------------------------------------|
| **Core** | Core, Company hub | Company settings, locations, users and permissions, geography/reference data, diary, PDF templates, SMS-related settings, announcements, tasks/rates structure |
| **Sales** | Sales, Pipeline | Opportunities/surveys, quotes, quote workflows including **customer-facing quote signing** (public route—no login), customer records linked to sales |
| **Counter / POS** | Counter, Point of sale | Register/POS dashboard, promotions, memberships, punch cards, promo codes, POS fees, stored value, loyalty—alongside traditional sales/job permissions |
| **Purchasing** | Purchasing | Purchase orders, purchase requests, bills, vendors, ties to inventory |
| **Jobs & field** | Jobs, Field, Scheduling | Jobs dashboard, **road sheets**, **job schedule**, in-house job views, **audit-ready job states**, invoicing and customers in the same cluster—strong **field service / job shop** story |
| **Invoicing** | Invoicing, AR | Invoice lifecycle aligned with jobs/sales; email templates for billing documents |
| **Support** | Support, Service desk | Support tickets with customer and product context |
| **Products** | Products, Catalog | Product records tied into sales/support flows |
| **References** | Inventory, Vendors, SDS, Equipment | Customers, vendors, **inventory/parts**, products, **SDS**, **equipment** registers |
| **Admin / operations** | Admin | Settings, **employees**, **IT database (devices/components/software)**, **production meetings (huddles)**, **reports**, **to-dos** |
| **Payroll / HR** | Payroll, Time, HR | Time punches (including quick in/out from nav), shifts, absences, payroll reports/items/accruals—widgets compare punch time vs job time |
| **Accounting (data layer)** | Accounting | Journal/chart-oriented models exist—position carefully; **lead with QuickBooks integration** for external accounting rather than claiming a full GL replacement unless product confirms |

**Integrations (verified in codebase):** **QuickBooks Online** OAuth, token refresh, workflows such as sending invoices and bills into QuickBooks.

**UX/product traits worth mentioning when relevant:**

- **Global search** (including Ctrl+K-style entry in navigation).
- **Configurable home/dashboard widgets** (e.g. newest customers/jobs, overdue jobs, audit-ready jobs, sales engagement, payroll/absence snapshots, open job time).
- **Mobile-aware shell** (responsive app bar / drawer patterns).
- **Granular permissions** driving which nav areas appear—good for “grow without losing control” messaging.

---

## Differentiators to highlight (honest framing)

1. **Breadth without splitting vendors:** Same product family connects **sales → job → field schedule → invoice → purchasing/inventory** plus **counter/POS-style** capabilities—unusual compared to pure PSA or pure retail POS.
2. **Built for operators who live in jobs:** Road sheets, schedules, audit states, and widgets around overdue/audit-ready work support **execution visibility**, not just quoting.
3. **Workforce and job alignment:** Payroll/time features and widgets that relate **punches to job time** support labor honesty narratives (verify exact UI strings on site against product).
4. **Accounting bridge:** QuickBooks connection for teams that want operations in Fullvue and books in QBO.
5. **Vertical hooks:** Equipment tracking and SDS support **physical operations** and compliance-conscious businesses—use selectively by segment.

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
| 16 | **Inventory** | Inventory dashboard / assembly views (`inventory` routes) | Parts/stock story. |
| 17 | **Customers** | Customers dashboard (`customersDashboard`) | Relationship hub—blur emails if needed. |
| 18 | **Vendors** | Vendor dashboard (`vendorDashboard`) | Supplier management. |
| 19 | **Support tickets** | Support dashboard (`supportDashboard`) | Service-after-sale. |
| 20 | **Products** | Products dashboard + product detail (`productDashboard`) | Catalog story. |
| 21 | **Equipment** | Equipment list/detail (`equipmentDashboard`) | Fleet/tools vertical. |
| 22 | **SDS** | SDS dashboard (`sdsDashboard`) | Compliance vertical—only if demo SDS content is acceptable to display. |
| 23 | **Production meeting (huddle)** | Huddle dashboard (`huddleDashboard`) | Ops rhythm / shop-floor culture angle. |
| 24 | **To-dos** | Todo dashboard (`todoDashboard`) | Execution discipline. |
| 25 | **ITDB** | Devices or Software list (`itdbDashboard` / ITDB children) | Internal IT asset story—often unique on SME ERP pages. |
| 26 | **Reports hub** | Reports dashboard (`reportsDashboard`) | Shows analytical depth; capture one report drilled in if allowed (`WIP Jobs Report`, etc.). |
| 27 | **Settings hub** | Settings dashboard (`settingsDashboard`) | High-level “control center”—avoid exposing secrets (SMS keys, integration tokens). |
| 28 | **QuickBooks connect moment** | Settings area with **Connect QB** visible *or* success state without tokens | No OAuth secrets or keys in frame—button/state only. |

### P2 — Nice-to-have / segment-specific

| # | Grab | Where to capture | Notes |
|---|------|------------------|--------|
| 29 | **Counter extras** | Promotions, memberships, loyalty, stored value, punch cards (counter sub-routes) | Pick 1–2 that demo best. |
| 30 | **POS terminals / receipt settings** | Settings → POS terminals, receipt layout (`settingsPosTerminals`, thermal receipt settings) | For “retail-ready” narrative—not flashy but credible. |
| 31 | **In-house jobs filter** | Jobs with in-house query (`/jobs/in-house`) | Differentiator for shop work vs field. |
| 32 | **Auditing / ready-for-audit** | Jobs auditing view (`/jobs/auditing` with status query) | Quality and revenue recognition angle. |
| 33 | **Partner portal slices** | Partner jobs, partner POs/bills (`partnerLanding` and partner subpages as permitted) | **Employee/partner** experience vs admin—great for “everyone in one system.” |
| 34 | **Login** | Login page (`login`) | Neutral branded capture if ever needed for security/trust section. |
| 35 | **Pay invoice (public)** | Pay Invoice route (`invoicing` router — “Pay Invoice”) | Customer payment experience—sanitize gateway branding per compliance. |

### Capture checklist (logistics)

- [ ] One **consistent demo tenant** so dates, logos, and naming match across all grabs.
- [ ] **Crop consistently** (same left nav expanded vs collapsed—pick one).
- [ ] **Blur or replace** real emails, phone numbers, addresses on customer/vendor screens.
- [ ] Export **filename convention:** `fullvue-{module}-{screen}-{theme}-{approxWidth}px.png`.
- [ ] Optional **annotation layer** (for sales deck only): simple callouts in Figma, not burned into canonical assets.

Route names above match Vue router `name` values where noted—use devtools or `router.resolve` if paths differ by environment.

---

## Tasks you should perform on the feature site repo

1. **Inventory pages** against the module catalog; flag **missing** major areas (Counter/POS, Payroll, ITDB, Huddle, SDS) if absent or buried.
2. **Rewrite hero and section copy** using outcome-led headings; keep module pages parallel in structure (problem → capability → proof-oriented detail → CTA).
3. **Sharpen CTAs** for demo, contact, or trial—match whatever the live site actually offers.
4. **Improve module blurbs** to 1–2 sentences for scanners plus a short bullet list of concrete tasks users perform in-app.
5. **SEO hygiene:** meaningful titles/descriptions per major module; avoid duplicate thin copy.
6. **Consistency pass:** Same terminology as the table above; fix typos like internal UI bugs only when mirroring product (e.g. product UI may say “IT Databaee”—marketing should say **IT Database**).

---

## Guardrails

- **Never invent integrations, certifications, or industries** not confirmed by the team or codebase.
- **Do not claim exclusive superiority** without evidence; prefer “purpose-built for…” and concrete workflows.
- When unsure whether a feature is customer-visible or pilot-only, **say so** or omit until verified.
- Prefer linking **fullvue.io** pricing/demo flows as given by stakeholders; do not invent pricing.

---

## Maintenance

When the ERP ships new modules or renames nav groups, update this brief from:

- `client/src/server/models/index.ts` — model namespaces.
- `client/src/App.vue` — `mainNav` entries (primary navigation truth).
- `client/src/core/pages/settings/settingsDashboard.vue` — `modulesList` for demo/toggle modules.

Refresh the **Screenshots and grabs** section when navigation or route names change (`meta.title` and route `name` in `**/routers/**/*.ts`).

---

## Quick reference: demo modules (settings)

Configurable demo modules in-app include: Core, Field (road), Sales, Purchasing, Invoicing, IT Database, SDS, HR, Payroll, Products, Customer Support, To-Dos, Production Meetings, Equipment—useful for “try the areas that match your business” messaging on the marketing site.
