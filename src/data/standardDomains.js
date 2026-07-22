import { TLA185_DISPLAY_ID, TLA185_FIELD_COUNT, REGISTRY_PATH } from './foundationWing.js'

/**
 * Four public description domains for the open standard, used by the
 * StandardDomainsDiagram visual. Descriptive of the published specification
 * only — no proprietary datasets, no trait values, no forward-looking claims.
 *
 * Domains align with the five Foundation Standards in charterPillars.js; the
 * "digital twin" domain folds the public-sector interface into interchange.
 */

export const STANDARD_DOMAINS_INTRO =
  `${TLA185_DISPLAY_ID} documents ${TLA185_FIELD_COUNT} elements as an open, citable field registry. ` +
  'These four domains describe what the specification covers — structural definitions only. ' +
  'Populated species inventories, trait values, and client records are licensed separately and are not part of the open layer.'

/** @typedef {{ id: string, index: string, title: string, summary: string, points: string[] }} StandardDomain */

/** @type {readonly StandardDomain[]} */
export const STANDARD_DOMAINS = Object.freeze([
  {
    id: 'botanical-truth',
    index: '01',
    title: 'Botanical truth',
    summary: 'Precise, auditable taxonomic claims so planting records stay legible after handover.',
    points: [
      'Resolvable taxon identifiers',
      'Scientific name, native status, growth form',
      'Botanical asset rows reconstructable without proprietary joins'
    ]
  },
  {
    id: 'climate-risk',
    index: '02',
    title: 'Climate & risk',
    summary: 'The metadata shape for site context, climate screening, and sustainability disclosure.',
    points: [
      'Banded site-context and climate screening fields',
      'Risk and sustainability fields with method notes',
      'Evidence URIs on disclosure claims'
    ]
  },
  {
    id: 'open-research',
    index: '03',
    title: 'Open research',
    summary: 'A stable, citable reference independent of any single vendor’s access.',
    points: [
      'Canonical specification, schemas, and worked examples',
      'Stable field identifiers and JSON paths',
      'Citation-ready under CC BY-NC-ND 4.0'
    ]
  },
  {
    id: 'digital-twin',
    index: '04',
    title: 'Digital twin interface',
    summary: 'A documented reference layer for procurement and digital twin programmes.',
    points: [
      'IFC property-set alignment',
      'GeoJSON civic registry bindings',
      'Machine-checkable interchange baseline'
    ]
  }
])

export const STANDARD_DOMAINS_REGISTRY_PATH = REGISTRY_PATH
