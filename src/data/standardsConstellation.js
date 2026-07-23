/**
 * Standards constellation — TLA-185 spine + named orbits.
 * Honest maturity only: published / draft / in development.
 * Draft orbits link to public HTML stubs under /standards/* — still not normative.
 * Seal is commercial Archive — never list as a Foundation open standard.
 */

import { TLA185_DISPLAY_ID, TLA185_FIELD_COUNT, REGISTRY_PATH } from './foundationWing.js'
import { getOrbitPathForConstellationId } from './standardsOrbits.js'

/** @typedef {'published' | 'draft' | 'in-development'} ConstellationMaturity */

/**
 * @typedef {{
 *   id: string,
 *   shortName: string,
 *   schemaId: string | null,
 *   role: 'spine' | 'orbit',
 *   maturity: ConstellationMaturity,
 *   maturityLabel: string,
 *   summary: string,
 *   href?: string | null
 * }} ConstellationItem
 */

export const STANDARDS_CONSTELLATION_TITLE = 'Standards constellation'

export const STANDARDS_CONSTELLATION_INTRO =
  `${TLA185_DISPLAY_ID} is the single field grammar (${TLA185_FIELD_COUNT} documented elements). ` +
  'Named orbits extend provenance, evidence packaging, and plant-form labelling without creating a rival dictionary. ' +
  'Maturity labels are deliberate: only the spine is published as the live open specification today. ' +
  'Draft orbit HTML stubs are linked below — still not normative.'

/** @type {readonly ConstellationItem[]} */
export const STANDARDS_CONSTELLATION = Object.freeze([
  {
    id: 'tla-185',
    shortName: TLA185_DISPLAY_ID,
    schemaId: null,
    role: 'spine',
    maturity: 'published',
    maturityLabel: 'Published',
    href: REGISTRY_PATH,
    summary:
      'Open landscape metadata field registry, schemas, and conformance criteria under CC BY-NC-ND 4.0. The gravity well for all orbits.'
  },
  {
    id: 'tla-syn',
    shortName: 'TLA-SYN',
    schemaId: 'la.archive.synthetic-nature.v1',
    role: 'orbit',
    maturity: 'draft',
    maturityLabel: 'Draft',
    href: getOrbitPathForConstellationId('tla-syn'),
    summary:
      'Synthetic-nature provenance: how surveyed, modelled, generative, and composite assets declare lineage beside the spine.'
  },
  {
    id: 'tla-evid',
    shortName: 'TLA-EVID',
    schemaId: 'la.archive.audit-pack.v1',
    role: 'orbit',
    maturity: 'draft',
    maturityLabel: 'Draft',
    href: getOrbitPathForConstellationId('tla-evid'),
    summary:
      'Open landscape evidence / audit pack shape. Archive Seal remains a separate commercial attestation and is not opened by this orbit.'
  },
  {
    id: 'tla-ml',
    shortName: 'TLA-ML',
    schemaId: 'la.archive.ml-label.v1',
    role: 'orbit',
    maturity: 'draft',
    maturityLabel: 'Draft',
    href: getOrbitPathForConstellationId('tla-ml'),
    summary:
      'Plant-form label standard for ML Hub sidecars and dataset manifests. Foundation-facing name for the existing la.archive.ml-label.v1 schema.'
  },
  {
    id: 'regional-flora',
    shortName: 'Regional flora packs',
    schemaId: 'la.archive.regional-flora-pack.v1',
    role: 'orbit',
    maturity: 'in-development',
    maturityLabel: 'In development',
    href: null,
    summary:
      'Region-scoped content packs bound to hubs — not a world flora dump. Named on the roadmap; graduation under Foundation profile language is deferred.'
  },
  {
    id: 'deferred-orbits',
    shortName: 'Further orbits',
    schemaId: null,
    role: 'orbit',
    maturity: 'in-development',
    maturityLabel: 'In development',
    href: null,
    summary:
      'Plant-instance identity, cultural-protocol profile, and plant-recipe interchange are named for later work — not published here.'
  }
])

export const STANDARDS_CONSTELLATION_FOOTNOTE =
  'Draft and in-development items are consultation shapes, not normative Foundation publications. ' +
  'Public draft pages live under /standards. ' +
  'Commercial Library, Hub, Studio+™, populated datasets, and Archive Seal stay separately licensed.'
