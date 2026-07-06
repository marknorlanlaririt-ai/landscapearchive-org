// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import { SITE_ORIGIN } from './src/data/site.js'

// The Landscape Archive Foundation — international standards-body site.
// Static output (no SSR): every page ships crawlable HTML for SEO and is
// served from Cloudflare Pages. Interactive bits are added later as islands.
export default defineConfig({
  site: SITE_ORIGIN,
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap({
      // Foundation pages live at the apex; the standard's canonical GitHub /
      // schema portal are external and excluded from our sitemap.
      filter: (page) =>
        !page.includes('/access/')
        && !page.endsWith('/sign-in')
        && !page.endsWith('/events')
    })
  ]
})
