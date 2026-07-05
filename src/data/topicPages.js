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
    lead: `A vendor-neutral recognition programme for landscape architecture practice, research, and open infrastructure that advances auditable project metadata — documentation integrity, interchange conformance, and reproducible evidence under the public ${TLA185_DISPLAY_ID} field registry.`,
    placeholder: false,
    sections: [
      {
        id: 'scope-and-purpose',
        heading: 'Scope and evaluative purpose',
        paragraphs: [
          `The Landscape Archive Foundation Awards recognise work that strengthens the information architecture of landscape practice: project records, reference datasets, validators, crosswalks, and published scholarship that make landscape claims inspectable rather than implicit. Evaluation centres on what can be verified in an exchange bundle or open artefact — taxonomic nomenclature, site and climate context, sustainability disclosures, cultural sensitivity classes, and asset lineage — not on presentation imagery or proprietary marketing narratives.`,
          'The programme is independent of any commercial product stack. Entry does not require Landscape Archive software, a particular authoring environment, or membership in any vendor ecosystem. Submissions may originate from any practice, institution, or open-source contributor, provided they demonstrate conformance to published criteria and supply sufficient material for independent review.',
          'Recognition is intended as a public reference point for universities, public agencies, professional bodies, and peer reviewers — analogous to how the Foundation stewards the open specification itself. Awards confer honour and citation value; they do not substitute for statutory certification, client sign-off, regulatory audit, or community protocol.'
        ]
      },
      {
        id: 'methodological-framing',
        heading: 'Methodological framing',
        paragraphs: [
          'Assessment follows a documentation-first epistemology familiar to empirical landscape research and building-information modelling practice. A claim is treated as admissible when it is encoded in a machine-readable field, linked to evidence or method notes where the schema requires them, and traceable through project phases without reliance on oral tradition or unreleased native files.',
          'Where entries involve built work, reviewers examine continuity between design intent, construction records, and handover metadata — including species assignments harmonised to accepted taxonomic authorities, growth-form and planting-density fields that remain consistent across drawing, model, and schedule exports, and phytogeographic or ecological context stated at appropriate spatial resolution rather than as undifferentiated “native” labels.',
          'Where entries involve tooling or research, reviewers examine reproducibility: published schemas, test fixtures, validator rules, or study protocols that a third party could re-run. Cross-vendor interchange — for example, Revit, IFC, GIS, nursery, or council exchange profiles mapped to Foundation fields — is evaluated on fidelity of mapping and loss documentation, not on brand affiliation.',
          'Synthetic, procedural, or AI-assisted assets are not excluded; they are evaluated on provenance metadata, attribution boundaries, and conformance with the Foundation’s lineage and sensitivity fields. The methodological baseline aligns with Foundation Approved conformance where applicable, without conflating open recognition with Archive Certified commercial credentials.'
        ]
      },
      {
        id: 'evaluation-criteria',
        heading: 'Evaluation criteria',
        paragraphs: [
          'Published rubrics will translate the Foundation Standards into category-specific checkpoints. The following dimensions apply across all categories unless a category rubric explicitly narrows scope.',
          'Documentation integrity requires that stated claims appear in interchange metadata, not only in narrative reports or visual boards. Fields must be populated consistently, with null or restricted values explained where sensitivity classes apply.',
          'Interchange standards conformance requires that submitted bundles validate against published schema versions, use registered field identifiers from the public registry, and document any extensions or local profiles through crosswalk notes.',
          'Reproducibility and auditability require that evidence URIs, method notes, or open repositories cited in metadata remain accessible to reviewers for the assessment window, and that material differences between design, construction, and as-maintained records are disclosed rather than smoothed over.',
          'Institutional and cultural accountability requires that entries involving Indigenous knowledge, restricted cultural detail, or community co-design respect published sensitivity classes — keeping restricted material out of open repositories while still documenting that protocol was followed.'
        ],
        facts: [
          { label: 'Documentation integrity', value: 'Claims encoded in machine-readable fields with consistent phase-to-phase traceability' },
          { label: 'Interchange conformance', value: 'Schema validation, registered field IDs, documented crosswalks and loss notes' },
          { label: 'Reproducibility', value: 'Open fixtures, validators, or study protocols sufficient for independent re-examination' },
          { label: 'Provenance and lineage', value: 'Attribution, derivation, and synthetic-asset disclosure per Foundation metadata rules' },
          { label: 'Ecological and taxonomic rigour', value: 'Harmonised nomenclature, growth form, and site context at defensible resolution' },
          { label: 'Vendor neutrality', value: 'No preference for proprietary stacks; assessment on artefact quality alone' }
        ]
      },
      {
        id: 'category-applied',
        heading: 'Applied landscape architecture',
        paragraphs: [
          'This category honours delivered landscape architecture where the project record remains legible after construction and handover — when site analysis, planting design intent, material specification, and maintenance assumptions survive translation from concept through tender, construction administration, and asset handover without collapsing into undifferentiated graphics.',
          'Strong entries document biophysical context at a scale appropriate to design decisions: soil and hydrology constraints, microclimate bands, existing vegetation communities, and disturbance history where they inform planting palettes and structural soil assemblies. Planting schedules carry harmonised taxonomic identifiers and growth-form classes rather than common-name-only lists that cannot be reconciled across jurisdictions.',
          'Reviewers look for phase continuity — alignment between planting plans, BIM or CAD exports, specifications, and as-built or as-maintained updates — and for honest disclosure where design adaptations occurred during delivery. Visual presentation may accompany a submission but is not itself evidential; the interchange record and supporting construction documentation carry evaluative weight.'
        ]
      },
      {
        id: 'category-technology',
        heading: 'Technology',
        paragraphs: [
          'This category recognises tools, pipelines, and digital workflows that improve landscape metadata fidelity across authoring environments — including BIM authoring, IFC export, parametric and procedural vegetation systems, digital-twin readiness, and geospatial integration — without locking practitioners into a single vendor stack.',
          'Eligible work includes validators, schema bindings, API adapters, crosswalk implementations, and reference integrations that map foreign property sets to Foundation fields with documented transformation rules and known loss. Digital-twin interoperability is assessed on whether landscape assets and planting metadata can be ingested, queried, and updated in operational models while preserving taxonomic and provenance fields.',
          'Synthetic visualisation and procedural planting systems are admissible when lineage metadata identifies training data boundaries, derivative status, and attribution obligations. Technology entries are judged on openness of documentation, test coverage against published conformance fixtures, and demonstrated interchange with at least one non-proprietary export path.'
        ]
      },
      {
        id: 'category-craftsmanship',
        heading: 'Craftsmanship',
        paragraphs: [
          'This category addresses the detail documentation traditions of landscape architecture — grading and drainage assemblies, paving and edge conditions, planting pit and structural soil specifications, irrigation and soil-amendment schedules, and custom fabrication records — where craft knowledge must be transmitted to contractors and maintainers with precision.',
          'Craftsmanship, in this evaluative frame, is not ornamental refinement alone. It is the disciplined encoding of constructible detail: dimensioned sections, material grades, installation sequences, and tolerance notes that remain bound to landscape metadata rather than isolated in static drawing sets. Entries should show how detail selections connect to planting establishment criteria, permeability targets, or maintenance access requirements declared elsewhere in the bundle.',
          'Reviewers examine whether construction records preserve design intent under field variation — documented substitutions, remediation notes, and inspection hold-points — and whether handover packages give facility managers operable metadata, not merely archival PDFs.'
        ]
      },
      {
        id: 'category-data',
        heading: 'Data',
        paragraphs: [
          'This category recognises exemplary stewardship of plant and site reference data — taxonomic nomenclature aligned to accepted authorities, trait and establishment attributes with cited sources, and registry contributions that improve communal reference integrity for the discipline.',
          'Strong entries supply open or project-local datasets that validate against published schema, document update cadence and versioning, and distinguish authoritative measurements from inferred or modelled values. Phytogeographic and ecological documentation is evaluated on spatial explicitness, citation of survey or literature evidence, and appropriate uncertainty when extrapolating beyond observation.',
          'Data work may include nursery or supplier catalogues mapped to Foundation fields, council or agency planting lists harmonised for interchange, herbarium or arboretum reference exports, or maintenance of public registry entries. Reviewers favour transparent provenance chains — who measured, when, under what method — over opaque aggregates that cannot be audited.'
        ]
      },
      {
        id: 'category-ai',
        heading: 'AI',
        paragraphs: [
          'This category addresses generative, predictive, and assistive computational methods applied to landscape documentation — species recommendation, planting layout synthesis, climate or establishment risk screening, image-derived species identification, and procedural vegetation authoring — under explicit methodological disclosure.',
          'Entries must state model or algorithm boundaries: training data scope, known failure modes, human review steps, and fields where AI output remains provisional pending practitioner confirmation. Machine-checkable provenance is required for synthetic or AI-modified assets — lineage identifiers, derivative flags, and attribution consistent with Foundation metadata rules.',
          'Reviewers do not reward novelty of model architecture alone. They examine whether AI-assisted workflows improve honest disclosure — for example, by surfacing uncertainty bands, linking recommendations to cited trait evidence, or preventing silent substitution of harmonised taxa — and whether project records distinguish AI-generated values from practitioner-verified values in interchange exports.'
        ]
      },
      {
        id: 'category-research',
        heading: 'Research',
        paragraphs: [
          'This category honours scholarship, studio pedagogy, and public programmes that treat open landscape metadata and the field registry as shared disciplinary infrastructure — not as a proprietary product feature.',
          'Eligible work includes curriculum that teaches schema literacy and conformance testing; theoretical or historical research on landscape representation, ecological documentation, or digital interchange ethics; policy analyses that reference Foundation fields in public-sector briefs; and institutional adoption programmes that publish reading guides, crosswalks, or governance models for open metadata.',
          'Reviewers assess clarity of argument, fidelity to published specification versions, and contribution to communal understanding — for example, framing how taxonomic harmonisation supports longitudinal monitoring, or how sensitivity classes enable ethical collaboration with Traditional Owner organisations without exposing restricted detail in open repositories.'
        ]
      },
      {
        id: 'category-research-studies',
        heading: 'Research studies',
        paragraphs: [
          'This category recognises empirical and field-based inquiry that tests how metadata claims perform under real project conditions — establishment monitoring, post-occupancy planting performance, interchange loss measurement, validator false-positive and false-negative rates, or comparative trials of crosswalk fidelity across authoring tools.',
          'Strong studies publish protocols, datasets or de-identified fixtures sufficient for replication, and limitations openly. Hypotheses should relate to Foundation fields — for instance, whether banded climate context improves survival forecasting compared to unaudited suitability labels, or whether IFC export preserves growth-form metadata through round-trip workflows.',
          'Reviewers apply standards familiar to landscape performance research and reproducible computational science: defined sampling frames, reported effect sizes or conformance rates, and separation between vendor-specific observations and conclusions transferable to open interchange practice.'
        ]
      },
      {
        id: 'programme-governance',
        heading: 'Programme governance and assessment process',
        paragraphs: [
          'The awards programme is in preparation ahead of Foundation incorporation. When active, entries will be assessed by a panel comprising landscape architecture practice, academic research, public-sector delivery, and First Nations advisory representation — with published conflict-of-interest rules and category rubrics released before each cycle.',
          'Assessment will be blind to entrant commercial affiliation where practical. Criteria, anonymised scoring rationales, and aggregate results are intended to be public so recognition can be inspected and cited in academic or institutional contexts.',
          'Awards confer recognition, not accreditation. They are not a government endorsement, professional registration, or regulatory approval. Like the open specification, they exist so practitioners, researchers, and institutions can point to independently reviewed exemplars of documentation integrity and interchange discipline.'
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
