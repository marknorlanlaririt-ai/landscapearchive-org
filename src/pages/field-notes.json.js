import {
  PUBLISHED_FIELD_NOTES,
  getArticlePreviewExcerpt
} from '../data/articles.js'
import { SITE_ORIGIN } from '../data/site.js'

/**
 * Public Field Notes teaser feed for Admin Ad Studio and other consumers.
 * Full essay bodies stay member-unlocked on article pages — this feed ships
 * title / dek / preview excerpt only (no section HTML dump).
 */

function stripHtml(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function mapArticle(article) {
  const path = `/articles/${article.slug}`
  const url = `${SITE_ORIGIN}${path}`
  const excerpt = getArticlePreviewExcerpt(article)
  return {
    slug: article.slug,
    title: article.title,
    dek: stripHtml(article.dek),
    excerpt,
    author: article.author || '',
    date: article.date || '',
    readingTime: article.readingTime || '',
    topics: article.topics || [],
    path,
    url,
    access: 'preview',
    fullTextRequiresSignIn: true,
    // Single preview section so Ad Studio selectors keep working without full-body dump.
    sections: [
      {
        id: 'preview',
        heading: 'Preview',
        paragraphs: [excerpt].filter(Boolean),
        bullets: [],
        excerpts: [excerpt].filter(Boolean)
      }
    ]
  }
}

export async function GET() {
  const articles = PUBLISHED_FIELD_NOTES.map(mapArticle)
  const body = {
    version: 2,
    generatedAt: new Date().toISOString(),
    source: SITE_ORIGIN,
    count: articles.length,
    notice:
      'Public teaser feed. Full Field Notes bodies require Landscape Archive sign-in on landscapearchive.org.',
    articles
  }

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600'
    }
  })
}
