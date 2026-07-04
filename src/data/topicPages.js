import {
  FOUNDATION_SUPPORT_CONTACT_PATH,
  GOVERNANCE_PATH,
  OPEN_STANDARD_GITHUB_URL,
  TLA185_DISPLAY_ID
} from './foundationWing.js'

const placeholderLead =
  'This section is in preparation. Check back as the Foundation publishes interim working-group material, or contact us if you would like early access or to contribute.'

export const foundationTopicPages = Object.freeze({
  volunteers: {
    slug: 'volunteers',
    title: 'Volunteers',
    lead: `Practical ways to help steward the open ${TLA185_DISPLAY_ID} specification — documentation, schema review, crosswalks, and community outreach — while the Foundation completes incorporation.`,
    placeholder: false,
    sections: [
      {
        id: 'why-volunteer',
        heading: 'Why volunteer',
        paragraphs: [
          'An open metadata standard only works if practitioners, researchers, and institutions can read, test, and improve it together. Volunteers extend what a small interim working group can maintain on its own.',
          'Contributions are unpaid and optional. They do not confer membership, governance rights, or commercial entitlements — but they do help the public specification stay accurate, legible, and independent of any single vendor.'
        ]
      },
      {
        id: 'ways-to-contribute',
        heading: 'Ways to contribute',
        bullets: [
          'Schema and documentation review — clarity, examples, and conformance notes on GitHub',
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
          'The canonical repository is the best entry point for technical contributions. For structured volunteer onboarding, working-group placement, or institutional partnership, contact the interim team first so we can match your skills to published needs.',
          'Until incorporation, volunteer coordination runs through The Landscape Archive Pty Ltd as interim implementation partner.'
        ],
        actions: [
          { label: 'Open specification repository', href: OPEN_STANDARD_GITHUB_URL, external: true },
          { label: 'Volunteer enquiry', href: `${FOUNDATION_SUPPORT_CONTACT_PATH}&intent=volunteer`, external: true }
        ]
      }
    ]
  },
  'truth-tellers': {
    slug: 'truth-tellers',
    title: 'Truth-tellers',
    lead: 'The people and institutions who make landscape claims auditable — practitioners, researchers, Traditional Owner organisations, regulators, and reviewers who insist that project metadata states what was claimed and what supports it.',
    placeholder: false,
    sections: [
      {
        id: 'what-we-mean',
        heading: 'What we mean by truth-telling',
        paragraphs: [
          'Landscape drawings and models often look definitive while the underlying claims stay implicit — “native planting,” “climate resilient,” “sustainable,” “culturally appropriate.” The Foundation publishes the field dictionary and conformance rules so those claims can be stated precisely, evidenced, and reviewed.',
          'Truth-telling is not a marketing slogan. It is structural: taxon IDs and growth forms in exchange bundles; banded climate context instead of hand-waved suitability; evidence links on sustainability fields; sensitivity classes that keep restricted cultural detail out of open repositories; lineage metadata on synthetic assets.'
        ]
      },
      {
        id: 'who-counts',
        heading: 'Who truth-tellers are',
        bullets: [
          'Practitioners who document species, site context, and sustainability claims in interchange bundles',
          'Researchers and herbaria who supply taxonomic and trait evidence behind botanical fields',
          'Traditional Owner organisations and cultural advisors who set protocol for restricted metadata',
          'Regulators, certifiers, and client teams who review disclosed claims against evidence',
          'Institutions — universities, councils, and public bodies — that adopt the open standard as a shared reference'
        ]
      },
      {
        id: 'foundation-role',
        heading: "The Foundation's role",
        paragraphs: [
          'The Foundation defines how honest disclosure should be encoded. It does not replace professional judgement, client sign-off, regulatory audit, or community protocol — but it gives practitioners and institutions a shared language for what was claimed and what supports it.',
          'Open specification work is itself a form of truth-telling: criteria, schemas, and conformance checks are published where anyone can read them — distinct from vendor credentials, sales language, or unreleased models.'
        ],
        actions: [{ label: 'Read the truth-telling charter', href: `${GOVERNANCE_PATH}#truth-telling` }]
      }
    ]
  },
  media: {
    slug: 'media',
    title: 'Media',
    lead: `Press kit, brand assets, spokesperson contacts, and embargoed launch material for journalists covering the open ${TLA185_DISPLAY_ID} standard.`,
    placeholder: true,
    sections: [{ id: 'media-soon', heading: 'Media centre', paragraphs: [placeholderLead] }]
  },
  articles: {
    slug: 'articles',
    title: 'Articles',
    lead: 'Essays, field notes, and working-group explainers on botanical metadata, climate screening, cultural protocol, and open BIM interchange.',
    placeholder: true,
    sections: [{ id: 'articles-soon', heading: 'Articles', paragraphs: [placeholderLead] }]
  },
  events: {
    slug: 'events',
    title: 'Events',
    lead: 'Roundtables, RFC sessions, university studios, and public briefings as the interim working group opens the specification for review.',
    placeholder: true,
    sections: [{ id: 'events-soon', heading: 'Events', paragraphs: [placeholderLead] }]
  }
})
