import {
  FOUNDATION_DRAFT_BANNER,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  TLA185_DISPLAY_ID,
  FOUNDING_CHARTER_PATH
} from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'
import { PLATFORM_ADOPTION_PATH } from './platformAdoptionInitiative.js'
import { CC_INHERITANCE_PATH } from './creativeCommonsInheritance.js'
import { DIGITAL_TWIN_FOUNDATION_PATH } from './digitalTwinFoundation.js'

export const ADOPT_PATH = '/adopt'

const EXAMPLE_BUNDLE_URL = `${SCHEMA_PORTAL_URL}/examples/nsw-coastal-schoolyard-185.bundle.json`
const SCHEMA_MANIFEST_URL = `${SCHEMA_PORTAL_URL}/schema/manifest.json`
/** Public capability-scope declaration lives on the schema portal — not the auth-walled Archive grant UI. */
const CAPABILITY_GRANT_URL = `${SCHEMA_PORTAL_URL}/dictionary`

/** Paste-ready procurement sentence — open reference specification (RFQ / studio brief). */
export const ADOPT_PROCUREMENT_SENTENCE =
  'Landscape metadata interchange shall use the open TLA-185 field registry and JSON Schema modules published at schema.landscapearchive.org. Vendor implementations may declare scope via published capability grant manifests. This is a non-commercial reference specification under CC BY-NC-ND 4.0 and does not require purchase of a specific commercial product. Where the brief requires Landscape Archive–attested deliverables, submit a licensed Landscape Archive package from an authorised organisation (see landscapearchive.com.au/authorised); Archive Seal marks may be required for pack attestation. Commercial Library, Hub, Studio+™, populated datasets, and software remain separately licensed.'

/**
 * Syllabus / methods line — uni week-1 or studio brief methods section.
 * Same honesty posture as the RFQ sentence; shorter for rubrics.
 */
export const ADOPT_SYLLABUS_SENTENCE =
  'Planting and landscape metadata in this studio must cite the open TLA-185 field dictionary and JSON Schema modules at schema.landscapearchive.org (CC BY-NC-ND 4.0). Use published registry keys only; do not invent field names. Citing the open grammar does not require purchase of a commercial product. Where a brief separately requires Landscape Archive–attested deliverables, follow that brief’s licensed-package instructions.'

/**
 * Tender appendix micro-clause — municipal / public procurement insert.
 * Shorter than the full RFQ sentence; same open-vs-commercial boundary.
 */
export const ADOPT_TENDER_MICRO_CLAUSE =
  'Landscape metadata interchange shall reference the open TLA-185 registry at schema.landscapearchive.org (CC BY-NC-ND 4.0). Commercial Library, Hub, Studio+™, and Archive Seal remain separately licensed where the tender requires Archive-attested packages from an authorised organisation.'

const EVIDENCE_CHECKER_URL = 'https://landscapearchive.org/evidence-checker'
const PROCUREMENT_ANCHOR_URL = 'https://landscapearchive.org/adopt#procurement-sentence'
const SYLLABUS_ANCHOR_URL = 'https://landscapearchive.org/adopt#syllabus-methods'
const TENDER_ANCHOR_URL = 'https://landscapearchive.org/adopt#tender-appendix'
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
    'Self-serve validator and Evidence Checker tools are paused pending stewardship clarity.',
    'Draft dictionary and registry remain available for citation.',
    '',
    'CORE LINKS',
    `• Open field dictionary (free grammar): ${SCHEMA_PORTAL_URL}/dictionary`,
    `• Schema manifest (draft): ${SCHEMA_MANIFEST_URL}`,
    `• Evidence Checker status (paused): ${EVIDENCE_CHECKER_URL}`,
    `• Licence & scope: https://landscapearchive.org/licence`,
    `• Procurement sentence: ${PROCUREMENT_ANCHOR_URL}`,
    `• Syllabus / methods line: ${SYLLABUS_ANCHOR_URL}`,
    `• Tender micro-clause: ${TENDER_ANCHOR_URL}`,
    `• Teaching pack: https://landscapearchive.org/industry-practice#teaching-pack`,
    `• Industry & practice path: https://landscapearchive.org/industry-practice`,
    `• Dictionary & schema in plain language: https://landscapearchive.org/industry-practice#in-plain-language`,
    `• Procurement / RFQ checklist: https://landscapearchive.org/industry-practice#rfq-checklist`,
    '',
    'PRACTICE CITATION LOOP (honest path while validators are paused)',
    'Cite the open field dictionary → paste one procurement sentence into a deliverable',
    '→ document any mapping gap for draft consultation. Do not invent registry field keys.',
    'When self-serve validators return, re-add structural check + Evidence Checker inspect.',
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
        'Practical adoption requires <strong>one concrete deliverable per pilot</strong>: cite the registry in a studio brief or procurement clause, paste the published procurement sentence, and document any mapping gap for draft consultation. Interactive validators remain temporarily unavailable.'
      ],
      bullets: [
        'Tooling gap — no clear download, worked example, or citation path in the first session',
        'No mandate — nothing in the brief, rubric, or handover checklist requires structured metadata',
        'Vendor default — teams ship native Revit/IFC fields instead of a shared interchange grammar',
        'Abstract documentation — governance copy without a published adoption sequence'
      ]
    },
    {
      id: 'platform-adoption',
      heading: 'Landscape-native software initiative',
      paragraphs: [
        'The future of landscape practice also needs software and coding literacy shaped for the discipline. The Foundation explores innovative in-studio coding knowledge and landscape architectural native software — so published metadata fields, living-systems claims, and authorship can travel in tools built for this work.',
        'This consultation sits with the Foundation’s digital twin potential. Practices can still adopt the open grammar today by citing it in one deliverable while studio tooling matures.'
      ],
      actions: [
        { label: 'Governance · Digital twin potential', href: DIGITAL_TWIN_FOUNDATION_PATH },
        { label: 'Governance · Landscape-native software', href: PLATFORM_ADOPTION_PATH },
        { label: 'International adoption', href: '/governance#international-adoption' },
        { label: 'Institutional asks', href: '/governance#institutional-asks' }
      ]
    },
    {
      id: 'three-steps',
      heading: 'Reference adoption path',
      paragraphs: [
        'Follow three steps to reference the open specification. No account is required. Academic citation, studio briefs, and public-procurement reference language are free — the Foundation does not charge for the grammar. The Foundation operates under interim stewardship pending incorporation. Draft dictionary, registry, and schema documentation are available for citation; interactive validators and package inspectors are temporarily unavailable.'
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
          value: 'Validator and Evidence Checker are paused pending stewardship clarity'
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
          value: 'Cited procurement sentence or registry URL in a real deliverable — then gaps → draft consultation'
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
      heading: 'Procurement reference language (RFQ / brief)',
      paragraphs: [
        'Use verbatim or adapt for your jurisdiction. Full RFQ / studio-brief paste block — same honesty as the syllabus and tender micro-clauses below. Self-serve validators remain paused; citation does not require them.'
      ],
      bullets: [ADOPT_PROCUREMENT_SENTENCE],
      plainText: ADOPT_PROCUREMENT_SENTENCE,
      plainTextLabel: 'RFQ / brief — copy-paste sentence',
      actions: [
        {
          label: 'Download RFQ clause (.txt)',
          href: '/examples/tla185-rfq-clause.txt',
          external: true
        },
        { label: 'Syllabus / methods line', href: '#syllabus-methods' },
        { label: 'Tender micro-clause', href: '#tender-appendix' },
        {
          label: 'Download conference one-pager (.txt)',
          href: '/examples/tla185-conference-one-pager.txt',
          external: true
        },
        {
          label: 'Archive — owners & delivery (commercial)',
          href: 'https://landscapearchive.com.au/for-asset-owners',
          external: true
        },
        { label: 'Licence & scope', href: '/licence' },
        { label: 'RFQ checklist', href: '/industry-practice#rfq-checklist' }
      ]
    },
    {
      id: 'syllabus-methods',
      heading: 'Syllabus / methods citation',
      paragraphs: [
        'Short paste for university week-1 handouts, studio methods sections, and assessment rubrics. Mandates citing the open dictionary — not purchase of commercial Archive products.'
      ],
      bullets: [ADOPT_SYLLABUS_SENTENCE],
      plainText: ADOPT_SYLLABUS_SENTENCE,
      plainTextLabel: 'Syllabus / methods — copy-paste line',
      facts: [
        {
          label: 'Teaching pack',
          value: 'Pair with Studio Pilot Kit + RFQ checklist on Industry & practice — one mandated citation deliverable per cohort'
        },
        {
          label: 'Honesty',
          value: 'Validators paused; Foundation Approved is not a live self-serve product; Archive Seal is separate commercial attestation'
        }
      ],
      actions: [
        {
          label: 'Download syllabus line (.txt)',
          href: '/examples/tla185-syllabus-clause.txt',
          external: true
        },
        { label: 'Studio Pilot Kit', href: '#studio-pilot' },
        { label: 'Teaching pack (Industry & practice)', href: '/industry-practice#teaching-pack' },
        { label: 'Open field dictionary', href: `${SCHEMA_PORTAL_URL}/dictionary`, external: true },
        { label: 'Licence & scope', href: '/licence' }
      ]
    },
    {
      id: 'tender-appendix',
      heading: 'Tender appendix micro-clause',
      paragraphs: [
        'Compact insert for municipal tenders, council RFQs, and delivery appendices when the full procurement sentence is too long. Same open-vs-commercial boundary.'
      ],
      bullets: [ADOPT_TENDER_MICRO_CLAUSE],
      plainText: ADOPT_TENDER_MICRO_CLAUSE,
      plainTextLabel: 'Tender appendix — copy-paste micro-clause',
      actions: [
        {
          label: 'Download tender micro-clause (.txt)',
          href: '/examples/tla185-tender-micro-clause.txt',
          external: true
        },
        { label: 'Full RFQ sentence', href: '#procurement-sentence' },
        { label: 'RFQ checklist', href: '/industry-practice#rfq-checklist' },
        {
          label: 'Archive — authorised directory',
          href: 'https://landscapearchive.com.au/authorised',
          external: true
        },
        { label: 'Licence & scope', href: '/licence' }
      ]
    },
    {
      id: 'adoption-ladder',
      heading: 'Adoption ladder',
      paragraphs: [
        'Move one rung at a time. Each step should yield a durable artefact — a cited brief, dictionary URL, or documented mapping gap — suitable for methods sections, studio assessment, or procurement files. Interactive validators are temporarily unavailable.'
      ],
      facts: [
        { label: 'Read', value: 'Skim the field registry and one crosswalk relevant to your disclosure or procurement context' },
        { label: 'Cite dictionary', value: 'Include the open field dictionary URL in one brief or methods note' },
        { label: 'Cite in one deliverable', value: 'Studio brief, methods chapter, RFQ clause, or climate appendix — one sentence plus registry URL' },
        { label: 'Pilot', value: 'One project documents interchange metadata for handover or disclosure; note what mapped cleanly and what did not' },
        { label: 'Platform conversation', value: 'Where you build or teach landscape-native digital methods, point colleagues to the Foundation’s landscape-native software initiative' },
        { label: 'Founding member', value: 'After a pilot, review the draft constitution and nominate an organisational representative — consultation only until incorporation' }
      ],
      actions: [
        { label: 'Open field dictionary', href: CAPABILITY_GRANT_URL, external: true },
        { label: 'Landscape-native software', href: PLATFORM_ADOPTION_PATH },
        { label: 'Licence & scope', href: '/licence' },
        { label: 'Creative Commons inheritance', href: CC_INHERITANCE_PATH },
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
        'Interactive validators and Evidence Checker — temporarily unavailable while stewardship arrangements are clarified',
        'Jurisdiction crosswalks (Australia AASB S2, UK IFRS S2, EU CSRD, US SEC climate) mapping disclosure concepts to field slots',
        'Briefing call for university studios and public procurement teams — clear status on draft governance',
        'Pilot feedback channel into RFC comment periods — mapping gaps become specification issues for public review',
        'Landscape-native software initiative — in-studio coding knowledge and native tools for the discipline'
      ],
      actions: [
        { label: 'International adoption roadmap', href: '/governance#international-adoption' },
        { label: 'Landscape-native software', href: PLATFORM_ADOPTION_PATH },
        { label: 'Creative Commons inheritance', href: CC_INHERITANCE_PATH },
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
        `${TLA185_DISPLAY_ID} is an open landscape metadata specification under interim stewardship pending Foundation incorporation. Use draft dictionary and citation guidance; interactive tools are temporarily unavailable. Treat founding-alliance language as draft consultation until registration completes.`
      ],
      actions: [
        { label: 'Full governance', href: '/governance' },
        { label: 'Licence & scope', href: '/licence' }
      ]
    }
  ])
}
