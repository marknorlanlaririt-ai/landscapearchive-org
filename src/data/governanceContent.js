import {
  FOUNDATION_COMMERCIAL_CONTACT_PATH,
  FOUNDATION_LICENCE_LABEL,
  ARCHIVE_CITATIONS_PATH,
  FEDERATION_SCHEMA_PORTAL_URL,
  FOUNDATION_GOVERNANCE_CITATION_URL,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  OPEN_STANDARD_GITHUB_TAG_URL,
  OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE,
  REGISTRY_PATH,
  SUPPORT_PATH,
  TLA169_DISPLAY_ID,
  TLA169_FIELD_COUNT,
  TLA185_DISPLAY_ID,
  TLA185_FIELD_COUNT,
  TLA185_VERSION,
  isOpenStandardGithubPubliclyAvailable
} from './foundationWing.js'
import { ARCHIVE_ORIGIN } from './site.js'
import { buildFoundationIntendedPurposeSections } from './purposeContent.js'

/**
 * Foundation mission, cultural pillars, and Foundation Standards.
 * Distinguishes live public standard work from incorporation-era goals.
 */
export function buildFoundationGovernanceSections({
  fieldCount = TLA185_FIELD_COUNT,
  baseFieldCount = TLA169_FIELD_COUNT
} = {}) {
  return Object.freeze([
    {
      id: 'standard-stewardship',
      heading: 'Standard stewardship',
      paragraphs: [
        'The Foundation’s public mandate is stewardship of the open specification — field registry, schemas, and conformance criteria — not subscriptions, proprietary datasets, or delivery tooling.',
        'The Landscape Vault Pty Ltd holds proprietary IP and, in the interim, stewards and powers the Foundation. The Landscape Archive Pty Ltd operates commercially under Vault licence. Until an independent steward exists, the draft terms on this page apply for consultation only.'
      ]
    },
    ...buildFoundationIntendedPurposeSections(),
    {
      id: 'truth-telling',
      heading: 'Truth-telling',
      paragraphs: [
        'Landscape projects carry claims about species, climate, sustainability, cultural context, and visual provenance. The Foundation publishes a shared vocabulary so those claims can be stated, checked, and questioned.',
        'Structural requirements include taxon IDs, banded site context, evidence URIs on sustainability fields, sensitivity classes for restricted cultural detail, and lineage metadata on synthetic assets. Substantive verification remains with project teams and governing institutions.'
      ],
      bullets: [
        'Botanical — names, taxon IDs, growth form in exchange bundles',
        'Climate and sustainability — auditable fields with evidence and method notes',
        'Cultural — protocol-aware metadata with sensitivity-class routing',
        'Provenance — attribution and lineage for synthetic or derivative assets',
        'Institutional — Foundation Approved (open conformance) vs Archive Certified (vendor credential)'
      ]
    },
    {
      id: 'three-entity-structure',
      heading: 'Three-entity structure',
      paragraphs: [
        'Commercial assets remain with the Vault and Archive. The public specification resides in the Foundation layer.'
      ],
      facts: [
        { label: 'The Landscape Vault Pty Ltd', value: 'Private IP holding company. Proprietary IP: TLA Brain, 3D assets, databases, pipelines. Stewards and powers the Foundation until incorporation.' },
        { label: 'The Landscape Archive Pty Ltd', value: 'Commercial operator under Vault licence. Products, subscriptions, sales, support. Live regional hub: landscapearchive.com.au (Australian data portal). Additional hubs planned — not live. Made in Australia; international customers welcome on published Terms. Independent of AILA, LI, ASLA, IFLA unless stated in writing.' },
        { label: 'The Landscape Archive Foundation', value: `Intended independent steward (incorporation in preparation). Public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} under CC BY-NC-ND 4.0.` }
      ]
    },
    {
      id: 'who-can-change-what',
      heading: 'Governance scope',
      paragraphs: [
        'Foundation governance covers the public specification. Member organisations retain authority over their own operations and IP.',
        'In scope: admitted members electing Council representatives and approving schema proposals. Outside scope: Foundation brand forks, Archive pricing, or Vault licensing terms.'
      ],
      facts: [
        { label: `${TLA185_DISPLAY_ID} extension`, value: 'Council — RFC, working group, simple majority' },
        { label: `${TLA169_DISPLAY_ID} minor release (1.x)`, value: 'Council — RFC, working group, simple majority' },
        { label: `${TLA169_DISPLAY_ID} / ${TLA185_DISPLAY_ID} major revision`, value: 'Council — RFC, two-thirds super-majority' },
        { label: 'Cultural context and badge criteria', value: 'Council with First Nations advisory review' },
        { label: 'Foundation budget, brand, domain', value: 'Council — simple majority; not-for-profit' },
        { label: 'GitHub releases', value: 'Foundation officers — public PRs; merges via officers' },
        { label: 'Member practice', value: 'Each member organisation' },
        { label: 'Member proprietary IP', value: 'Each member — contribution retains member project IP' },
        { label: 'Archive products and pricing', value: 'The Landscape Archive Pty Ltd — no Foundation voting seat' },
        { label: 'Vault IP', value: 'The Landscape Vault Pty Ltd — not Foundation-governed' },
        { label: 'Commercial implementation licence', value: 'The Landscape Archive Pty Ltd' },
        { label: 'Client project exchange records', value: 'Project author — restricted cultural material via sensitivity classes' }
      ]
    },
    {
      id: 'foundation-vs-archive',
      heading: 'Foundation and Archive',
      paragraphs: [
        'Foundation Approved is vendor-neutral open-specification conformance. Landscape Archive Certified is a paid practitioner credential — distinct from Foundation Approved.'
      ],
      facts: [
        { label: 'Vault — Brain, assets, datasets, pipelines', value: 'Proprietary IP — not Foundation-governed' },
        { label: `Foundation — ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID}, schemas, draft reference`, value: 'Public specification — CC BY-NC-ND 4.0' },
        { label: 'Foundation — Foundation Approved', value: 'Published conformance criteria' },
        { label: 'Foundation — cultural-context policy', value: 'Policy and checklists only' },
        { label: 'Archive — Library, Revit, Studio+™, shop', value: 'Commercial products' },
        { label: 'Archive — practitioner certification', value: 'Paid vendor credential' },
        { label: 'Archive — species library, licensed data', value: 'Outside the open GitHub layer' },
        { label: 'Layer 1 · Foundation Approved', value: 'Open conformance assessment' },
        { label: 'Layer 2 · Archive Certified', value: 'Archive training (paid)' },
        { label: 'Layer 3 · Institutional attestation (future)', value: 'Foundation policy; Archive may be one issuer' }
      ],
      bullets: [
        '“Foundation Approved” = open conformance; “Archive Certified” = practitioner credential',
        'Certification, commerce, and licensed datasets remain with the Archive'
      ],
      actions: [{ label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true }]
    },
    {
      id: 'draft-consultation',
      heading: 'Draft consultation — request a review pack',
      paragraphs: [
        'The published schema pack and field registry are open for critique as draft reference. Self-serve validators and the Evidence Checker are paused while licence clarity is completed. Request a review pack when you want structured follow-up on handover vocabulary.',
        'Founding-alliance language elsewhere on this site describes a proposed consultation model. The Foundation is preparing for incorporation; requesting a review pack does not create an alliance seat.',
        'Start with the shared-vocabulary Field Note and the field registry / draft dictionary.'
      ],
      bullets: [
        'Critique schema clarity, examples, and conformance notes',
        'Surface mapping gaps as public RFC feedback where possible',
        'Keep proprietary project IP and client data out of unsolicited attachments'
      ],
      actions: [
        { label: 'Request a review pack', href: '/contact#draft-consultation' },
        { label: 'A shared vocabulary', href: '/articles/a-shared-vocabulary' },
        { label: 'Field registry', href: REGISTRY_PATH },
        { label: 'Open field dictionary', href: `${FEDERATION_SCHEMA_PORTAL_URL}/dictionary`, external: true },
        { label: 'Licence & scope', href: '/licence' }
      ]
    },
    {
      id: 'founding-alliance',
      heading: 'Founding alliance',
      paragraphs: [
        'Draft model: an international coalition of independent organisations that could steward the open specification through charter consultation. No alliance has been formed yet.',
        'The Archive affiliate partner programme is a commercial referral arrangement and is separate from Foundation founding membership.',
        'If a founding alliance proceeds after incorporation, classes may include practices, universities, public bodies, Indigenous protocol authorities, supply-chain partners, and implementation partners (advisory; no voting majority). Each organisation remains legally independent.',
        'Interested organisations may read the draft charter and register interest. Alliance seating begins only after incorporation — requesting a review pack or charter comments does not create a seat.'
      ],
      bullets: [
        'Practice — landscape and allied firms',
        'Academic — universities and research groups',
        'Public-body — agencies referencing the open standard',
        'Indigenous protocol — custodial authorities with advisory sign-off on cultural-context rules',
        'Supply-chain — nurseries and material suppliers',
        'Implementation — BIM/GIS/validation vendors (advisory; no default vote)'
      ],
      facts: [
        { label: 'Affiliate partner programme', value: 'Commercial Archive programme — not Foundation membership' },
        { label: 'Founding alliance', value: 'Proposed; not formed' },
        { label: 'Implementation partners', value: 'Advisory by default; no voting majority' }
      ],
      actions: [
        { label: 'Draft consultation / review pack', href: '#draft-consultation' },
        { label: 'Adoption', href: '/adopt' },
        { label: 'Outreach summary', href: '/adopt#founding-alliance-outreach' },
        { label: 'Schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true },
        { label: 'Draft constitution', href: '/founding-charter' },
        {
          label: 'Charter consultation',
          href: `${FOUNDATION_SUPPORT_CONTACT_PATH}&intent=founding-alliance`,
          external: true
        },
        { label: 'Affiliate programme (commercial)', href: `${ARCHIVE_ORIGIN}/partners`, external: true }
      ]
    },
    {
      id: 'international-adoption',
      heading: 'International adoption',
      paragraphs: [
        'Credibility builds in layers: (1) published open specification with RFC and validator; (2) de facto adoption in tools, procurement, and teaching; (3) formal standardisation (ISO, buildingSMART, OGC) only after independent governance and real-world use.',
        'The Foundation does not claim ISO status or that Australian dataset bindings are universal. Other jurisdictions bind the same field IDs to local climate and geospatial products through published crosswalks.',
        'Formal standardisation remains forward work subject to Council approval, national-body sponsorship, and budget.'
      ],
      facts: [
        { label: 'Layer 1 · Open specification', value: 'Dictionary, RFC, schema portal, semver — live' },
        { label: 'Layer 2 · De facto adoption', value: 'Export profiles, crosswalks, pilots — early' },
        { label: 'Layer 3 · Formal standardisation', value: 'Not started; requires incorporated Foundation' },
        { label: 'Public language', value: 'Prefer “open landscape metadata standard”; reserve TLA codes for registry/schema' }
      ],
      bullets: [
        'Incorporate Foundation; recruit founding alliance members outside Australia',
        'Maintain public GitHub pack and 14-day RFC periods',
        'Pilot adoptions and standards-liaison introductions',
        'Publish jurisdiction crosswalks (UK, EU, US available)'
      ],
      actions: [
        { label: 'Adoption', href: '/adopt' },
        { label: 'UK IFRS S2', href: '/crosswalk/uk-ifrs-s2' },
        { label: 'AASB S2', href: '/crosswalk/aasb-s2' },
        { label: 'EU CSRD / ESRS E1', href: '/crosswalk/eu-csrd-esrs' },
        { label: 'US SEC climate', href: '/crosswalk/us-sec-climate' },
        { label: 'Schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true },
        { label: 'Draft constitution', href: '/founding-charter' }
      ]
    },
    {
      id: 'cultural-pillars',
      heading: 'Cultural pillars',
      paragraphs: [
        'Land, art, technology, and data frame why the Foundation exists. The five Foundation Standards below define what the open metadata steward publishes.',
        'Product organisations ship tools. The Foundation holds the charter those tools serve: open specification, registry, crosswalks, awards, education, and RFC governance.'
      ],
      facts: [
        { label: 'Land', value: 'Living systems, place, and practice — not generic nature content' },
        { label: 'Art', value: 'How landscape is seen and represented — not product marketing decks' },
        { label: 'Technology', value: 'Tools that make evidence usable — not feature promotion' },
        { label: 'Data', value: 'Traceable records and methods for the commons — not undifferentiated dumps' }
      ],
      actions: [
        { label: 'Foundation Standards', href: '#charter-pillars' },
        { label: 'Draft constitution', href: '/founding-charter' }
      ]
    },
    {
      id: 'charter-pillars',
      heading: 'Foundation Standards',
      paragraphs: [
        'Five interrelated standards describe domains where landscape project metadata must meet rising professional and public expectation. Together they treat truth in landscape documentation as an infrastructural problem: shared definitions, open governance, and a clear public/commercial boundary.'
      ]
    },
    {
      id: 'pillar-botanical-truth',
      heading: '1 · Botanical truth and reference standard',
      paragraphs: [
        `Planting schedules often imply botanical knowledge without encoding it. ${TLA185_DISPLAY_ID} (${fieldCount} elements; extending ${TLA169_DISPLAY_ID} at ${baseFieldCount}) defines taxonomy, traits, botanical asset rows, and BIM delivery metadata as first-class interchange elements.`,
        'A Foundation Approved bundle should carry at least one botanical asset row reconstructable without proprietary joins: taxon identifier, scientific name, native status, and growth form. Populated species matrices remain licensed Archive/Vault datasets.'
      ]
    },
    {
      id: 'pillar-climate-compliance',
      heading: '2 · Climate and environmental disclosure',
      paragraphs: [
        `${TLA185_DISPLAY_ID} extends environment and sustainability modules with site-context bands, climate screening, risk metadata, and structured disclosure fields with method notes.`,
        'The Foundation specifies metadata shape. Entity-level inventories, audited filings, and regulatory assessments remain with project teams and institutions.'
      ]
    },
    {
      id: 'pillar-open-infrastructure',
      heading: '3 · Open research infrastructure',
      paragraphs: [
        `Universities and practitioners need a stable, citable reference independent of vendor access. The Foundation maintains the canonical specification, schema artefacts, examples, and reference validators for ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID}.`,
        'TLA Brain, high-fidelity assets, Studio+™, and populated libraries remain licensed commercial products. The Foundation layer holds the grammar of landscape project metadata.'
      ]
    },
    {
      id: 'pillar-government',
      heading: '4 · Public-sector and digital twin interface',
      paragraphs: [
        'Agencies may cite the open specification in procurement and digital twin discussions without lock-in to a single vendor data model. Foundation Approved provides a machine-checkable interchange baseline.',
        'Reference the schema under the published licence; implement through licensed partners as needed; assess records against published conformance criteria.'
      ]
    },
    {
      id: 'pillar-ai-ethics',
      heading: '5 · Ethics of synthetic nature and attribution',
      paragraphs: [
        'Synthetic imagery enters landscape visualisation faster than shared provenance rules. The specification separates open schema from commercial assets and defines sensitivity classes for restricted cultural detail.',
        'Planned policy will require creator attribution, derivation lineage, and explicit marking of synthetic or composite assets in exchange bundles.'
      ]
    },
    {
      id: 'licence-sovereignty',
      heading: 'Licence',
      paragraphs: [
        `Public specification (${fieldCount} documented elements) and schema documentation are published under ${FOUNDATION_LICENCE_LABEL}:`,
        'Library, Hub, Studio+™, Data API, 3D assets, and populated datasets are not under Creative Commons — they are licensed separately by The Landscape Archive Pty Ltd.'
      ],
      bullets: [
        'BY — canonical specification must be credited',
        'NC — commercial use requires a separate Archive licence',
        'ND — modified redistributions are not permitted; updates via Foundation semver only'
      ],
      actions: [{ label: 'Licence & scope', href: '/licence' }]
    },
    {
      id: 'interim-stewardship',
      heading: 'Interim stewardship',
      paragraphs: [
        'The Foundation name reflects intended stewardship once an independent entity exists. In the interim it is stewarded and powered by The Landscape Vault Pty Ltd, which holds copyright in the public specification pending assignment. Commercial operations: The Landscape Archive Pty Ltd.',
        'These pages describe draft governance and licence terms for discussion only.'
      ],
      bullets: [
        `Specification under ${FOUNDATION_LICENCE_LABEL}`,
        'Stewarded and powered by The Landscape Vault Pty Ltd, which holds interim copyright',
        'Species values, automation, and commercial assets excluded from the open layer'
      ]
    },
    {
      id: 'citation-guidance',
      heading: 'How to cite',
      paragraphs: [
        `Recommended: The Landscape Archive Foundation. ${TLA185_DISPLAY_ID} Landscape Metadata Standard, version ${TLA185_VERSION}. ${FOUNDATION_GOVERNANCE_CITATION_URL} (accessed [date]). Licensed under ${FOUNDATION_LICENCE_LABEL}.`,
        'For the field registry or a release tag, add that identifier. Cite commercial Archive products separately at landscapearchive.com.au/citations.',
        ...(isOpenStandardGithubPubliclyAvailable()
          ? []
          : [OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE])
      ],
      actions: [
        { label: 'Archive citation hub', href: ARCHIVE_CITATIONS_PATH, external: true },
        { label: 'Field registry', href: REGISTRY_PATH },
        ...(isOpenStandardGithubPubliclyAvailable()
          ? [{ label: 'Release tag 185-v1.0.0', href: OPEN_STANDARD_GITHUB_TAG_URL, external: true }]
          : [{ label: 'Schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true }])
      ]
    },
    {
      id: 'commercial-bridge',
      heading: 'Commercial use',
      paragraphs: [
        'Non-commercial reference (teaching, research, open government documentation) may be permitted under NC terms. Commercial implementation licences through The Landscape Archive Pty Ltd.'
      ],
      actions: [
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Support status', href: SUPPORT_PATH }
      ]
    }
  ])
}
