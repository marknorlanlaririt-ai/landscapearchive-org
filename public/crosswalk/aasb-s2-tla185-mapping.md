# TLA-185 → AASB S2 concept crosswalk

Copyright © 2026 The Landscape Archive Pty Ltd (ABN 90 694 672 403). Proprietary data referenced herein is owned by The Landscape Vault Pty Ltd.

Maps **Foundation open** TLA-185 field identifiers to **commonly encountered AASB S2 Climate-related Disclosures** concepts for procurement and assurance review.

| Layer | Owner | Licence |
|-------|-------|---------|
| TLA-185 field dictionary (`tla185-fields.json`) | The Landscape Archive Foundation | CC BY-NC-ND 4.0 |
| Climate evidence exports & Run-01 joins | The Landscape Archive Pty Ltd | EULA / commercial terms |

This document is a **concept crosswalk only**. It does not grant access to Archive datasets, satisfy statutory filing obligations, or constitute legal or assurance advice.

**Applies to:** reporting periods commencing on or after **1 July 2026** (Group 2 entities under ASIC RG 280).

---

## Scope — stated plainly

AASB S2 is **climate-only**. It does not legally mandate biodiversity disclosure today, and no law requires purchase of a TLA-185 certificate. TLA-185 provides **screening-grade, site-level environmental metadata** with provenance — useful for physical-risk and resilience narratives inside Strategy and Risk management disclosures, not as a substitute for entity GHG inventories or financial quantification.

---

## Coverage legend

| Label | Meaning |
|-------|---------|
| **Supporting input** | Fields can supply defensible, traceable inputs to the named S2 area when used with entity governance and professional judgement. |
| **Adjacent — not a substitute** | Related metrics exist but must not be presented as the core S2 metric. |
| **Out of scope** | Satisfied outside landscape metadata (governance process, finance, transition-risk analysis). |
| **Forward — not yet mandated** | Positions for future nature-related disclosure (TNFD-aligned concepts); not required under S2 today. |

---

## Requirement-by-requirement mapping

Source field IDs refer to `tla185-fields.json` v1.0.0. See the [field registry](https://landscapearchive.org/registry) for jsonPath and module detail.

| Disclosure area | AASB S2 location | Coverage | TLA-185 field IDs | Notes |
|-----------------|------------------|----------|-------------------|-------|
| Physical risk — acute (heat, bushfire) | Strategy · climate-related physical risks | Supporting input | 185-180, 185-181, 185-094, 185-183, 185-184, 185-185 | Heat-stress and bushfire-overlay screening at the site point. **Screening only** — verify against CCIA products and statutory BAL where applicable. |
| Physical risk — chronic (drought, aridity) | Strategy · climate-related physical risks | Supporting input | 185-179, 185-093, 185-048, 185-043 | Rainfall-trend and aridity screening provide a defensible chronic-risk baseline per site. |
| Scenario analysis | Strategy · climate resilience | Supporting input | 185-176, 185-177, 185-178, 185-182 | Projection scenarios use the IPCC SSP set (SSP1-2.6 … SSP5-8.5) — the same scenario family commonly referenced in S2 resilience narratives. |
| Resilience & adaptation measures | Strategy · climate resilience | Supporting input | 185-098, 185-099, 185-095 | WSUD, native-planting %, and climate-positive flags can evidence adaptation/opportunity narrative when linked to project decisions. |
| Assets / activities vulnerable to physical risk (amount & %) | Metrics & targets · cross-industry | Supporting input | 185-110, 185-111, 185-112, 185-091, 185-089, 185-090 | Asset register plus site-context exposure supports computing the share of assets in elevated heat/bushfire bands. |
| Risk-management process & audit trail | Risk management · identify / assess / monitor | Supporting input | 185-052, 185-053, 185-182, 185-101, 185-102, 185-103 | **Strongest alignment.** Provenance, evidence, and method references make physical-risk inputs traceable for assurance review. |
| GHG emissions (Scope 1 / 2 / 3) | Metrics & targets · core metric | Adjacent — not a substitute | 185-096, 185-097 | Sequestration and embodied-carbon fields are **not** a Scope 1/2/3 inventory. Embodied carbon may inform a Scope 3 line item; do not present as the emissions metric. |
| Governance (board & management oversight) | Governance | Out of scope | — | No data role. Satisfied by the entity's own governance disclosures. |
| Transition risk (policy, technology, market, legal) | Strategy · transition risks | Out of scope | — | Outside landscape metadata. Entity ESG / finance process. |
| Effects on financial position & performance | Strategy · financial effects | Out of scope | — | Financial quantification is the auditor / CFO domain, not the schema. |

---

## Strongest beachhead — audit trail

Assurers need **traceability** from disclosure claims back to source methods. TLA-185 provenance and evidence fields (`185-052`, `185-053`, `185-182`, `185-101`, `185-102`, `185-103`) document how physical-risk screening inputs were derived, including projection sources and screening disclaimers.

Built-in screening language (e.g. bushfire overlay as planning proxy, not BAL certificate) should be retained in exports — honesty supports credibility.

---

## Adjacent — GHG and carbon fields

| Field IDs | Role under S2 |
|-----------|---------------|
| 185-096, 185-097 | May support **adjacent** narrative on sequestration or embodied carbon in project context. **Do not** substitute for mandatory GHG emissions metrics. |

For entity-level Scope 1–3 reporting, use recognised GHG accounting frameworks and inventory tools. Commercial climate evidence exports from The Landscape Archive are scoped to Strategy / Risk appendices only — not statutory GHG filing.

---

## Forward — nature / biodiversity (TNFD)

Not mandated under AASB S2 today. Australian policy direction is **"climate first, but not only."** The following TLA-185 fields pre-position project records for future nature-related disclosure when organisations choose to extend reporting:

| Field ID | Key (abbrev.) |
|----------|---------------|
| 185-013 | nativeStatus |
| 185-014 | conservationStatus |
| 185-015 | occurrenceCount |
| 185-099 | nativePlantingPercent |
| 185-049 | landcoverClassBand |
| 185-104 | sensitivityClass |

Describe these as **forward positioning**, never as satisfying a current S2 biodiversity mandate.

---

## Defensible procurement sentence

> TLA-185 provides standardised, traceable site-level environmental metadata that supports the physical-risk and resilience portions of an AASB S2 disclosure, and pre-positions an organisation for future nature-related disclosure. It is screening-grade input, not a statutory certificate or a GHG emissions inventory.

---

## Related Foundation artefacts

| Document | Purpose |
|----------|---------|
| [Run-01 → TLA-185 environment crosswalk](./tla185-run01-environment-map.md) | Maps commercial pipeline joins to open bundle fields |
| [TLA-185 climate screening RFC](../rfc/TLA-185-climate-screening-rfc.md) | Normative band rules for 185 screening fields |
| [Schema manifest](../schema/manifest.json) | Module index and implementation references |

---

## Version

- **Crosswalk version:** 1.0.0 (2026-06-30)
- **Field dictionary:** `tla185-fields.json` v1.0.0
- **AASB S2 scope:** per AASB standard and ASIC RG 280 — verify current regulator guidance before client delivery.

**Licence:** CC BY-NC-ND 4.0 (Foundation documentation). Attribution required; no modified redistribution.

**Copyright:** © 2026 The Landscape Archive Pty Ltd (operator). Proprietary datasets and group IP are owned by The Landscape Vault Pty Ltd. This crosswalk is published by The Landscape Archive Pty Ltd as founding implementation partner of The Landscape Archive Foundation.
