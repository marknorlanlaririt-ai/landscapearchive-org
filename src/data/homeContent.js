import { ARCHIVE_ORIGIN } from './site.js'
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

const ARCHIVE_SEAL_URL = `${ARCHIVE_ORIGIN}/archive-seal`
const ARCHIVE_AUTHORISED_URL = `${ARCHIVE_ORIGIN}/authorised`
const ARCHIVE_FOUNDING_URL = `${ARCHIVE_ORIGIN}/founding-offer`

export function buildFoundationHomeSections({
  fieldCount = TLA185_FIELD_COUNT,
  previewFieldLimit = TLA185_REGISTRY_PREVIEW_FIELD_LIMIT
} = {}) {
  return Object.freeze([
    {
      id: 'archive-seal',
      heading: 'Archive Seal',
      paragraphs: [
        `Open ${TLA185_DISPLAY_ID} grammar stays free to cite. Where a brief requires Landscape Archive–attested deliverables, ask for a licensed Archive package from an authorised organisation — and an Archive Seal when the brief specifies one.`,
        'Archive Seal is a renewable commercial attestation from The Landscape Archive Pty Ltd (period-bound marks and manifests). Authenticity checks are performed by Landscape Archive administrators — not a public DIY verifier on this Foundation site. Foundation Approved / Evidence Checker are not an Archive licence.'
      ],
      bullets: [
        'Purchase Seal and compare plans on the Archive site',
        'Authorised organisations directory lists who may deliver licensed packages',
        'Founding membership remains available for eligible practices',
        'Seal authenticity is admin-verified by Landscape Archive'
      ],
      actions: [
        { label: 'Purchase Archive Seal', href: ARCHIVE_SEAL_URL, external: true },
        { label: 'Authorised directory', href: ARCHIVE_AUTHORISED_URL, external: true },
        { label: 'Founding offer', href: ARCHIVE_FOUNDING_URL, external: true },
        { label: 'Seal information', href: '/seal-verifier' },
        { label: 'RFQ checklist', href: '/industry-practice#rfq-checklist' }
      ]
    },
    {
      id: 'mission-draft',
      heading: 'Mission',
      paragraphs: [
        `Draft public purpose: advance environmental and social benefit through open, citable infrastructure for landscape documentation. Botanical authenticity, climate disclosure, cultural-protocol metadata, and synthetic-nature provenance are encoded in the public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification.`,
        'This is draft charitable scope for consultation. Incorporation and grant programmes remain forward work; live publishing today is the open specification and related trust tooling.'
      ],
      actions: [{ label: 'Draft mission (governance)', href: `${GOVERNANCE_PATH}#draft-mission` }]
    },
    {
      id: 'about-us',
      heading: 'About',
      paragraphs: [
        'Landscape project records must remain legible after handover: species, site context, evidence for claims, restricted cultural material, and custody of synthetic assets. The open specification supplies a shared vocabulary for those declarations.',
        `Three entities separate roles. The Landscape Vault holds proprietary IP and, in the interim, stewards and powers the Foundation; The Landscape Archive Pty Ltd is the commercial operator (products, subscriptions, support), with landscapearchive.com.au as the live Australian commercial hub; the Foundation (once incorporated) stewards the public specification internationally at landscapearchive.org. Additional regional hubs are planned and not live. We do not claim ownership of landscapearchive.com. Populated datasets and client records remain licensed separately; the field dictionary and conformance rules stay citable under CC BY-NC-ND 4.0.`
      ],
      actions: [{ label: 'Governance', href: GOVERNANCE_PATH }]
    },
    {
      id: 'truth-telling',
      heading: 'Truth-telling',
      paragraphs: [
        'Implicit claims — “native,” “climate resilient,” “sustainable,” “culturally appropriate” — are stated precisely through documented fields: taxon IDs, banded climate context, evidence links, sensitivity classes, and synthetic-asset lineage.',
        'The Foundation defines how disclosure is encoded. Substantive verification remains with project teams and the institutions that govern them.'
      ],
      actions: [{ label: 'Truth-telling charter', href: `${GOVERNANCE_PATH}#truth-telling` }]
    },
    {
      id: 'use-the-standard',
      heading: 'Specification',
      paragraphs: [
        `${TLA185_DISPLAY_ID} documents ${fieldCount} elements across taxonomy, site context, climate screening, risk, sustainability, cultural sensitivity, and BIM interchange. ${TLA169_DISPLAY_ID} remains supported for legacy exchange. The open field dictionary is the gravity well: free public grammar under CC BY-NC-ND 4.0; populated inventories and client records stay in licensed datasets.`,
        'Self-serve validators and package inspectors are paused while licence and stewardship clarity is completed. Draft dictionary and registry reference remain available.',
        ...(isOpenStandardGithubPubliclyAvailable()
          ? [
              'Canonical specification, JSON Schema modules, and examples are on GitHub and the schema portal. GitHub is authoritative.'
            ]
          : [OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE])
      ],
      actions: [
        ...(isOpenStandardGithubPubliclyAvailable()
          ? [
              { label: 'Canonical specification', href: OPEN_STANDARD_GITHUB_TAG_URL, external: true },
              { label: 'Repository', href: OPEN_STANDARD_GITHUB_URL, external: true }
            ]
          : []),
        { label: 'Open field dictionary', href: `${FEDERATION_SCHEMA_PORTAL_URL}/dictionary`, external: true },
        { label: 'Field registry', href: '/registry' },
        { label: 'Adoption', href: ADOPT_PATH },
        { label: 'Licence & scope', href: '/licence' },
        { label: 'In plain language', href: '/industry-practice#in-plain-language' }
      ]
    },
    {
      id: 'governance',
      heading: 'Governance and licence',
      paragraphs: [
        'The Landscape Archive Foundation is the intended independent steward of the public specification. In the interim it is stewarded and powered by The Landscape Vault Pty Ltd (IP holding company) pending an independent entity.',
        'Public specification and schema documentation: CC BY-NC-ND 4.0. Library, Hub, Landscape Archive Tools desktop apps, Archive Seal, Studio+™, Data API, and populated datasets are licensed separately and are not under Creative Commons.'
      ],
      actions: [
        { label: 'Governance', href: GOVERNANCE_PATH },
        { label: 'Licence & scope', href: '/licence' }
      ]
    },
    {
      id: 'commercial',
      heading: 'Commercial implementation',
      paragraphs: [
        'The field dictionary stays free to cite. Seats, Library depth, Landscape Archive Tools desktop apps, BIM / Hub delivery, Seal attestation, Evidence/compliance paths, and (when cleared) Data API / OEM redistribution are licensed through The Landscape Archive Pty Ltd — not under the public Creative Commons notice. See Archive Terms for free vs paid posture.',
        'Foundation Approved denotes open-specification conformance. It is distinct from Archive Certified, a paid vendor credential, and from Archive Seal.'
      ],
      actions: [
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Licence & scope', href: '/licence' },
        { label: 'Responsibility split', href: GOVERNANCE_PATH }
      ]
    },
    {
      id: 'support',
      heading: 'Support the standard',
      paragraphs: [
        'Due to our incorporation status, voluntary contribution intake has been taken down.',
        'The Foundation is not yet an independent incorporated entity. We are not accepting bank transfers, donations, or public fundraising on this site until that structure is in place.',
        `Referencing ${TLA185_DISPLAY_ID} or ${TLA169_DISPLAY_ID} under CC BY-NC-ND 4.0 remains free and requires no payment.`
      ],
      bullets: [
        'Donation and bank-transfer details are withdrawn for now.',
        'Tax-deductible treatment, if any, would apply only after independent entity formation and any applicable DGR registration.',
        'For institutional partnerships or funding conversations after incorporation, use a foundation enquiry.'
      ],
      actions: [
        { label: 'Status on Support page', href: '/support' },
        { label: 'Foundation enquiry', href: FOUNDATION_SUPPORT_CONTACT_PATH, external: true }
      ]
    }
  ])
}
