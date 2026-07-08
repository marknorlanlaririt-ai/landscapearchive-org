## 2026-07-08 - Founding alliance tone (no overclaim)

**Scope:** governance, founding-alliance, copy
**Status:** done

### Did
- Rewrote **Founding alliance** section in `governanceContent.js` — intent/possibility language; explicit "no alliance exists today"; removed "under review with advisers and prospective members"; softened participant/CTA framing; updated facts row.

### Why
- Public copy implied an alliance was being actively convened or in preparation. Align with `FOUNDATION_PUBLIC_NAMING_AND_LEGAL_SAFETY.md`: draft/interim tone, no incorporated entity, affiliate ≠ founding.

### Files touched
- `src/data/governanceContent.js`

### Links
- https://landscapearchive.org/governance#founding-alliance

---


**Scope:** adoption, founding-charter, governance, marketing
**Status:** done

### Did
- Added `/adopt` practitioner guide: why specs go unused, 15-minute path (open pack → validator → procurement sentence), adoption ladder, honest interim footer.
- Added `foundingAlliancePitch.js` — copy-paste email templates (university, public body, practice) and one-page plain-text pitch.
- Published `/founding-charter` consultation page with draft constitution sections and `?intent=founding-alliance` CTA.
- Homepage primary CTA → adopt; registry quick-start banner; nav + footer links; governance founding-alliance and international-adoption cross-links.
- Updated recent public updates strip.

### Why
- Outreach without adoption: strategy shifts from governance copy to mandated first use case per pilot, tooling visibility, and measurable validator/crosswalk usage.

### Files touched
- `src/pages/adopt.astro`, `src/data/adoptContent.js`, `src/data/foundingAlliancePitch.js`
- `src/pages/founding-charter.astro`, `src/data/foundingCharterContent.js`, `public/docs/FOUNDATION_DRAFT_CONSTITUTION.md`
- `src/pages/index.astro`, `src/pages/registry.astro`, `src/data/governanceContent.js`, `src/data/homeContent.js`
- `src/data/recentPublicUpdates.js`, `src/data/site.js`, `src/data/foundationWing.js`, `src/components/SiteFooter.astro`

### Links
- https://landscapearchive.org/adopt
- https://landscapearchive.org/founding-charter
- https://landscapearchive.org/governance#founding-alliance

---

## 2026-07-07 - Section share copy-link fix (all Foundation pages)

**Scope:** section-share, landscapearchive-org, foundation-portal
**Status:** done

### Did
- Root cause: Astro never emitted `SectionShareLinks` component `<script>` in production HTML when many instances render per page — Copy link buttons had no listeners.
- Moved init to `public/scripts/section-share.js`, loaded once from `BaseLayout.astro`; binds all `.section-share` rows with idempotent `data-share-initialized` guard.
- Hardened la-frontend `federation/portal/share.js` with the same init guard and DOM-ready mount.

### Why
- User report: share row visible on governance founding alliance (and elsewhere) but copy did nothing. LinkedIn/email worked because they are static hrefs.

### Files touched
- `public/scripts/section-share.js`, `src/components/SectionShareLinks.astro`, `src/layouts/BaseLayout.astro`
- `la-frontend/federation/portal/share.js`

### Links
- https://landscapearchive.org/governance#founding-alliance

---

## 2026-07-07 - US SEC climate crosswalk + custom domain attachment

**Scope:** foundation-governance, crosswalk, landscapearchive-org, cloudflare
**Status:** done

### Did
- Published `/crosswalk/us-sec-climate` Astro page rendering US SEC climate disclosure concept crosswalk markdown.
- Added US crosswalk link to international adoption governance actions; synced `public/crosswalk/us-sec-climate-tla185-mapping.md`.
- Updated UK and EU crosswalk markdown with US related-artefact link.
- Attached custom domains `landscapearchive.org` and `www.landscapearchive.org` to Cloudflare Pages project `landscapearchive-org` via REST API (wrangler has no `pages domain add` command).

### Why
- Third non-AU jurisdiction crosswalk for US Reg S-K Item 1300 adopters — same structural mapping as UK/EU with NOAA / USFS / USGS / NEX-GDDP bindings.
- Custom domains required for production Foundation home at apex `.org`.

### Files touched
- `src/data/governanceContent.js`
- `src/pages/crosswalk/us-sec-climate.astro`
- `public/crosswalk/us-sec-climate-tla185-mapping.md`
- `public/crosswalk/uk-ifrs-s2-tla185-mapping.md`
- `public/crosswalk/eu-csrd-esrs-tla185-mapping.md`

### Follow-ups / blockers
- Custom domains attached but **status pending** (HTTP validation / certificate provisioning in progress at attach time). Verify DNS CNAME records if not auto-created: apex and `www` → `landscapearchive-org.pages.dev` (proxied).

### Links
- `/governance#international-adoption`
- `/crosswalk/us-sec-climate`
- Deploy: `landscapearchive-org.pages.dev`

## 2026-07-07 - EU CSRD / ESRS E1 crosswalk page

**Scope:** foundation-governance, crosswalk, landscapearchive-org
**Status:** done

### Did
- Published `/crosswalk/eu-csrd-esrs` Astro page rendering EU CSRD / ESRS E1 concept crosswalk markdown.
- Added EU crosswalk link to international adoption governance actions; synced `public/crosswalk/eu-csrd-esrs-tla185-mapping.md`.
- Updated UK crosswalk markdown with EU related-artefact link.

### Why
- Second non-AU jurisdiction crosswalk for CSRD adopters — same structural mapping as UK/AASB with EU dataset bindings.

### Files touched
- `src/data/governanceContent.js`
- `src/pages/crosswalk/eu-csrd-esrs.astro`
- `public/crosswalk/eu-csrd-esrs-tla185-mapping.md`
- `public/crosswalk/uk-ifrs-s2-tla185-mapping.md`

### Links
- `/governance#international-adoption`
- `/crosswalk/eu-csrd-esrs`

## 2026-07-07 - International adoption roadmap + UK IFRS S2 crosswalk page

**Scope:** foundation-governance, crosswalk, landscapearchive-org
**Status:** done

### Did
- Added **International adoption roadmap** to `governanceContent.js` with three-layer model, year-1 bullets, and links to UK crosswalk + capability grants.
- Published `/crosswalk/uk-ifrs-s2` Astro page rendering federation crosswalk markdown; static source at `public/crosswalk/uk-ifrs-s2-tla185-mapping.md`.

### Why
- Give international adopters a citable governance anchor and first non-Australian disclosure crosswalk without overclaiming ISO status.

### Files touched
- `src/data/governanceContent.js`, `src/pages/governance.astro`
- `src/pages/crosswalk/uk-ifrs-s2.astro`
- `public/crosswalk/uk-ifrs-s2-tla185-mapping.md`

### Follow-ups / blockers
- Run `npm run deploy` when ready for apex cutover preview.

### Links
- `/governance#international-adoption`
- `/crosswalk/uk-ifrs-s2`

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
