import { ARCHIVE_ORIGIN, SITE_ORIGIN } from './site.js'

/** Archive-side sign-in handoff route (returns to landscapearchive.org after auth). */
export const ARCHIVE_ORG_ACCESS_GATE_PATH = '/foundation/org-access'

/** Foundation org pages visible only to signed-in Archive members. */
export const MEMBER_ONLY_ORG_PATHS = Object.freeze([
  '/awards',
  '/volunteers',
  '/events'
])

export const ARCHIVE_SESSION_VERIFY_URL = `${ARCHIVE_ORIGIN}/api/foundation/session-verify`
export const ARCHIVE_ORG_ACCESS_VERIFY_URL = `${ARCHIVE_ORIGIN}/api/foundation/org-access-verify`

export function normalizeOrgPath(path = '') {
  const raw = String(path || '').trim()
  if (!raw) {
    return ''
  }

  try {
    const url = new URL(raw, `${SITE_ORIGIN}/`)
    return url.pathname.replace(/\/+$/, '') || '/'
  } catch {
    const normalized = raw.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/'
    return normalized.startsWith('/') ? normalized : `/${normalized}`
  }
}

export function isMemberOnlyOrgPath(path = '') {
  return MEMBER_ONLY_ORG_PATHS.includes(normalizeOrgPath(path))
}

/** Build Archive sign-in handoff URL for a Foundation org destination. */
export function buildArchiveOrgAccessGateUrl(orgPath = '/awards') {
  const normalizedPath = normalizeOrgPath(orgPath) || '/awards'
  const targetUrl = new URL(normalizedPath, `${SITE_ORIGIN}/`).toString()
  const gateUrl = new URL(ARCHIVE_ORG_ACCESS_GATE_PATH, ARCHIVE_ORIGIN)
  gateUrl.searchParams.set('target', targetUrl)
  return gateUrl.toString()
}
