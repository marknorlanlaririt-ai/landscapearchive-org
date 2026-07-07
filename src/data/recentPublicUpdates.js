import {
  BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL
} from './builtEnvironmentExports.js'
import { GOVERNANCE_PATH } from './foundationWing.js'

/**
 * Homepage "What's new" items — interim public milestones only.
 * Plain language; no internal TLA profile codes; draft/incorporation caution where needed.
 *
 * @typedef {{ date: string, title: string, summary: string, href: string, external?: boolean }} PublicUpdateItem
 */

/** @type {readonly PublicUpdateItem[]} */
export const FOUNDATION_RECENT_PUBLIC_UPDATES = Object.freeze([
  {
    date: 'July 2026',
    title: 'International founding alliance (draft consultation)',
    summary:
      'Draft charter language for an international coalition — practices, universities, public bodies, Indigenous protocol authorities, and implementation partners — published for consultation. Not incorporation, binding membership, or a separate trademark.',
    href: `${GOVERNANCE_PATH}#founding-alliance`
  },
  {
    date: 'July 2026',
    title: 'Built environment export profiles',
    summary:
      'Interchange bindings for IFC property sets, GeoJSON civic registries, USD metadata sidecars, and spreadsheet crosswalks — JSON schemas and worked examples on the schema portal.',
    href: BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL,
    external: true
  },
  {
    date: 'July 2026',
    title: 'Awards and the data architecture',
    summary:
      'Category rubrics now describe how peer assessment references the field registry and published interchange profiles across architectural, civic, and engineering delivery streams.',
    href: '/awards#data-architecture-alignment'
  }
])
