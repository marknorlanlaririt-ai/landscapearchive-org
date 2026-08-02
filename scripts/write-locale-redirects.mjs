/**
 * Append /{locale}/* → /*?ui_locale={locale} rules for Cloudflare Pages.
 * Keeps src/middleware.js for Astro SSR/dev; static hosting needs _redirects.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const target = path.join(here, '../public/_redirects')
const locales = ['es', 'fr', 'de', 'pt', 'zh', 'ja', 'ko', 'ms', 'it', 'ar', 'hi', 'id', 'nl', 'ru', 'tr', 'th', 'vi']

const markerStart = '# BEGIN locale-prefix-scaffold'
const markerEnd = '# END locale-prefix-scaffold'

let existing = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : ''
existing = existing.replace(/\r\n/g, '\n')
const blockRe = new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}\\n?`)
existing = existing.replace(blockRe, '')

const lines = [markerStart, '# /es/governance → /governance?ui_locale=es (client i18n; full SSR later)']
for (const code of locales) {
  lines.push(`/${code} /?ui_locale=${code} 302`)
  lines.push(`/${code}/ /?ui_locale=${code} 302`)
  lines.push(`/${code}/* /:splat?ui_locale=${code} 302`)
}
lines.push(`/en / 302`)
lines.push(`/en/ / 302`)
lines.push(`/en/* /:splat 302`)
lines.push(markerEnd)

const next = `${existing.trimEnd()}\n\n${lines.join('\n')}\n`
fs.writeFileSync(target, next)
console.log('[write-locale-redirects] wrote', locales.length, 'locale prefix rules to', target)
