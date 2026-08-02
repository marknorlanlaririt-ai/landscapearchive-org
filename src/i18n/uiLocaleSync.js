/**
 * Cross-host UI locale preference helpers (Foundation ↔ Archive SPA).
 * Same-origin: localStorage + cookie. Cross-host: ?ui_locale= on links.
 */

export const FOUNDATION_LOCALE_STORAGE_KEY = 'la-foundation-ui-locale'
export const ARCHIVE_PREFS_STORAGE_KEY = 'la-accessibility-preferences'
export const SHARED_COOKIE_NAME = 'la-ui-locale'
export const UI_LOCALE_QUERY = 'ui_locale'

const ARCHIVE_HOST_RE = /(^|\.)landscapearchive\.com\.au$/i
const FOUNDATION_HOST_RE = /(^|\.)landscapearchive\.org$/i

/** @param {string} code */
export function cookieMaxAgeSeconds() {
  return 60 * 60 * 24 * 365
}

/**
 * @param {string} hostname
 * @returns {string | null} cookie Domain attribute (leading dot) or null for host-only
 */
export function cookieDomainForHost(hostname) {
  const host = String(hostname || '').toLowerCase()
  if (ARCHIVE_HOST_RE.test(host)) return '.landscapearchive.com.au'
  if (FOUNDATION_HOST_RE.test(host)) return '.landscapearchive.org'
  return null
}

/**
 * Append or replace ui_locale on a URL string (absolute or relative).
 * @param {string} href
 * @param {string} locale
 */
export function withUiLocale(href, locale) {
  const code = String(locale || '').trim().toLowerCase()
  if (!href || !code || code === 'en') {
    try {
      const url = new URL(href, 'https://example.invalid')
      url.searchParams.delete(UI_LOCALE_QUERY)
      if (href.startsWith('http')) return url.toString()
      return `${url.pathname}${url.search}${url.hash}`
    } catch {
      return href
    }
  }
  try {
    const absolute = href.startsWith('http')
    const url = new URL(href, absolute ? undefined : 'https://example.invalid')
    url.searchParams.set(UI_LOCALE_QUERY, code)
    if (absolute) return url.toString()
    return `${url.pathname}${url.search}${url.hash}`
  } catch {
    const join = href.includes('?') ? '&' : '?'
    return `${href}${join}${UI_LOCALE_QUERY}=${encodeURIComponent(code)}`
  }
}
