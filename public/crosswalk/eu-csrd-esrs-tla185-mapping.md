# TLA-185 → EU CSRD / ESRS E1 concept crosswalk

Copyright © 2026 The Landscape Archive Pty Ltd (ABN 90 694 672 403). Proprietary data referenced herein is owned by The Landscape Vault Pty Ltd.

Maps **Foundation open** TLA-185 field identifiers to **commonly encountered EU CSRD / ESRS E1 Climate change** concepts for procurement and assurance review.

| Layer | Owner | Licence |
|-------|-------|---------|
| TLA-185 field dictionary (`tla185-fields.json`) | The Landscape Archive Foundation | CC BY-NC-ND 4.0 |
| Climate evidence exports & jurisdiction joins | The Landscape Archive Pty Ltd | EULA / commercial terms |

This document is a **concept crosswalk only**. It does not grant access to Archive datasets, satisfy EU statutory filing obligations under the Corporate Sustainability Reporting Directive (CSRD), or constitute legal or assurance advice.

**Applies to:** ESRS E1 climate change disclosures under CSRD — verify current EFRAG implementation guidance, national transposition, and sector-specific ESRS before client delivery.

---

## Scope — stated plainly

ESRS E1 is **climate-focused** within the broader CSRD sustainability reporting set. It does not legally mandate purchase of a TLA-185 certificate, and biodiversity is addressed separately under ESRS E4 (not covered here). TLA-185 provides **screening-grade, site-level environmental metadata** with provenance — useful for physical-risk and adaptation narratives inside ESRS E1 strategy, governance, and metrics disclosures, not as a substitute for entity GHG inventories, energy accounting, or financial quantification.

Australian-origin screening fields (SILO, CCIA) illustrate the **structural slots** in the open dictionary. EU implementers bind the same slots to **Copernicus Climate Data Store**, EU JRC climate products, national meteorological services, and EEA hazard layers through published jurisdiction packs — without inventing parallel field names.

---

## Coverage legend

| Label | Meaning |
|-------|---------|
| **Supporting input** | Fields can supply defensible, traceable inputs to the named ESRS E1 area when used with entity governance and professional judgement. |
| **Adjacent — not a substitute** | Related metrics exist but must not be presented as the core ESRS E1 metric. |
| **Out of scope** | Satisfied outside landscape metadata (governance process, finance, transition-risk analysis, energy/GHG inventories). |
| **Forward — not yet mandated** | Positions for future nature-related disclosure (ESRS E4 / TNFD-aligned concepts); not required under ESRS E1 today. |
| **Jurisdiction pack** | Same TLA-185 field ID; local dataset binding documented in provenance fields. |

---

## Requirement-by-requirement mapping

Source field IDs refer to `tla185-fields.json` v1.0.0. See the [field registry](https://landscapearchive.org/registry) for jsonPath and module detail.

| Disclosure area | ESRS E1 location | Coverage | TLA-185 field IDs | Notes |
|-----------------|------------------|----------|-------------------|-------|
| Physical risk — acute (heat, wildfire) | E1 · climate-related physical risks | Supporting input | 185-180, 185-181, 185-094, 185-183, 185-184, 185-185 | Heat-stress and wildfire-overlay screening at the site point. **Jurisdiction pack:** EEA wildfire danger / European Forest Fire Information System (EFFIS) proxies and Copernicus CDS heat indices replace Australian CCIA bushfire proxies. **Screening only** — verify against national civil-protection and planning products. |
| Physical risk — chronic (drought, aridity) | E1 · climate-related physical risks | Supporting input | 185-179, 185-093, 185-048, 185-043 | Rainfall-trend and aridity screening provide a defensible chronic-risk baseline per site. **Jurisdiction pack:** Copernicus CDS precipitation deltas, EU JRC drought indicators, national met-service 1991–2020 normals. |
| Scenario analysis | E1 · climate resilience / transition plan context | Supporting input | 185-176, 185-177, 185-178, 185-182 | Projection scenarios use the IPCC SSP set (SSP1-2.6 … SSP5-8.5) — the same scenario family commonly referenced in ESRS E1 resilience narratives. Copernicus CDS SSP/RCP-aligned products map here via provenance. |
| Resilience & adaptation measures | E1 · actions and resources (adaptation) | Supporting input | 185-098, 185-099, 185-095 | SuDS / WSUD, native-planting %, and climate-positive flags can evidence adaptation narrative when linked to project decisions. EU Green Infrastructure and national adaptation strategies may inform method notes — not automatic compliance claims. |
| Assets / activities vulnerable to physical risk | E1 · anticipated financial effects (physical risk) | Supporting input | 185-110, 185-111, 185-112, 185-091, 185-089, 185-090 | Asset register plus site-context exposure supports computing the share of assets in elevated heat/wildfire/flood bands. Flood screening may reference EEA flood layers and national hazard maps in jurisdiction packs. |
| Risk-management process & audit trail | ESRS 2 · IRO process / E1 governance | Supporting input | 185-052, 185-053, 185-182, 185-101, 185-102, 185-103 | **Strongest alignment.** Provenance, evidence, and method references make physical-risk inputs traceable for limited assurance review under CSRD. |
| GHG emissions (Scope 1 / 2 / 3) | E1-6 · gross GHG emissions | Adjacent — not a substitute | 185-096, 185-097 | Sequestration and embodied-carbon fields are **not** a Scope 1/2/3 inventory. Do not present as ESRS E1-6 emissions metrics. |
| Energy consumption and mix | E1-5 | Out of scope | — | Entity energy accounting — outside landscape metadata. |
| Transition plan & transition risk | E1-1 · transition risks | Out of scope | — | Outside landscape metadata. Entity ESG / finance process. |
| Internal carbon pricing | E1-8 | Out of scope | — | Financial / policy instrument — not the schema. |
| Governance (board & management oversight) | ESRS 2 · governance | Out of scope | — | No data role. Satisfied by the entity's own governance disclosures. |
| Anticipated financial effects (quantification) | E1-9 | Out of scope | — | Financial quantification is the auditor / CFO domain, not the schema. |

---

## EU jurisdiction pack — dataset bindings (illustrative)

These bindings populate the **same** TLA-185 field IDs. They are documented in `185-052` (dataSource), `185-053` (methodNote), and `185-182` (screeningDisclaimer) — not as alternate schema forks.

| TLA-185 slot | Australian default (reference) | EU illustrative binding |
|--------------|-------------------------------|-------------------------|
| Projection deltas (185-179, 185-180, 185-181) | SILO / CCIA mid-century bands | Copernicus Climate Data Store (CDS) — EURO-CORDEX or CMIP6 ensemble percentiles |
| Heat stress (185-094, 185-183) | CCIA heat-stress overlay | CDS heat indices; EU JRC heat-stress indicators |
| Wildfire overlay (185-184, 185-185) | CCIA bushfire proxy | EEA / EFFIS wildfire danger and burned-area trend screening (planning-grade) |
| Köppen / rainfall bands (185-048, 185-043) | SILO 1990–2020 climatology | National met services (e.g. DWD, Météo-France, KNMI) 1991–2020 normals |
| Flood exposure (asset context) | Local planning overlays | EEA flood hazard layers; national river-authority zones (method note required) |
| Drought / aridity (185-093) | SILO rainfall trend | EU JRC European Drought Observatory indicators |

---

## Strongest beachhead — audit trail

Assurers need **traceability** from disclosure claims back to source methods. TLA-185 provenance and evidence fields (`185-052`, `185-053`, `185-182`, `185-101`, `185-102`, `185-103`) document how physical-risk screening inputs were derived, including projection sources and screening disclaimers.

Built-in screening language (e.g. wildfire overlay as planning proxy, not statutory certificate) should be retained in exports — honesty supports credibility under EU limited assurance practice.

---

## Adjacent — GHG and carbon fields

| Field IDs | Role under ESRS E1 |
|-----------|-------------------|
| 185-096, 185-097 | May support **adjacent** narrative on sequestration or embodied carbon in project context. **Do not** substitute for mandatory E1-6 GHG emissions metrics. |

For entity-level Scope 1–3 reporting, use recognised GHG accounting frameworks (EU GHG Protocol implementations, ISO 14064) and inventory tools separate from landscape interchange bundles.

---

## Forward — nature / biodiversity (ESRS E4 / TNFD)

Not mandated under ESRS E1 today. CSRD requires separate biodiversity reporting under ESRS E4. The following TLA-185 fields pre-position project records for future ESRS E4 / TNFD-aligned reporting when organisations choose to extend disclosure:

| Field ID | Key (abbrev.) |
|----------|---------------|
| 185-013 | nativeStatus |
| 185-014 | conservationStatus |
| 185-015 | occurrenceCount |
| 185-099 | nativePlantingPercent |
| 185-049 | landcoverClassBand |
| 185-104 | sensitivityClass |

Describe these as **forward positioning**, never as satisfying a current ESRS E1 biodiversity mandate.

---

## Defensible procurement sentence

> TLA-185 provides standardised, traceable site-level environmental metadata that supports the physical-risk and adaptation portions of an ESRS E1 climate disclosure when bound to EU climate products (e.g. Copernicus CDS, EU JRC, EEA hazard layers) through documented jurisdiction packs. It is screening-grade input, not a statutory certificate, an ESRS E1-6 GHG emissions inventory, or an energy-consumption record.

---

## Related Foundation artefacts

| Document | Purpose |
|----------|---------|
| [UK IFRS S2 crosswalk](./uk-ifrs-s2-tla185-mapping.md) | UK-endorsed IFRS S2 analogue — same structural mapping, UK jurisdiction pack |
| [US SEC climate crosswalk](./us-sec-climate-tla185-mapping.md) | US SEC Reg S-K Item 1300 analogue — NOAA / USFS / USGS / NEX-GDDP jurisdiction pack |
| [AASB S2 crosswalk](./aasb-s2-tla185-mapping.md) | Australian analogue — same structural mapping, different regulator |
| [TLA-185 climate screening RFC](../rfc/TLA-185-climate-screening-rfc.md) | Normative band rules for 185 screening fields |
| [Schema manifest](../schema/manifest.json) | Module index and implementation references |
| [International adoption roadmap](https://landscapearchive.org/governance#international-adoption) | Three-layer path from open spec to formal standardisation |

---

## Version

- **Crosswalk version:** 1.0.0 (2026-07-07)
- **Field dictionary:** `tla185-fields.json` v1.0.0
- **ESRS E1 scope:** per CSRD / EFRAG ESRS Set 1 — verify current EU and national transposition guidance before client delivery.

**Licence:** CC BY-NC-ND 4.0 (Foundation documentation). Attribution required; no modified redistribution.

**Copyright:** © 2026 The Landscape Archive Pty Ltd (operator). Proprietary datasets and group IP are owned by The Landscape Vault Pty Ltd. This crosswalk is published by The Landscape Archive Pty Ltd as founding implementation partner of The Landscape Archive Foundation.
