import { ARCHIVE_ORIGIN, SITE_ORIGIN } from './site.js'

/** Archive-side sign-in handoff route (returns to landscapearchive.org after auth). */
export const ARCHIVE_ORG_ACCESS_GATE_PATH = '/foundation/org-access'

/** Explicit sign-in page on the Foundation org site. */
export const ORG_SIGN_IN_PATH = '/sign-in'

/** Foundation org pages visible only to signed-in Archive members. */
/** Internal working sessions only — programme charter pages stay public. */
export const MEMBER_ONLY_ORG_PATHS = Object.freeze([
  '/events'
])

/** Session bootstrap paths — cross-site handoff without gating public pages. */
export const SESSION_HANDOFF_ORG_PATHS = Object.freeze([
  ORG_SIGN_IN_PATH,
  '/volunteers'
])

export const ARCHIVE_SESSION_VERIFY_URL = `${ARCHIVE_ORIGIN}/api/foundation/session-verify`
export const ARCHIVE_ORG_ACCESS_VERIFY_URL = `${ARCHIVE_ORIGIN}/api/foundation/org-access-verify`
export const ARCHIVE_ORG_SIGN_IN_URL = `${ARCHIVE_ORIGIN}/api/foundation/org-sign-in`
export const ARCHIVE_FOUNDATION_SIGN_OUT_URL = `${ARCHIVE_ORIGIN}/api/foundation/sign-out`

/** Canonical cookie policy (shared with landscapearchive.com.au SPA). */
export const ARCHIVE_COOKIE_POLICY_URL = `${ARCHIVE_ORIGIN}/legal?tab=cookie-policy`

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

export function isSessionHandoffOrgPath(path = '') {
  return SESSION_HANDOFF_ORG_PATHS.includes(normalizeOrgPath(path))
}

export function isAccessHandoffOrgPath(path = '') {
  const normalized = normalizeOrgPath(path)
  return isMemberOnlyOrgPath(normalized) || isSessionHandoffOrgPath(normalized)
}

/** Build on-site sign-in URL with optional return path on landscapearchive.org. */
export function buildOrgSignInUrl(returnPath = ORG_SIGN_IN_PATH) {
  const raw = String(returnPath || '').trim()
  const pathOnly = normalizeOrgPath(raw) || ORG_SIGN_IN_PATH
  let hash = ''

  try {
    const url = new URL(raw, `${SITE_ORIGIN}/`)
    hash = url.hash || ''
  } catch {
    const hashIndex = raw.indexOf('#')

    if (hashIndex >= 0) {
      hash = raw.slice(hashIndex)
    }
  }

  const returnValue = `${pathOnly}${hash}`
  const signInUrl = new URL(ORG_SIGN_IN_PATH, `${SITE_ORIGIN}/`)

  if (returnValue !== ORG_SIGN_IN_PATH) {
    signInUrl.searchParams.set('return', returnValue)
  }

  return signInUrl.pathname + signInUrl.search
}

/** Resolve return destination from sign-in query params. */
export function resolveOrgSignInReturnPath(searchParams = new URLSearchParams()) {
  const rawReturn = String(searchParams.get('return') || searchParams.get('redirect') || '').trim()

  if (!rawReturn) {
    return ORG_SIGN_IN_PATH
  }

  try {
    const url = new URL(rawReturn, `${SITE_ORIGIN}/`)
    const origin = url.origin.replace(/\/$/, '').toLowerCase()
    const siteOrigin = SITE_ORIGIN.replace(/\/$/, '').toLowerCase()

    if (origin !== siteOrigin) {
      return ORG_SIGN_IN_PATH
    }

    return `${url.pathname.replace(/\/+$/, '') || '/'}${url.hash || ''}`
  } catch {
    const normalized = normalizeOrgPath(rawReturn)
    return normalized || ORG_SIGN_IN_PATH
  }
}

/** Build Archive sign-in handoff URL for a Foundation org destination. */
export function buildArchiveOrgAccessGateUrl(orgPath = ORG_SIGN_IN_PATH) {
  const normalizedPath = normalizeOrgPath(orgPath) || ORG_SIGN_IN_PATH
  const targetUrl = new URL(normalizedPath, `${SITE_ORIGIN}/`).toString()
  const gateUrl = new URL(ARCHIVE_ORG_ACCESS_GATE_PATH, ARCHIVE_ORIGIN)
  gateUrl.searchParams.set('target', targetUrl)
  return gateUrl.toString()
}

/** Resolve the best handoff target for the current page. */
export function resolveOrgAccessHandoffPath(activePath = '/') {
  const normalized = normalizeOrgPath(activePath)
  if (isMemberOnlyOrgPath(normalized)) {
    return normalized
  }
  if (isSessionHandoffOrgPath(normalized) && normalized !== ORG_SIGN_IN_PATH) {
    return normalized
  }
  return ORG_SIGN_IN_PATH
}

export const ARCHIVE_VOLUNTEER_APPLICATION_URL = `${ARCHIVE_ORIGIN}/api/foundation/volunteer-application`
