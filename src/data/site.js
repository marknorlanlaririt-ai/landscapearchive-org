// Canonical identity for the international Foundation site.

/** Apex origin — the international home of the Foundation + open standard. */
export const SITE_ORIGIN = 'https://landscapearchive.org'

/** Commercial Archive site (separate .com.au apex) — cross-site handoffs. */
export const ARCHIVE_ORIGIN = 'https://landscapearchive.com.au'

/** Canonical international schema portal (Cloudflare Pages custom domain). */
export const SCHEMA_PORTAL_URL = 'https://schema.landscapearchive.org'

export const FOUNDATION_DISPLAY_NAME = 'The Landscape Archive Foundation'
export const FOUNDATION_SHORT_NAME = 'The Foundation'

/** Wordmark stack used in the corner brand + hero. */
export const FOUNDATION_WORDMARK_LINES = Object.freeze(['THE', 'LANDSCAPE', 'ARCHIVE', 'FOUNDATION'])

/** Primary site navigation (header + docs rail). Paths are apex-rooted. */
export const SITE_NAV_LINKS = Object.freeze([
  { id: 'overview', label: 'Overview', href: '/' },
  { id: 'governance', label: 'Governance', href: '/governance' },
  { id: 'registry', label: 'Registry', href: '/registry' },
  { id: 'truth-tellers', label: 'Truth-tellers', href: '/truth-tellers' },
  { id: 'awards', label: 'Awards', href: '/awards' },
  { id: 'volunteers', label: 'Volunteers', href: '/volunteers' },
  { id: 'articles', label: 'Field Notes', href: '/articles' },
  { id: 'media', label: 'Media', href: '/media' },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'events', label: 'Events', href: '/events', requiresLogin: true }
])

export const SITE_DESCRIPTION =
  'The Landscape Archive Foundation stewards the open TLA-185 / TLA-169 specification — public infrastructure for archival stewardship and truth in landscape metadata: applied practice documentation, botanical authenticity, auditable climate disclosure, honest sustainability, and ethical synthetic nature.'
