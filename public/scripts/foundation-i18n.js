/**
 * Foundation chrome i18n — applies data-i18n / data-i18n-aria labels.
 * Preference order: ?ui_locale= → cookie la-ui-locale → localStorage
 * la-foundation-ui-locale → mirrored accessibility prefs → browser language.
 * Cross-host: rewrite landscapearchive.com.au links with ?ui_locale=.
 */
;(function () {
  const STORAGE_KEY = 'la-foundation-ui-locale'
  const ARCHIVE_PREFS_KEY = 'la-accessibility-preferences'
  const COOKIE_NAME = 'la-ui-locale'
  const QUERY = 'ui_locale'
  const DEFAULT_LOCALE = 'en'
  const ARCHIVE_HOST_RE = /(^|\.)landscapearchive\.com\.au$/i

  function readBundle() {
    const el = document.getElementById('la-foundation-i18n-data')
    if (!el) return null
    try {
      return JSON.parse(el.textContent || '{}')
    } catch {
      return null
    }
  }

  const bundle = readBundle()
  if (!bundle || !bundle.messages) return

  const supported = Array.isArray(bundle.locales) ? bundle.locales : []
  const messages = bundle.messages
  const htmlLangMap = bundle.htmlLang || {}
  const rtlLocales = new Set(
    Array.isArray(bundle.rtl) ? bundle.rtl : supported.filter((e) => e.dir === 'rtl').map((e) => e.code)
  )

  function resolveLocale(code) {
    const next = String(code || '').trim().toLowerCase()
    return supported.some((entry) => entry.code === next) ? next : DEFAULT_LOCALE
  }

  function t(locale, key) {
    return (
      (messages[locale] && messages[locale][key])
      || (messages[DEFAULT_LOCALE] && messages[DEFAULT_LOCALE][key])
      || key
    )
  }

  function readCookie() {
    const parts = String(document.cookie || '').split(';')
    for (const part of parts) {
      const [rawKey, ...rest] = part.trim().split('=')
      if (rawKey === COOKIE_NAME) {
        return decodeURIComponent(rest.join('=') || '').trim().toLowerCase() || null
      }
    }
    return null
  }

  function writeCookie(locale) {
    const host = (location.hostname || '').toLowerCase()
    const domain = /(^|\.)landscapearchive\.org$/i.test(host) ? '; Domain=.landscapearchive.org' : ''
    document.cookie =
      COOKIE_NAME +
      '=' +
      encodeURIComponent(locale) +
      '; Path=/; Max-Age=' +
      60 * 60 * 24 * 365 +
      '; SameSite=Lax' +
      domain
  }

  function readArchivePrefsLocale() {
    try {
      const raw = localStorage.getItem(ARCHIVE_PREFS_KEY)
      if (!raw) return null
      const parsed = JSON.parse(raw)
      return parsed && parsed.locale ? String(parsed.locale).toLowerCase() : null
    } catch {
      return null
    }
  }

  function mirrorArchivePrefsLocale(locale) {
    try {
      const raw = localStorage.getItem(ARCHIVE_PREFS_KEY)
      const parsed = raw ? JSON.parse(raw) : {}
      const next = { ...(parsed && typeof parsed === 'object' ? parsed : {}), locale }
      localStorage.setItem(ARCHIVE_PREFS_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }

  function readQueryLocale() {
    try {
      return new URLSearchParams(location.search).get(QUERY)
    } catch {
      return null
    }
  }

  function withUiLocale(href, locale) {
    try {
      const url = new URL(href, location.origin)
      if (locale && locale !== DEFAULT_LOCALE) url.searchParams.set(QUERY, locale)
      else url.searchParams.delete(QUERY)
      if (/^https?:/i.test(href)) return url.toString()
      return url.pathname + url.search + url.hash
    } catch {
      return href
    }
  }

  function rewriteCrossHostLinks(locale) {
    document.querySelectorAll('a[href]').forEach((node) => {
      const href = node.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      try {
        const url = new URL(href, location.origin)
        if (!ARCHIVE_HOST_RE.test(url.hostname)) return
        node.setAttribute('href', withUiLocale(url.toString(), locale))
      } catch {
        /* ignore */
      }
    })
  }

  function applyLocale(rawCode) {
    const locale = resolveLocale(rawCode)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
    writeCookie(locale)
    mirrorArchivePrefsLocale(locale)

    document.documentElement.lang = htmlLangMap[locale] || 'en-AU'
    document.documentElement.dir = rtlLocales.has(locale) ? 'rtl' : 'ltr'
    document.documentElement.dataset.uiLocale = locale

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n')
      if (!key) return
      const value = t(locale, key)
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        if (node.hasAttribute('placeholder')) node.setAttribute('placeholder', value)
      } else {
        node.textContent = value
      }
    })

    document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
      const key = node.getAttribute('data-i18n-aria')
      if (!key) return
      node.setAttribute('aria-label', t(locale, key))
    })

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      const key = node.getAttribute('data-i18n-html')
      if (!key) return
      node.innerHTML = t(locale, key)
    })

    document.querySelectorAll('[data-i18n-select]').forEach((node) => {
      if (node instanceof HTMLSelectElement) {
        node.value = locale
      }
    })

    const note = document.querySelector('[data-i18n-note]')
    if (note) {
      note.hidden = locale === DEFAULT_LOCALE
      note.textContent = t(locale, 'lang.note')
    }

    rewriteCrossHostLinks(locale)
    document.dispatchEvent(new CustomEvent('la-foundation-locale', { detail: { locale } }))
  }

  function initialLocale() {
    const fromQuery = readQueryLocale()
    if (fromQuery) return resolveLocale(fromQuery)
    const fromCookie = readCookie()
    if (fromCookie) return resolveLocale(fromCookie)
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return resolveLocale(saved)
    } catch {
      /* ignore */
    }
    const fromArchive = readArchivePrefsLocale()
    if (fromArchive) return resolveLocale(fromArchive)
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || ''
    const short = String(nav).slice(0, 2).toLowerCase()
    return resolveLocale(short)
  }

  function bindControls() {
    document.querySelectorAll('[data-i18n-select]').forEach((node) => {
      if (!(node instanceof HTMLSelectElement)) return
      node.addEventListener('change', () => applyLocale(node.value))
    })
  }

  applyLocale(initialLocale())
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindControls)
  } else {
    bindControls()
  }

  window.LaFoundationI18n = { applyLocale, resolveLocale, t, withUiLocale }
})()
