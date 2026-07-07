## 2026-07-07 - Professional section share links (public Foundation surfaces)

**Scope:** share-links, landscapearchive-org, federation-portal
**Status:** done

### Did
- Added `SectionShareLinks.astro` — restrained copy-link, LinkedIn, email, and Web Share API on mobile; slate `#343d4a` small-caps styling.
- Integrated after each `DocsSection` block on governance, awards, volunteers, homepage, and Field Notes essays; article-level share on essay footer; registry module groups.
- Schema portal: auto-injected share rows on `.foundation-section` via `federation/portal/share.js`.

### Why
- Resume session deliverable: citable deep links for founding alliance, awards, governance pillars, and field notes without bubbly social chrome.

### Files touched
- `src/components/SectionShareLinks.astro`, `src/components/DocsSection.astro`
- `src/pages/governance.astro`, `src/pages/[topic].astro`, `src/pages/index.astro`, `src/pages/registry.astro`, `src/pages/articles/[slug].astro`
- la-frontend: `federation/portal/share.js`, `federation/portal/index.html`, `federation/portal/styles.css`

### Links
- https://landscapearchive.org/governance#founding-alliance
- https://landscapearchive.org/articles/a-shared-vocabulary
- https://schema.landscapearchive.org/

## 2026-07-07 - Homepage what's new strip + public post copy

**Scope:** marketing, homepage, federation-portal, founding-alliance, built-environment
**Status:** done

### Did
- Added homepage **What's new** strip (`RecentUpdatesStrip.astro`, `recentPublicUpdates.js`) — founding alliance draft, export profiles, awards data architecture; interim/consultation tone.
- Schema portal: **Recently published** callout + reframed founding section as international founding alliance (draft consultation).
- Draft social copy kit at `docs/marketing/FOUNDATION_PUBLIC_UPDATE_POSTS.md` (LinkedIn, newsletter, Instagram hook; flags stale LAUNCH_ANNOUNCEMENT kit).

### Why
- User asked whether and how to market recent Foundation milestones without overclaiming incorporation or exposing internal admin tooling; surface cautious summaries on org + schema portal only.

### Files touched
- `src/data/recentPublicUpdates.js`, `src/components/RecentUpdatesStrip.astro`, `src/pages/index.astro`
- `docs/marketing/FOUNDATION_PUBLIC_UPDATE_POSTS.md`
- la-frontend: `federation/portal/index.html`, `federation/portal/styles.css`

### Links
- https://landscapearchive.org/
- https://schema.landscapearchive.org/

## 2026-07-07 - Founding alliance governance section (international)

**Scope:** governance, founding-alliance, awards-crosslink
**Status:** done

### Did
- Added **Founding alliance** section to governance page — international coalition framing (practices, universities, public bodies, Indigenous protocol authorities, nurseries, implementation partners worldwide).
- Clarified affiliate partner programme (commercial Archive referral) ≠ Foundation founding membership; no separate “Landscape Alliance” trademark.
- Linked schema portal, awards data-architecture anchor, charter consultation contact intent, and commercial `/partners`.
- Footer nav link to `#founding-alliance`; awards programme governance cross-link back to governance.
- Synced `foundationGovernanceContent.js` and awards source in la-frontend.

### Why
- Option A + international scope: publish founding coalition language under The Landscape Archive Foundation with interim draft tone, without implying active incorporation or duplicating internal standard codes in new copy.

### Files touched
- `src/data/governanceContent.js`, `src/pages/governance.astro`, `src/components/SiteFooter.astro`, `src/data/foundationAwardsProgramme.js`
- la-frontend: `src/content/foundationGovernanceContent.js`, `src/content/foundationAwardsProgramme.js`

### Links
- https://landscapearchive.org/governance#founding-alliance
- https://landscapearchive.org/awards#data-architecture-alignment

## 2026-07-07 - Header instant visibility (pixel chrome + animations)

**Scope:** foundation-chrome, portal-animations, global-css
**Status:** done

### Did
- Synced portal scripts: mosaic build deferred to rAF; `pixel-chrome--done` on boot; header animations no longer wait on pixel-chrome event or double rAF.
- Nav base stagger 0ms; wordmark lines 0/50ms; transform-only motion with opacity 1 on first paint.
- Removed legacy pixel-chrome content opacity gates; inline `pixel-chrome--done` in `BaseLayout.astro` head.

### Why
- Header logo, wordmark, and nav were still hidden for seconds after intro dissolve removal due to sync mosaic work and CSS opacity gates.

### Files touched
- `public/scripts/foundation-pixel-chrome.js`, `public/scripts/portal-animations.js`
- `src/styles/global.css`, `src/layouts/BaseLayout.astro`

### Links
- https://landscapearchive.org/

## 2026-07-07 - Awards data architecture copy + profile badge polish

**Scope:** awards, built-environment, federation-schema
**Status:** done

### Did
- Rewrote awards data-architecture section and export profile table labels without TLA-xxx identifiers; confident tone for published interchange profiles.
- Refined `DocsSection.astro` profile-table status badges (small-caps, subtle border, muted fill).
- Updated governance open-infrastructure pillar export-profile sentence; synced from la-frontend awards source.

### Why
- User-facing copy should describe IFC property sets, GeoJSON civic registries, USD sidecars, and spreadsheet crosswalks in professional language — not internal profile codes.

### Files touched
- `src/data/builtEnvironmentExports.js`, `src/data/foundationAwardsProgramme.js`, `src/data/governanceContent.js`, `src/components/DocsSection.astro`

### Links
- https://landscapearchive.org/awards#data-architecture-alignment

## 2026-07-07 - Pixel chrome: remove intro dissolve

**Scope:** foundation-chrome, pixel-dissolve
**Status:** done

### Did
- Removed intro loading dissolve: no staggered cell reveal, no `pixel-chrome--active` content hide, no ~1.8s/4.1s settle timers.
- Mosaics boot in ambient base state; `foundation-pixel-chrome-readable` and settled events fire immediately on load.
- Kept ambient grow-only patch pulse (`AMBIENT_TIME_SCALE` 3.3) and green/warm gradient field for wave colors.

### Why
- User wanted the initial pixelated intro animation gone entirely; ambient pulse is fine.

### Files touched
- `public/scripts/foundation-pixel-chrome.js`

### Links
- https://landscapearchive.org

## 2026-07-07 - Pixel chrome: faster intro, clearer foreground

**Scope:** foundation-chrome, pixel-dissolve
**Status:** done

### Did
- Split intro dissolve timing (`INTRO_TIME_SCALE` 1.5) from ambient pulse (`AMBIENT_TIME_SCALE` 3.3): readable ~1.8s, settled ~4.1s (was ~4s / ~9.2s).
- Raised header/footer content above ambient mosaic layers (`z-index: 5`); content fade 720ms via `--pixel-content-fade-duration`.
- Lightened nav links, wordmark, and lettermark contrast on slate chrome (brighter text colors + subtle shadow).

### Why
- User feedback: initial loading dissolve felt too slow; nav/wordmark/links read too faded against the pixel chrome background.

### Files touched
- `public/scripts/foundation-pixel-chrome.js`
- `src/styles/global.css`
- `src/components/SiteHeader.astro`

### Links
- https://landscapearchive.org
