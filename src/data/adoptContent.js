import {
  FOUNDATION_DRAFT_BANNER,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  TLA185_DISPLAY_ID,
  FOUNDING_CHARTER_PATH
} from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'

export const ADOPT_PATH = '/adopt'

const EXAMPLE_BUNDLE_URL = `${SCHEMA_PORTAL_URL}/examples/nsw-coastal-schoolyard-185.bundle.json`
const SCHEMA_MANIFEST_URL = `${SCHEMA_PORTAL_URL}/schema/manifest.json`
/** Public capability-scope declaration lives on the schema portal — not the auth-walled Archive grant UI. */
const CAPABILITY_GRANT_URL = `${SCHEMA_PORTAL_URL}/dictionary`

/** Paste-ready procurement sentence — open reference specification. */
export const ADOPT_PROCUREMENT_SENTENCE =
  'Landscape metadata interchange shall use the open TLA-185 field registry and JSON Schema modules published at schema.landscapearchive.org. Vendor implementations may declare scope via published capability grant manifests. This is a non-commercial reference specification under CC BY-NC-ND 4.0 and does not require purchase of a specific commercial product. Commercial products, populated datasets, and software remain separately licensed.'

const EVIDENCE_CHECKER_URL = 'https://landscapearchive.org/evidence-checker'
const PROCUREMENT_ANCHOR_URL = 'https://landscapearchive.org/adopt#procurement-sentence'
const STUDIO_PILOT_ANCHOR_URL = 'https://landscapearchive.org/adopt#studio-pilot'
const BEFORE_AFTER_PACK_PATH = '/examples/before-after-conformance/'

/**
 * Copy-paste studio brief for landscape architectural practice pilots.
 * Open reference specification use; no commercial product marketing.
 */
export function formatStudioPilotBriefPlainText() {
  return [
    'STUDIO PILOT KIT — open TLA-185 reference',
    'The Landscape Archive Foundation (interim stewardship pending incorporation)',
    '',
    'PURPOSE',
    'Use the published open landscape metadata specification as a reference in one',
    'studio or practice deliverable. This is open reference infrastructure available',
    'for citation and conformance checking without purchase of a commercial product.',
    '',
    'MANDATED DELIVERABLE (choose one)',
    '1. Cite the open field dictionary URL in a studio brief, methods section, or RFQ.',
    '2. Cite the procurement reference language in a studio brief, methods section, or RFQ.',
    '3. Document one mapping gap against the draft registry (send to draft consultation).',
    '',
    'NOTE',
    'Self-serve validator and Evidence Checker tools are paused — not available yet.',
    'Draft dictionary and registry remain available for citation.',
    '',
    'CORE LINKS',
    `• Open field dictionary (free grammar): ${SCHEMA_PORTAL_URL}/dictionary`,
    `• Schema manifest (draft): ${SCHEMA_MANIFEST_URL}`,
    `• Evidence Checker status (paused): ${EVIDENCE_CHECKER_URL}`,
    `• Licence & scope: https://landscapearchive.org/licence`,
    `• Procurement sentence: ${PROCUREMENT_ANCHOR_URL}`,
    `• Industry & practice path: https://landscapearchive.org/industry-practice`,
    `• Dictionary & schema in plain language: https://landscapearchive.org/industry-practice#in-plain-language`,
    `• Procurement / RFQ checklist: https://landscapearchive.org/industry-practice#rfq-checklist`,
    '',
    'PRACTICE CITATION LOOP',
    'Cite the open field dictionary → validate one bundle → inspect in Evidence Checker',
    '→ one procurement sentence in a deliverable. Gaps → draft consultation.',
    '',
    'PROCUREMENT REFERENCE LANGUAGE (verbatim or adapt)',
    ADOPT_PROCUREMENT_SENTENCE,
    '',
    'PILOT NOTES',
    '• Empty or draft JSON Schema modules are acceptable for a pilot — document gaps;',
    '  do not invent registry field keys.',
    '• Mapping gaps → draft consultation / review pack (prefer public feedback over private forks).',
    '• Optional teaching artefacts (messy schedule excerpt + sample open bundle):',
    `  https://landscapearchive.org${BEFORE_AFTER_PACK_PATH}`,
    '  Conformance examples only (not Field Notes essays).',
    '',
    `Studio Pilot Kit page: ${STUDIO_PILOT_ANCHOR_URL}`
  ].join('\n')
}

const STUDIO_PILOT_OUTREACH_URL = 'https://landscapearchive.org/adopt#studio-pilot-outreach'

/**
 * Founder outreach pack: paste-ready invite email + 3–5 named cohort slots.
 * Open reference and citation only.
 */
export function formatStudioPilotOutreachPlainText() {
  return [
    'STUDIO PILOT OUTREACH PACK — Foundation (interim stewardship pending incorporation)',
    '',
    'HOW TO USE',
    '1. Name 3–5 studios / one uni contact in the cohort tracker below.',
    '2. Paste the invite email (edit [brackets]). Attach or link the Studio Pilot Kit brief.',
    '3. Ask for one mandated deliverable only. Keep commercial product follow-ups for a later thread.',
    '',
    'COHORT TRACKER (fill locally — not stored by this page)',
    '☐ 1. Studio / practice: ____________________  Contact: ____________________  Status: invited / brief sent / deliverable done / declined',
    '☐ 2. Studio / practice: ____________________  Contact: ____________________  Status: …',
    '☐ 3. Studio / practice: ____________________  Contact: ____________________  Status: …',
    '☐ 4. Studio / practice: ____________________  Contact: ____________________  Status: …',
    '☐ 5. University / teaching studio: __________  Contact: ____________________  Status: …',
    '',
    '--- INVITE EMAIL (copy below this line) ---',
    '',
    'Subject: Open landscape metadata pilot — one deliverable (TLA-185 reference)',
    '',
    'Hello [Name],',
    '',
    'I am writing from The Landscape Archive Foundation (interim stewardship pending',
    'incorporation). We publish an open field dictionary for landscape metadata interchange',
    '(TLA-185). This is free public grammar for citation — available without purchase of a',
    'commercial product. Self-serve validators are paused for now.',
    '',
    'Would [Studio / University] run a single Studio Pilot deliverable this term?',
    'Choose one:',
    '  (1) Cite the open field dictionary URL in a brief / methods section / RFQ, or',
    '  (2) Cite the published procurement reference language in a brief / methods section / RFQ, or',
    '  (3) Document one mapping gap against the draft registry (draft consultation).',
    '',
    'Starter pack:',
    `  • Studio Pilot Kit: ${STUDIO_PILOT_ANCHOR_URL}`,
    `  • Open field dictionary: ${SCHEMA_PORTAL_URL}/dictionary`,
    `  • Licence & scope: https://landscapearchive.org/licence`,
    `  • Industry & practice path: https://landscapearchive.org/industry-practice`,
    `  • RFQ checklist: https://landscapearchive.org/industry-practice#rfq-checklist`,
    '',
    'Empty or draft schema modules are fine for a pilot — document gaps; please do not invent',
    'registry field keys. Happy to answer mapping questions via draft consultation.',
    '',
    'Thank you,',
    '[Your name]',
    '',
    '--- end invite ---',
    '',
    `Outreach pack page: ${STUDIO_PILOT_OUTREACH_URL}`,
    `Full brief: ${STUDIO_PILOT_ANCHOR_URL}`
  ].join('\n')
}

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
        'Follow three steps to reference the open specification. No account is required. Academic citation, studio briefs, and public-procurement reference language are free — the Foundation does not charge for the grammar. The Foundation operates under interim stewardship pending incorporation. Draft dictionary, registry, and schema documentation are available for citation; self-serve validators and package inspectors are paused.'
      ],
      facts: [
        {
          label: '1 · Open the draft dictionary',
          value: `Cite the free public grammar — ${SCHEMA_PORTAL_URL}/dictionary`
        },
        {
          label: '2 · Review the draft pack',
          value: `Schema manifest and JSON modules (draft) — ${SCHEMA_MANIFEST_URL}`
        },
        {
          label: '3 · Cite in one deliverable',
          value: 'Add the procurement reference language below to a studio brief, RFQ, or methods section — one mandated deliverable per pilot.'
        }
      ],
      actions: [
        { label: 'Open field dictionary', href: `${SCHEMA_PORTAL_URL}/dictionary`, external: true },
        { label: 'Schema manifest (draft)', href: SCHEMA_MANIFEST_URL, external: true },
        { label: 'Example 185 bundle', href: EXAMPLE_BUNDLE_URL, external: true },
        { label: 'Field registry', href: '/registry' },
        { label: 'Licence & scope', href: '/licence' }
      ]
    },
    {
      id: 'studio-pilot',
      heading: 'Studio Pilot Kit',
      paragraphs: [
        'A copy-paste brief for landscape architectural studios and practices running a single pilot deliverable against the open specification — packaged for a studio handout. Full education path (dictionary → citation → consultation) lives on Industry & practice.',
        '<strong>Open reference (draft).</strong> Empty or draft schema modules are acceptable for a pilot — document gaps and use published registry keys only. Self-serve validator and Evidence Checker tools are paused. New to the vocabulary? Start with <a href="/industry-practice#in-plain-language">dictionary &amp; schema in plain language</a>.'
      ],
      facts: [
        {
          label: 'In plain language',
          value:
            'Short Foundation explainer for practices and studios — what a term, the dictionary, and the schema pack are — https://landscapearchive.org/industry-practice#in-plain-language'
        },
        {
          label: 'Open field dictionary',
          value: `Start with the free public grammar — ${SCHEMA_PORTAL_URL}/dictionary — do not invent registry keys`
        },
        {
          label: 'Schema manifest (draft)',
          value: `Download the draft schema manifest — ${SCHEMA_MANIFEST_URL}`
        },
        {
          label: 'Self-serve tools',
          value: 'Validator and Evidence Checker are paused — not available yet'
        },
        {
          label: 'Procurement sentence',
          value: 'Cite the published procurement reference language in one brief, RFQ, or methods section'
        }
      ],
      bullets: [
        'Practice citation loop: cite dictionary → one procurement sentence in a deliverable → draft consultation for gaps',
        'Gaps in mapping or missing fields → draft consultation / review pack (prefer public feedback over private forks)',
        `Optional teaching fixtures (messy schedule excerpt + sample open bundle): <a href="${BEFORE_AFTER_PACK_PATH}">${BEFORE_AFTER_PACK_PATH}</a> — draft examples`
      ],
      plainText: formatStudioPilotBriefPlainText(),
      plainTextLabel: 'Studio Pilot Kit — copy-paste brief',
      actions: [
        { label: 'In plain language', href: '/industry-practice#in-plain-language' },
        { label: 'Open field dictionary', href: `${SCHEMA_PORTAL_URL}/dictionary`, external: true },
        { label: 'Schema manifest (draft)', href: SCHEMA_MANIFEST_URL, external: true },
        { label: 'Licence & scope', href: '/licence' },
        { label: 'RFQ checklist', href: '/industry-practice#rfq-checklist' },
        { label: 'Outreach pack', href: '#studio-pilot-outreach' },
        { label: 'Procurement sentence', href: '#procurement-sentence' },
        { label: 'Draft consultation', href: '/governance#draft-consultation' },
        { label: 'Industry & practice path', href: '/industry-practice' },
        { label: 'Before/after fixtures', href: BEFORE_AFTER_PACK_PATH }
      ]
    },
    {
      id: 'studio-pilot-outreach',
      heading: 'Studio Pilot outreach pack',
      paragraphs: [
        'Founder / director pack for inviting <strong>3–5 named studios</strong> (and optionally one university teaching contact) to run one mandated Studio Pilot deliverable. Reuses the live Kit brief.',
        '<strong>Focus:</strong> open reference and citation. Keep commercial product conversations on a separate thread after the pilot artefact exists.'
      ],
      facts: [
        {
          label: 'Cohort size',
          value: 'Name 3–5 practices locally in the tracker (not stored on this site) — measurable citation without commercial soft-sell'
        },
        {
          label: 'Invite email',
          value: 'Copy-paste template below; link the Studio Pilot Kit and dictionary; ask for one deliverable only'
        },
        {
          label: 'Success signal',
          value: 'Validator output, cited procurement sentence, or Evidence Checker inspection note — then gaps → draft consultation'
        }
      ],
      bullets: [
        'Prefer practices already teaching planting schedules / disclosure appendices',
        'One uni contact is enough for the first teaching cohort — focus on the mandated deliverable',
        'Keep Archive commercial follow-ups on a separate thread after the pilot artefact exists'
      ],
      plainText: formatStudioPilotOutreachPlainText(),
      plainTextLabel: 'Studio Pilot outreach pack — cohort tracker + invite email',
      actions: [
        { label: 'Studio Pilot Kit brief', href: '#studio-pilot' },
        { label: 'Industry & practice', href: '/industry-practice' },
        { label: 'RFQ checklist', href: '/industry-practice#rfq-checklist' },
        { label: 'Draft consultation', href: '/governance#draft-consultation' },
        { label: 'Open field dictionary', href: `${SCHEMA_PORTAL_URL}/dictionary`, external: true }
      ]
    },
    {
      id: 'procurement-sentence',
      heading: 'Procurement reference language',
      paragraphs: [
        'Use verbatim or adapt for your jurisdiction. The sentence references the open specification and draft public grammar only — not commercial Archive products.'
      ],
      bullets: [ADOPT_PROCUREMENT_SENTENCE],
      actions: [
        { label: 'Licence & scope', href: '/licence' },
        { label: 'UK IFRS S2 crosswalk', href: '/crosswalk/uk-ifrs-s2' },
        { label: 'EU CSRD / ESRS crosswalk', href: '/crosswalk/eu-csrd-esrs' },
        { label: 'US SEC climate crosswalk', href: '/crosswalk/us-sec-climate' }
      ]
    },
    {
      id: 'adoption-ladder',
      heading: 'Adoption ladder',
      paragraphs: [
        'Move one rung at a time. Each step should yield a durable artefact — a cited brief, dictionary URL, or documented mapping gap — suitable for methods sections, studio assessment, or procurement files. Self-serve validators are paused.'
      ],
      facts: [
        { label: 'Read', value: 'Skim the field registry and one crosswalk relevant to your disclosure or procurement context' },
        { label: 'Cite dictionary', value: 'Include the open field dictionary URL in one brief or methods note' },
        { label: 'Cite in one deliverable', value: 'Studio brief, methods chapter, RFQ clause, or climate appendix — one sentence plus registry URL' },
        { label: 'Pilot', value: 'One project documents interchange metadata for handover or disclosure; note what mapped cleanly and what did not' },
        { label: 'Founding member', value: 'After a pilot, review the draft constitution and nominate an organisational representative — consultation only until incorporation' }
      ],
      actions: [
        { label: 'Open field dictionary', href: CAPABILITY_GRANT_URL, external: true },
        { label: 'Licence & scope', href: '/licence' },
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
        'The Foundation publishes free, low-friction reference materials focused on specification <strong>citation</strong> rather than commercial licensing. Commercial Archive products remain optional implementation layers and are not under Creative Commons.'
      ],
      bullets: [
        'Draft schema portal dictionary, field registry, and example bundles — no login',
        'Self-serve validators and Evidence Checker — paused until licence clarity improves',
        'Jurisdiction crosswalks (Australia AASB S2, UK IFRS S2, EU CSRD, US SEC climate) mapping disclosure concepts to field slots',
        'Briefing call for university studios and public procurement teams — clear status on draft governance',
        'Pilot feedback channel into RFC comment periods — mapping gaps become specification issues for public review'
      ],
      actions: [
        { label: 'International adoption roadmap', href: '/governance#international-adoption' },
        { label: 'UK IFRS S2 crosswalk', href: '/crosswalk/uk-ifrs-s2' },
        { label: 'AASB S2 crosswalk', href: '/crosswalk/aasb-s2' },
        { label: 'Founding alliance (draft)', href: '/governance#founding-alliance' },
        { label: 'Draft consultation', href: '/governance#draft-consultation' }
      ]
    },
    {
      id: 'status-footer',
      heading: 'Current status',
      paragraphs: [
        FOUNDATION_DRAFT_BANNER,
        `${TLA185_DISPLAY_ID} is an open landscape metadata specification under interim stewardship pending Foundation incorporation. Use draft dictionary and citation guidance; self-serve tools are paused. Treat founding-alliance language as draft consultation until registration completes.`
      ],
      actions: [
        { label: 'Full governance', href: '/governance' },
        { label: 'Licence & scope', href: '/licence' }
      ]
    }
  ])
}
