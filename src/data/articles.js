import { GOVERNANCE_PATH, REGISTRY_PATH, TLA185_DISPLAY_ID } from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'

/**
 * Field Notes — the Foundation's essays and working-group explainers.
 *
 * Each entry is either `status: 'published'` (has `sections`) or
 * `status: 'planned'` (title + dek only, shown as an upcoming commission).
 * Sections reuse the DocsSection shape (heading / paragraphs / bullets /
 * actions), so no new renderer is required.
 *
 * Order is reverse-chronological within each status when listed.
 */

const DICTIONARY_URL = `${SCHEMA_PORTAL_URL}/dictionary`

export const FIELD_NOTES = Object.freeze([
  {
    slug: 'a-shared-vocabulary',
    status: 'published',
    title: 'A shared vocabulary for a fragmented profession',
    dek: 'Landscape architecture is spread across studios, universities, councils, and agencies that each name the same things differently. An open data dictionary is the quiet infrastructure that lets them speak — and disagree — precisely.',
    author: 'The Landscape Archive Foundation',
    date: '2026-07-05',
    readingTime: '7 min',
    topics: ['Advocacy', 'Vocabulary', 'Governance'],
    sections: [
      {
        heading: 'When records cannot be joined: a vocabulary problem',
        paragraphs: [
          'A landscape project passes through many hands — the practice that designs it, the nursery that supplies it, the council that approves it, the university that studies it, the agency that maintains it. Each keeps records. Almost none of them use the same words for the same things. One file says “native grass mix,” another “indigenous groundcover,” a third a botanical name that was superseded a decade ago. The information exists; it simply cannot be joined, compared, or checked.',
          'The gap is vocabulary, not technology. Before a profession can share data honestly, it has to agree on what its terms <em>mean</em> — to make difference legible without flattening it. The Landscape Archive Foundation exists to steward that agreement: an open, citable dictionary of the fields a landscape record ought to carry, and precise definitions for each.'
        ]
      },
      {
        heading: 'A dictionary you can cite, not just read',
        paragraphs: [
          `${TLA185_DISPLAY_ID} is that dictionary. It describes 185 documented elements — taxonomy and identity, site context, climate screening, sustainability disclosure, cultural protocol, and BIM delivery — as structural definitions, not as a dataset. Anyone may read it, reference it, and build on it under an open licence.`,
          'What makes a dictionary infrastructure rather than a glossary is that each term is <em>citable</em>. Every element now has a permanent identifier and a published definition, so a university can cite it in a curriculum, an agency can reference it in procurement, and a practice can point to it in a specification — and all three are pointing at exactly the same thing, at a fixed version, independent of any single vendor’s product lifecycle.'
        ],
        actions: [
          { label: 'Browse the Landscape Data Dictionary', href: DICTIONARY_URL, external: true },
          { label: 'See the field registry', href: REGISTRY_PATH }
        ]
      },
      {
        heading: 'Definitions should be argued about',
        paragraphs: [
          'A living vocabulary is one that is debated. What counts as “native” for a given project? When does a screening estimate become a claim? Which synonym is preferred, and which is merely tolerated? These are professional questions, and they deserve a published governance process — open proposals, request for comment, and versioned release.',
          'So each term carries a way to propose a change. A practitioner who thinks a definition is wrong, incomplete, or out of date can open a proposal against that exact term; the interim working group triages it; substantive changes become a request for comment and, if adopted, a versioned release. The words move forward in the open, with a record of who argued what and why — the same standard of truth-telling the Foundation asks of the projects that use them.'
        ],
        actions: [{ label: 'How governance works', href: GOVERNANCE_PATH }]
      },
      {
        heading: 'Why an independent steward',
        paragraphs: [
          'A vocabulary stewarded by an independent Foundation can be cited, taught, and revised through open governance. The Foundation layer is deliberately carved out from the commercial stack so the “grammar” of landscape metadata remains under open, independent stewardship. Vendors — including The Landscape Archive — compete on how well they implement the standard.',
          'That independence is what lets institutions adopt the dictionary with confidence. It is also what makes advocacy possible: a shared, open reference is something a profession can take to government, to standards bodies, and to the academy and say, together, “this is how we describe our work, and here is where you can check it.”'
        ]
      }
    ]
  },
  {
    slug: 'reading-the-landscape-as-data',
    status: 'planned',
    title: 'Reading the landscape as data',
    dek: 'Synonyms, definitions, and meaning as design material — teaching landscape practice through the lens of data, art, and technology.',
    topics: ['Education', 'Data as art'],
    author: 'The Landscape Archive Foundation'
  },
  {
    slug: 'who-owns-the-words',
    status: 'planned',
    title: 'Who owns the words? The economics of data and the future of landscape architecture',
    dek: 'When the field dictionary lives inside products, the profession rents its own language. What an open standard changes about the economics of practice.',
    topics: ['Economics', 'Open infrastructure'],
    author: 'The Landscape Archive Foundation'
  },
  {
    slug: 'guidelines-for-honest-records',
    status: 'planned',
    title: 'Guidelines for honest project records',
    dek: 'Practical guidance for practices and institutions on evidencing claims, handling cultural sensitivity, and attributing synthetic assets in exchange bundles.',
    topics: ['Guidelines', 'Truth-telling'],
    author: 'The Landscape Archive Foundation'
  }
])

export const PUBLISHED_FIELD_NOTES = FIELD_NOTES.filter((a) => a.status === 'published')
export const PLANNED_FIELD_NOTES = FIELD_NOTES.filter((a) => a.status === 'planned')

export function getArticle(slug) {
  return FIELD_NOTES.find((a) => a.slug === slug && a.status === 'published') || null
}

export function formatArticleDate(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}
