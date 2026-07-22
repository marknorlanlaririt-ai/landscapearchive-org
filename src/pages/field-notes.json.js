import {
  PUBLISHED_FIELD_NOTES,
  FIELD_NOTES_NEXT_STEPS
} from '../data/articles.js'
import { SITE_ORIGIN } from '../data/site.js'

/**
 * Public Field Notes index for Admin Ad Studio and other consumers.
 * Static JSON at /field-notes.json — published articles + section copy only.
 * No secrets; safe to cache publicly.
 */

function stripHtml(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function sectionId(section, index) {
  if (section.id) {
    return section.id
  }

  const slug = String(section.heading || `section-${index + 1}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return slug || `section-${index + 1}`
}

function mapSection(section, index) {
  const heading = stripHtml(section.heading)
  const paragraphs = (section.paragraphs || []).map(stripHtml).filter(Boolean)
  const bullets = (section.bullets || []).map(stripHtml).filter(Boolean)
  return {
    id: sectionId(section, index),
    heading,
    paragraphs,
    bullets,
    excerpts: paragraphs.filter((p) => p.length > 24).slice(0, 3)
  }
}

function mapArticle(article) {
  const path = `/articles/${article.slug}`
  const url = `${SITE_ORIGIN}${path}`
  const sections = [...(article.sections || []), FIELD_NOTES_NEXT_STEPS].map(mapSection)
  return {
    slug: article.slug,
    title: article.title,
    dek: stripHtml(article.dek),
    author: article.author || '',
    date: article.date || '',
    readingTime: article.readingTime || '',
    topics: article.topics || [],
    path,
    url,
    sections
  }
}

export async function GET() {
  const articles = PUBLISHED_FIELD_NOTES.map(mapArticle)
  const body = {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: SITE_ORIGIN,
    count: articles.length,
    articles
  }

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600'
    }
  })
}
