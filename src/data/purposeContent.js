import {
  FOUNDATION_GOVERNANCE_UPDATES_FRAGMENT,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  SUPPORT_PATH,
  TLA185_DISPLAY_ID,
  TLA169_DISPLAY_ID
} from './foundationWing.js'

/**
 * Draft intended public purpose — incorporation-readiness framing for consultation.
 * Wording distinguishes aspirational charitable scope from live operations.
 */
export function buildFoundationIntendedPurposeSections() {
  return Object.freeze([
    {
      id: 'intended-purpose',
      heading: 'Intended public purpose (draft)',
      paragraphs: [
        'The sections below describe draft charitable scope for consultation. They are not incorporated objects, registered charity status, or an active grant programme.',
        'The Foundation name reflects intended stewardship of the public specification once an independent entity exists. In the interim it is stewarded and powered by The Landscape Vault Pty Ltd; correspondence and commercial operations are through The Landscape Archive Pty Ltd. Nothing here solicits donations on behalf of a registered charity.'
      ],
      actions: [
        {
          label: 'Governance updates',
          href: FOUNDATION_GOVERNANCE_UPDATES_FRAGMENT
        }
      ]
    },
    {
      id: 'draft-mission',
      heading: 'Mission',
      paragraphs: [
        `Intended mission: advance environmental and social benefit through open, citable infrastructure for honest landscape documentation. Botanical authenticity, climate disclosure, cultural-protocol metadata, and synthetic-nature provenance are encoded in ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID}.`,
        'Capacity building focuses on teaching, research, procurement, and public-sector digital programmes — the metadata layer for professional and institutional records.'
      ]
    },
    {
      id: 'draft-beneficiaries',
      heading: 'Intended beneficiaries',
      paragraphs: [
        'Intended beneficiaries rely on inspectable landscape project records. No beneficiary services or enrolment programmes are offered today.',
        'The specification is published internationally for citation under the non-commercial licence. Australian field modules reflect the standard’s origin; other jurisdictions adapt via published crosswalks.'
      ],
      bullets: [
        'Practitioners, educators, and students needing a vendor-neutral metadata reference',
        'Researchers and herbaria supplying taxonomic and environmental evidence',
        'Indigenous knowledge holders whose protocol governs restricted cultural metadata',
        'Public agencies and standards bodies referencing open planting metadata',
        'Publics who benefit when project archives remain legible after handover'
      ]
    },
    {
      id: 'draft-activities',
      heading: 'Activities',
      paragraphs: [
        'Live work: field registry, schema documentation, reference validation, governance pages, and conformance criteria. Awards, volunteer coordination, and institutional roundtables are in preparation.',
        'Future activities require independent entity formation and Council approval. Grants, paid services, and overseas branch operations are not active.'
      ],
      bullets: [
        'Live: specification, registry, schema portal, governance, conformance criteria',
        'In preparation: awards, volunteer onboarding, public briefings',
        'Intended: RFC cycles, institutional memoranda, adoption materials',
        'Institutional asks (proposed, not existing): Ecological & Built-Environment Data Authority (EBDA); International Land-Data Exchange (ELDX)',
        'Later / separate: grants and scholarships after entity formation; Archive Certified training via Archive commercial channels'
      ]
    },
    {
      id: 'draft-funding',
      heading: 'Funding',
      paragraphs: [
        'Due to our incorporation status, voluntary contribution intake has been taken down. The Foundation is not yet an independent incorporated entity, so we are not accepting bank transfers, donations, or public fundraising on this site.',
        'Referencing the open specification remains free under CC BY-NC-ND 4.0. For institutional partnerships or funding conversations after incorporation, contact us — not a donation form.'
      ],
      bullets: [
        'Today: contribution intake paused (see Support page)',
        'Future: donations, grants, and sponsorships when entity structure allows',
        'Commercial implementation remains licensed through The Landscape Archive Pty Ltd'
      ],
      actions: [
        { label: 'Support status', href: SUPPORT_PATH },
        {
          label: 'Foundation enquiry',
          href: FOUNDATION_SUPPORT_CONTACT_PATH,
          external: true
        }
      ]
    }
  ])
}
