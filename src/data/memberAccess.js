import { ARCHIVE_ORIGIN, SITE_ORIGIN } from './site.js'

/** Foundation org pages visible only to signed-in Archive members. */
export const MEMBER_ONLY_ORG_PATHS = Object.freeze([
  '/awards',
  '/volunteers',
  '/events'
])

export const ARCHIVE_SESSION_VERIFY_URL = `${ARCHIVE_ORIGIN}/api/foundation/session-verify`

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
