import {
  BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL
} from './builtEnvironmentExports.js'

/**
 * Homepage "What's new" items — interim public milestones only.
 * Plain language; no internal TLA profile codes; draft/incorporation caution where needed.
 *
 * SOURCE OF TRUTH for apex marketing "Recent public updates".
 * Edit this list, deploy landscapearchive-org, then apex mirrors via
 * /recent-updates.json → landscapearchive.com.au /api/marketing/recent-public-updates.
 *
 * `date` is ISO YYYY-MM-DD (display as e.g. "11 Jul 2026" via formatShortDate).
 *
 * @typedef {{ date: string, title: string, summary: string, href: string, external?: boolean }} PublicUpdateItem
 */

/** @type {readonly PublicUpdateItem[]} */
export const FOUNDATION_RECENT_PUBLIC_UPDATES = Object.freeze([
  {
    date: '2026-07-13',
    title: 'Studio Pilot outreach pack',
    summary:
      'Copy-paste cohort tracker (3–5 studios) plus invite email for one mandated TLA-185 deliverable.',
    href: '/adopt#studio-pilot-outreach'
  },
  {
    date: '2026-07-13',
    title: 'Procurement / RFQ checklist',
    summary:
      'Printable one-pager for RFQs and studio briefs citing the open TLA-185 grammar — Evidence Checker, validator, and published procurement sentence.',
    href: '/industry-practice#rfq-checklist'
  },
  {
    date: '2026-07-13',
    title: 'Dictionary & schema in plain language',
    summary:
      'Short Foundation explainer for practices, students, and procurement: what a term, the field dictionary, and the schema pack are.',
    href: '/industry-practice#in-plain-language'
  },
  {
    date: '2026-07-13',
    title: 'Dictionary term proposals (no GitHub required)',
    summary:
      'Form for TLA-185 dictionary changes: structured rationale and evidence links, steward review only — nothing auto-merges into the field registry.',
    href: '/propose-term'
  },
  {
    date: '2026-07-13',
    title: 'Industry & practice education path',
    summary:
      'Clear path: open field dictionary → Studio Pilot → Evidence Checker → draft consultation, with thin learning modules for studios and practices.',
    href: '/industry-practice'
  },
  {
    date: '2026-07-13',
    title: 'Studio Pilot Kit',
    summary:
      'Practice citation loop on the adoption guide: open field dictionary, validator, Evidence Checker, and procurement sentence.',
    href: '/adopt#studio-pilot'
  },
  {
    date: '2026-07-13',
    title: 'Draft consultation — request a review pack',
    summary:
      'Critique invite for the open TLA-185 schema pack: governance and awards CTAs, on-site review-pack form, and Field Notes / Evidence Checker links.',
    href: '/governance#draft-consultation'
  },
  {
    date: '2026-07-13',
    title: 'Technical reviewers & registry contributors',
    summary:
      'Curated volunteer intake to stress-test field-dictionary corners. Email and pack review welcome while GitHub access remains limited.',
    href: '/volunteers#technical-reviewers'
  },
  {
    date: '2026-07-11',
    title: 'Four things: land, art, technology, data',
    summary:
      'A short Field Note on the Foundation’s cultural frame — why land, art, technology, and data hold together.',
    href: '/articles/four-things-land-art-technology-data'
  },
  {
    date: '2026-07-11',
    title: 'Foundation downloads & Evidence Checker',
    summary:
      'Open artefacts index and a browser inspector for TLA-185 JSON and Archive Audit Packs (.tlaa). Commercial Landscape Archive Packages (.tla) and encrypted .lapkg are out of scope for Foundation tooling.',
    href: '/evidence-checker'
  },
  {
    date: '2026-07-08',
    title: 'Institutions, standards, and the infrastructure gap',
    summary:
      'Field Note on how governance and endorsement roles relate to sustained botanical and BIM pipelines — and how open definitions plus automation can widen access to citable infrastructure.',
    href: '/articles/institutions-standards-and-the-infrastructure-gap'
  },
  {
    date: '2026-07-08',
    title: 'Open standard adoption guide',
    summary:
      'Reference adoption path: download the open pack, validate an example bundle, and add the procurement sentence to one deliverable. Documents why tooling and a mandated pilot deliverable precede governance outreach.',
    href: '/adopt'
  },
  {
    date: '2026-07-08',
    title: 'Founding charter consultation',
    summary:
      'Draft constitution for The Landscape Archive Foundation (proposed CLG) — not incorporated, not legal advice. Review the draft and respond via founding alliance consultation.',
    href: '/founding-charter'
  },
  {
    date: '2026-07-07',
    title: 'Built environment export profiles',
    summary:
      'Interchange bindings for IFC property sets, GeoJSON civic registries, USD metadata sidecars, and spreadsheet crosswalks — JSON schemas and worked examples on the schema portal.',
    href: BUILT_ENVIRONMENT_EXPORTS_PORTAL_URL,
    external: true
  },
  {
    date: '2026-07-07',
    title: 'Awards and the data architecture',
    summary:
      'Category rubrics now describe how peer assessment references the field registry and published interchange profiles across architectural, civic, and engineering delivery streams.',
    href: '/awards#data-architecture-alignment'
  }
])
