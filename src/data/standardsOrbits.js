/**
 * Public draft orbit pages — Phase-1 consultation shapes only.
 * Do not claim published / normative. Do not open Archive Seal.
 * Spine remains TLA-185 (standardsConstellation.js).
 */

import { TLA185_DISPLAY_ID } from './foundationWing.js'

/** @typedef {'tla-syn' | 'tla-evid' | 'tla-ml'} OrbitSlug */

/**
 * @typedef {{
 *   slug: OrbitSlug,
 *   shortName: string,
 *   schemaId: string,
 *   path: string,
 *   title: string,
 *   description: string,
 *   maturityLabel: string,
 *   purpose: string[],
 *   outOfScope: { notThis: string, where: string }[],
 *   enumerations?: { field: string, values: string }[],
 *   normativeIntent: string[],
 *   foundationVsArchive: { foundation: string, archive: string }[],
 *   exampleHref: string,
 *   exampleFilename: string,
 *   schemaHref: string,
 *   schemaFilename: string
 * }} OrbitPage
 */

export const STANDARDS_ORBITS_INDEX_PATH = '/standards'

export const STANDARDS_ORBIT_MATURITY_BANNER =
  'Draft — not normative. Consultation shape only. Not a published Foundation standard. Archive Seal is not granted by conforming to this orbit.'

/** @type {readonly OrbitPage[]} */
export const STANDARDS_ORBITS = Object.freeze([
  {
    slug: 'tla-syn',
    shortName: 'TLA-SYN',
    schemaId: 'la.archive.synthetic-nature.v1',
    path: '/standards/tla-syn',
    title: 'TLA-SYN — Synthetic nature provenance',
    description:
      'Draft orbit: portable provenance pack for surveyed, modelled, generative, and composite landscape assets. Not normative; not Archive Seal.',
    maturityLabel: 'Draft — not normative',
    purpose: [
      `Define a portable provenance pack so project interchange can state whether an asset is surveyed, modelled, generative, or composite; who created or transformed it; which tools and recipes participated at a metadata level; and how the claim sits beside ${TLA185_DISPLAY_ID} botanical and site fields.`,
      `${TLA185_DISPLAY_ID} remains the single field grammar. This orbit profiles lineage — it does not add a rival dictionary. Taxon claims stay on the spine.`
    ],
    outOfScope: [
      { notThis: 'Archive Seal issue / crypto / Stripe', where: 'Commercial Archive product docs' },
      { notThis: 'Full Workbench recipe binaries', where: 'Proprietary product depth' },
      { notThis: 'Training weights / model checkpoints', where: 'Separate ML / commercial licences' },
      { notThis: 'A second plant field registry', where: `Forbidden — use ${TLA185_DISPLAY_ID}` }
    ],
    enumerations: [
      {
        field: 'nature_class',
        values: 'surveyed | modelled | synthetic | composite | unknown'
      },
      {
        field: 'generation.method',
        values: 'none | procedural | photogrammetry | generative_ai | manual_sculpt | mixed | other'
      }
    ],
    normativeIntent: [
      'When elevated from draft: any exchange bundle that presents render-ready vegetation as if surveyed without nature_class / disclosure is non-conformant to this orbit.',
      `${TLA185_DISPLAY_ID} taxon and site fields remain authoritative for botanical and climate claims; this orbit only adds provenance.`,
      'Commercial products may embed richer private lineage; the open pack is the portable subset.'
    ],
    foundationVsArchive: [
      {
        foundation: 'Publishes the open provenance shape for teaching and citation.',
        archive: 'May implement richer tooling and paid workflows.'
      },
      {
        foundation: 'Does not issue Archive Seal.',
        archive: 'Archive Seal remains a separate commercial attestation.'
      }
    ],
    exampleHref: '/examples/orbits/tla-syn-example.json',
    exampleFilename: 'tla-syn-example.json',
    schemaHref: '/schemas/orbits/tla-syn.required.schema.json',
    schemaFilename: 'tla-syn.required.schema.json'
  },
  {
    slug: 'tla-evid',
    shortName: 'TLA-EVID',
    schemaId: 'la.archive.audit-pack.v1',
    path: '/standards/tla-evid',
    title: 'TLA-EVID — Landscape evidence / audit pack',
    description:
      'Draft orbit: open evidence and audit pack shape for sustainability, climate, and botanical claims. Not normative; not Archive Seal.',
    maturityLabel: 'Draft — not normative',
    purpose: [
      `Define a portable audit / evidence pack so a project handover can answer which sustainability, climate, or botanical claims were made; which ${TLA185_DISPLAY_ID} fields those claims sit on; what evidence URIs or method notes support them; and what remains professional judgement versus documented evidence.`,
      'This orbit packages how claims point at evidence. It does not replace Archive Seal, Foundation Approved criteria (when published), or a second field dictionary.'
    ],
    outOfScope: [
      { notThis: 'GHG inventory methodology', where: 'Specialist carbon protocols' },
      { notThis: 'Legal / statutory filings', where: 'Jurisdiction-specific compliance' },
      { notThis: 'Archive Seal issue or crypto manifests', where: 'Commercial Archive attestation' },
      { notThis: 'World flora dump', where: 'Forbidden expansion path' }
    ],
    enumerations: [
      {
        field: 'claims[].topic',
        values: 'botanical | climate | sustainability | risk | cultural | synthetic | other'
      },
      {
        field: 'claims[].evidence[].kind',
        values: 'method_note | dataset | report | photo | survey | standard_ref | other'
      },
      {
        field: 'claims[].confidence',
        values: 'documented | partial | asserted_without_uri | unknown'
      }
    ],
    normativeIntent: [
      `When elevated from draft: claims that appear in ${TLA185_DISPLAY_ID} sustainability / climate fields should be linkable from an audit pack via tla185.field_id or json_path.`,
      'Missing evidence is expressible (confidence, residual_judgement) — silence is worse than “asserted without URI”.',
      'Cultural restricted material may be flagged and excluded from the open pack; do not dump sensitive content into a public evidence URI list.'
    ],
    foundationVsArchive: [
      {
        foundation: 'Publishes the open evidence structure — free to cite when elevated.',
        archive: 'May implement richer audit tooling and paid attestation products.'
      },
      {
        foundation: 'Foundation Approved (when criteria published) is open-spec conformance assessment.',
        archive: 'Archive Seal is commercial period-bound attestation — not opened by this orbit.'
      }
    ],
    exampleHref: '/examples/orbits/tla-evid-example.json',
    exampleFilename: 'tla-evid-example.json',
    schemaHref: '/schemas/orbits/tla-evid.required.schema.json',
    schemaFilename: 'tla-evid.required.schema.json'
  },
  {
    slug: 'tla-ml',
    shortName: 'TLA-ML',
    schemaId: 'la.archive.ml-label.v1',
    path: '/standards/tla-ml',
    title: 'TLA-ML — Plant-form label standard',
    description:
      'Draft orbit: Foundation-facing name for the existing plant-form ML label schema (la.archive.ml-label.v1). Not normative; not a rival plant dictionary.',
    maturityLabel: 'Draft — not normative',
    purpose: [
      'Elevate the public short name TLA-ML for the existing machine schema la.archive.ml-label.v1 so institutes can cite a Foundation-readable orbit beside the spine.',
      `In scope: per-asset sidecar shape, dataset manifest compatibility, part / modality / quality / training_role / taxonomy hints / rights, and optional id-only links to recipes. Out of scope: ${TLA185_DISPLAY_ID} field registry, regional flora inventories, model weights, Archive Seal, and world flora dumps.`
    ],
    outOfScope: [
      { notThis: `${TLA185_DISPLAY_ID} field registry`, where: 'Spine — labels may point at taxon fields only' },
      { notThis: 'Regional flora inventories', where: 'la.archive.regional-flora-pack.v1 (deferred)' },
      { notThis: 'Model weights / trainers', where: 'Product / research systems' },
      { notThis: 'Archive Seal', where: 'Commercial attestation' }
    ],
    enumerations: [
      {
        field: 'modality',
        values: 'mesh | photo | silhouette | other'
      },
      {
        field: 'part',
        values:
          'whole_plant | leaf | flower | fruit | twig | branch | trunk | bark | root | seed | stem | cluster | foliage_spray | other'
      },
      {
        field: 'quality',
        values: 'gold | good | ok | reject'
      },
      {
        field: 'training_role',
        values: 'train | val | test | holdout | unassigned'
      }
    ],
    normativeIntent: [
      'schema_id remains la.archive.ml-label.v1 for new labels — do not invent a second id.',
      'schema_version stays integer 1 while Hub asserts === 1.',
      'Public short name TLA-ML always carries Draft until elevated. Do not fork into la.foundation.ml-label.v1.'
    ],
    foundationVsArchive: [
      {
        foundation: 'Publishes TLA-ML orbit docs for teaching and RFQ language.',
        archive: 'Runs Hub labeller, R2 pack pipelines, and paid datasets.'
      },
      {
        foundation: 'Does not claim training performance.',
        archive: 'Moat = filled data and tools, not the open label shape.'
      }
    ],
    exampleHref: '/examples/orbits/tla-ml-example.json',
    exampleFilename: 'tla-ml-example.json',
    schemaHref: '/schemas/orbits/tla-ml.required.schema.json',
    schemaFilename: 'tla-ml.required.schema.json'
  }
])

/** @param {string} slug */
export function getOrbitBySlug(slug) {
  return STANDARDS_ORBITS.find((orbit) => orbit.slug === slug) ?? null
}

/** @param {string} constellationId */
export function getOrbitPathForConstellationId(constellationId) {
  const match = STANDARDS_ORBITS.find((orbit) => orbit.slug === constellationId)
  return match?.path ?? null
}
