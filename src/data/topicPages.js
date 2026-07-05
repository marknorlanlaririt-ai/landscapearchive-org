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
  awards: {
    slug: 'awards',
    title: 'Awards',
    lead: 'An open, vendor-neutral programme recognising landscape work that documents its claims honestly — projects, research, and tools that advance truthful, interoperable landscape metadata.',
    placeholder: false,
    sections: [
      {
        id: 'why-awards',
        heading: 'Recognising honest practice',
        paragraphs: [
          `The Foundation's programme recognises honest project records, standards advocacy, and the open tooling that makes ${TLA185_DISPLAY_ID} usable in practice — not presentation-day aesthetics.`,
          'The awards are deliberately independent of any product. Entry does not require Landscape Archive software or any vendor’s tooling — only an exchange record, validator, crosswalk, or advocacy outcome that meets published, machine-checkable criteria. Recognition is vendor-neutral by design, so it stays credible to universities, agencies, and practices alike.'
        ]
      },
      {
        id: 'categories',
        heading: 'Proposed categories',
        paragraphs: [
          `The programme is in preparation ahead of incorporation. Categories span applied practice, craft, data stewardship, technology, and research — organised around what the Foundation stewards, not how a landscape looks on presentation day. Each category is vendor-neutral: entries may be delivered projects, published reference work, institutional programmes, or open artefacts that advance honest, interoperable landscape metadata under ${TLA185_DISPLAY_ID}.`
        ],
        bullets: [
          'Applied landscape architecture — built and documented project work where site context, planting intent, and delivery records remain traceable through construction and handover — not presentation imagery alone',
          'Technology — BIM metadata, digital-twin readiness, parametric or procedural vegetation, cross-vendor interchange, and synthetic visualisation with documented provenance and attribution',
          'Craftsmanship — detail documentation, material specification, and construction records that preserve design intent and accountability in landscape delivery — where the record, not the render, carries the claim',
          'Data — exemplary taxonomic documentation, reference integrity, and open plant metadata in project interchange or published reference work',
          'AI — responsible use of generative or predictive methods in landscape documentation, with disclosed boundaries, attribution, and machine-checkable provenance in project records',
          'Research — scholarship, teaching, or public programmes that treat open landscape metadata and the field registry as shared infrastructure for the discipline',
          'Research studies — field trials, empirical validation, or published studies that test how metadata claims hold up in real project conditions and report results openly'
        ]
      },
      {
        id: 'how-it-works',
        heading: 'How it will work',
        paragraphs: [
          'Entries will be assessed against published criteria — aligned with the open baseline for Foundation Approved where applicable — by a panel that includes practice, academic, public-body, and First Nations advisory representation. Criteria and results are intended to be public, so recognition can be inspected rather than taken on trust.',
          'The awards confer recognition, not accreditation. They are not a government endorsement, not a certification, and not a substitute for professional or regulatory review. Like the specification itself, they are a public reference point that anyone may cite.'
        ],
        actions: [
          { label: 'The Foundation Standards', href: GOVERNANCE_PATH },
          { label: 'Register interest', href: `${FOUNDATION_SUPPORT_CONTACT_PATH}&intent=awards`, external: true }
        ]
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
  events: {
    slug: 'events',
    title: 'Events',
    lead: 'Roundtables, RFC sessions, university studios, and public briefings as the interim working group opens the specification for review.',
    placeholder: true,
    sections: [{ id: 'events-soon', heading: 'Events', paragraphs: [placeholderLead] }]
  }
})
