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

/**
 * Curated milestones. Display / JSON consumers sort newest first by `date`
 * so insert order in this file cannot bury a later item mid-grid.
 *
 * @type {readonly PublicUpdateItem[]}
 */
const FOUNDATION_RECENT_PUBLIC_UPDATES_SOURCE = [
  {
    date: '2026-08-04',
    title: 'From analogue to digital: collaboration, validation, and the centre twice removed',
    summary:
      'Field Note: digital work lengthens the chain of custody for meaning. On contact, stand-ins, belief as craft, and why collaboration is not the same verb as validation.',
    href: '/articles/from-analogue-to-digital-centre-twice-removed'
  },
  {
    date: '2026-07-31',
    title: 'Outsourcing truths: the nail and the agent',
    summary:
      'Field Note: a nail extends the hand; agentic software proposes what the hand should mean. On tools, budgets, labour, politics, time, and the line between living nature and digital nature.',
    href: '/articles/outsourcing-truths-nail-and-agent'
  },
  {
    date: '2026-07-30',
    title: 'Foundation mission and digital twin potential',
    summary:
      'The Landscape Archive Foundation centres labour, liability, visibility, and dignity — and explores the potential that, once incorporated, it could help steward a digital twin commons for landscape architecture. EBDA and ELDX remain two distinct institutional instruments.',
    href: '/governance#digital-twin-foundation'
  },
  {
    date: '2026-07-30',
    title: 'Creative Commons inheritance',
    summary:
      'The Foundation heralds Creative Commons for the future of landscape architecture: keeping the open metadata grammar public so practitioners seventy years from now can still cite and check honest project records. Stewardship succession.',
    href: '/governance#creative-commons-inheritance'
  },
  {
    date: '2026-07-30',
    title: 'Landscape-native software initiative',
    summary:
      'Foundation programme under consultation: innovative in-studio coding knowledge and landscape architectural native software for the future of the industry, with open grammar so records stay citable across practices.',
    href: '/governance#platform-adoption'
  },
  {
    date: '2026-07-28',
    title: 'What automation replaces in landscape practice',
    summary:
      'AI absorbs repetitive hygiene and generic drafting so the profession keeps judgment liability and the open systems that make records trustworthy.',
    href: '/articles/what-automation-replaces-and-cannot-sign-for'
  },
  {
    date: '2026-07-27',
    title: 'Consequential data, time, and the infrastructure we cannot postpone',
    summary:
      'Landscape records do not become consequential because they are digital. They become consequential when time, infrastructure, and professional obligation meet, and that meeting is no longer optional.',
    href: '/articles/consequential-data-time-and-infrastructure'
  },
  {
    date: '2026-07-26',
    title: 'TLA-185 registry integrity (SHA-256)',
    summary:
      'Public integrity registry for the open field-dictionary JSON: published SHA-256 digests so anyone can confirm they have the authentic snapshot.',
    href: '/registry-integrity'
  },
  {
    date: '2026-07-24',
    title: 'Institutional asks: EBDA and ELDX',
    summary:
      'The Foundation asks for two proposed instruments beside TLA-185: EBDA (ecological & built-environment data stewardship gravity) and ELDX (cross-border land/landscape interchange).',
    href: '/governance#institutional-asks'
  },
  {
    date: '2026-07-23',
    title: 'Evidence Checker wired to TLA-EVID (upload paused)',
    summary:
      'Evidence Checker recognises Draft TLA-EVID audit-pack JSON. Upload remains unavailable while stewardship arrangements are clarified; the open specification remains under CC BY-NC-ND 4.0.',
    href: '/evidence-checker'
  },
  {
    date: '2026-07-23',
    title: 'Foundation Approved vs Archive Seal',
    summary:
      'Counsel-ready distinction page: open-spec conformance (when criteria publish) is not a commercial Seal. Draft posture stated honestly.',
    href: '/foundation-approved'
  },
  {
    date: '2026-07-23',
    title: 'Draft orbit pages (SYN / EVID / ML)',
    summary:
      'Public draft HTML for TLA-SYN, TLA-EVID, and TLA-ML with golden JSON examples.',
    href: '/standards'
  },
  {
    date: '2026-07-23',
    title: 'Standards constellation (draft orbits)',
    summary:
      'TLA-185 remains the published spine. Draft orbits TLA-SYN, TLA-EVID, and TLA-ML are named for consultation.',
    href: '/governance#standards-constellation'
  },
  {
    date: '2026-07-21',
    title: 'Meaning between data and computation',
    summary:
      'Raw records and generative models face opposite directions on the same coin; neither yields consequence without interpretive work. A note on art, overclaim, labour, and the profession landscape architecture must become, not merely automate.',
    href: '/articles/meaning-between-data-and-computation'
  },
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
      'Reference adoption path: download the open pack, cite the registry, and add the procurement sentence to one deliverable (self-serve validators paused). Documents why a mandated pilot deliverable precedes governance outreach.',
    href: '/adopt'
  },
  {
    date: '2026-07-08',
    title: 'Founding charter consultation',
    summary:
      'Draft constitution for The Landscape Archive Foundation (proposed CLG). Consultation draft for founding-alliance review.',
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
]

/** @type {readonly PublicUpdateItem[]} */
export const FOUNDATION_RECENT_PUBLIC_UPDATES = Object.freeze(
  [...FOUNDATION_RECENT_PUBLIC_UPDATES_SOURCE].sort((a, b) => {
    const byDate = String(b.date).localeCompare(String(a.date))
    if (byDate !== 0) return byDate
    return String(a.title).localeCompare(String(b.title))
  })
)
