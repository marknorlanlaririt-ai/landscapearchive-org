# TLA-185 → US SEC climate disclosure concept crosswalk

Copyright © 2026 The Landscape Archive Pty Ltd (ABN 90 694 672 403). Proprietary data referenced herein is owned by The Landscape Vault Pty Ltd.

Maps **Foundation open** TLA-185 field identifiers to **commonly encountered US SEC climate-related disclosure** concepts (Regulation S-K Item 1300 series and related climate rules as applicable) for procurement and assurance review.

| Layer | Owner | Licence |
|-------|-------|---------|
| TLA-185 field dictionary (`tla185-fields.json`) | The Landscape Archive Foundation | CC BY-NC-ND 4.0 |
| Climate evidence exports & jurisdiction joins | The Landscape Archive Pty Ltd | EULA / commercial terms |

This document is a **concept crosswalk only**. It does not grant access to Archive datasets, satisfy US SEC filing obligations, or constitute legal or assurance advice.

**Applies to:** SEC climate-related disclosure requirements under Reg S-K Items 1301–1304 (and related rules as amended or stayed) — verify current SEC staff guidance, effective dates, filer phase-in schedules, and litigation status before client delivery.

---

## Scope — stated plainly

SEC climate disclosure rules focus on **governance, strategy, risk management, and metrics** for material climate-related risks. They do not legally mandate purchase of a TLA-185 certificate, and biodiversity is not a standalone SEC climate metric today. TLA-185 provides **screening-grade, site-level environmental metadata** with provenance — useful for physical-risk and resilience narratives inside Strategy (Item 1302) and Risk management (Item 1303) disclosures, not as a substitute for entity GHG inventories, financial quantification, or attestation-ready emissions reporting.

Australian-origin screening fields (SILO, CCIA) illustrate the **structural slots** in the open dictionary. US implementers bind the same slots to **NOAA**, **USFS**, **USGS**, **NEX-GDDP**, and FEMA hazard layers through published jurisdiction packs — without inventing parallel field names.

---

## Coverage legend

| Label | Meaning |
|-------|---------|
| **Supporting input** | Fields can supply defensible, traceable inputs to the named SEC climate disclosure area when used with entity governance and professional judgement. |
| **Adjacent — not a substitute** | Related metrics exist but must not be presented as the core SEC climate metric. |
| **Out of scope** | Satisfied outside landscape metadata (governance process, finance, transition-risk analysis, attested GHG inventories). |
| **Forward — not yet mandated** | Positions for future nature-related disclosure (TNFD-aligned concepts); not required under current SEC climate rules today. |
| **Jurisdiction pack** | Same TLA-185 field ID; local dataset binding documented in provenance fields. |

---

## Requirement-by-requirement mapping

Source field IDs refer to `tla185-fields.json` v1.0.0. See the [field registry](https://landscapearchive.org/registry) for jsonPath and module detail.

| Disclosure area | SEC location (Reg S-K) | Coverage | TLA-185 field IDs | Notes |
|-----------------|------------------------|----------|-------------------|-------|
| Physical risk — acute (heat, wildfire) | Item 1302 · climate-related risks · physical | Supporting input | 185-180, 185-181, 185-094, 185-183, 185-184, 185-185 | Heat-stress and wildfire-overlay screening at the site point. **Jurisdiction pack:** USFS wildfire risk / fire-danger indices and NOAA extreme-heat percentiles replace Australian CCIA bushfire proxies. **Screening only** — verify against FEMA, state emergency-management, and local planning products. |
| Physical risk — chronic (drought, aridity) | Item 1302 · climate-related risks · physical | Supporting input | 185-179, 185-093, 185-048, 185-043 | Rainfall-trend and aridity screening provide a defensible chronic-risk baseline per site. **Jurisdiction pack:** NOAA climate normals, US Drought Monitor indicators, NEX-GDDP precipitation deltas. |
| Scenario analysis & resilience | Item 1302 · strategy / business model / resilience | Supporting input | 185-176, 185-177, 185-178, 185-182 | Projection scenarios use the IPCC SSP set (SSP1-2.6 … SSP5-8.5) — the same scenario family commonly referenced in SEC resilience narratives. NEX-GDDP SSP/RCP-aligned downscaled products map here via provenance. |
| Resilience & adaptation measures | Item 1302 · strategy / adaptation actions | Supporting input | 185-098, 185-099, 185-095 | SuDS / WSUD, native-planting %, and climate-positive flags can evidence adaptation narrative when linked to project decisions. US green-infrastructure and state adaptation plans may inform method notes — not automatic compliance claims. |
| Assets / activities vulnerable to physical risk | Item 1302 · material impacts / asset exposure | Supporting input | 185-110, 185-111, 185-112, 185-091, 185-089, 185-090 | Asset register plus site-context exposure supports computing the share of assets in elevated heat/wildfire/flood bands. Flood screening may reference USGS and FEMA National Flood Hazard Layer (NFHL) in jurisdiction packs. |
| Risk-management process & audit trail | Item 1303 · identify / assess / manage climate risks | Supporting input | 185-052, 185-053, 185-182, 185-101, 185-102, 185-103 | **Strongest alignment.** Provenance, evidence, and method references make physical-risk inputs traceable for assurance review. |
| GHG emissions (Scope 1 / 2 / 3) | Item 1304 · metrics and targets | Adjacent — not a substitute | 185-096, 185-097 | Sequestration and embodied-carbon fields are **not** a Scope 1/2/3 inventory. Do not present as Item 1304 emissions metrics or attestation-ready GHG data. |
| GHG emissions intensity & targets | Item 1304 · intensity metrics / targets | Out of scope | — | Entity-level intensity ratios and target tracking — outside landscape metadata. |
| Governance (board & management oversight) | Item 1301 · governance | Out of scope | — | No data role. Satisfied by the entity's own governance disclosures. |
| Transition risk (policy, technology, market, legal) | Item 1302 · transition risks | Out of scope | — | Outside landscape metadata. Entity ESG / finance process. |
| Financial statement impacts & expenditure | Item 1302 · financial effects / capital allocation | Out of scope | — | Financial quantification and attestation are the auditor / CFO domain, not the schema. |
| Carbon offsets & RECs | Item 1304 · carbon credits (if disclosed) | Out of scope | — | Instrument accounting — not landscape interchange. |

---

## US jurisdiction pack — dataset bindings (illustrative)

These bindings populate the **same** TLA-185 field IDs. They are documented in `185-052` (dataSource), `185-053` (methodNote), and `185-182` (screeningDisclaimer) — not as alternate schema forks.

| TLA-185 slot | Australian default (reference) | US illustrative binding |
|--------------|-------------------------------|-------------------------|
| Projection deltas (185-179, 185-180, 185-181) | SILO / CCIA mid-century bands | NEX-GDDP (NASA Earth Exchange Global Daily Downscaled Projections) — CMIP6 ensemble percentiles |
| Heat stress (185-094, 185-183) | CCIA heat-stress overlay | NOAA Climate Normals / NCEI extreme-heat indices; NEX-GDDP hottest-day projections |
| Wildfire overlay (185-184, 185-185) | CCIA bushfire proxy | USFS Wildfire Hazard Potential / fire-danger trend screening (planning-grade) |
| Köppen / rainfall bands (185-048, 185-043) | SILO 1990–2020 climatology | NOAA 1991–2020 climate normals (NCEI) |
| Flood exposure (asset context) | Local planning overlays | USGS 3DEP-derived hazard layers; FEMA NFHL zones (method note required) |
| Drought / aridity (185-093) | SILO rainfall trend | US Drought Monitor (NIDIS); NOAA Palmer Drought Severity Index trends |

---

## Strongest beachhead — audit trail

Assurers and SEC staff reviewers need **traceability** from disclosure claims back to source methods. TLA-185 provenance and evidence fields (`185-052`, `185-053`, `185-182`, `185-101`, `185-102`, `185-103`) document how physical-risk screening inputs were derived, including projection sources and screening disclaimers.

Built-in screening language (e.g. wildfire overlay as planning proxy, not statutory certificate) should be retained in exports — honesty supports credibility under US assurance practice.

---

## Adjacent — GHG and carbon fields

| Field IDs | Role under SEC climate rules |
|-----------|------------------------------|
| 185-096, 185-097 | May support **adjacent** narrative on sequestration or embodied carbon in project context. **Do not** substitute for mandatory Item 1304 GHG emissions metrics or EPA / GHG Protocol inventories. |

For entity-level Scope 1–3 reporting, use recognised GHG accounting frameworks (EPA GHG Reporting Program where applicable, GHG Protocol, ISO 14064) and inventory tools separate from landscape interchange bundles.

---

## Forward — nature / biodiversity (TNFD)

Not mandated under current SEC climate rules today. Emerging SEC and investor interest in nature-related risk may align with TNFD concepts over time. The following TLA-185 fields pre-position project records for future TNFD-aligned reporting when organisations choose to extend disclosure:

| Field ID | Key (abbrev.) |
|----------|---------------|
| 185-013 | nativeStatus |
| 185-014 | conservationStatus |
| 185-015 | occurrenceCount |
| 185-099 | nativePlantingPercent |
| 185-049 | landcoverClassBand |
| 185-104 | sensitivityClass |

Describe these as **forward positioning**, never as satisfying a current SEC climate biodiversity mandate.

---

## Defensible procurement sentence

> TLA-185 provides standardised, traceable site-level environmental metadata that supports the physical-risk and resilience portions of a US SEC climate disclosure when bound to US climate products (e.g. NOAA, USFS, USGS, NEX-GDDP) through documented jurisdiction packs. It is screening-grade input, not a statutory certificate, an Item 1304 GHG emissions inventory, or attestation-ready financial data.

---

## Related Foundation artefacts

| Document | Purpose |
|----------|---------|
| [UK IFRS S2 crosswalk](./uk-ifrs-s2-tla185-mapping.md) | UK-endorsed IFRS S2 analogue — same structural mapping, UK jurisdiction pack |
| [EU CSRD / ESRS E1 crosswalk](./eu-csrd-esrs-tla185-mapping.md) | EU climate disclosure analogue — Copernicus CDS / EEA jurisdiction pack |
| [AASB S2 crosswalk](./aasb-s2-tla185-mapping.md) | Australian analogue — same structural mapping, different regulator |
| [TLA-185 climate screening RFC](../rfc/TLA-185-climate-screening-rfc.md) | Normative band rules for 185 screening fields |
| [Schema manifest](../schema/manifest.json) | Module index and implementation references |
| [International adoption roadmap](https://landscapearchive.org/governance#international-adoption) | Three-layer path from open spec to formal standardisation |

---

## Version

- **Crosswalk version:** 1.0.0 (2026-07-07)
- **Field dictionary:** `tla185-fields.json` v1.0.0
- **SEC climate scope:** per Reg S-K Items 1301–1304 and related rules — verify current SEC effective dates, staff guidance, filer phase-in, and litigation status before client delivery.

**Licence:** CC BY-NC-ND 4.0 (Foundation documentation). Attribution required; no modified redistribution.

**Copyright:** © 2026 The Landscape Archive Pty Ltd (operator). Proprietary datasets and group IP are owned by The Landscape Vault Pty Ltd. This crosswalk is published by The Landscape Archive Pty Ltd as founding implementation partner of The Landscape Archive Foundation.
