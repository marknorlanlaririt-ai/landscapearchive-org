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
      filter: (page) => {
        if (page.includes('/access/')) return false
        if (page.includes('/vault')) return false
        if (page.includes('/directors/apply')) return false
        if (page.endsWith('/sign-in')) return false
        if (page.endsWith('/events')) return false
        if (page.endsWith('/media')) return false
        return true
      }
    })
  ]
})
