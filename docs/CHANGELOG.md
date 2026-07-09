## 2026-07-09 - Foundation browser tab title pattern

**Scope:** seo, document-title, branding
**Status:** done

### Did
- BaseLayout titles now use `The Landscape Archive | Foundation` (home) and `{page} · The Landscape Archive | Foundation` (inner pages), matching the commercial host pattern.

### Why
- Align Foundation tab titles with App / Admin / Developers host suffixes.

### Files touched
- `src/layouts/BaseLayout.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Smoke: open landscapearchive.org and one article; check browser tab.

### Links
- Site: https://landscapearchive.org/
- Deploy: https://a9c67c77.landscapearchive-org.pages.dev (`npm run deploy`, commit `38bec9e`)

---

## 2026-07-09 - Redeploy story pack + faster Share

**Scope:** instagram, story-pack, section-share, deploy, cache-bust
**Status:** done

### Did
- Confirmed **production was stale**: `landscapearchive.org/scripts/section-share-instagram.js` still served the old white-canvas theme (no mint/charcoal); preview `2dac5ad0` had the redesign. Redeployed org Pages so apex gets the new template.
- Clarified download path: **Instagram Story pack (multi)** → ZIP of PNGs (`tla-foundation-story-pack-*.zip`), not a PDF.
- Share speed: open menu paints instantly + warms fonts/mark in background; stop awaiting `document.fonts.ready`; parallel slide renders; progress label (“Slide n/m…”) + visible status; script `?v=20260709b` cache-bust.

### Why
- Prior redesign landed on a preview URL / CF cache HIT on apex (`max-age=14400`), so hard-refresh still showed old frames. Pack generation also blocked on sequential canvas + full font-ready.

### Files touched
- `public/scripts/section-share-instagram.js`
- `public/scripts/section-share.js`
- `src/components/SectionShareLinks.astro`
- `src/layouts/BaseLayout.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Hard-refresh article after deploy; verify cream field + charcoal bars + mint quote (not plain white).

### Links
- Article: https://landscapearchive.org/articles/institutions-standards-and-the-infrastructure-gap
- Verify JS: https://landscapearchive.org/scripts/section-share-instagram.js?v=20260709b (should contain `#bee2cf` / `mint:`)
- Deploy: https://fe2719dd.landscapearchive-org.pages.dev (`npm run deploy`, commit `27bd880`)
- Parity: `la-frontend` commit `39eee8f`

---

## 2026-07-09 - Instagram story pack presentation redesign

**Scope:** instagram, story-pack, foundation-share, branding
**Status:** done

### Did
- Redesigned Foundation Instagram story pack canvas: charcoal header/footer bars, cream field, mint accent rules (aligned with Ad Studio foundation-light + Hub mint).
- Replaced dense bullet slides with **descriptor + highlighted quote** slides; title → quotes → CTA structure (up to 6 frames).
- Footer shows host only (`landscapearchive.org`) — no runaway article paths; cream disc behind mark for charcoal contrast.
- Kept honesty bullet as its own quote slide (“not claimed here as accomplished fact”).

### Why
- Draft pack screenshots were plain white, top-heavy, with truncated long URLs and dense bullets — not presentation-ready for IG Stories.

### Files touched
- `public/scripts/section-share-instagram.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Re-export from article share row after deploy: Field Note → section “How automation flips the model” → Instagram Story pack (multi).

### Links
- Article: https://landscapearchive.org/articles/institutions-standards-and-the-infrastructure-gap
- Deploy: https://2dac5ad0.landscapearchive-org.pages.dev (`npm run deploy`)
- Commit: `e1dcd7c`
- Parity: `la-frontend/federation/portal/share-instagram.js` (`320bb3e`)

---

## 2026-07-09 - Founding alliance outreach summary audit

**Scope:** founding-alliance, adoption, governance, homepage, contact, audit
**Status:** done

### Did
- Reframed founding alliance material as **outreach summary** (third-person institutional voice); removed copy-paste / fifteen-minute / internal-repo framing.
- Synced adoption guide with schema portal quickstart language (`Reference adoption path`, `Cite in one deliverable`, `Procurement reference language`).
- Rewrote homepage About us strategic soliloquy; softened contact and truth-tellers operator phrasing.
- Added governance cross-link to `/adopt#founding-alliance-outreach`.

### Why
- Full public-site audit flagged operator copy and stale adoption language on high-visibility Foundation pages.

### Files touched
- `src/data/foundingAlliancePitch.js`, `src/data/adoptContent.js`, `src/pages/adopt.astro`
- `src/data/governanceContent.js`, `src/data/homeContent.js`, `src/data/contactContent.js`, `src/data/topicPages.js`

### Follow-ups / blockers
- Field Notes essays retain editorial first-person voice by design.
- `/media` and `/events` remain placeholder stubs until working-group material is ready.

---

## 2026-07-09 - Foundation adoption copy — institutional tone

**Scope:** adoption, homepage, registry, governance, schema-portal
**Status:** done

### Did
- Rewrote "get started in 15 minutes" CTAs and adoption guide copy to third-person, institutional Foundation voice.
- Replaced conversational banner ("not joining a revolution") with interim-stewardship notice and clear three-step reference adoption path.
- Synced schema portal quickstart section in `la-frontend/federation/portal/index.html`.

### Why
- Public adoption surfaces sounded like internal notes or first-person soliloquy; Foundation copy should read as established reference infrastructure with explicit steps.

### Files touched
- `src/data/adoptContent.js`, `src/pages/adopt.astro`, `src/pages/index.astro`, `src/pages/registry.astro`
- `src/data/homeContent.js`, `src/data/governanceContent.js`, `src/data/foundingCharterContent.js`
- `src/data/recentPublicUpdates.js`, `src/data/foundingAlliancePitch.js`, `src/data/topicPages.js`
- `../la-frontend/federation/portal/index.html`

### Follow-ups / blockers
- None — deploy via `npm run deploy`.

---

## 2026-07-09 - Foundation interim hosting disclaimer on sign-in

**Scope:** foundation-governance, sign-in, landscapearchive-org
**Status:** done

### Did
- Added interim three-entity hosting notice to `/sign-in` footer (Vault IP holder, Archive interim host, Foundation not yet incorporated).
- Footer and governance pages already carried `FOUNDATION_HOSTING_NOTICE`; sign-in now matches.

### Why
- Gap audit required honest interim disclaimer on all Foundation auth surfaces without implying incorporated status.

### Files touched
- `src/pages/sign-in.astro`

### Follow-ups / blockers
- None — deploy via `npm run deploy`.

---

## 2026-07-08 - Foundation on-site sign-in form

**Scope:** foundation-auth, sign-in, volunteers, landscapearchive-org
**Status:** done

### Did
- Replaced `/sign-in` redirect-only panel with email/password form (sans-serif UI) posting to `POST /api/foundation/org-sign-in` on Landscape Archive; supports two-factor step and social OAuth fallback link.
- Volunteer `#apply` gate now links to `/sign-in?return=/volunteers#apply` instead of Archive org-access redirect.
- Documented handoff contract in `docs/ORG_SIGN_IN_HANDOFF.md`; updated `docs/VOLUNTEER_APPLICATIONS.md`.

### Why
- Member programme access should sign in on the Foundation site while using the same Landscape Archive identity — without exposing implementation detail or storing credentials on `.org`.

### Files touched
- `src/pages/sign-in.astro`
- `src/data/memberAccess.js`
- `src/components/VolunteerApplicationForm.astro`
- `docs/ORG_SIGN_IN_HANDOFF.md`
- `docs/VOLUNTEER_APPLICATIONS.md`

### Follow-ups / blockers
- Deploy **la-frontend** Pages first (org-sign-in API), then `npm run deploy` here.

### Links
- https://landscapearchive.org/sign-in
- `docs/ORG_SIGN_IN_HANDOFF.md`

---

## 2026-07-08 - Volunteer apply copy production deploy

**Scope:** volunteers, deploy, landscapearchive-org
**Status:** done

### Did
- Ran `npm run deploy` — production `/volunteers#apply` was still serving pre-187e365 WordPress/cookie exposition until this deploy (commit was on `main` but Pages had not been updated).

### Why
- Copy fix was merged locally but `.org` uses manual `npm run deploy`, not git-connected auto-publish.

### Files touched
- (deploy only — no source edits)

### Follow-ups / blockers
- None

### Links
- https://landscapearchive.org/volunteers#apply
- Preview: https://fd411463.landscapearchive-org.pages.dev/volunteers

---

## 2026-07-08 - Volunteer apply sign-in copy trim

**Scope:** volunteers, foundation-auth, copy
**Status:** done

### Did
- Shortened volunteer `#apply` sign-in gate and intro lead in `VolunteerApplicationForm.astro` — removed cross-domain cookie/token exposition.

### Why
- Applicants do not need implementation detail about WordPress sessions or handoff tokens; concise account sign-in copy is enough.

### Files touched
- `src/components/VolunteerApplicationForm.astro`

### Follow-ups / blockers
- None

### Links
- https://landscapearchive.org/volunteers#apply

---

## 2026-07-08 - Instagram story export fix + multi-slide pack

**Scope:** section-share, instagram, landscapearchive-org
**Status:** done

### Did
- Fixed story/post canvas layout: measured title/body fit, Instagram safe-zone footer, wrapped URLs, explicit 1080×1920 export canvas (no DPR/CSS bleed).
- Removed export-only hint line that sat below the footer stack and appeared cropped in Story uploads.
- Added **Instagram Story pack (multi)** — ZIP of 2–5 slides (`tla-story-01.png` …) built from section title, bullets/excerpt, and CTA.

### Why
- Long governance headings hit hard line caps and footer content sat in Instagram’s bottom crop zone, making downloads look truncated. Multi-slide ZIP matches manual Story carousel workflow better than a single tall composite.

### Files touched
- `public/scripts/section-share-instagram.js`
- `public/scripts/section-share.js`
- `src/components/SectionShareLinks.astro`

### Follow-ups / blockers
- Verify ZIP unpack + upload order on iPhone Photos → Instagram Stories

### Links
- https://landscapearchive.org/governance

---

## 2026-07-08 - Share mobile overlay z-index fix

**Scope:** section-share, landscapearchive-org, federation-portal
**Status:** done

### Did
- Wrapped portaled backdrop + panel in `.section-share__overlay-root` on `document.body` with `isolation: isolate` and `position: fixed; inset: 0`.
- Mobile (≤720px): overlay `z-index: 2147483646`; desktop overlay stays `1100`; inner backdrop/panel use `1`/`2`.
- Added `body.section-share-open { overflow: hidden }` on mobile sheet open to prevent scroll bleed.

### Why
- Prior fix (1100/1099 on separate body children) still painted behind following `.section-block` headings on narrow viewports — likely competing stacking contexts from `[data-animate-in]` transforms and sticky chrome. Single isolated overlay root with max practical z-index guarantees the sheet covers all page content.

### Files touched
- `public/scripts/section-share.js`
- `src/components/SectionShareLinks.astro`
- `src/styles/global.css`
- la-frontend: `federation/portal/share.js`, `federation/portal/styles.css`

### Follow-ups / blockers
- Verify on physical iPhone/Android at https://landscapearchive.org/governance (390px)

### Links
- https://landscapearchive.org/governance
- https://schema.landscapearchive.org

---

## 2026-07-08 - Share dropdown mobile open/close fix

**Scope:** section-share, landscapearchive-org, federation-portal
**Status:** done

### Did
- Fixed mobile Share menu opening then immediately closing: defer backdrop reveal by two animation frames and guard dismiss for 450ms after open.
- Replaced per-menu `document.click` outside handlers with one capture-phase `pointerdown` listener; backdrop uses guarded `pointerdown` instead of `click`.
- Mobile (≤720px): bottom-sheet panel anchored to viewport bottom with safe-area padding instead of floating dropdown positioning.

### Why
- Prior portal fix showed the full-screen backdrop synchronously inside the trigger `click` handler; iOS/Android retarget the same tap to the backdrop, which closed the menu instantly. Floating dropdown positioning was also unreliable on narrow viewports.

### Files touched
- `public/scripts/section-share.js`
- `src/components/SectionShareLinks.astro`
- la-frontend: `federation/portal/share.js`, `federation/portal/styles.css`

### Follow-ups / blockers
- Verify on physical iPhone/Android after deploy

### Links
- https://landscapearchive.org/governance
- https://schema.landscapearchive.org

---

## 2026-07-08 - Share dropdown z-index + mobile fix

**Scope:** section-share, landscapearchive-org, federation-portal
**Status:** done

### Did
- Portaled open Share panel to `document.body` with `position: fixed` and `z-index: 1100` so menus render above following section headings.
- Added dim backdrop (`z-index: 1099`) for click-outside dismiss; reposition on scroll/resize.
- Mobile: 44px min touch targets on trigger and menu items; `touch-action: manipulation` on tap surfaces.

### Why
- Share rows sit at the bottom of each section; absolutely positioned panels (`z-index: 30` within parent stacking context) painted behind the next section’s DOM (e.g. “Encode claims” heading). Mobile taps hit obscured or clipped panels.

### Files touched
- `src/components/SectionShareLinks.astro`
- `public/scripts/section-share.js`
- la-frontend: `federation/portal/share.js`, `federation/portal/styles.css`

### Follow-ups / blockers
- None

### Links
- https://landscapearchive.org/governance
- https://schema.landscapearchive.org

---

## 2026-07-08 - Share dropdown auto-open + article duplicate

**Scope:** section-share, landscapearchive-org
**Status:** done

### Did
- Fixed Share menus rendering open on page load: scoped `.section-share__panel { display: flex }` overrode `[hidden]`; added explicit `[hidden] { display: none !important }`.
- Hardened `section-share.js` to restore `hidden` after drop-up/drop-down measurement and call `closeMenu()` on init.
- Removed redundant page-level `SectionShareLinks` on article pages (last section already had a share row → overlapping duplicate near footer).

### Why
- Instagram dropdown commit (5761134) introduced panel CSS without a `[hidden]` guard; all 22 governance menus appeared expanded on load. Article template double-injected share beside the final section.

### Files touched
- `src/components/SectionShareLinks.astro`
- `public/scripts/section-share.js`
- `src/pages/articles/[slug].astro`
- la-frontend: `federation/portal/share.js`, `federation/portal/styles.css`

### Follow-ups / blockers
- None

### Links
- Commit `b6c3920` (landscapearchive-org), `37a5802` (la-frontend)

---

## 2026-07-08 - Volunteer applications (auth + structured form)

**Scope:** volunteers, foundation-auth, intake
**Status:** done (deploy la-frontend API first, then org site)

### Did
- Added `#apply` structured volunteer application form on `/volunteers` with Archive sign-in gate (org-access handoff token).
- Wired `POST /api/foundation/volunteer-application` on la-frontend (R2 `foundation-volunteer-applications/`, Foundation mail, copilot triage).
- Extended org-access handoff paths to include `/volunteers`; primary CTA now `#apply` instead of Archive contact prefill.
- Documented cross-domain auth constraints in `docs/VOLUNTEER_APPLICATIONS.md`.

### Why
- Volunteer onboarding needs accountable applications tied to existing WordPress users; `.org` vs `.com.au` cookie isolation requires HMAC handoff, not shared sessions.

### Files touched
- `src/components/VolunteerApplicationForm.astro`
- `src/pages/[topic].astro`
- `src/data/topicPages.js`
- `src/data/memberAccess.js`
- `docs/VOLUNTEER_APPLICATIONS.md`
- la-frontend: `functions/api/foundation/volunteer-application.js`, `functions/_lib/foundationOrgAccess.js`, `functions/_lib/adminCopilotApplications.js`

### Follow-ups / blockers
- Confirm `FOUNDATION_ORG_ACCESS_SECRET` set in production Pages env before go-live.
- Deploy la-frontend before landscapearchive-org.

### Links
- https://landscapearchive.org/volunteers#apply

---

## 2026-07-08 - Homepage recent updates (institutions Field Note)

**Scope:** marketing, field-notes, homepage
**Status:** done

### Did
- Added **Institutions, standards, and the infrastructure gap** to `recentPublicUpdates.js` (newest-first on homepage What's new strip).

### Why
- Published Field Note should surface in the interim public milestones list alongside adoption and governance updates.

### Files touched
- `src/data/recentPublicUpdates.js`

### Links
- https://landscapearchive.org/articles/institutions-standards-and-the-infrastructure-gap

---

## 2026-07-08 - Field Note legal hardening (institutions essay)

**Scope:** field-notes, legal-comms, articles
**Status:** done

### Did
- Legal-hardened `institutions-standards-and-the-infrastructure-gap` in `articles.js` — neutral institutional framing, conditional adoption language, opinion markers, softened market-economics copy, article-level `legalNote`.
- Updated `articles/[slug].astro` to render optional `legalNote` disclaimer footer on Field Notes.

### Why
- Editorial/legal-comms hygiene: avoid implied peak-body endorsement, negative third-party claims, and anti-competitive market language while preserving the essay’s structural argument.

### Files touched
- `src/data/articles.js`
- `src/pages/articles/[slug].astro`

### Links
- https://landscapearchive.org/articles/institutions-standards-and-the-infrastructure-gap

---

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

## 2026-07-08 - Instagram-friendly section share

**Scope:** section-share, instagram, landscapearchive-org
**Status:** done

### Did
- Extended `SectionShareLinks` with **IG story** (1080×1920), **IG post** (1080×1080) card downloads and **Copy caption** (title + short URL + hashtags).
- Added client-side canvas renderer `public/scripts/section-share-instagram.js`; wired from `section-share.js`.

### Why
- Instagram has no reliable web URL scheme for Stories/Posts. Downloadable branded cards plus clipboard caption is the practical manual-upload flow.

### Files touched
- `src/components/SectionShareLinks.astro`
- `public/scripts/section-share.js`
- `public/scripts/section-share-instagram.js`
- `src/layouts/BaseLayout.astro`

### Follow-ups / blockers
- Library / marketing app share buttons still use Web Share API only; extend separately if needed.

### Links
- Verify: https://landscapearchive.org/governance

---


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
