import { FOUNDATION_RECENT_PUBLIC_UPDATES } from '../data/recentPublicUpdates.js'
import { SITE_ORIGIN } from '../data/site.js'

/**
 * Public "Recent public updates" feed for apex marketing mirror and other consumers.
 * Static JSON at /recent-updates.json — curated homepage milestones only.
 * Source of truth: src/data/recentPublicUpdates.js (same list as RecentUpdatesStrip).
 * No secrets; safe to cache publicly.
 */

function toAbsoluteHref(href) {
  const raw = String(href || '').trim()
  if (!raw) return SITE_ORIGIN
  if (/^https?:\/\//i.test(raw)) return raw
  return new URL(raw.startsWith('/') ? raw : `/${raw}`, `${SITE_ORIGIN}/`).toString()
}

function mapUpdate(item) {
  const href = toAbsoluteHref(item?.href)
  const external = Boolean(item?.external) || !href.startsWith(SITE_ORIGIN)
  return {
    date: String(item?.date || ''),
    title: String(item?.title || ''),
    summary: String(item?.summary || ''),
    href,
    ...(external ? { external: true } : {})
  }
}

export async function GET() {
  const updates = FOUNDATION_RECENT_PUBLIC_UPDATES.map(mapUpdate).filter(
    (item) => item.title && item.href
  )
  const body = {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: SITE_ORIGIN,
    count: updates.length,
    updates
  }

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600'
    }
  })
}
