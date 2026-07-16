/** @typedef {{ filename: string, kicker: string, title: string, intro?: boolean, titleLong?: boolean, footerUrl: string, body: string[], webBody?: string[] }} AwardsProgrammeSlide */

import {
  BUILT_ENVIRONMENT_EXPORT_PROFILES,
  BUILT_ENVIRONMENT_EXPORTS_INTRO,
  BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL,
  builtEnvironmentSchemaUrl
} from '../data/builtEnvironmentExports.js'

/** @param {AwardsProgrammeSlide} slide */
export function getSlideWebParagraphs(slide) {
  return slide.webBody ?? slide.body
}

/** Website-only section — no carousel JPEG. */
export const DATA_ARCHITECTURE_ALIGNMENT_WEB_SECTION = Object.freeze({
  heading: 'Awards and the data architecture',
  paragraphs: [
    'Category rubrics map to published modules across architectural, civic/geospatial, and engineering streams, with botanical, provenance, and cultural-context modules as cross-cutting criteria.',
    `${BUILT_ENVIRONMENT_EXPORTS_INTRO} Interchange profiles on the <a href="${BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL}">schema portal</a> supply evaluation lenses for IFC, GeoJSON, USD, and spreadsheet crosswalks.`,
    'JSON schema definitions and validated JSON emitters are the published baseline; native IFC STEP and USD writers remain scheduled pipeline work.'
  ],
  facts: [
    { label: 'Architectural integration (BIM/IFC)', value: 'Project, delivery, botanical-asset, site-context, Revit shared-parameter modules' },
    { label: 'Civic & urban landscape (GIS)', value: 'Site-context, environment, sustainability, climate-screening, site-risk; GeoJSON profile' },
    { label: 'Engineering & infrastructure', value: 'Delivery, site-context, sustainability, site-risk, project modules' },
    { label: 'Cross-cutting', value: 'Taxonomy, traits, provenance, cultural-context' }
  ],
  profileTable: BUILT_ENVIRONMENT_EXPORT_PROFILES.map((profile) => ({
    label: profile.label,
    targetFormat: profile.targetFormat,
    purpose: profile.purpose,
    status: profile.status,
    schemaUrl: builtEnvironmentSchemaUrl(profile)
  }))
})

/**
 * Recognition streams (web).
 * Sub-categories retain detail; Distinguished Practitioner is omitted.
 */
export const AWARDS_PROGRAMME_STREAMS = Object.freeze([
  {
    id: 'stream-a-built-environment',
    heading: 'Stream A — Built Environment',
    lead:
      'Delivered landscape work and the documentary integrity of the built precinct across architectural, civic, and engineering contexts.',
    subcategories: [
      {
        label: 'Applied landscape architecture',
        text:
          'Delivered and maintained landscape architecture where the project archive remains legible across phases — site analysis, planting intent, construction administration, and maintenance records.'
      },
      {
        label: 'Architectural integration (BIM/IFC)',
        text:
          'Projects where landscape elements are structurally integrated with building fabric — green roofs, podium landscapes, atrium plantings — and where data integrity survives authoring through construction and handover.'
      },
      {
        label: 'Civic & urban landscape (GIS)',
        text:
          'Municipal and regional programmes — urban forestry, heat-island mitigation, parkland networks — where civic landscape claims remain legible in geospatial registries over time.'
      },
      {
        label: 'Engineering & infrastructure',
        text:
          'Civil and transport landscape delivery where ecological function is embedded in hard infrastructure, with hydrological and establishment claims traceable into asset-management records.'
      },
      {
        label: 'Craft & visualisation',
        text:
          'Detail documentation and spatial communication that encode inspectable landscape claims — assemblies, measured drawings, analytical graphics — with methodology disclosed for independent review.'
      }
    ]
  },
  {
    id: 'stream-b-knowledge-stewardship',
    heading: 'Stream B — Knowledge & Stewardship',
    lead:
      'Communal datasets, scholarship, open interchange work, and disclosed computational methods that strengthen the profession’s shared record.',
    subcategories: [
      {
        label: 'Data & reference stewardship',
        text:
          'Exemplary care for communal plant and site reference data — nomenclature, traits, provenance, and registry contributions that practitioners can cite with confidence.'
      },
      {
        label: 'Research & publication',
        text:
          'Empirical inquiry, pedagogy, and published writing that advances the evidential basis of landscape practice with declared methodology and accessible fixtures where ethics permit.'
      },
      {
        label: 'Open standards & interoperability',
        text:
          'Crosswalks, validators, reference implementations, and institutional programmes that keep landscape claims machine-checkable across authoring environments.'
      },
      {
        label: 'Innovation',
        text:
          'Novel methods and institutional programmes that advance landscape metadata with reproducible experiments and peer-reviewable disclosure.'
      },
      {
        label: 'Technology & AI',
        text:
          'Tools and computational methods that improve metadata fidelity and archival interchange under explicit methodological disclosure and provenance encoding.'
      }
    ]
  },
  {
    id: 'stream-c-cultural-ecological',
    heading: 'Stream C — Cultural & Ecological',
    lead:
      'Botanical literacy, custodial storytelling, heritage documentation, climate evidence, and time-based landscape communication.',
    subcategories: [
      {
        label: 'Botanical & horticultural literacy',
        text:
          'Planting design and specification grounded in defensible plant knowledge — identification, phenology, establishment ecology — documented with accepted nomenclature and cited sources.'
      },
      {
        label: 'Indigenous storytelling',
        text:
          'Landscape documentation that centres Indigenous and traditional custodial narrative authority, with culturally appropriate disclosure handling and community review remaining inspectable in the archive.'
      },
      {
        label: 'Heritage & cultural landscape',
        text:
          'Documentation of heritage landscapes and layered place histories — conservation records and sensitivity-aware disclosure that remain inspectable for future stewardship.'
      },
      {
        label: 'Climate positive impact',
        text:
          'Work that documents climate and site-context claims with cited evidence, disclosed methods, and reproducible metrics across project phases.'
      },
      {
        label: 'Multimedia & moving picture',
        text:
          'Time-based and cinematic landscape communication where annotated sequences and production methods keep site claims legible beyond presentation-day playback.'
      }
    ]
  },
  {
    id: 'stream-d-practice-advocacy',
    heading: 'Stream D — Practice & Advocacy',
    lead:
      'Practitioners and institutions that embed open documentation discipline in live practice, participatory records, and studio education.',
    subcategories: [
      {
        label: 'Practice advocacy & integration',
        text:
          'Contract language, delivery specifications, and institutional policy that embed open interchange, validator evidence, and vendor-neutral documentation in delivered archives.'
      },
      {
        label: 'Community engagement',
        text:
          'Public-realm programmes and participatory documentation where participant intent, consent, and outcomes remain traceable in the project archive.'
      },
      {
        label: 'Student awards',
        text:
          'Emerging practitioners and studio work that demonstrates archival literacy early — declared field scope, limitations, and sources under Foundation evaluative criteria.'
      }
    ]
  }
])

/** @type {AwardsProgrammeSlide[]} */
export const AWARDS_PROGRAMME_SLIDES = [
  {
    filename: '01-awards-intro.jpg',
    kicker: 'The Landscape Archive Foundation',
    title: 'Awards',
    intro: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Internationally oriented, vendor-neutral recognition in landscape architecture — from research and theory to built and documented practice — alongside urban design, ecological stewardship, and the data integrity of the built precinct. landscapearchive.org/awards'
    ],
    webBody: [
      'Vendor-neutral recognition in landscape architecture and allied fields, where documentary integrity, metadata stewardship, and reproducible evidence under the public field registry take precedence over presentation alone.'
    ]
  },
  {
    filename: '02-scope.jpg',
    kicker: 'Programme',
    title: 'Scope',
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'The programme recognises work worldwide that strengthens landscape architecture — from scholarship and pedagogy to delivered projects — through inspectable records and open metadata stewardship across the built precinct.',
      'Four streams organise the rubrics: Built Environment, Knowledge & Stewardship, Cultural & Ecological, and Practice & Advocacy. Recognition is programme recognition only — not government accreditation, professional registration, or vendor certification.'
    ],
    webBody: [
      'The programme covers work across the documentary lifecycle of landscape practice — from site analysis through construction and maintenance — including reference data, scholarship, tooling, and institutional programmes.',
      'Four streams organise the rubrics: Built Environment; Knowledge & Stewardship; Cultural & Ecological; and Practice & Advocacy. Recognition documents independently reviewed exemplars within a published scope — not accreditation or vendor certification.'
    ]
  },
  {
    filename: '03-evaluative-purpose.jpg',
    kicker: 'Programme',
    title: 'Evaluative purpose',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'The evaluative lens asks whether claims remain traceable to cited sources, persist across project phases, and can be reviewed against the public field registry and intended interchange paths.',
      'It privileges archives treated as scholarly infrastructure — accepted nomenclature, inspectable provenance, and reproducible evidence — independent of stylistic preference or single-vendor workflow loyalty.'
    ],
    webBody: [
      'The evaluative lens centres documentary integrity: claims traceable to cited sources, durable across project phases, and reviewable against the public field registry without proprietary tooling.',
      'Assessment is independent of stylistic preference, media profile, and single-vendor workflow loyalty.'
    ]
  },
  {
    filename: '04-methodological-framing.jpg',
    kicker: 'Programme',
    title: 'Methodological framing',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Assessment follows Foundation criteria shapes: explicit scope of fields submitted, methodology and limitations stated, interchange and validator evidence where applicable, and sensitivity handling for cultural and disclosure contexts.',
      'Computational and AI-assisted work requires disclosed methods and provenance encoding suitable for archival review.'
    ],
    webBody: [
      'Each submission declares field scope, methodology, and limitations — including inferred, aggregated, or withheld data under published sensitivity classes.',
      'Where interchange is claimed, materials supply validator evidence and crosswalk notes. Computational and AI-assisted work requires disclosed methods and provenance suitable for archival review.'
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
      'Recognition is not limited to flagship public realm projects or any single region. Equally eligible is rigorous documentation of housing landscapes, campus open space, infrastructure corridors, urban design interventions, and restoration work — wherever applied practice produces an inspectable archive that survives beyond presentation day.'
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
      'Landscape documentation that centres Indigenous and traditional custodial narrative authority — community-led interpretation, culturally appropriate disclosure handling, and storytelling where permission, provenance, and community review remain inspectable in the project archive.'
    ],
    webBody: [
      'Indigenous storytelling recognises landscape documentation that centres Indigenous and traditional custodial narrative authority — whether Country-led interpretation in Australian contexts, tribal or customary authority elsewhere, or equivalent community-led protocols — with culturally appropriate disclosure handling and storytelling where permission, provenance, and community review remain inspectable in the project archive.',
      'Evaluators assess whether entries respect published sensitivity classes: restricted cultural detail withheld from open repositories while protocol compliance is still documented; attribution and consent records maintained; and narrative claims traceable to authorised sources rather than secondary summarisation.',
      'This category honours work where storytelling strengthens stewardship across regions — helping future reviewers understand whose knowledge shaped design intent, under what conditions it may be cited, and how landscape records serve community continuity as well as project delivery.'
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
      'Climate positive impact recognises work that documents climate and site-context claims with cited evidence — carbon and water disclosure, heat and drought adaptation performance, lifecycle maintenance intent, and metadata that endures across project phases with cited baselines, disclosed methods, and reproducible metrics, in any climatic zone.',
      'Evaluators look for banded climate context rather than vague resilience language; planting and material choices linked to stated performance assumptions; and phase-to-phase records when substitutions affect environmental claims. Where calculators or models are used, method notes and input boundaries must be disclosed.',
      'Climate and site-context claims with cited evidence — what was measured, what was modelled, what remains uncertain — so performance narratives remain accountable to inspectable records.'
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
      'Heritage and cultural landscape recognises documentation of heritage landscapes, cultural sites, and layered place histories — conservation records, sensitivity-aware field disclosure, and archives that respect custodial context while remaining inspectable for future stewardship reviewers, across national and customary heritage frameworks.',
      'Evaluators look for phased documentation of fabric, vegetation, and use; clear distinction between observed condition and inferred history; and sensitivity handling that keeps restricted detail out of open repositories while still proving protocol was followed. Cross-disciplinary collaboration with historians, custodians, and conservators strengthens submissions.',
      'Eligible work includes conservation management plans, heritage impact assessments, cultural landscape studies, and delivery projects where heritage values shaped planting, grading, and materials — provided the archive transmits those decisions with enough evidential depth for successors to steward place without eroding significance.'
    ]
  },
  {
    filename: '20-architectural-bim-ifc.jpg',
    kicker: 'Award category',
    title: 'Architectural integration (BIM/IFC)',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Delivered projects — green roofs, vertical gardens, podium landscapes — where landscape data integrity survived authoring through construction. Criteria: structural loading and root-volume compliance, cross-vendor interchange fidelity, and phase-labelled BIM records inspectable beyond presentation deliverables.'
    ],
    webBody: [
      'Architectural integration recognises delivered projects where landscape elements are structurally integrated with building fabric — green roofs, vertical gardens, podium landscapes, atrium plantings, and facade-adjacent horticulture — and where data integrity survives the path from authoring through construction and handover.',
      'Evaluators assess whether structural loading, waterproofing, and root-volume claims remain encoded in interchange metadata with phase-to-phase transparency; whether cross-vendor BIM and IFC export preserves registered field identifiers without silent loss; and whether construction substitutions affecting planting, drainage, or substrate depth are documented with enough detail for asset managers and maintainers to inherit an honest record.',
      'Recognition is not limited to landmark towers or any single region. Equally eligible are housing, campus, and mixed-use projects where landscape architecture is delivered as architectural infrastructure — provided the archive demonstrates that ecological intent survived coordination, tender, and construction administration as inspectable metadata rather than presentation imagery alone.'
    ]
  },
  {
    filename: '21-civic-urban-gis.jpg',
    kicker: 'Award category',
    title: 'Civic & urban landscape (GIS)',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Municipal and regional scale work — urban forestry master plans, heat-island mitigation, public parklands — where civic landscape claims conform to public geospatial registries. Criteria: canopy coverage tracking, machine-readable maintenance schemas, and inspectable GIS metadata across jurisdictions.'
    ],
    webBody: [
      'Civic and urban landscape recognises municipal and regional programmes where landscape stewardship operates at precinct, city, or catchment scale — urban forestry master plans, heat-island mitigation strategies, public parkland networks, street-tree inventories, and open-space systems whose claims must remain legible to agencies, contractors, and the public over decades.',
      'Evaluators assess whether submissions conform to published geospatial registry practice — harmonised identifiers, canopy coverage and establishment metrics tracked over time, and maintenance intent encoded in machine-readable schemas rather than static PDF plans alone. Cross-jurisdictional adaptation through published crosswalks is valued where Australian field origins are extended for other regions.',
      'Recognition includes work that makes civic landscape data auditable: documented update protocols when inventories change, disclosed methods for coverage and performance claims, and archives where community-facing maps and internal asset registers remain aligned — so future reviewers can trace how public landscape intent was recorded, delivered, and maintained.'
    ]
  },
  {
    filename: '22-engineering-infrastructure.jpg',
    kicker: 'Award category',
    title: 'Engineering & infrastructure',
    titleLong: true,
    footerUrl: 'landscapearchive.org/awards',
    body: [
      'Civil works, rail corridors, highway restoration, and stormwater systems where ecology is hard infrastructure. Criteria: hydrological performance disclosure, soil matrix and substrate compliance, and phase-to-phase traceability into asset-management records.'
    ],
    webBody: [
      'Engineering and infrastructure recognises civil and transport landscape delivery where ecological function is embedded in hard infrastructure — rail corridors, highway restoration, stormwater and biofiltration systems, embankment stabilisation, and utility-adjacent planting — and where project archives must survive handoff to asset-management environments.',
      'Evaluators assess whether hydrological performance, soil matrix composition, and establishment assumptions remain traceable from design through construction and maintenance; whether phase-labelled records document substitutions affecting drainage, filtration, or load-bearing planting; and whether metadata intended for asset registers remains inspectable without proprietary authoring environments.',
      'Eligible work includes multidisciplinary delivery where landscape architecture contributed planting, grading, and ecological performance logic to infrastructure programmes — provided submissions demonstrate that ecological claims were encoded with the same documentary rigour expected of structural and hydraulic records, and that maintainers inherit enough evidence to steward living systems within engineered constraints.'
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
  const [scopeSlide, evaluativeSlide, methodologySlide] = getAwardsProgrammeFramingSlides()

  return {
    title: 'Awards',
    lead: `Vendor-neutral recognition assessed against the public ${tla185DisplayId} field registry. Entries are not currently being accepted.`,
    hideLead: true,
    placeholder: false,
    sections: [
      {
        id: 'scope-and-purpose',
        heading: 'Scope and evaluative purpose',
        paragraphs: [
          ...getSlideWebParagraphs(scopeSlide),
          ...getSlideWebParagraphs(evaluativeSlide),
          'Submissions may originate from any practice, institution, or open-source contributor, using any authoring environment that meets published criteria and supplies sufficient material for independent review.'
        ].filter(Boolean)
      },
      {
        id: 'data-architecture-alignment',
        heading: DATA_ARCHITECTURE_ALIGNMENT_WEB_SECTION.heading,
        paragraphs: DATA_ARCHITECTURE_ALIGNMENT_WEB_SECTION.paragraphs,
        facts: DATA_ARCHITECTURE_ALIGNMENT_WEB_SECTION.facts,
        profileTable: DATA_ARCHITECTURE_ALIGNMENT_WEB_SECTION.profileTable
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
          'Rubrics translate the Foundation Standards into stream-specific checkpoints. The following dimensions apply across streams unless a stream rubric narrows scope.',
          'Documentation integrity — stated claims appear in interchange metadata with phase-to-phase consistency, with null or restricted values explained where sensitivity classes apply.',
          'Archival legibility — submitted material remains interpretable beyond the originating project team without proprietary tooling or informal briefing.',
          'Interchange conformance — bundles validate against published schema versions, use registered field identifiers, and document extensions through crosswalk notes.',
          'Reproducibility — evidence URIs, method notes, or open repositories remain accessible for review, with material differences across project phases disclosed.',
          'Cultural accountability — work involving Indigenous knowledge, restricted cultural detail, or community co-design respects published sensitivity classes under the custodial authority applicable in each jurisdiction.'
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
      ...AWARDS_PROGRAMME_STREAMS.map((stream) => ({
        id: stream.id,
        heading: stream.heading,
        paragraphs: [stream.lead],
        facts: stream.subcategories.map((sub) => ({
          label: sub.label,
          value: sub.text
        }))
      })),
      {
        id: 'programme-governance',
        heading: 'Programme governance',
        paragraphs: [
          'Entries are not currently being accepted. Under interim Foundation stewardship, panel composition may include landscape architecture and urban design practice, academic research, public-sector delivery, Indigenous advisory representation, and interchange specialists — with conflict-of-interest rules and stream rubrics published before any cycle.',
          'Assessment aims to be blind to entrant commercial affiliation where practical. Criteria, anonymised scoring rationales, and aggregate results are intended to be public so recognition can be inspected and cited.',
          'Recognition is documented programme recognition only — not government accreditation, professional registration, or vendor certification.',
          'Feedback on these rubrics is welcome from practitioners, academics, and industry bodies. If you have experience with awards governance, interoperability standards, or landscape documentation, send input via the contact form.'
        ],
        actions: [
          { label: 'The Foundation Standards', href: governancePath },
          { label: 'Send feedback on rubrics', href: '/contact#draft-consultation' },
          { label: 'Founding alliance', href: `${governancePath}#founding-alliance` },
          {
            label: 'Awards feedback — contact form',
            href: `${supportContactPath}&intent=awards`,
            external: supportContactExternal
          }
        ]
      }
    ]
  }
}

export const AWARDS_PROGRAMME_CATEGORY_COUNT = AWARDS_PROGRAMME_STREAMS.reduce(
  (n, stream) => n + stream.subcategories.length,
  0
)
