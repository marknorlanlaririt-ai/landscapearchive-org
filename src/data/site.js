// Canonical identity for the international Foundation site.

/** Apex origin — the international home of the Foundation + open standard. */
export const SITE_ORIGIN = 'https://landscapearchive.org'

/** Commercial Archive site (separate .com.au apex) — cross-site handoffs. */
export const ARCHIVE_ORIGIN = 'https://landscapearchive.com.au'

/** Canonical international schema portal (Cloudflare Pages custom domain). */
export const SCHEMA_PORTAL_URL = 'https://schema.landscapearchive.org'

export const FOUNDATION_DISPLAY_NAME = 'The Landscape Archive Foundation'
export const FOUNDATION_SHORT_NAME = 'The Foundation'

/**
 * The Landscape Vault — passive IP holding company (custodian / licensor of the
 * software, databases, APIs, and trademarks). It stewards and powers The
 * Landscape Archive Foundation until the Foundation incorporates. It does NOT
 * sign customer contracts or process subscriptions.
 *
 * Public site https://landscapevault.com is being registered and is NOT live
 * yet. Do not ship a dead public link: while `VAULT_PUBLIC_SITE_LIVE` is false,
 * `resolveVaultHref()` returns the on-site fallback and the name should render
 * as plain text where inline linking is not possible.
 *
 * TODO(vault-live): when https://landscapevault.com is live, set
 * `VAULT_PUBLIC_SITE_LIVE = true`. References wired through `resolveVaultHref()`
 * then link out automatically. Mirror this flag in
 * la-frontend/src/config/brandPublic.js.
 */
export const VAULT_LEGAL_NAME = 'The Landscape Vault Pty Ltd'
export const VAULT_DISPLAY_NAME = 'The Landscape Vault'
export const VAULT_PUBLIC_SITE_URL = 'https://landscapevault.com'
/** Flip to true only once landscapevault.com is live. */
export const VAULT_PUBLIC_SITE_LIVE = true
/** On-site fallback while the Vault public site is not live (no dead link). */
export const VAULT_FALLBACK_HREF = '/governance#three-entity-structure'
/** Resolve the href to use when linking the Vault name. */
export function resolveVaultHref() {
  return VAULT_PUBLIC_SITE_LIVE ? VAULT_PUBLIC_SITE_URL : VAULT_FALLBACK_HREF
}
/** True when the Vault name may be rendered as an outbound link. */
export function isVaultPublicSiteLive() {
  return VAULT_PUBLIC_SITE_LIVE
}

/** Wordmark stack used in the corner brand + hero. */
export const FOUNDATION_WORDMARK_LINES = Object.freeze(['THE', 'LANDSCAPE', 'ARCHIVE', 'FOUNDATION'])

/** Primary site navigation (header + docs rail). Paths are apex-rooted. */
export const SITE_NAV_LINKS = Object.freeze([
  { id: 'overview', label: 'Overview', href: '/' },
  { id: 'governance', label: 'Governance', href: '/governance' },
  { id: 'registry', label: 'Registry', href: '/registry' },
  { id: 'adopt', label: 'Adopt', href: '/adopt' },
  { id: 'industry-practice', label: 'Practice', href: '/industry-practice' },
  { id: 'seal-verifier', label: 'Archive Seal', href: '/seal-verifier' },
  { id: 'licence', label: 'Licence', href: '/licence' },
  { id: 'truth-tellers', label: 'Truth-tellers', href: '/truth-tellers' },
  { id: 'awards', label: 'Awards', href: '/awards' },
  { id: 'volunteers', label: 'Volunteers', href: '/volunteers' },
  { id: 'articles', label: 'Field Notes', href: '/articles' },
  // Media page remains reachable at /media but stays out of public nav until press kit ships.
  { id: 'media', label: 'Media', href: '/media', hidden: true },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'events', label: 'Events', href: '/events', requiresLogin: true, hidden: true }
])

export const SITE_TAGLINE =
  'Open landscape metadata standard.'

export const SITE_DESCRIPTION =
  'The Landscape Archive Foundation stewards the open TLA-185 / TLA-169 landscape metadata specification — field registry, schemas, and conformance criteria under CC BY-NC-ND 4.0.'
