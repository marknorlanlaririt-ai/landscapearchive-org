import {
  ADOPT_PATH,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  GOVERNANCE_PATH,
  OPEN_STANDARD_GITHUB_URL,
  OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE,
  REGISTRY_PATH,
  TLA185_DISPLAY_ID,
  FEDERATION_SCHEMA_PORTAL_URL,
  isOpenStandardGithubPubliclyAvailable
} from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'
import { buildFoundationAwardsTopicPage } from './foundationAwardsProgramme.js'
import { ADOPT_PROCUREMENT_SENTENCE } from './adoptContent.js'

const placeholderLead =
  'This section is in preparation. Check back as the Foundation publishes interim working-group material, or contact us if you would like early access or to contribute.'

const DICTIONARY_URL = `${SCHEMA_PORTAL_URL}/dictionary`
const VALIDATE_URL = `${SCHEMA_PORTAL_URL}/validate`
const EVIDENCE_CHECKER_PATH = '/evidence-checker'

/** Printable RFQ / tender hygiene checklist — Evidence Checker → procurement (I-2). */
export function formatProcurementRfqChecklistPlainText() {
  return [
    'PROCUREMENT / RFQ CHECKLIST — open TLA-185 reference',
    'The Landscape Archive Foundation (interim stewardship pending incorporation)',
    '',
    'PURPOSE',
    'Use this one-pager when writing or reviewing an RFQ, studio brief, or methods',
    'appendix that cites the open landscape metadata specification. Empty or draft',
    'schema modules are acceptable — document gaps; use published registry field keys only.',
    '',
    'BEFORE YOU CITE',
    '☐ Confirm you are citing the open field dictionary URL.',
    `  Dictionary: ${DICTIONARY_URL}`,
    '☐ Confirm the procurement sentence references schema.landscapearchive.org.',
    '',
    'DELIVERABLE CHECKS (tick at least one)',
    '☐ Cite the open field dictionary URL in the RFQ / brief.',
    `  Dictionary: ${DICTIONARY_URL}`,
    '☐ Paste or adapt the published procurement reference language into the RFQ / brief.',
    '☐ Document one mapping gap and route it to draft consultation.',
    '',
    'PAUSED (not required for soft-launch citation)',
    `☐ Public validator — paused: ${VALIDATE_URL}`,
    `☐ Evidence Checker — paused: https://landscapearchive.org${EVIDENCE_CHECKER_PATH}`,
    '',
    'PROCUREMENT REFERENCE LANGUAGE',
    ADOPT_PROCUREMENT_SENTENCE,
    '',
    'NOTES',
    '• Empty modules / missing fields → note the gap and send to draft consultation.',
    '• Commercial Library, Hub, Studio+™, Data API, and delivery tooling are separate',
    '  Archive products — not Creative Commons; citing the dictionary does not require a purchase.',
    '',
    'NEXT LINKS',
    '• Industry & practice: https://landscapearchive.org/industry-practice',
    '• Licence & scope: https://landscapearchive.org/licence',
    '• Studio Pilot Kit: https://landscapearchive.org/adopt#studio-pilot',
    '• Draft consultation: https://landscapearchive.org/governance#draft-consultation',
    '',
    'Checklist page: https://landscapearchive.org/industry-practice#rfq-checklist'
  ].join('\n')
}

export const foundationTopicPages = Object.freeze({
  'industry-practice': {
    slug: 'industry-practice',
    title: 'Industry & practice',
    lead: `Education path for landscape practices and university studios: open field dictionary → Studio Pilot citation → draft consultation. Public draft reference materials for teaching and professional use under Foundation stewardship. Self-serve validators are paused.`,
    placeholder: false,
    sections: [
      {
        id: 'practice-path',
        heading: 'The practice path (start here)',
        paragraphs: [
          'Follow this sequence once. Each step should yield a durable, citeable artefact — a dictionary URL, a cited procurement sentence, or a documented mapping gap — suitable for methods sections, studio assessment, or procurement files.',
          'Self-serve validators and the Evidence Checker are paused. Empty or draft JSON Schema modules are acceptable for a pilot: document gaps and do not invent registry field keys. Mapping gaps belong in draft consultation rather than private schema forks.'
        ],
        bullets: [
          '1. Open field dictionary — free public grammar (preferred labels and structural definitions)',
          '2. Studio Pilot Kit — one mandated studio or practice citation deliverable',
          '3. Draft consultation — send mapping gaps back into the public process',
          'Note: interactive validator / Evidence Checker — paused, not available yet'
        ],
        actions: [
          { label: 'In plain language', href: '#in-plain-language' },
          { label: 'Open field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Studio Pilot Kit', href: `${ADOPT_PATH}#studio-pilot` },
          { label: 'Licence & scope', href: '/licence' },
          { label: 'RFQ checklist', href: '#rfq-checklist' },
          { label: 'Draft consultation', href: `${GOVERNANCE_PATH}#draft-consultation` }
        ]
      },
      {
        id: 'in-plain-language',
        heading: 'In plain language',
        paragraphs: [
          'For landscape architects, students, and procurement readers who want the shape of the system without developer jargon. Status: published Foundation reference under interim stewardship. Empty or draft schema modules remain acceptable while the pack matures.'
        ],
        bullets: [
          '<strong>What the field dictionary is</strong> — A shared vocabulary for planting and landscape records. The dictionary publishes preferred labels and short definitions so schedules, exports, and briefs can align on the same meanings, including where studios previously used ad hoc column names (for example “botanical name”, “Latin”, or “species_id”).',
          '<strong>What a term is</strong> — One published entry in that vocabulary: a human-readable name, a stable id (for example <code>185-004</code>), and a permanent link you can cite in a methods section, studio brief, or RFQ. Citing a term does not require a commercial licence.',
          '<strong>What the schema / pack is</strong> — The structural shape for exchanging data — analogous to a form with named slots. The pack (JSON Schema modules and examples) defines which slots exist and how they nest; project data occupies those slots. Use published keys only; do not invent new registry field keys for a pilot.',
          '<strong>What Evidence Checker and the validator will do</strong> — When available, they support inspection of disclosed claims. Neither instrument is a certificate, accreditation, or government approval. Both are currently paused.',
          '<strong>Free grammar vs paid Archive fill</strong> — The dictionary and conformance rules remain free to cite under CC BY-NC-ND 4.0. Filled Library depth, Hub, membership seats, Studio+™, Data API, and delivery tooling are commercial products of The Landscape Archive Pty Ltd and are not under Creative Commons.',
          '<strong>What to do next</strong> — Browse the open field dictionary → complete one Studio Pilot citation deliverable → propose a missing or unclear term if you identify a gap → return here for the full education path.'
        ],
        actions: [
          { label: 'Open field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Studio Pilot Kit', href: `${ADOPT_PATH}#studio-pilot` },
          { label: 'Propose a dictionary term', href: '/propose-term' },
          { label: 'Licence & scope', href: '/licence' },
          { label: 'Evidence Checker (paused)', href: '/evidence-checker' }
        ]
      },
      {
        id: 'free-grammar-paid-fill',
        heading: 'Why free grammar / paid implementations elsewhere',
        paragraphs: [
          'The Landscape Archive Foundation (interim stewardship pending incorporation) stewards the public grammar: field dictionary, schemas, and draft reference documentation. Citing that grammar does not require a purchase.',
          'Filled Library depth, Hub, membership seats, BIM connector delivery, Studio+™, Evidence/compliance product paths, and metered Data API / OEM redistribution (when clearance gates allow) are commercial products of The Landscape Archive Pty Ltd — not Creative Commons. Keeping the dictionary publicly citable supports procurement and curriculum reference independent of any single commercial implementation.'
        ],
        actions: [
          { label: 'Open field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Field registry', href: REGISTRY_PATH },
          { label: 'Licence & scope', href: '/licence' },
          { label: 'Adopt the standard', href: ADOPT_PATH }
        ]
      },
      {
        id: 'rfq-checklist',
        heading: 'Procurement / RFQ checklist',
        paragraphs: [
          'Printable one-pager for RFQ writers, studio briefs, and methods appendices that cite the open specification. Pair with the published procurement sentence. Self-serve validator and Evidence Checker tools are paused.',
          'Tick the checks that apply to your deliverable. Empty or draft schema modules remain acceptable when gaps are documented; use published registry field keys only.'
        ],
        facts: [
          {
            label: '1 · Cite dictionary',
            value: 'Confirm the open field dictionary URL appears in the brief or RFQ'
          },
          {
            label: '2 · Procurement sentence',
            value: 'Paste or adapt the published procurement reference language'
          },
          {
            label: '3 · Gaps',
            value: 'Document unmapped fields and route them to draft consultation'
          },
          {
            label: 'Note',
            value: 'Public validator and Evidence Checker — paused, not available yet'
          }
        ],
        plainText: formatProcurementRfqChecklistPlainText(),
        plainTextLabel: 'Procurement / RFQ checklist — copy-paste one-pager',
        actions: [
          { label: 'Open field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Licence & scope', href: '/licence' },
          { label: 'Procurement sentence', href: `${ADOPT_PATH}#procurement-sentence` },
          { label: 'Studio Pilot Kit', href: `${ADOPT_PATH}#studio-pilot` },
          { label: 'Draft consultation', href: `${GOVERNANCE_PATH}#draft-consultation` }
        ]
      },
      {
        id: 'learning-modules',
        heading: 'Thin learning modules',
        paragraphs: [
          'Three short modules sized for a studio handout or a CPD-minded practice hour. Reference materials for practice use (not an accredited CPD scheme).'
        ],
        bullets: [
          'Practice brief — copy-paste Studio Pilot Kit; one mandated deliverable per cohort',
          'Outreach pack — invite 3–5 named studios / one uni contact',
          'Schedule honesty — before/after conformance fixtures: messy schedule excerpt vs sample open bundle',
          'Procurement & citation — RFQ checklist + published procurement sentence; gaps → draft consultation'
        ],
        actions: [
          { label: 'Module: Practice brief', href: `${ADOPT_PATH}#studio-pilot` },
          { label: 'Module: Outreach pack', href: `${ADOPT_PATH}#studio-pilot-outreach` },
          { label: 'Module: Schedule honesty', href: '/examples/before-after-conformance/' },
          { label: 'Module: RFQ checklist', href: '#rfq-checklist' },
          { label: 'Module: Procurement sentence', href: `${ADOPT_PATH}#procurement-sentence` },
          { label: 'Citation guidance', href: `${GOVERNANCE_PATH}#citation-guidance` }
        ]
      },
      {
        id: 'studios-and-education',
        heading: 'Studios, universities, and CPD-minded practice',
        paragraphs: [
          'Teaching studios and practices can mandate one concrete outcome per cohort: validate an example bundle, cite the procurement reference language in a methods section or brief, or inspect an open artefact in the Evidence Checker.',
          'Foundation Approved denotes open-specification conformance when declared against the public validator. Archive Certified training, when offered, is a separate paid vendor credential.'
        ],
        bullets: [
          'One mandated deliverable per pilot — a validation, citation, or inspection outcome',
          'Prefer published examples and the before/after conformance fixtures; use published registry field keys only',
          'Use the Studio Pilot outreach pack to invite 3–5 named studios (and optionally one uni contact)',
          'Awards and founding-alliance programmes remain in draft until rubrics and incorporation gates clear'
        ],
        actions: [
          { label: 'Studio Pilot Kit brief', href: `${ADOPT_PATH}#studio-pilot` },
          { label: 'Outreach pack (3–5 studios)', href: `${ADOPT_PATH}#studio-pilot-outreach` },
          { label: 'Before/after fixtures', href: '/examples/before-after-conformance/' },
          { label: 'Draft consultation', href: `${GOVERNANCE_PATH}#draft-consultation` }
        ]
      },
      {
        id: 'scope-and-limits',
        heading: 'Scope',
        paragraphs: [
          'This page is Foundation reference material for practice and teaching: field dictionary, schemas, validators, and citation guidance. Commercial products of The Landscape Archive Pty Ltd (Library seats, connectors, Data API) remain optional implementation layers.'
        ],
        actions: [
          { label: 'Governance & licence', href: GOVERNANCE_PATH },
          { label: 'Support the standard', href: FOUNDATION_SUPPORT_CONTACT_PATH, external: true }
        ]
      }
    ]
  },
  volunteers: {
    slug: 'volunteers',
    title: 'Volunteers',
    lead: `Practical ways to help steward the open ${TLA185_DISPLAY_ID} specification — documentation, schema review, crosswalks, and community outreach — while the Foundation operates under interim draft governance.`,
    placeholder: false,
    sections: [
      {
        id: 'why-volunteer',
        heading: 'Why volunteer',
        paragraphs: [
          'An open metadata standard only works if practitioners, researchers, and institutions can read, test, and improve it together. Volunteers extend what a small interim working group can maintain on its own.',
          'Contributions are unpaid and optional. They advance documentation, schema review, and community outreach for the public specification. Membership, governance participation, and commercial licensing follow separate published processes.'
        ]
      },
      {
        id: 'technical-reviewers',
        heading: 'Technical reviewers & registry contributors',
        paragraphs: [
          'A curated intake for people who can stress-test field-dictionary corners, conformance notes, and registry clarity.',
          'Public GitHub write access may remain limited while access controls are reviewed. Email critique, annotated pack review, and structured application notes are welcome and sufficient.',
          'Select Technical reviewer or Registry contributor in the application below. We match a small number of applicants to published needs; most expressions of interest will not receive an immediate placement.'
        ],
        bullets: [
          'Technical reviewers — schema pack clarity, examples, Evidence Checker–compatible fixtures, edge-case definitions',
          'Registry contributors — preferred labels, synonyms, regional module notes, citation hygiene',
          'Outside scope for this intake: unpaid product QA for commercial tooling, or unrestricted dumps of proprietary trait engines'
        ],
        actions: [
          { label: 'Apply — curated intake', href: '#apply' },
          { label: 'Truth-tellers programme', href: '/truth-tellers' },
          { label: 'Evidence Checker', href: '/evidence-checker' }
        ]
      },
      {
        id: 'ways-to-contribute',
        heading: 'Ways to contribute',
        bullets: [
          'Schema and documentation review — clarity, examples, and conformance notes on the schema portal',
          'Crosswalk and mapping work — Revit, GIS, nursery, and council exchange profiles',
          'Truth-telling field trials — documenting how claims are evidenced in real project bundles',
          'Translation and accessibility — plain-language summaries and screen-reader-friendly docs',
          'Community outreach — university studios, public-sector briefings, and practitioner roundtables'
        ]
      },
      {
        id: 'how-to-start',
        heading: 'How to start',
        paragraphs: [
          'The schema portal and field dictionary are the published entry points for technical contributions. For structured volunteer onboarding, working-group placement, or institutional partnership, use the application form below so contributions can be matched to published needs.',
          ...(isOpenStandardGithubPubliclyAvailable()
            ? []
            : [OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE]),
          'Until a suitable independent entity is established, volunteer coordination runs through The Landscape Archive Pty Ltd as interim implementation partner. Submissions land in private R2 under foundation-volunteer-applications/ with admin email notification when mail is configured.'
        ],
        actions: [
          { label: 'Apply here', href: '#apply' },
          ...(isOpenStandardGithubPubliclyAvailable()
            ? [{ label: 'Open specification repository', href: OPEN_STANDARD_GITHUB_URL, external: true }]
            : [{ label: 'Open schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true }])
        ]
      }
    ]
  },
  'truth-tellers': {
    slug: 'truth-tellers',
    title: 'Truth-tellers',
    lead: 'Practitioners, researchers, Traditional Owner organisations, regulators, and institutions who insist that landscape project metadata states what was claimed and what supports it.',
    placeholder: false,
    sections: [
      {
        id: 'what-we-mean',
        heading: 'What truth-telling means',
        paragraphs: [
          'Implicit claims — “native planting,” “climate resilient,” “sustainable,” “culturally appropriate” — are stated precisely through the field dictionary and conformance rules.',
          'Structural requirements: taxon IDs; banded climate context; evidence links; sensitivity classes; synthetic-asset lineage.'
        ]
      },
      {
        id: 'who-counts',
        heading: 'Who truth-tellers are',
        bullets: [
          'Practitioners who document species, site context, and sustainability claims in exchange bundles',
          'Researchers and herbaria who supply taxonomic and trait evidence',
          'Traditional Owner organisations and cultural advisors who set protocol for restricted metadata',
          'Regulators, certifiers, and client teams who review disclosed claims',
          'Institutions that adopt the open standard as a shared reference'
        ]
      },
      {
        id: 'registry-intake',
        heading: 'Curated registry & technical intake',
        paragraphs: [
          'If you want to help stress-test dictionary corners or registry wording, use the curated Technical reviewers / Registry contributors path on Volunteers. Highly selective; GitHub may be limited — pack review by email is enough.'
        ],
        actions: [
          { label: 'Technical reviewers intake', href: '/volunteers#technical-reviewers' },
          { label: 'Apply to volunteer', href: '/volunteers#apply' }
        ]
      },
      {
        id: 'foundation-role',
        heading: "The Foundation's role",
        paragraphs: [
          'The Foundation defines how honest disclosure is encoded. Substantive verification remains with project teams and governing institutions.'
        ],
        actions: [{ label: 'Truth-telling charter', href: `${GOVERNANCE_PATH}#truth-telling` }]
      }
    ]
  },
  awards: {
    slug: 'awards',
    ...buildFoundationAwardsTopicPage({
      tla185DisplayId: TLA185_DISPLAY_ID,
      governancePath: GOVERNANCE_PATH,
      supportContactPath: FOUNDATION_SUPPORT_CONTACT_PATH,
      supportContactExternal: true
    })
  },
  media: {
    slug: 'media',
    title: 'Media',
    lead: `Press kit, brand assets, spokesperson contacts, and embargoed launch material for journalists covering the open ${TLA185_DISPLAY_ID} standard.`,
    placeholder: true,
    sections: [{ id: 'media-soon', heading: 'Media centre', paragraphs: [placeholderLead] }]
  },
  events: {
    slug: 'events',
    title: 'Events',
    lead: 'Roundtables, RFC sessions, university studios, and public briefings as the interim working group opens the specification for review.',
    placeholder: true,
    sections: [{ id: 'events-soon', heading: 'Events', paragraphs: [placeholderLead] }]
  }
})
