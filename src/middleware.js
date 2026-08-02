/**
 * Locale URL scaffolding: /es/governance → /governance?ui_locale=es
 * True per-locale SSR/SEO content remains a later wave; this makes prefix URLs work.
 */
import { defineMiddleware } from 'astro:middleware'
import { DEFAULT_LOCALE, isSupportedLocale } from './i18n/locales.js'

const LOCALE_PREFIX = /^\/([a-z]{2})(\/.*)?$/
const STATIC_FILE = /\.[a-z0-9]+$/i

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  if (STATIC_FILE.test(pathname)) return next()

  const match = pathname.match(LOCALE_PREFIX)
  if (!match) return next()

  const code = match[1]
  if (!isSupportedLocale(code)) return next()

  const rest = match[2] && match[2].length > 0 ? match[2] : '/'
  const target = new URL(rest, context.url.origin)
  target.search = context.url.search

  if (code === DEFAULT_LOCALE) {
    // Strip /en/... noise; keep any existing query.
    return context.redirect(target.pathname + target.search, 302)
  }

  target.searchParams.set('ui_locale', code)
  return context.redirect(target.pathname + target.search, 302)
})
