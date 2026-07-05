import { ARCHIVE_ORIGIN, SITE_ORIGIN } from './site.js'

/** Foundation org pages that require an Archive account. */
export const GATED_ORG_PATHS = Object.freeze([
  '/awards',
  '/volunteers'
])

export const ORG_ACCESS_STORAGE_KEY = 'la-foundation-org-access-v1'

export const ARCHIVE_ORG_ACCESS_GATE_PATH = `${ARCHIVE_ORIGIN}/foundation/org-access`

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

export function isGatedOrgPath(path = '') {
  return GATED_ORG_PATHS.includes(normalizeOrgPath(path))
}

export function buildArchiveOrgAccessGateUrl(orgPath = '/') {
  const normalizedPath = normalizeOrgPath(orgPath)
  const targetUrl = new URL(normalizedPath, `${SITE_ORIGIN}/`).toString()
  const gateUrl = new URL(ARCHIVE_ORG_ACCESS_GATE_PATH)
  gateUrl.searchParams.set('target', targetUrl)
  return gateUrl.toString()
}
