# TLA-185 → UK IFRS S2 concept crosswalk

Copyright © 2026 The Landscape Archive Pty Ltd (ABN 90 694 672 403). Proprietary data referenced herein is owned by The Landscape Vault Pty Ltd.

Maps **Foundation open** TLA-185 field identifiers to **commonly encountered UK IFRS S2 Climate-related Disclosures** concepts (UK Sustainability Disclosure Standards) for procurement and assurance review.

| Layer | Owner | Licence |
|-------|-------|---------|
| TLA-185 field dictionary (`tla185-fields.json`) | The Landscape Archive Foundation | CC BY-NC-ND 4.0 |
| Climate evidence exports & jurisdiction joins | The Landscape Archive Pty Ltd | EULA / commercial terms |

This document is a **concept crosswalk only**. It does not grant access to Archive datasets, satisfy UK statutory filing obligations, or constitute legal or assurance advice.

**Applies to:** UK-endorsed IFRS S2 climate disclosures under the UK Sustainability Disclosure Standards framework — verify current FCA / Department for Business and Trade guidance before client delivery.

---

## Scope — stated plainly

UK IFRS S2 is **climate-only**. It does not legally mandate biodiversity disclosure today, and no law requires purchase of a TLA-185 certificate. TLA-185 provides **screening-grade, site-level environmental metadata** with provenance — useful for physical-risk and resilience narratives inside Strategy and Risk management disclosures, not as a substitute for entity GHG inventories or financial quantification.

Australian-origin screening fields (SILO, CCIA) illustrate the **structural slots** in the open dictionary. UK implementers bind the same slots to **UKCP18**, Met Office climate services, Environment Agency flood layers, and UK wildfire severity indices through published jurisdiction packs — without inventing parallel field names.

---

## Coverage legend

| Label | Meaning |
|-------|---------|
| **Supporting input** | Fields can supply defensible, traceable inputs to the named IFRS S2 area when used with entity governance and professional judgement. |
| **Adjacent — not a substitute** | Related metrics exist but must not be presented as the core IFRS S2 metric. |
| **Out of scope** | Satisfied outside landscape metadata (governance process, finance, transition-risk analysis). |
| **Forward — not yet mandated** | Positions for future nature-related disclosure (TNFD-aligned concepts); not required under IFRS S2 today. |
| **Jurisdiction pack** | Same TLA-185 field ID; local dataset binding documented in provenance fields. |

---

## Requirement-by-requirement mapping

Source field IDs refer to `tla185-fields.json` v1.0.0. See the [field registry](https://landscapearchive.org/registry) for jsonPath and module detail.

| Disclosure area | IFRS S2 location | Coverage | TLA-185 field IDs | Notes |
|-----------------|------------------|----------|-------------------|-------|
| Physical risk — acute (heat, wildfire) | Strategy · climate-related physical risks | Supporting input | 185-180, 185-181, 185-094, 185-183, 185-184, 185-185 | Heat-stress and wildfire-overlay screening at the site point. **Jurisdiction pack:** UK wildfire severity / heat-health indices (e.g. UKCP18 high-temperature percentiles) replace Australian CCIA bushfire proxies. **Screening only** — verify against statutory planning and emergency-management products. |
| Physical risk — chronic (drought, aridity) | Strategy · climate-related physical risks | Supporting input | 185-179, 185-093, 185-048, 185-043 | Rainfall-trend and aridity screening provide a defensible chronic-risk baseline per site. **Jurisdiction pack:** UKCP18 precipitation deltas and Met Office drought indicators. |
| Scenario analysis | Strategy · climate resilience | Supporting input | 185-176, 185-177, 185-178, 185-182 | Projection scenarios use the IPCC SSP set (SSP1-2.6 … SSP5-8.5) — the same scenario family commonly referenced in IFRS S2 resilience narratives. UKCP18 RCP/SSP-aligned products map here via provenance. |
| Resilience & adaptation measures | Strategy · climate resilience | Supporting input | 185-098, 185-099, 185-095 | SuDS / WSUD, native-planting %, and climate-positive flags can evidence adaptation narrative when linked to project decisions. UK SuDS standards and BNG (biodiversity net gain) policy may inform method notes — not automatic compliance claims. |
| Assets / activities vulnerable to physical risk | Metrics & targets · cross-industry | Supporting input | 185-110, 185-111, 185-112, 185-091, 185-089, 185-090 | Asset register plus site-context exposure supports computing the share of assets in elevated heat/wildfire/flood bands. Flood screening may reference Environment Agency zones in jurisdiction packs. |
| Risk-management process & audit trail | Risk management · identify / assess / monitor | Supporting input | 185-052, 185-053, 185-182, 185-101, 185-102, 185-103 | **Strongest alignment.** Provenance, evidence, and method references make physical-risk inputs traceable for assurance review. |
| GHG emissions (Scope 1 / 2 / 3) | Metrics & targets · core metric | Adjacent — not a substitute | 185-096, 185-097 | Sequestration and embodied-carbon fields are **not** a Scope 1/2/3 inventory. Do not present as the emissions metric. |
| Governance (board & management oversight) | Governance | Out of scope | — | No data role. Satisfied by the entity's own governance disclosures. |
| Transition risk (policy, technology, market, legal) | Strategy · transition risks | Out of scope | — | Outside landscape metadata. Entity ESG / finance process. |
| Effects on financial position & performance | Strategy · financial effects | Out of scope | — | Financial quantification is the auditor / CFO domain, not the schema. |

---

## UK jurisdiction pack — dataset bindings (illustrative)

These bindings populate the **same** TLA-185 field IDs. They are documented in `185-052` (dataSource), `185-053` (methodNote), and `185-182` (screeningDisclaimer) — not as alternate schema forks.

| TLA-185 slot | Australian default (reference) | UK illustrative binding |
|--------------|-------------------------------|-------------------------|
| Projection deltas (185-179, 185-180, 185-181) | SILO / CCIA mid-century bands | UKCP18 Local (2.2 km) or Regional (12 km) percentiles |
| Heat stress (185-094, 185-183) | CCIA heat-stress overlay | UKCP18 summer mean / hottest-day projections |
| Wildfire overlay (185-184, 185-185) | CCIA bushfire proxy | UK wildfire severity / FWI trend screening (planning-grade) |
| Köppen / rainfall bands (185-048, 185-043) | SILO 1990–2020 climatology | Met Office 1991–2020 normals |
| Flood exposure (asset context) | Local planning overlays | Environment Agency flood zones (method note required) |

---

## Strongest beachhead — audit trail

Assurers need **traceability** from disclosure claims back to source methods. TLA-185 provenance and evidence fields (`185-052`, `185-053`, `185-182`, `185-101`, `185-102`, `185-103`) document how physical-risk screening inputs were derived, including projection sources and screening disclaimers.

Built-in screening language (e.g. wildfire overlay as planning proxy, not statutory certificate) should be retained in exports — honesty supports credibility under UK assurance practice.

---

## Adjacent — GHG and carbon fields

| Field IDs | Role under IFRS S2 |
|-----------|-------------------|
| 185-096, 185-097 | May support **adjacent** narrative on sequestration or embodied carbon in project context. **Do not** substitute for mandatory GHG emissions metrics. |

For entity-level Scope 1–3 reporting, use recognised GHG accounting frameworks (UK SECR, ISO 14064, GHG Protocol) and inventory tools separate from landscape interchange bundles.

---

## Forward — nature / biodiversity (TNFD)

Not mandated under UK IFRS S2 today. UK policy direction includes biodiversity net gain and emerging nature-related disclosure alignment. The following TLA-185 fields pre-position project records for future TNFD-aligned reporting when organisations choose to extend disclosure:

| Field ID | Key (abbrev.) |
|----------|---------------|
| 185-013 | nativeStatus |
| 185-014 | conservationStatus |
| 185-015 | occurrenceCount |
| 185-099 | nativePlantingPercent |
| 185-049 | landcoverClassBand |
| 185-104 | sensitivityClass |

Describe these as **forward positioning**, never as satisfying a current IFRS S2 biodiversity mandate.

---

## Defensible procurement sentence

> TLA-185 provides standardised, traceable site-level environmental metadata that supports the physical-risk and resilience portions of a UK IFRS S2 climate disclosure when bound to UK climate products (e.g. UKCP18) through documented jurisdiction packs. It is screening-grade input, not a statutory certificate or a GHG emissions inventory.

---

## Related Foundation artefacts

| Document | Purpose |
|----------|---------|
| [EU CSRD / ESRS E1 crosswalk](./eu-csrd-esrs-tla185-mapping.md) | EU climate disclosure analogue — Copernicus CDS / EEA jurisdiction pack |
| [US SEC climate crosswalk](./us-sec-climate-tla185-mapping.md) | US SEC Reg S-K Item 1300 analogue — NOAA / USFS / USGS / NEX-GDDP jurisdiction pack |
| [AASB S2 crosswalk](./aasb-s2-tla185-mapping.md) | Australian analogue — same structural mapping, different regulator |
| [TLA-185 climate screening RFC](../rfc/TLA-185-climate-screening-rfc.md) | Normative band rules for 185 screening fields |
| [Schema manifest](../schema/manifest.json) | Module index and implementation references |
| [International adoption roadmap](https://landscapearchive.org/governance#international-adoption) | Three-layer path from open spec to formal standardisation |

---

## Version

- **Crosswalk version:** 1.0.0 (2026-07-07)
- **Field dictionary:** `tla185-fields.json` v1.0.0
- **IFRS S2 scope:** per UK-endorsed IFRS S2 — verify current FCA and UK SRS guidance before client delivery.

**Licence:** CC BY-NC-ND 4.0 (Foundation documentation). Attribution required; no modified redistribution.

**Copyright:** © 2026 The Landscape Archive Pty Ltd (operator). Proprietary datasets and group IP are owned by The Landscape Vault Pty Ltd. This crosswalk is published by The Landscape Archive Pty Ltd as founding implementation partner of The Landscape Archive Foundation.
