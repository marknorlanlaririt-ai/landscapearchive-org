import { SCHEMA_PORTAL_URL } from './site.js'

/**
 * TLA-185 built-environment export bindings — interchange profiles, not separate standards.
 * Canonical schema paths are relative to the schema portal origin.
 */
export const BUILT_ENVIRONMENT_EXPORTS_INTRO = Object.freeze(
  'These profiles map registered TLA-185 field IDs to external interchange shapes. They are export bindings of the same canonical record — not new TLA-xxx versions. JSON emitters and schema definitions are published on the schema portal; IFC STEP and USD file writers remain pipeline stubs.'
)

/** @typedef {{ id: string, targetFormat: string, purpose: string, status: 'Draft' | 'MVP', schemaPath: string, examplePath?: string, crosswalkPath?: string }} BuiltEnvironmentExportProfile */

/** @type {readonly BuiltEnvironmentExportProfile[]} */
export const BUILT_ENVIRONMENT_EXPORT_PROFILES = Object.freeze([
  {
    id: 'TLA-185-IFC',
    targetFormat: 'IFC4 property sets (JSON)',
    purpose:
      'Map botanical and delivery fields to IFC4 Pset_TLABotanical and environmental indicator subsets for BIM exchange.',
    status: 'MVP',
    schemaPath: '/schema/built-environment/tla-ifc-pset.json',
    examplePath: '/examples/built-environment/archive-gum.ifc-pset.json'
  },
  {
    id: 'TLA-185-GIS',
    targetFormat: 'GeoJSON FeatureCollection',
    purpose:
      'Civic registry records — point placement, 2D canopy footprint, taxonomic identity, and maintenance fields.',
    status: 'MVP',
    schemaPath: '/schema/built-environment/tla-gis-geojson.schema.json',
    examplePath: '/examples/built-environment/archive-gum.geojson'
  },
  {
    id: 'TLA-185-USD',
    targetFormat: 'USD customData sidecar (JSON)',
    purpose:
      'LOD mesh references, seasonal asset paths, and TLA tracking metadata for real-time visualisation pipelines.',
    status: 'MVP',
    schemaPath: '/schema/built-environment/tla-usd-attributes.schema.json',
    examplePath: '/examples/built-environment/archive-gum.usd-metadata.json'
  },
  {
    id: 'Crosswalks',
    targetFormat: 'Spreadsheet column mapping',
    purpose:
      'Nursery stock and maintenance spreadsheet headers → TLA-185 JSON paths for civic stock lists.',
    status: 'Draft',
    schemaPath: '/crosswalk/nursery-spreadsheet.json',
    crosswalkPath: '/crosswalk/nursery-spreadsheet.json',
    examplePath: '/examples/built-environment/nursery-row-crosswalk.json'
  }
])

export const BUILT_ENVIRONMENT_EXPORTS_MANIFEST_PATH = '/examples/built-environment/manifest.json'

export const BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL = `${SCHEMA_PORTAL_URL}${BUILT_ENVIRONMENT_EXPORTS_MANIFEST_PATH}`

/** @param {BuiltEnvironmentExportProfile} profile */
export function builtEnvironmentSchemaUrl(profile) {
  return `${SCHEMA_PORTAL_URL}${profile.schemaPath}`
}
