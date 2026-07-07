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
      heading: 'Why open specs sit unused',
      paragraphs: [
        'Outreach alone rarely moves adoption. Teams default to whatever their BIM, GIS, or spreadsheet tool already exports. Abstract governance pages do not change Monday-morning workflows. Without a mandated first use case, a validator run, and a sentence they can paste into a brief, the specification stays “interesting” and unused.',
        'The fix is not more charter language. It is <strong>one concrete deliverable per pilot</strong> — validate an example bundle, cite the registry in a studio brief or procurement clause, export one profile — plus tooling that works in fifteen minutes without signing up for a product.'
      ],
      bullets: [
        'Tooling gap — no obvious download, validator, or worked example in the first click',
        'No mandate — nothing in the brief, rubric, or handover checklist requires structured metadata',
        'Vendor default — teams ship native Revit/IFC fields instead of a shared interchange grammar',
        'Abstract URLs — federation jargon and governance copy without a “do this now” path'
      ]
    },
    {
      id: 'three-steps',
      heading: 'Get started in 15 minutes',
      paragraphs: [
        'Three steps. No account required. No claim that the Foundation is incorporated — this is public reference infrastructure you can use today.'
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
          label: '3 · Paste into one deliverable',
          value: 'Add the procurement sentence below to a studio brief, RFQ, or methods section — one mandated use case beats ten intro emails.'
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
      heading: 'Procurement sentence (copy-paste)',
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
      heading: 'What we offer in year one',
      paragraphs: [
        'Free, low-friction support focused on <strong>use</strong>, not sales calls. Commercial Archive products are optional implementation layers.'
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
