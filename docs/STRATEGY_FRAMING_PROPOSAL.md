# Strategy framing proposal — incorporating the ecosystem proposal into the live sites

**Source:** founder strategy proposal (`landscape_archive_strategy.html`) — a Tailwind-CDN + Chart.js
single-page deck with five tabs (Vision, Governance, Licensing, TLA-185, Roadmap).

**Purpose of this doc:** map each element of that deck to a site (`.org` Foundation vs `.com.au`
Archive vs neither/internal), rule on whether it is safe to publish now, and describe how to rebuild
the good graphics natively. It also proposes how the `.org` site should be framed around the standard
as a public good.

**Guardrail summary (why several items are held):**
- The Foundation is **not yet incorporated**. It has no legal personality, board, or seats. Prior
  sessions paused donation intake specifically for this reason (see `docs/CHANGELOG.md`,
  2026-07-16). Any "Proposed Non-Profit (CLG)", "7 voting seats", "Indigenous Advisory sign-off
  power", and "DPGA certification" content is **aspirational / draft governance intent** — publish only
  as *proposed / intended*, never as existing structure.
- Public specification licence stance is **CC BY-NC-ND 4.0** (`FOUNDATION_LICENCE_LABEL`). GPL v3 for
  code may be described as *intent* for the code layer; do not assert it against a published licence
  file that does not exist. The `/licence` page and `foundationWing.js` are the source of truth.
- **GDP-indexed pricing** ("High $50k–$500k … Low income $0 Sovereign Gift") is a strategy proposal,
  **not published commercial pricing**. Keep it off both public sites unless clearly framed as a
  proposed equity model and not a live quote. Live commercial pricing lives on the Archive
  (`.com.au`), not here.
- Host contract holds: no app/admin payloads on marketing hosts; `.org` is the Foundation/standards
  surface, `.com.au` is the commercial Archive surface.

---

## Per-element matrix

| # | Strategy element | Belongs on | Publish status | Notes / how to rebuild |
|---|------------------|-----------|----------------|------------------------|
| 1 | **Vision** — "Securing the ecological built environment"; TLA-185 as unified standard | `.org` (primary), `.com.au` (light echo) | **Safe** (present tense, drop hyperbole) | Already the `.org` hero + Foundation Standards. Reuse the calm framing; avoid "systemic vulnerability" / "cosmic alignment" language. |
| 1a | Stat cards — **185 elements / July 2026 / GPL v3** | `.org` | **Mixed** | "185 elements" = **safe** (matches `TLA185_FIELD_COUNT`). "July 2026 launch" = **sign-off** (do not publish a hard launch date). "GPL v3 open core" = **sign-off** (verify against actual code licence before asserting; the *spec* is CC BY-NC-ND). |
| 1b | **"National Gift / Sovereign Gift"** vision block | Neither (internal/strategy) | **Sign-off** | Gifting-to-nations narrative is investor/strategy framing. Not a Foundation commitment while pre-incorporation. Keep internal until governance exists. |
| 2 | **Three-entity firewall** (Vault = IP custodian; TLA Pty Ltd = commercial operator; Foundation = steward) | `.org` (governance) | **Safe if labelled honestly** | Content already exists as a fact-list in `governanceContent.js` (`three-entity-structure`). Rebuilt natively as `GovernanceFirewallDiagram.astro` — Foundation box **explicitly labelled "Proposed — not yet incorporated"**. |
| 2a | ABN 90 694 672 403 on TLA Pty Ltd | `.org` (governance) / `.com.au` (footer) | **Safe** | Public company identifier. Fine to show on the commercial operator node. |
| 2b | **"7 independent voting seats"** | `.org` (governance) | **Sign-off** | Do not publish a specific seat count as fact. Existing copy says "Council" / advisory in general terms — keep it general until a constitution is adopted. |
| 2c | **Indigenous Advisory Protocol** — "mandatory sign-off power" | `.org` (governance) | **Sign-off** | Publish only as *proposed* advisory role (existing copy already frames it as advisory sign-off on cultural-context **rules**). Do not claim an appointed authority or binding veto exists today. |
| 3 | **Split licensing** — code (GPL v3) vs standards/education (CC BY-NC-ND 4.0) | `.org` (licence) | **Mixed** | CC BY-NC-ND 4.0 for the spec = **safe** (already live on `/licence`). GPL v3 for code = **sign-off** (describe as intent for the code layer only, after verifying code licence). |
| 3a | **GDP-indexed pricing chart** (Chart.js bar; $50k–$500k … $0) | Neither (internal) | **Do NOT publish** | Proposed equity model, not live pricing. No Chart.js dependency on either site. If ever shown, must be a clearly-labelled "proposed equity model — not a quote" and belongs on `.com.au`, not `.org`. |
| 4 | **TLA-185 metadata domains** (Botanical Truth, Climate & Risk, Open Research, Digital Twin) | `.org` (registry/home), `.com.au` (marketing echo) | **Safe** | Pure description of the open standard. Rebuilt natively as `StandardDomainsDiagram.astro`. Maps to existing five Foundation Standards. |
| 4a | **Export profiles** (IFC, GeoJSON, USD, tabular) | `.org` (registry), `.com.au` (BIM marketing) | **Safe** | Data already published in `builtEnvironmentExports.js` + schema portal. Rebuilt as `ExportProfilesDiagram.astro` with honest MVP/Draft status chips. |
| 5 | **2026 roadmap timeline** (Q1 technical, Q2 legal + DPGA, July launch) | `.org` (governance) | **Mixed → rebuilt as maturity, not dated launch** | Do not publish hard launch dates or DPGA certification. Rebuilt as an honest **standard-maturity** visual (`StandardMaturityDiagram.astro`) from the existing three-layer adoption model: Layer 1 live, Layer 2 early, Layer 3 not started. |
| 5a | **NSW Schoolyard 185 Bundle** CTA / "Download Country Kit" | `.com.au` (Archive) later | **Sign-off** | Product/pilot CTA. Self-serve download tooling is currently paused (licence sequence). Keep off `.org`; route to adoption quickstart instead. |
| — | Tailwind CDN + Chart.js + Inter/terracotta palette | Neither | **Do NOT import** | Both sites have their own systems (`.org` = slate/paper editorial tokens; Archive = Vue + existing tokens). Rebuild diagrams natively; no new heavy CDN deps. |

---

## Recommended `.org` framing narrative

The Foundation site should read as **"the independent-in-intent steward of an open landscape metadata
standard"**, structured in three honest layers:

1. **The standard as public good (present tense).** Lead with what TLA-185 *is* today: a documented,
   citable field registry (185 elements) under CC BY-NC-ND 4.0, with schemas, worked examples, and
   export bindings. This is the strongest, fully-shippable material and should carry the most visual
   weight (domains diagram + export profiles + field registry).
2. **Governance intent (clearly proposed).** The three-entity separation (Vault IP custodian /
   Archive commercial operator + interim host / Foundation proposed steward) explains *why* the public
   layer stays clean. Show it as a diagram, but every forward-looking element (independent entity,
   Council, seats, advisory sign-off) stays labelled **proposed / draft for consultation**.
3. **Open standards process (honest maturity).** Replace "launch countdown" with a maturity ladder:
   open specification (live) → de facto adoption (early) → formal standardisation (not started). This
   frames momentum without promising dates or certifications the Foundation cannot yet deliver.

What this narrative deliberately avoids: a founding/legal-entity claim, a hard July 2026 launch, DPGA
certification, GDP-indexed price ceilings, and the "national gift" investor narrative. Those stay in
the sign-off / internal buckets below.

---

## How the good graphics were rebuilt natively (`.org`)

All diagrams are static HTML/CSS Astro components using existing `global.css` tokens (`--paper`,
`--accent-strong`, `--line`, serif headings). No Tailwind, no Chart.js, no new fonts.

- `src/components/StandardDomainsDiagram.astro` — four metadata-domain cards (data:
  `src/data/standardDomains.js`). Placed on `/registry`.
- `src/components/ExportProfilesDiagram.astro` — export-binding grid with status chips (data reused
  from `builtEnvironmentExports.js`). Placed on `/registry`.
- `src/components/GovernanceFirewallDiagram.astro` — three-entity firewall; Foundation node labelled
  "Proposed — not yet incorporated". Placed on `/governance`.
- `src/components/StandardMaturityDiagram.astro` — honest three-layer maturity ladder. Placed on
  `/governance`.

---

## Items requiring founder sign-off before publishing

- Hard **launch date** (July 2026) anywhere public.
- **GPL v3** asserted as the code licence (verify against the actual code repository licence first).
- Specific **Council seat count** ("7 seats") and any named/appointed **Indigenous Advisory authority**
  or binding veto as *existing* structure.
- **DPGA certification** (applied-for or held).
- **GDP-indexed pricing** figures on any public surface.
- **"National / Sovereign Gift"** gifting-to-nations commitment.
- **NSW Schoolyard 185 Bundle** / "Download Country Kit" self-serve CTA (tooling currently paused).

**Groundwork drafts (prepared, not applied — for founder sign-off).** The items above now have
planning drafts in the Archive repo (`la-frontend/docs/`). These are DRAFT / not legal advice; no
licence state, published claim, or filing has changed:

- Open-core GPL v3 boundary — `la-frontend/docs/OPEN_CORE_BOUNDARY_DRAFT.md`
- DPGA readiness (flags the CC BY-NC-ND vs approved-open-licence conflict) —
  `la-frontend/docs/DPGA_READINESS_CHECKLIST.md`
- Consolidated sign-off action tracker (category / owner / dependency order) —
  `la-frontend/docs/STRATEGY_SIGNOFF_ACTIONS.md`

---

## Archive (`.com.au`) opportunities (secondary — `.org` is the explicit ask)

- **TLA-185 domains + export-profiles explainer** can be echoed on Archive marketing (BIM / Studio+™
  pages) to connect the commercial product to the open standard. Rebuild in Vue with Archive tokens;
  do not import `.org` components or datasets, and keep to the marketing host (no app/admin payloads).
- **GDP-indexed pricing**, if ever surfaced, belongs on `.com.au` as a clearly-labelled *proposed
  equity model* — not a live quote — and only after founder sign-off.
- Keep the three-entity diagram Foundation-side; the Archive should link to `.org/governance` rather
  than re-render governance intent.
