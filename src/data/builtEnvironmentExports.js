import { SCHEMA_PORTAL_URL } from './site.js'



/**

 * Built-environment export bindings — interchange profiles, not separate standards.

 * Canonical schema paths are relative to the schema portal origin.

 */

export const BUILT_ENVIRONMENT_EXPORTS_INTRO = Object.freeze(

  'These interchange profiles map registered field identifiers to external delivery shapes — export bindings of the same canonical record, not parallel standards. JSON schemas and validated emitters are published on the schema portal with worked examples.'

)



/** @typedef {{ id: string, label: string, targetFormat: string, purpose: string, status: 'Draft' | 'MVP', schemaPath: string, examplePath?: string, crosswalkPath?: string }} BuiltEnvironmentExportProfile */



/** @type {readonly BuiltEnvironmentExportProfile[]} */

export const BUILT_ENVIRONMENT_EXPORT_PROFILES = Object.freeze([

  {

    id: 'ifc-property-sets',

    label: 'IFC property sets',

    targetFormat: 'IFC4 property sets (JSON)',

    purpose:

      'Map botanical and delivery fields to IFC4 Pset_TLABotanical and environmental indicator subsets for BIM exchange.',

    status: 'MVP',

    schemaPath: '/schema/built-environment/tla-ifc-pset.json',

    examplePath: '/examples/built-environment/archive-gum.ifc-pset.json'

  },

  {

    id: 'geojson-civic-registry',

    label: 'GeoJSON civic registry',

    targetFormat: 'GeoJSON FeatureCollection',

    purpose:

      'Civic registry records — point placement, 2D canopy footprint, taxonomic identity, and maintenance fields.',

    status: 'MVP',

    schemaPath: '/schema/built-environment/tla-gis-geojson.schema.json',

    examplePath: '/examples/built-environment/archive-gum.geojson'

  },

  {

    id: 'usd-metadata-sidecar',

    label: 'USD metadata sidecar',

    targetFormat: 'USD customData sidecar (JSON)',

    purpose:

      'LOD mesh references, seasonal asset paths, and tracking metadata for real-time visualisation pipelines.',

    status: 'MVP',

    schemaPath: '/schema/built-environment/tla-usd-attributes.schema.json',

    examplePath: '/examples/built-environment/archive-gum.usd-metadata.json'

  },

  {

    id: 'spreadsheet-crosswalks',

    label: 'Spreadsheet crosswalks',

    targetFormat: 'Spreadsheet column mapping',

    purpose:

      'Nursery stock and maintenance spreadsheet headers mapped to canonical field-registry JSON paths for civic stock lists.',

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

