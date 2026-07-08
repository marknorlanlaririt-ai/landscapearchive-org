import {
  FOUNDATION_DRAFT_BANNER,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  FEDERATION_SCHEMA_PORTAL_URL,
  TLA185_DISPLAY_ID,
  FOUNDING_CHARTER_PATH
} from './foundationWing.js'
import { ARCHIVE_ORIGIN, SCHEMA_PORTAL_URL } from './site.js'

export const ADOPT_PATH = '/adopt'

const VALIDATE_URL = `${SCHEMA_PORTAL_URL}/validate`
const EXAMPLE_BUNDLE_URL = `${SCHEMA_PORTAL_URL}/examples/nsw-coastal-schoolyard-185.bundle.json`
const SCHEMA_MANIFEST_URL = `${SCHEMA_PORTAL_URL}/schema/manifest.json`
const CAPABILITY_GRANT_URL = `${ARCHIVE_ORIGIN}/foundation/capability-grant`

/** Paste-ready procurement sentence — no ISO or incorporation claims. */
export const ADOPT_PROCUREMENT_SENTENCE =
  'Landscape metadata interchange shall use the open TLA-185 field registry and JSON Schema modules published at schema.landscapearchive.org, with conformance checked against the public reference validator. Vendor implementations may declare scope via published capability grant manifests. This is a non-commercial reference specification (CC BY-NC-ND 4.0); it is not an ISO standard and does not require a specific commercial product.'

export function buildAdoptSections() {
  return Object.freeze([
    {
      id: 'why-people-dont',
      heading: 'Why open specifications remain unused',
      paragraphs: [
        'Open metadata specifications often stall when teams lack a mandated first use case, accessible validation tooling, and procurement-ready citation language. Governance documentation alone rarely changes day-to-day export workflows when BIM, GIS, and spreadsheet tools already define their own field vocabularies.',
        'Practical adoption requires <strong>one concrete deliverable per pilot</strong>: validate an example bundle, cite the registry in a studio brief or procurement clause, and export at least one conformance profile — supported by public reference tooling that requires no product registration.'
      ],
      bullets: [
        'Tooling gap — no clear download, validator, or worked example in the first session',
        'No mandate — nothing in the brief, rubric, or handover checklist requires structured metadata',
        'Vendor default — teams ship native Revit/IFC fields instead of a shared interchange grammar',
        'Abstract documentation — governance copy without a published adoption sequence'
      ]
    },
    {
      id: 'three-steps',
      heading: 'Reference adoption path',
      paragraphs: [
        'Follow three steps to reference the open specification. No account is required. The Foundation operates under interim stewardship and is not yet incorporated; the specification, validator, and example bundles are public reference infrastructure available for immediate use.'
      ],
      facts: [
        {
          label: '1 · Download the open pack',
          value: `Schema manifest, JSON modules, and example bundles at the schema portal — start with ${SCHEMA_MANIFEST_URL}`
        },
        {
          label: '2 · Validate an example',
          value: `Open the reference validator, paste or upload the NSW coastal schoolyard example, and confirm Foundation Approved baseline fields pass — ${VALIDATE_URL}`
        },
        {
          label: '3 · Cite in one deliverable',
          value: 'Add the procurement reference language below to a studio brief, RFQ, or methods section — one mandated deliverable per pilot.'
        }
      ],
      actions: [
        { label: 'Schema manifest (open pack)', href: SCHEMA_MANIFEST_URL, external: true },
        { label: 'Validate example bundle', href: VALIDATE_URL, external: true },
        { label: 'Example 185 bundle', href: EXAMPLE_BUNDLE_URL, external: true },
        { label: 'Field registry', href: '/registry' }
      ]
    },
    {
      id: 'procurement-sentence',
      heading: 'Procurement reference language',
      paragraphs: [
        'Use verbatim or adapt for your jurisdiction. It references the open specification only — not ISO status, not a single vendor, not incorporated Foundation membership.'
      ],
      bullets: [ADOPT_PROCUREMENT_SENTENCE],
      actions: [
        { label: 'UK IFRS S2 crosswalk', href: '/crosswalk/uk-ifrs-s2' },
        { label: 'EU CSRD / ESRS crosswalk', href: '/crosswalk/eu-csrd-esrs' },
        { label: 'US SEC climate crosswalk', href: '/crosswalk/us-sec-climate' }
      ]
    },
    {
      id: 'adoption-ladder',
      heading: 'Adoption ladder',
      paragraphs: [
        'Move one rung at a time. Each step produces evidence — validator output, a cited brief, a pilot archive — not a logo on a slide deck.'
      ],
      facts: [
        { label: 'Read', value: 'Skim the field registry and one crosswalk relevant to your disclosure or procurement context' },
        { label: 'Validate one bundle', value: 'Run the public validator on the worked example or your own export' },
        { label: 'Cite in one deliverable', value: 'Studio brief, methods chapter, RFQ clause, or climate appendix — one sentence plus registry URL' },
        { label: 'Pilot', value: 'One project exports interchange metadata for handover or disclosure; document what mapped cleanly and what did not' },
        { label: 'Founding member', value: 'After a pilot, review the draft constitution and nominate an organisational representative — consultation only until incorporation' }
      ],
      actions: [
        { label: 'Schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true },
        { label: 'Capability grant manifests', href: CAPABILITY_GRANT_URL, external: true },
        { label: 'Draft constitution', href: FOUNDING_CHARTER_PATH },
        {
          label: 'Charter consultation',
          href: `${FOUNDATION_SUPPORT_CONTACT_PATH}&intent=founding-alliance`,
          external: true
        }
      ]
    },
    {
      id: 'year-one-offer',
      heading: 'Year-one reference support',
      paragraphs: [
        'The Foundation publishes free, low-friction reference materials focused on specification <strong>use</strong> rather than commercial licensing. Commercial Archive products remain optional implementation layers.'
      ],
      bullets: [
        'Public schema portal, dictionary, validator, and example bundles — no login',
        'Jurisdiction crosswalks (Australia AASB S2, UK IFRS S2, EU CSRD, US SEC climate) mapping disclosure concepts to field slots',
        'Capability grant manifest template so integrations declare module scope explicitly',
        'Briefing call for university studios and public procurement teams — honest about draft governance status',
        'Pilot feedback channel into RFC comment periods — your mapping gaps become specification issues, not private email threads'
      ],
      actions: [
        { label: 'International adoption roadmap', href: '/governance#international-adoption' },
        { label: 'Founding alliance (draft)', href: '/governance#founding-alliance' }
      ]
    },
    {
      id: 'honest-footer',
      heading: 'Interim status',
      paragraphs: [
        FOUNDATION_DRAFT_BANNER,
        `${TLA185_DISPLAY_ID} is an open landscape metadata specification under interim stewardship — not an ISO standard, not a government mandate, and not a claim of incorporated charity status. Use the tooling and citation guidance; treat founding alliance language as draft consultation until ASIC registration completes.`
      ],
      actions: [{ label: 'Full governance', href: '/governance' }]
    }
  ])
}
