import {
  FOUNDATION_COMMERCIAL_CONTACT_PATH,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  FEDERATION_SCHEMA_PORTAL_URL,
  GOVERNANCE_PATH,
  ADOPT_PATH,
  OPEN_STANDARD_GITHUB_TAG_URL,
  OPEN_STANDARD_GITHUB_URL,
  OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE,
  TLA169_DISPLAY_ID,
  TLA185_DISPLAY_ID,
  TLA185_FIELD_COUNT,
  TLA185_REGISTRY_PREVIEW_FIELD_LIMIT,
  isOpenStandardGithubPubliclyAvailable
} from './foundationWing.js'
import { FOUNDATION_SUPPORT_BANK_FACTS } from './support.js'

export function buildFoundationHomeSections({
  fieldCount = TLA185_FIELD_COUNT,
  previewFieldLimit = TLA185_REGISTRY_PREVIEW_FIELD_LIMIT
} = {}) {
  return Object.freeze([
    {
      id: 'mission-draft',
      heading: 'Mission',
      paragraphs: [
        `The open specification serves as a global data layer and governance standard for living digital twins. The intended mission is to advance environmental and social benefit through open, citable infrastructure for honest landscape documentation — and, with it, a durable future for landscape architecture as a digitally documented discipline: honest records, open standards, and inspectable claims rather than implied credentials. Botanical authenticity, auditable climate disclosure, culturally protocol-aware metadata, and ethical synthetic-nature provenance are encoded in the public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification, a shared vocabulary that makes project archives independently reviewable.`,
        'That work supports capacity building internationally among landscape architects, ecologists, BIM information managers, and allied professions — including practitioners whose documentation, ecological, custodial, and information-management work is often unseen and unheard in public recognition, yet whose project records must remain legible at handover — in teaching, research, procurement, and public-sector digital programmes. This is draft charitable scope for consultation; we do not claim incorporated charity status, active grant programmes, or humanitarian field operations.'
      ],
      actions: [{ label: 'Read full draft mission (governance)', href: `${GOVERNANCE_PATH}#draft-mission` }]
    },
    {
      id: 'about-us',
      heading: 'About us',
      paragraphs: [
        "A successful landscape project demands more than aesthetic appeal. It requires a verifiable declaration of truth — and a project archive that remains legible after handover: the species used, the site's specific context, the evidence for every claim, the status of restricted cultural artifacts, and a clear chain of custody for synthetic assets. An open specification provides this shared vocabulary, making truth transparent, auditable, and retrievable.",
        `At the heart of our ecosystem lies the Landscape Vault, which safeguards the proprietary code and intellectual property. The Landscape Archive drives commercial operations, while the Foundation ensures the integrity of the whole system through an open specification. We call this ${TLA185_DISPLAY_ID} — the public infrastructure for truth in landscape metadata, covering botanical authenticity, auditable climate data, honest sustainability, and ethical synthetic nature.`,
        'We recognize that a private operator is a replicable asset, but an open specification — endorsed by universities, regulators, and public bodies — becomes a foundational standard. It is this standard that is hard to displace. By keeping the production assets and automation securely within the Vault, we ensure that while the specification is public, the operational superiority remains uniquely ours.'
      ],
      actions: [{ label: 'Read the Foundation Standards', href: GOVERNANCE_PATH }]
    },
    {
      id: 'truth-telling',
      heading: 'Truth and truth-telling',
      paragraphs: [
        'Landscape drawings and models often look definitive while the underlying claims stay implicit — “native planting,” “climate resilient,” “sustainable,” “culturally appropriate.” The Foundation publishes the field dictionary and conformance rules so those claims can be stated precisely, evidenced, and reviewed.',
        'Truth-telling is structural in this programme: taxon IDs and growth forms in exchange bundles; banded climate context with documented screening methodology; evidence links on sustainability fields; sensitivity classes that route restricted cultural detail to appropriate repositories; lineage metadata on synthetic assets.',
        'The Foundation defines how honest disclosure should be encoded — supplying practitioners and institutions a shared vocabulary for what was claimed and what supports it, complementing professional judgement, client sign-off, regulatory audit, and community protocol.'
      ],
      actions: [{ label: 'Read the truth-telling charter', href: `${GOVERNANCE_PATH}#truth-telling` }]
    },
    {
      id: 'use-the-standard',
      heading: 'The specification in practice',
      paragraphs: [
        `${TLA185_DISPLAY_ID} articulates ${fieldCount} documented elements across Australian landscape projects — taxonomy, site context, mid-century climate screening, environmental risk, sustainability, cultural sensitivity, and BIM interoperability. The earlier ${TLA169_DISPLAY_ID} profile remains supported for legacy exchange records. The published layer comprises structural definitions — field types, modules, and conformance rules — while populated species inventories, trait values, and client records reside in licensed implementation datasets.`,
        ...(isOpenStandardGithubPubliclyAvailable()
          ? [
              'The canonical specification, JSON Schema modules, and worked examples are published on GitHub and the schema portal. GitHub is the authoritative source. The open repository is world-readable.'
            ]
          : [OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE])
      ],
      actions: [
        ...(isOpenStandardGithubPubliclyAvailable()
          ? [
              { label: 'Read canonical specification', href: OPEN_STANDARD_GITHUB_TAG_URL, external: true },
              { label: 'View repository', href: OPEN_STANDARD_GITHUB_URL, external: true }
            ]
          : []),
        { label: 'Open schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true },
        { label: 'Get started in 15 minutes', href: ADOPT_PATH }
      ]
    },
    {
      id: 'governance',
      heading: 'Governance and licence',
      paragraphs: [
        'The Landscape Archive Foundation is the intended independent steward of the public specification layer. Interim hosting is provided by The Landscape Archive Pty Ltd (implementation partner) pending establishment of a suitable independent entity.',
        'The public specification and schema documentation are published under CC BY-NC-ND 4.0 — attribution required; non-commercial reference without modification.'
      ],
      actions: [{ label: 'Governance and Foundation Standards', href: GOVERNANCE_PATH }]
    },
    {
      id: 'commercial',
      heading: 'Commercial implementation',
      paragraphs: [
        'High-fidelity assets, TLA Brain automation, enterprise BIM integration, Archive Certified practitioner training, and certified practice tooling are licensed separately through The Landscape Archive Pty Ltd.',
        'Foundation Approved designates conformance with the open specification and remains distinct from Archive Certified, the paid vendor credential. See governance for the full responsibility split.'
      ],
      actions: [
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Foundation vs Archive responsibilities', href: GOVERNANCE_PATH }
      ]
    },
    {
      id: 'support',
      heading: 'Support the standard',
      paragraphs: [
        'The Landscape Archive Foundation is not yet an incorporated entity. Voluntary contributions are received interim by The Landscape Archive Pty Ltd (implementation partner) and are not yet eligible for tax-deductible receipts.',
        `Referencing ${TLA185_DISPLAY_ID} or ${TLA169_DISPLAY_ID} under CC BY-NC-ND 4.0 requires no payment; voluntary support helps fund hosting, documentation, and governance preparation.`,
        'Bank transfer (Australia): expand the bank details below. Include the payment reference so we can reconcile your transfer.'
      ],
      facts: [...FOUNDATION_SUPPORT_BANK_FACTS],
      factsCollapsible: true,
      factsToggleLabel: 'Show bank transfer details',
      bullets: [
        'Tax-deductible treatment may apply if and when an independent Foundation entity is established and any applicable deductible gift recipient registration is obtained.',
        'We only publish these bank details on our official Landscape Archive websites (landscapearchive.org and landscapearchive.com.au) — never by SMS or from a personal email address.',
        'For invoicing, recurring support, or amounts over $5,000 AUD, contact us first.'
      ],
      actions: [{ label: 'Questions about support', href: FOUNDATION_SUPPORT_CONTACT_PATH, external: true }]
    }
  ])
}
