/** @typedef {{ filename: string, kicker: string, title: string, intro?: boolean, titleLong?: boolean, footerUrl: string, body: string[], webBody?: string[] }} AwardsProgrammeSlide */

/** @param {AwardsProgrammeSlide} slide */
export function getSlideWebParagraphs(slide) {
  return slide.webBody ?? slide.body
}

/** Website-only section — no carousel JPEG; merged into evaluative-purpose slide for Instagram. */
export const ARCHIVAL_STEWERSHIP_WEB_SECTION = Object.freeze({
  heading: 'Archival stewardship',
  paragraphs: [
    'Archival stewardship honours practitioners and institutions that treat the project archive as durable scholarly infrastructure rather than a presentation bundle assembled at project close-out. Nominated work demonstrates nomenclature aligned to accepted taxonomic and geospatial authorities, provenance for trait and site claims, and phase-labelled records that contractors, maintainers, and future reviewers can inspect as structured metadata alongside design deliverables.',
    'Stewardship extends beyond individual projects to contributions that improve communal reference integrity — curated species and site datasets, validator tooling, crosswalk documentation, and institutional policies that keep open metadata accurate across authoring environments.',
    'Evaluators look for project archives where planting schedules, establishment assumptions, maintenance intent, and sensitivity handling remain legible years after the originating team has moved on — evidence that landscape practice is being transmitted, not merely displayed.'
  ]
})

/** @type {AwardsProgrammeSlide[]} */
export const AWARDS_PROGRAMME_SLIDES = [
  {
    filename: '01-awards-intro.jpg',
    kicker: 'The Landscape Archive Foundation',
    title: 'Awards',
    intro: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'A vendor-neutral recognition programme for applied landscape architecture and archival stewardship. Programme in preparation — full charter at landscapearchive.org/awards.'
    ],
    webBody: [
      'The Landscape Archive Foundation Awards recognise work that advances the archival and information architecture of landscape practice — delivered projects, reference data, documentation traditions, research, representation, tooling, and disclosed computational methods whose claims remain traceable to cited sources and open to independent review.',
      'The programme is vendor-neutral and independent of any commercial product stack. Recognition rests on documentary integrity, metadata stewardship, and reproducible assessment material — not stylistic preference, tenure alone, or affiliation with a particular authoring environment.',
      'The awards programme is in preparation under interim draft governance. Full charter, category rubrics, and assessment process will be published at landscapearchive.org/awards before entries open.'
    ]
  },
  {
    filename: '02-scope.jpg',
    kicker: 'Programme',
    title: 'Scope',
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Recognises work that strengthens landscape practice through inspectable project records and open metadata stewardship — delivered projects, reference data, documentation traditions, research, representation, tooling, and disclosed computational methods.',
      'The programme does not confer government accreditation, professional registration, or vendor certification.'
    ],
    webBody: [
      'The programme recognises contributions across the full documentary lifecycle of landscape architecture — from site analysis and planting intent through tender documentation, construction administration, asset maintenance, and the communal reference data practitioners rely on when specifying, establishing, and stewarding living landscapes.',
      'Eligible work includes delivered and maintained projects; stewardship of plant and site reference data; scholarship and publication; craft documentation and spatial communication; technology and interchange tooling; community engagement and heritage documentation; and institutional programmes that embed open metadata discipline in live practice.',
      'The programme does not confer government accreditation, professional registration, or vendor certification. Awards document independently reviewed exemplars within the Foundation\'s published scope — recognition that universities, agencies, and peers may cite alongside the open specification and field registry.'
    ]
  },
  {
    filename: '03-evaluative-purpose.jpg',
    kicker: 'Programme',
    title: 'Evaluative purpose',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Entries are assessed for documentary integrity — whether claims remain traceable to cited sources, persist across project phases, and can be reviewed against the public field registry.',
      'Assessment honours archives treated as scholarly infrastructure — accepted nomenclature, inspectable provenance, and reproducible evidence — not stylistic preference or single-vendor workflow loyalty.'
    ],
    webBody: [
      'Entries are assessed for documentary integrity — whether stated landscape claims remain traceable to cited sources, endure from design intent through construction and long-term stewardship, and can be reviewed by a third party without proprietary tooling or informal briefing.',
      'Evaluators prioritise reproducible evidence and archival legibility. A submission demonstrates evaluative purpose when its metadata encodes what was claimed, what supports each claim, and where material changed between project phases — with null or restricted values explained where sensitivity classes apply.',
      'Assessment is deliberately independent of stylistic preference, media profile, and single-vendor workflow loyalty. Evaluators prioritise whether the archive remains honest, complete, and inspectable for the maintainers and reviewers who inherit it — across design, construction, and long-term stewardship phases.'
    ]
  },
  {
    filename: '04-methodological-framing.jpg',
    kicker: 'Programme',
    title: 'Methodological framing',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Assessment follows published Foundation criteria: explicit scope of fields submitted, methodology and limitations stated, interchange and validator evidence where applicable, and sensitivity handling for cultural and disclosure contexts.',
      'Computational and AI-assisted work requires disclosed methods and provenance encoding suitable for archival review.'
    ],
    webBody: [
      'Assessment follows published Foundation criteria. Each entry declares the scope of fields submitted, the methodology used to populate them, and the limitations that bound interpretability — including where data were inferred, aggregated, or withheld under published sensitivity classes.',
      'Where interchange is claimed, submissions supply validator evidence: schema version, registered field identifiers, export bundles, and crosswalk notes documenting any loss or transformation between authoring environments. Where empirical claims are made — climate performance, establishment ecology, carbon or water disclosure — cited sources and method notes must remain accessible for the assessment window.',
      'Computational and AI-assisted work is eligible when methods and provenance are disclosed with sufficient detail for archival review: training data boundaries, synthetic asset lineage, human review steps, and explicit separation between measured field observation and model-generated inference.'
    ]
  },
  {
    filename: '05-applied-landscape-architecture.jpg',
    kicker: 'Award category',
    title: 'Applied landscape architecture',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'The programme\'s primary recognition axis — delivered and maintained landscape architecture where the project archive remains legible across phases, from site analysis and planting intent through tender, construction administration, and asset maintenance.'
    ],
    webBody: [
      'Applied landscape architecture is the programme\'s primary recognition axis. This category honours delivered and maintained work where the project archive remains legible across phases — not only as drawings and renders, but as structured records that encode site analysis, planting intent, grading and drainage logic, construction substitutions, and maintenance assumptions.',
      'Evaluators assess whether planting schedules harmonise accepted nomenclature with establishment context; whether tender and construction records document material changes with phase-to-phase transparency; and whether as-maintained documentation gives future stewards enough evidence to understand what was built, why, and under what performance expectations.',
      'Recognition is not limited to flagship public realm projects. Equally eligible is rigorous documentation of housing landscapes, campus open space, infrastructure corridors, and restoration work — wherever applied practice produces an inspectable archive that survives beyond presentation day.'
    ]
  },
  {
    filename: '06-data-and-reference-stewardship.jpg',
    kicker: 'Award category',
    title: 'Data & reference stewardship',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Exemplary stewardship of plant and site reference data — taxonomic nomenclature aligned to accepted authorities, trait and establishment attributes with cited sources, and registry contributions that strengthen the archival substrate of practice.'
    ],
    webBody: [
      'Data and reference stewardship recognises exemplary care for the communal datasets landscape practitioners depend on — species nomenclature, trait attributes, establishment parameters, climate context bands, and site typologies that must remain accurate, citable, and interoperable across practices and jurisdictions.',
      'Nominated work demonstrates taxonomic nomenclature aligned to accepted authorities; trait and establishment attributes populated with cited sources and documented provenance rather than undocumented transfer between informal spreadsheets; and documented update protocols when reference records change. Registry contributions — new fields, crosswalks, validator fixtures, or curated subsets — are assessed for reproducibility and communal benefit.',
      'Evaluators distinguish stewardship from aggregation. A strong submission shows provenance for each attribute, explicit handling of uncertainty, and evidence that downstream project metadata can rely on the reference layer without silent drift or proprietary lock-in.'
    ]
  },
  {
    filename: '07-botanical-literacy.jpg',
    kicker: 'Award category',
    title: 'Botanical & horticultural literacy',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Species identification, phenology, establishment ecology, horticultural practice, and planting design reasoning documented with accepted nomenclature, cited trait sources, and field records that encode inspectable botanical rationale for contractors and maintainers.'
    ],
    webBody: [
      'Botanical and horticultural literacy recognises planting design and specification work grounded in defensible plant knowledge and horticultural practice — species and cultivar identification, phenology, establishment ecology, growth form, and maintenance implications documented with accepted nomenclature and cited trait sources, with common names cross-referenced to accepted nomenclature and growth-habit claims supported by documented observation or published references.',
      'Evaluators look for planting schedules and design narratives that explain why particular taxa were selected for particular site contexts; field records or post-occupancy observations where available; and structured metadata that contractors and maintainers can inspect alongside design deliverables.',
      'This category welcomes work that makes botanical reasoning explicit in the project archive — linking planting intent to soil, exposure, hydrology, and maintenance regime, and documenting where substitutions occurred with enough botanical detail for future reviewers to assess ecological and horticultural consequence.'
    ]
  },
  {
    filename: '08-craftsmanship-and-visualisation.jpg',
    kicker: 'Award category',
    title: 'Craft & visualisation',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Detail documentation and spatial communication — grading and drainage assemblies, paving and planting pit specifications, measured drawings, analytical graphics, and interpretive works where craft knowledge and visual method encode inspectable landscape claims in the project archive.'
    ],
    webBody: [
      'Craft and visualisation honours detail documentation and spatial communication that encode inspectable landscape claims — grading and drainage assemblies, paving and planting pit specifications, measured drawings, analytical graphics, sections, and interpretive works where craft knowledge is transmitted through the archive and remains available to fabricators, contractors, and future reviewers.',
      'Evaluators assess whether visual methods support archival legibility: dimensions, materials, tolerances, and performance assumptions stated explicitly; graphics cross-referenced to metadata fields where interchange is claimed; and drawing sets that a fabricator, contractor, or future reviewer can audit without reverse-engineering presentation intent.',
      'Recognition extends to analytical and interpretive work — sun/shade studies, hydrological diagrams, planting massing logic — when methodology is disclosed and conclusions remain traceable to cited inputs. Beautiful imagery alone is insufficient; the archive must show what was known, how it was represented, and what claims the representation supports.'
    ]
  },
  {
    filename: '09-research-and-publication.jpg',
    kicker: 'Award category',
    title: 'Research & publication',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Empirical inquiry, scholarship, and published writing — field studies testing metadata performance, studio pedagogy in archival literacy, peer-reviewed journal work, and edited writing that enters the citable record of landscape architecture.'
    ],
    webBody: [
      'Research and publication recognises empirical inquiry, scholarship, and published writing that advances the evidential basis of landscape practice — field studies testing metadata performance, post-occupancy evaluation, studio pedagogy in archival literacy, peer-reviewed journal work, and edited writing that enters the citable record of landscape architecture.',
      'Evaluators look for declared methodology, accessible data or fixtures where ethics and licensing permit, and conclusions that practitioners can apply without undisclosed proprietary context. Work that tests interchange conformance, documents validator outcomes, or examines how planting claims perform in maintenance is particularly aligned with programme purpose.',
      'Student thesis work may be nominated where field scope, limitations, and sources are declared under Foundation evaluative criteria; sustained publication programmes and institutional research agendas are equally eligible when they produce reproducible evidence rather than opinion alone.'
    ]
  },
  {
    filename: '10-technology-and-ai.jpg',
    kicker: 'Award category',
    title: 'Technology & AI',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Tools, pipelines, and computational methods that improve metadata fidelity and archival interchange — BIM authoring, IFC export, procedural vegetation, geospatial integration, and assistive AI under explicit methodological disclosure, cited baselines, and provenance encoding.'
    ],
    webBody: [
      'Technology and AI recognises tools, pipelines, and computational methods that improve metadata fidelity and archival interchange — BIM authoring environments, IFC export paths, procedural vegetation systems, geospatial integration, validation services, and assistive AI that help practitioners encode landscape claims with disclosed methods, cited baselines, and reproducible metrics suitable for independent review.',
      'Evaluators require explicit methodological disclosure: what each tool populates automatically, what requires human verification, how synthetic assets are labelled, and how export preserves registered field identifiers across environments. Submissions should include validator evidence or open fixtures sufficient for independent re-examination.',
      'Vendor-neutral assessment focuses on artefact quality and conformance outcomes, not market share. A strong entry documents where computational methods reduced error, improved archival legibility at delivery, or made previously implicit claims machine-checkable — with limitations stated as clearly as capabilities.'
    ]
  },
  {
    filename: '11-indigenous-storytelling.jpg',
    kicker: 'Award category',
    title: 'Indigenous storytelling',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Landscape documentation that centres First Nations narrative authority — Country-led interpretation, culturally appropriate disclosure handling, and storytelling where permission, provenance, and community review remain inspectable in the project archive.'
    ],
    webBody: [
      'Indigenous storytelling recognises landscape documentation that centres First Nations narrative authority — Country-led interpretation, culturally appropriate disclosure handling, and storytelling where permission, provenance, and community review remain inspectable in the project archive with narrative authority and consent records retained for future reviewers.',
      'Evaluators assess whether entries respect published sensitivity classes: restricted cultural detail withheld from open repositories while protocol compliance is still documented; attribution and consent records maintained; and narrative claims traceable to authorised sources rather than secondary summarisation.',
      'This category honours work where storytelling strengthens stewardship — helping future reviewers understand whose knowledge shaped design intent, under what conditions it may be cited, and how landscape records serve community continuity as well as project delivery.'
    ]
  },
  {
    filename: '12-climate-positive-impact.jpg',
    kicker: 'Award category',
    title: 'Climate positive impact',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Work that documents climate and site-context claims with cited evidence — carbon and water disclosure, adaptation performance, lifecycle maintenance intent, and metadata with disclosed methods and reproducible metrics across project phases.'
    ],
    webBody: [
      'Climate positive impact recognises work that documents climate and site-context claims with cited evidence — carbon and water disclosure, heat and drought adaptation performance, lifecycle maintenance intent, and metadata that endures across project phases with cited baselines, disclosed methods, and reproducible metrics.',
      'Evaluators look for banded climate context rather than vague resilience language; planting and material choices linked to stated performance assumptions; and phase-to-phase records when substitutions affect environmental claims. Where calculators or models are used, method notes and input boundaries must be disclosed.',
      'Recognition requires honesty about limits as well as ambition. A strong submission documents what was measured, what was modelled, what remains uncertain, and how maintainers should interpret performance claims after establishment — keeping climate narrative accountable to inspectable records.'
    ]
  },
  {
    filename: '13-multimedia-and-moving-picture.jpg',
    kicker: 'Award category',
    title: 'Multimedia & moving picture',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Time-based and cinematic landscape communication — moving image, sound, and interactive media where annotated sequences, documented production methods, and inspectable site claims remain legible beyond presentation-day playback.'
    ],
    webBody: [
      'Multimedia and moving picture recognises time-based and cinematic landscape communication — moving image, sound, and interactive media where annotated sequences, documented production methods, and inspectable site claims remain legible beyond presentation-day playback.',
      'Evaluators assess whether media assets are linked to structured metadata: what each sequence documents, which site conditions or design decisions it supports, and how production methods affect interpretability. Captions, shot logs, geospatial references, and cross-links to planting or grading records strengthen archival value.',
      'This category welcomes work that helps non-specialist audiences understand landscape complexity without sacrificing evidential rigour — provided the archive makes clear which claims are observational, which are interpretive, and which require field verification after viewing.'
    ]
  },
  {
    filename: '14-student-awards.jpg',
    kicker: 'Award category',
    title: 'Student awards',
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Emerging practitioners and studio work that demonstrates archival literacy early — student projects, thesis documentation, and pedagogical submissions where field scope, limitations, and sources are declared under Foundation evaluative criteria.'
    ],
    webBody: [
      'Student awards recognise emerging practitioners and studio work that demonstrates archival literacy early — student projects, thesis documentation, and pedagogical submissions where field scope, limitations, and sources are declared under Foundation evaluative criteria rather than deferred until professional practice.',
      'Evaluators welcome rigorous studio work that treats documentation as part of design method: harmonised nomenclature in planting proposals, cited trait sources for species selection, explicit assumptions in site analysis, and honest disclosure where student work infers rather than measures.',
      'Student entries are assessed with the same emphasis on documentary integrity and reproducible evidence as professional categories — scaled appropriately to project scope, with mentorship and institutional context noted where relevant.'
    ]
  },
  {
    filename: '15-innovation.jpg',
    kicker: 'Award category',
    title: 'Innovation',
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Novel methods, workflows, and institutional programmes that advance honest landscape metadata — reproducible experiments, cross-disciplinary prototypes, and innovations disclosed with methodology suitable for peer review under the open field registry.'
    ],
    webBody: [
      'Innovation recognises novel methods, workflows, and institutional programmes that advance honest landscape metadata — reproducible experiments, cross-disciplinary prototypes, delivery innovations, and organisational change disclosed with methodology suitable for peer review under the open field registry.',
      'Evaluators distinguish innovation from novelty. A strong submission documents what problem was addressed, what was tried, what failed, and what evidence supports adoption — including open fixtures, pilot project archives, or published protocols others can replicate without informal access to the origin team.',
      'Eligible work includes new interchange paths, maintenance feedback loops, participatory documentation models, and institutional programmes that embed metadata discipline in delivery practice — wherever innovation improves inspectability rather than obscuring it behind proprietary advantage.'
    ]
  },
  {
    filename: '16-practice-advocacy-and-integration.jpg',
    kicker: 'Award category',
    title: 'Practice advocacy & integration',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Practitioners and institutions that integrate applied landscape architecture with standards advocacy — contract language, delivery specifications, and institutional policy that embed open interchange, validator evidence, and vendor-neutral documentation in live practice.'
    ],
    webBody: [
      'Practice advocacy and integration honours practitioners and institutions that embed open metadata discipline in live practice — contract language, delivery specifications, employer standards, and client briefing templates that require interchange evidence, validator outcomes, and vendor-neutral documentation rather than treating archival quality as optional scope.',
      'Evaluators look for documented integration across projects: how advocacy translated into delivered archives, how staff were trained, how clients and collaborators were onboarded, and how archival quality was evidenced at delivery. Policy alone is insufficient without inspectable implementation.',
      'Recognition includes professional bodies, public agencies, and private practices that raised baseline documentation expectations industry-wide — provided their contribution is evidenced through published guidance, anonymised case material, or open templates others can adopt.'
    ]
  },
  {
    filename: '17-open-standards-and-interoperability.jpg',
    kicker: 'Award category',
    title: 'Open standards & interoperability',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Crosswalks, reference implementations, validator tooling, and institutional programmes that strengthen vendor-neutral interchange — metadata pipelines where claims remain machine-checkable across authoring environments and survive export without proprietary lock-in.'
    ],
    webBody: [
      'Open standards and interoperability recognises crosswalks, reference implementations, validator tooling, schema contributions, and institutional programmes that strengthen vendor-neutral interchange — metadata pipelines where landscape claims remain machine-checkable across authoring environments and survive export without proprietary lock-in.',
      'Evaluators assess whether submissions include runnable validators or fixtures, documented field mappings with loss notes, and evidence of adoption beyond the originating team. Work that closes gaps between landscape-specific metadata and broader BIM or geospatial ecosystems is particularly valued.',
      'This category honours contributors who treat interchange as communal infrastructure: maintaining public registries, publishing version migration guides, and documenting where standards end and project-specific extensions begin — so reviewers can separate conformance from custom profile drift.'
    ]
  },
  {
    filename: '18-community-engagement.jpg',
    kicker: 'Award category',
    title: 'Community engagement',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Public realm programmes, participatory documentation, and community-led landscape records — engagement processes where participant intent, consent, and outcomes remain traceable in the project archive and reviewable under published Foundation criteria.'
    ],
    webBody: [
      'Community engagement recognises public realm programmes, participatory documentation, and community-led landscape records — engagement processes where participant intent, consent, and outcomes remain traceable in the project archive and reviewable under published Foundation criteria long after consultation workshops conclude.',
      'Evaluators assess whether engagement metadata records who participated, under what protocol, what decisions changed as a result, and how ongoing stewardship involves community actors. Summative reports alone are insufficient without structured linkage to design records and maintenance intent.',
      'Recognition includes work that makes power and limitation explicit — documenting where community ambition exceeded delivery scope, how trade-offs were negotiated, and what remains for future phases — so engagement archives serve accountability as well as celebration.'
    ]
  },
  {
    filename: '19-heritage-and-cultural-landscape.jpg',
    kicker: 'Award category',
    title: 'Heritage & cultural landscape',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Documentation of heritage landscapes, cultural sites, and layered place histories — conservation records, sensitivity-aware field disclosure, and archives that respect custodial context while remaining inspectable for future stewardship reviewers.'
    ],
    webBody: [
      'Heritage and cultural landscape recognises documentation of heritage landscapes, cultural sites, and layered place histories — conservation records, sensitivity-aware field disclosure, and archives that respect custodial context while remaining inspectable for future stewardship reviewers.',
      'Evaluators look for phased documentation of fabric, vegetation, and use; clear distinction between observed condition and inferred history; and sensitivity handling that keeps restricted detail out of open repositories while still proving protocol was followed. Cross-disciplinary collaboration with historians, custodians, and conservators strengthens submissions.',
      'Eligible work includes conservation management plans, heritage impact assessments, cultural landscape studies, and delivery projects where heritage values shaped planting, grading, and materials — provided the archive transmits those decisions with enough evidential depth for successors to steward place without eroding significance.'
    ]
  },
  {
    filename: '20-distinguished-practitioner.jpg',
    kicker: 'Award category',
    title: 'Distinguished practitioner',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Sustained landscape practice over decades — a career portfolio whose archives remain legible across phases, with documented planting intent, site analysis, and maintenance records open to independent review.',
      'Recognition includes mentorship, field stewardship, and contribution to botanical and documentation literacy. Assessment follows evaluative framing on reproducible evidence — not popularity, tenure alone, or media profile.'
    ],
    webBody: [
      'Distinguished practitioner recognises sustained landscape practice over decades — a career portfolio of delivered projects whose archives remain legible across phases, with documented planting intent, site analysis, construction administration, and maintenance records inspectable as a body of work rather than reducible to a single flagship submission.',
      'Evaluators assess cumulative contribution to archival literacy in the profession: mentorship that trains staff in nomenclature and metadata discipline; institutional programmes that raised documentation standards; field stewardship through post-occupancy review; and reference contributions that strengthened communal datasets practitioners rely on daily.',
      'Recognition follows the same evaluative framing as all programme awards — reproducible evidence, vendor-neutral excellence, and inspectable records. Popularity, tenure alone, or media profile do not substitute for demonstrated documentary integrity across a body of work nominees can substantiate for independent review.'
    ]
  }
]

export const AWARDS_PROGRAMME_META = Object.freeze({
  id: 'awards-programme',
  title: 'Foundation Awards programme',
  theme: 'foundation-white',
  footerUrl: 'landscapearchive.org/awards',
  publicBasePath: '/marketing/instagram/foundation-white/awards'
})

/** @returns {AwardsProgrammeSlide[]} */
export function getAwardsProgrammeFramingSlides() {
  return AWARDS_PROGRAMME_SLIDES.filter((slide) => slide.kicker === 'Programme')
}

/** @returns {AwardsProgrammeSlide[]} */
export function getAwardsProgrammeCategorySlides() {
  return AWARDS_PROGRAMME_SLIDES.filter((slide) => slide.kicker === 'Award category')
}

function slugifyCategoryId(title) {
  return `category-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

/**
 * Build Foundation Awards topic page content for Archive SPA and landscapearchive.org.
 *
 * @param {{
 *   tla185DisplayId?: string,
 *   governancePath: string,
 *   supportContactPath: string,
 *   supportContactExternal?: boolean
 * }} options
 */
export function buildFoundationAwardsTopicPage({
  tla185DisplayId = 'TLA-185',
  governancePath,
  supportContactPath,
  supportContactExternal = false
}) {
  const introSlide = AWARDS_PROGRAMME_SLIDES.find((slide) => slide.intro)
  const [scopeSlide, evaluativeSlide, methodologySlide] = getAwardsProgrammeFramingSlides()
  const categorySlides = getAwardsProgrammeCategorySlides()

  return {
    title: 'Awards',
    lead: `A vendor-neutral recognition programme for applied landscape architecture and archival stewardship — work that preserves, documents, and transmits landscape practice through inspectable project records, cited sources, and reproducible evidence under the public ${tla185DisplayId} field registry. Programme in preparation under interim draft governance.`,
    placeholder: false,
    sections: [
      {
        id: 'scope-and-purpose',
        heading: 'Scope and evaluative purpose',
        paragraphs: [
          ...getSlideWebParagraphs(scopeSlide),
          ...getSlideWebParagraphs(evaluativeSlide),
          ...(introSlide ? getSlideWebParagraphs(introSlide).slice(0, 2) : []),
          'The programme is independent of any commercial product stack. Submissions may originate from any practice, institution, or open-source contributor, using any authoring environment that meets published criteria and supplies sufficient material for independent review.'
        ].filter(Boolean)
      },
      {
        id: 'archival-stewardship',
        heading: ARCHIVAL_STEWERSHIP_WEB_SECTION.heading,
        paragraphs: ARCHIVAL_STEWERSHIP_WEB_SECTION.paragraphs
      },
      {
        id: 'methodological-framing',
        heading: methodologySlide?.title ?? 'Methodological framing',
        paragraphs: getSlideWebParagraphs(methodologySlide)
      },
      {
        id: 'evaluation-criteria',
        heading: 'Evaluation criteria',
        paragraphs: [
          'Published rubrics will translate the Foundation Standards into category-specific checkpoints. The following dimensions apply across all categories unless a category rubric explicitly narrows scope.',
          'Documentation integrity requires that stated claims appear in interchange metadata with phase-to-phase consistency. Fields must be populated consistently, with null or restricted values explained where sensitivity classes apply.',
          'Archival legibility requires that submitted material remain interpretable beyond the originating project team — phase-labelled records, harmonised identifiers, and delivery archives that a third party could audit without proprietary tooling or informal briefing.',
          'Interchange standards conformance requires that submitted bundles validate against published schema versions, use registered field identifiers from the public registry, and document any extensions or local profiles through crosswalk notes.',
          'Reproducibility and auditability require that evidence URIs, method notes, or open repositories cited in metadata remain accessible to reviewers for the assessment window, and that material differences between design, construction, and as-maintained records are disclosed with phase-to-phase transparency.',
          'Institutional and cultural accountability requires that entries involving Indigenous knowledge, restricted cultural detail, or community co-design respect published sensitivity classes — keeping restricted material out of open repositories while still documenting that protocol was followed.'
        ],
        facts: [
          { label: 'Documentation integrity', value: 'Claims encoded in machine-readable fields with consistent phase-to-phase traceability' },
          { label: 'Archival legibility', value: 'Delivery records interpretable by third parties without proprietary tooling or oral briefing' },
          { label: 'Interchange conformance', value: 'Schema validation, registered field IDs, documented crosswalks and loss notes' },
          { label: 'Reproducibility', value: 'Open fixtures, validators, or study protocols sufficient for independent re-examination' },
          { label: 'Provenance and lineage', value: 'Attribution, derivation, and synthetic-asset disclosure per Foundation metadata rules' },
          { label: 'Ecological and taxonomic rigour', value: 'Harmonised nomenclature, growth form, and site context at defensible resolution' },
          { label: 'Vendor neutrality', value: 'Assessment on artefact quality and conformance criteria, independent of authoring vendor' }
        ]
      },
      ...categorySlides.map((slide) => ({
        id: slugifyCategoryId(slide.title),
        heading: slide.title,
        paragraphs: getSlideWebParagraphs(slide)
      })),
      {
        id: 'programme-governance',
        heading: 'Programme governance and assessment process',
        paragraphs: [
          'The awards programme is in preparation under interim draft governance. When active, entries will be assessed by a panel comprising landscape architecture practice, academic research, public-sector delivery, and First Nations advisory representation — with published conflict-of-interest rules and category rubrics released before each cycle.',
          'Assessment will be blind to entrant commercial affiliation where practical. Criteria, anonymised scoring rationales, and aggregate results are intended to be public so recognition can be inspected and cited in academic or institutional contexts.',
          'Awards confer documented recognition within the programme\'s published scope: independently reviewed exemplars of applied landscape architecture, archival stewardship, and interchange discipline that universities, agencies, and peers may cite alongside the open specification and field registry. They do not confer government accreditation, professional registration, or vendor certification.'
        ],
        actions: [
          { label: 'The Foundation Standards', href: governancePath },
          {
            label: 'Register interest',
            href: `${supportContactPath}&intent=awards`,
            external: supportContactExternal
          }
        ]
      }
    ]
  }
}

export const AWARDS_PROGRAMME_CATEGORY_COUNT = getAwardsProgrammeCategorySlides().length
