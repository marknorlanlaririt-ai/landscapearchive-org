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
    title: 'Institutions, standards, and the infrastructure gap',
    summary:
      'Field Note on why peak bodies excel at governance while sustained botanical and BIM pipelines sit elsewhere — and how open definitions plus automation may change access without implying institutional endorsement.',
    href: '/articles/institutions-standards-and-the-infrastructure-gap'
  },
  {
    date: 'July 2026',
    title: 'Open standard adoption guide',
    summary:
      'Reference adoption path: download the open pack, validate an example bundle, and add the procurement sentence to one deliverable. Documents why tooling and a mandated pilot deliverable precede governance outreach.',
    href: '/adopt'
  },
  {
    date: 'July 2026',
    title: 'Founding charter consultation',
    summary:
      'Draft constitution for The Landscape Archive Foundation (proposed CLG) — not incorporated, not legal advice. Review the draft and respond via founding alliance consultation.',
    href: '/founding-charter'
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
