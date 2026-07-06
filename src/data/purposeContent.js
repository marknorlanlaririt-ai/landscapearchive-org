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
        'The sections below describe an intended public purpose — draft charitable scope published for consultation with advisers, founding members, and international collaborators. They do not constitute incorporated objects, registered charity status, or an active grant-making programme.',
        'The Landscape Archive Foundation name reflects intended stewardship of the public specification once a suitable independent entity is established. Interim hosting and correspondence are provided by The Landscape Archive Pty Ltd (Australian implementation partner). Nothing on this page should be read as proceeding toward incorporation or as soliciting donations on behalf of a registered charity.'
      ],
      actions: [
        {
          label: 'Register interest in governance updates',
          href: FOUNDATION_GOVERNANCE_UPDATES_FRAGMENT
        }
      ]
    },
    {
      id: 'draft-mission',
      heading: 'Mission — environmental, social, and public benefit',
      paragraphs: [
        `The intended mission is to advance environmental and social benefit through open, citable infrastructure for honest landscape documentation — botanical authenticity, auditable climate disclosure, culturally protocol-aware metadata, and ethical synthetic-nature provenance. The public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification is the primary instrument: a shared vocabulary that makes project claims inspectable rather than implied.`,
        'That work supports capacity building in landscape architecture, landscape ecology, BIM information management, and allied professions internationally — in teaching, research, procurement, and public-sector digital twin programmes. Where landscape documentation intersects with biodiversity stewardship, climate adaptation, and culturally appropriate representation of Country, the Foundation’s role is definitional and archival, not humanitarian relief. We do not claim to operate disaster response, aid delivery, or community development programmes; we steward the metadata layer within which honest professional and institutional claims can be stated and reviewed.'
      ]
    },
    {
      id: 'draft-beneficiaries',
      heading: 'Intended beneficiaries',
      paragraphs: [
        'The intended beneficiaries are groups who rely on inspectable landscape project records — directly, as practitioners and institutions, or indirectly, as publics affected by planting, climate, and cultural claims in the built environment. No active beneficiary services, enrolment programmes, or geographic operations are offered today.',
        'Internationally, the specification is published for anyone to read and cite under the non-commercial licence. Australian field modules reflect the standard’s origin; crosswalk and extension work may adapt modules for other jurisdictions through the published governance process.'
      ],
      bullets: [
        'Landscape practitioners, educators, and students who need a vendor-neutral reference for project metadata and archival handover',
        'Researchers, herbaria, and open-data communities supplying taxonomic and environmental evidence behind botanical fields',
        'Indigenous knowledge holders and Traditional Owner organisations whose protocol governs restricted cultural metadata',
        'Public agencies, utilities, and standards bodies referencing open planting metadata in procurement and digital twin initiatives',
        'Communities and publics who benefit when project archives remain legible after handover — as downstream beneficiaries of truth-telling infrastructure, not as recipients of Foundation grants or services at this stage'
      ]
    },
    {
      id: 'draft-activities',
      heading: 'Activities — current work and intended programmes',
      paragraphs: [
        'Today the Foundation’s live public work is specification stewardship: maintaining the field registry, schema documentation, reference validation tooling, governance pages, and truth-telling criteria. The awards programme, volunteer coordination, and institutional roundtables are in preparation — described on their respective pages, not yet operating as formal programmes.',
        'Intended future activities — subject to independent entity formation, Council approval, and published charters — include open working groups and request-for-comment cycles; vendor-neutral awards recognition; published crosswalks between landscape metadata and broader BIM or geospatial standards; and institutional partnerships that reference the specification in curriculum, procurement, or research without vendor lock-in. Grant disbursement, paid services, and overseas branch operations are not active and are not promised on this interim site.'
      ],
      bullets: [
        'Live: public specification, registry, schema portal, governance documentation, and conformance criteria',
        'In preparation: awards programme, structured volunteer onboarding, and public briefings (see Volunteers, Awards, Events)',
        'Intended: RFC cycles, institutional memoranda, and capacity-building material for international adoption of the open standard',
        'Not offered today: grants, scholarships, humanitarian field programmes, or certified training (Archive Certified remains a commercial credential)'
      ]
    },
    {
      id: 'draft-funding',
      heading: 'Funding mechanisms',
      paragraphs: [
        'Voluntary support helps fund hosting, documentation, and governance preparation. Contributions are received interim by The Landscape Archive Pty Ltd and are not tax-deductible unless and until an independent Foundation entity is established and any applicable deductible gift recipient registration is obtained.',
        'International supporters may use the same voluntary support routes; there is no separate foreign entity or currency account on this interim site. For invoicing, recurring support, institutional sponsorship, or grant partnerships, contact us first so arrangements can be documented appropriately once governance structures exist.'
      ],
      bullets: [
        'Today: voluntary bank transfer and support enquiries via the Archive operations desk (see Support the standard)',
        'Future intent: donations, grants, sponsorships, and institutional partnerships to sustain open specification stewardship — published only when entity structure and registration allow',
        'Commercial implementation, populated datasets, and practitioner certification remain licensed through The Landscape Archive Pty Ltd, separate from Foundation voluntary support'
      ],
      actions: [
        { label: 'Support the standard', href: SUPPORT_PATH },
        {
          label: 'Funding and partnership enquiry',
          href: FOUNDATION_SUPPORT_CONTACT_PATH,
          external: true
        }
      ]
    }
  ])
}
