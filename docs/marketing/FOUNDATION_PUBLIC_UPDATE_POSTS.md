# Foundation public update posts (July 2026)

Ready-to-adapt copy for LinkedIn, newsletter, and Foundation channels. **Use cautious interim tone** — draft governance, not incorporated entity, no overclaiming active programmes.

**Do not use** `federation/LAUNCH_ANNOUNCEMENT.md` or `FOUNDING_INVITATION.md` verbatim — those kits predate the CC BY-NC-ND 4.0 licence, `schema.landscapearchive.org`, and international founding-alliance language.

**Do not market:** admin copilot, internal mail triage, or other admin-only tooling.

---

## Apex marketing mirror

**Source of truth:** `src/data/recentPublicUpdates.js` (same list as the homepage RecentUpdatesStrip).

**Public feed:** https://landscapearchive.org/recent-updates.json  

**Apex consumer:** `landscapearchive.com.au` fetches via same-origin `GET /api/marketing/recent-public-updates` (Pages Function proxies the .org JSON — required because .org sets `Cross-Origin-Resource-Policy: same-site`).

### How to add a new update (one place)

1. Edit `landscapearchive-org/src/data/recentPublicUpdates.js` (newest first).
   - Use ISO dates (`YYYY-MM-DD`); UI formats as e.g. `11 Jul 2026`.
2. Deploy org: `npm run deploy` in `landscapearchive-org`.
3. Apex picks up the feed within cache TTL (~5 minutes). No apex code change required unless you want the bundled first-paint fallback refreshed.

Do **not** hand-edit apex `src/data/recentPublicUpdates.js` as the editorial source — that file is fallback only.

---

## LinkedIn — short (Foundation page)

Landscape metadata should stay inspectable across BIM, GIS, and asset-management handoffs — not locked inside any one vendor stack.

We've published three interim milestones on the open specification (draft governance; consult qualified advisers before relying on them as legal fact):

• **International founding alliance (draft)** — charter consultation for practices, universities, public bodies, and protocol authorities worldwide  
• **Built environment export profiles** — IFC property sets, GeoJSON civic registries, USD metadata sidecars, and spreadsheet crosswalks with JSON schemas and worked examples  
• **Awards data architecture** — how peer assessment references the field registry and interchange profiles across architectural, civic, and engineering streams

Explore → https://landscapearchive.org  
Schema portal → https://schema.landscapearchive.org/examples/built-environment/manifest.json  
Founding alliance (draft) → https://landscapearchive.org/governance#founding-alliance

#LandscapeArchitecture #OpenStandards #BIM #DigitalTwins #Metadata

---

## LinkedIn — medium (founder / steward voice)

**Honest landscape records need shared interchange — and honest governance language.**

The Landscape Archive Foundation publishes the open field registry and schema artefacts practitioners, universities, and public bodies can cite without vendor lock-in. Commercial tools implement the standard; they do not own it.

What's new this month (interim, for consultation):

1. **International founding alliance (draft)** — We're convening independent organisations worldwide to review charter language for stewarding the public specification. This is not incorporation, a franchise, or our commercial affiliate partner programme. Each organisation stays independent; shared work stays in the open layer.

2. **Built environment export profiles** — Published bindings map registered fields to IFC property sets, GeoJSON civic registries, USD metadata sidecars, and nursery spreadsheet crosswalks — with JSON schemas and worked examples on the schema portal. Native IFC STEP and USD file writers remain on the pipeline roadmap.

3. **Awards programme framing** — Category rubrics describe how documentary integrity is assessed against the field registry and interchange paths across architectural, civic, and engineering delivery — programme still in preparation, not open for entries.

Read the updates → https://landscapearchive.org  
Charter consultation → https://landscapearchive.org/contact?topic=foundation-support&intent=founding-alliance

---

## Newsletter blurb (footer list / one paragraph)

**July 2026 — specification milestones (draft governance).** We've added homepage summaries of three public updates: international founding alliance charter consultation, built environment export profiles (IFC, GeoJSON, USD, crosswalks), and awards data-architecture alignment. All remain interim; The Landscape Archive Foundation is not yet an incorporated entity. Details at landscapearchive.org and schema.landscapearchive.org.

---

## Instagram carousel hook (slide 1 body)

Three updates on the open landscape metadata standard — draft founding alliance consultation, published export profiles for BIM and GIS handoffs, and awards rubrics tied to the field registry. Interim governance only; read the full framing at landscapearchive.org.

---

## landscapearchive.com.au — do / don't

| Do | Don't |
|----|-------|
| Link to landscapearchive.org governance and schema portal from Resources or footer | Republish founding alliance as a commercial Archive product launch |
| Keep Foundation vs Archive separation explicit in any cross-link | Imply AILA/IFLA endorsement without written agreement |
| Use plain language (export profiles, field registry) | Use TLA-xxx codes in marketing headlines |

---

## Internal only (not for public posts)

Admin copilot Phase B/C (digest, triage, panel) — admin host only; useful for ops, zero public marketing value.

Pixel chrome / header animation timing — UX polish only; do not post.
