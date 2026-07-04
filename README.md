# landscapearchive.org

The international public site for **The Landscape Archive Foundation** — steward of
the open **TLA-185 / TLA-169** landscape metadata standard.

This is a standalone, static-first site (Astro) deployed to Cloudflare Pages on the
`landscapearchive.org` apex. It is deliberately separate from the commercial
Landscape Archive product site (`landscapearchive.com.au`), which stays on `.com.au`.

## Why a separate repo / domain

`.org` is the recognised international, non-commercial convention for a standards
body (W3C / OGC / Creative Commons). Keeping the Foundation on its own apex and repo:

- signals that the open standard is **not owned by** the Australian commercial Pty Ltd;
- lets the site ship as fast, fully-static, highly-crawlable HTML (SEO-first);
- decouples release cadence from the large commercial app in `../la-frontend`.

## Stack

- **Astro** (static output) — one crawlable HTML file per page, per-page
  canonical/OG/meta, `@astrojs/sitemap`, JSON-LD `Organization` structured data.
- No client framework runtime by default. Interactive pieces (e.g. a future
  sign-in handoff) can be added as Astro islands.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/  (static)
npm run preview
```

## Deploy (Cloudflare Pages)

```bash
npm run deploy     # astro build && wrangler pages deploy dist --project-name landscapearchive-org
```

Custom domain `landscapearchive.org` is attached to the Pages project in the
Cloudflare dashboard (Full-strict SSL). `www.landscapearchive.org` 301s to apex.

## Structure

```
src/
  data/            Ported Foundation content + config (single source of copy)
    site.js               origins, nav, wordmark, description
    foundationWing.js     standard IDs, paths, licence, GitHub/schema links
    homeContent.js        home page sections
    governanceContent.js  governance + five Foundation Standards
    topicPages.js         volunteers / truth-tellers / media / articles / events
    charterPillars.js     five-pillar summary
    support.js            voluntary bank-transfer facts
  components/       FoundationMark, SiteHeader, SiteFooter, DocsSection, DraftBanner
  layouts/         BaseLayout.astro (SEO head, header/footer, draft banner)
  pages/           index, governance, registry, support, [topic]
public/            foundation-mark.svg, robots.txt, _headers, foundation-wing/*.json
```

## Content provenance

Copy and data were ported from `../la-frontend` (`src/pages/Foundation*.vue`,
`src/content/foundation*.js`, `src/config/foundation*.js`). See `MIGRATION.md`
for the mapping and what remains on the commercial site.

## Relationship to other repos

- `../la-frontend` — commercial Archive site (`.com.au`), app, admin. Its
  `/foundation` routes are being soft-redirected here.
- `../la-frontend/federation/` — the JSON Schema + static schema portal, published
  at `schema.landscapearchive.org`. Not yet moved into this repo (see MIGRATION.md).
