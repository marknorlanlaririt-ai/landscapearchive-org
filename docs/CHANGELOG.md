## 2026-07-23 - Wave 3: Evidence Checker ↔ desktop TLA-EVID cross-link

**Scope:** evidence-checker, docs
**Status:** shipping

### Did
- Wiring doc cross-links desktop `TLA-Evidence` TLA-EVID required-keys + Store
  suite package prep (submit still founder-only). Upload UI remains paused.

### Why
- Marathon Wave 3 docs hygiene after desktop Evidence wiring.

### Links
- Live: https://landscapearchive.org/evidence-checker
- Desktop: `la-desktop/src/profession-apps/TLA.Evidence/MainForm.cs`

---

## 2026-07-23 - Wave 2: Evidence Checker ↔ TLA-EVID wiring + pause honesty

**Scope:** evidence-checker, standards, honesty, docs
**Status:** shipping

### Did
- Evidence Checker script recognises Draft TLA-EVID (`la.archive.audit-pack.v1`)
  with Seal ≠ local-check distinction.
- Paused upload UI copy updated: CC BY-NC-ND KEEP settled; pause is stewardship /
  incorporation. Links to TLA-EVID orbit + golden example + Foundation Approved.
- Wiring doc `docs/EVIDENCE_CHECKER_TLA_EVID_WIRING.md`; governance pause sentence
  aligned.

### Why
- Marathon Wave 2: wire Evidence / TLA-EVID without inventing un-pause or Seal.

### Links
- Commit: `4fde503`
- Pages: https://03ea368b.landscapearchive-org.pages.dev
- Live: https://landscapearchive.org/evidence-checker

---

## 2026-07-23 - Foundation Approved page + deeper Draft orbit enums

**Scope:** governance, standards, seals, honesty
**Status:** done (deployed)

### Did
- Public `/foundation-approved` page: Foundation Approved ≠ Archive Seal ≠ Archive Certified
  (draft posture; no invented criteria product).
- Nav/footer + Seal explainer + governance actions cross-link the split.
- Deepened SYN/EVID/ML required-keys schemas with Hub-aligned enums; validator
  smoke supports `enum` (3/3 golden examples pass).
- Recent updates + TLA-ML orbit page enumerate draft vocabularies.
- Smoke covers `/foundation-approved`.

### Why
- Marathon Phase-1: counsel-ready distinction + deepen Draft orbits without
  flipping CC or opening Seal as an open standard.

### Files touched
- `src/pages/foundation-approved.astro`
- `src/pages/seal-verifier.astro`
- `src/data/site.js`, `governanceContent.js`, `recentPublicUpdates.js`, `standardsOrbits.js`
- `src/components/SiteFooter.astro`
- `public/schemas/orbits/*`, `scripts/validate-orbit-examples.mjs`
- `scripts/smoke-org.mjs`
- `docs/CHANGELOG.md`

### Links
- Commit: `302fb11`
- Pages: https://eaeb05b0.landscapearchive-org.pages.dev
- Live: https://landscapearchive.org/foundation-approved

---

## 2026-07-23 - Orbit required-keys validators (Draft)

**Scope:** standards, orbits, schemas, validate-script, smoke, pages-deploy
**Status:** done (deployed)

### Did
- Added Draft required-keys JSON Schema smokes for TLA-SYN / TLA-EVID / TLA-ML under
  `/schemas/orbits/*.required.schema.json`.
- Zero-dep `npm run validate:orbits` against the three golden examples.
- Linked schemas from `/standards` index + per-orbit golden-example sections.
- Extended `smoke:org` to probe the public schema URLs.

### Why
- Phase-1 constellation follow-up: validators without claiming normative status or opening Seal.

### Files touched
- `public/schemas/orbits/*`
- `scripts/validate-orbit-examples.mjs`
- `scripts/smoke-org.mjs`
- `src/data/standardsOrbits.js`
- `src/pages/standards/index.astro`
- `src/pages/standards/[orbit].astro`
- `public/examples/orbits/README.md`
- `package.json`

### Follow-ups / blockers
- Keep Draft — not normative. Full Ajv / Seal crypto out of scope.
- Founder: CC tick, Foundation legal name, assignment deed.
- Deployed: https://ad058c4e.landscapearchive-org.pages.dev

### Links
- https://landscapearchive.org/standards
- https://landscapearchive.org/schemas/orbits/tla-syn.required.schema.json
- https://landscapearchive.org/schemas/orbits/tla-evid.required.schema.json
- https://landscapearchive.org/schemas/orbits/tla-ml.required.schema.json

---

## 2026-07-23 - Draft orbit HTML (TLA-SYN / TLA-EVID / TLA-ML)

**Scope:** standards, orbits, governance-links, examples, pages-deploy
**Status:** done (deployed)

### Did
- Shipped public Draft — not normative orbit pages under `/standards` for TLA-SYN,
  TLA-EVID, and TLA-ML, with golden JSON examples and honest maturity banners.
- Linked draft orbits from Governance constellation + footer Open standard nav.
- Recent-updates strip entry pointing at `/standards`.

### Why
- Phase-1 constellation roadmap: public HTML stubs marked Draft — not normative,
  without waiting on CC tick or opening Seal.

### Files touched
- `src/data/standardsOrbits.js`
- `src/data/standardsConstellation.js`
- `src/pages/standards/index.astro`
- `src/pages/standards/[orbit].astro`
- `src/components/StandardsConstellationDiagram.astro`
- `src/components/SiteFooter.astro`
- `src/data/recentPublicUpdates.js`
- `public/examples/orbits/*`

### Follow-ups / blockers
- Founder: CC tick, Foundation legal name, assignment deed.
- Do not claim published/normative; Seal stays commercial.
- Deployed: https://fd7ede97.landscapearchive-org.pages.dev

### Links
- https://landscapearchive.org/standards
- https://landscapearchive.org/standards/tla-syn
- https://landscapearchive.org/standards/tla-evid
- https://landscapearchive.org/standards/tla-ml
- https://landscapearchive.org/governance#standards-constellation

---

## 2026-07-23 - Standards constellation (draft orbits)


**Scope:** governance, standards, charter-pillars, recent-updates, pages-deploy
**Status:** done (deployed)

### Did
- Named TLA-185 as published spine with draft orbits TLA-SYN / TLA-EVID / TLA-ML on Governance
  (`standardsConstellation.js` + `StandardsConstellationDiagram.astro`). Honest maturity chips;
  Seal explicitly not opened; deferred regional / cultural / recipe orbits labelled in development.
- Lightly extended charter pillar blurbs + home pillars CTA to constellation without overclaiming.
- Recent updates strip entry for the constellation naming.

### Why
- Founder: pursue standards orbits beyond TLA-185 so the Foundation reads as an institute in its
  own right — orbits, not rival dictionaries.

### Files touched
- `src/data/standardsConstellation.js`
- `src/components/StandardsConstellationDiagram.astro`
- `src/pages/governance.astro`
- `src/pages/index.astro`
- `src/data/charterPillars.js`
- `src/data/recentPublicUpdates.js`

### Follow-ups / blockers
- Private stubs live in strategy + `la-frontend/docs/TLA_*`. Public HTML orbit pages + validators next.
- Founder: CC tick, Foundation legal name, assignment deed.
- Deployed: https://c4164db6.landscapearchive-org.pages.dev

### Links
- https://landscapearchive.org/governance#standards-constellation

---

## 2026-07-17 - Company-page copy tidy (remove amateurish frames)

**Scope:** copy, foundation-org, field-notes, tone-law, pages-deploy
**Status:** done (deployed)

### Did
- Audited company/foundation-facing copy against `professional-copy-tone.mdc` +
  `soft-launch-honesty.mdc`. The `.org` surfaces were already clean; two edits in `src/data/articles.js`
  (Field Notes):
  - Removed the banned dismissive frame "â€¦not as branding wallpaper" (kept the claim per tone law).
  - AU-spelling fix "recognize" â†’ "recognise".
- No other hype, exclamation, emoji-as-icon, or defensive-framing issues found in `.org` data/pages
  (donation-pause status facts and "proposed â€” not yet incorporated" governance labels left intact as
  deliberate soft-launch honesty). Strategy diagrams and sign-off holds untouched.

### Why
- Founder asked to remove amateurish frames from company pages while preserving honest soft-launch
  status facts and the recently shipped strategy diagrams / sign-off holds.

### Files touched
- `src/data/articles.js`

### Follow-ups / blockers
- Deployed: https://bae36b8c.landscapearchive-org.pages.dev (deploy:unsafe / production main; copy tidy + prior strategy diagrams).

### Links
- https://landscapearchive.org/articles/four-things-land-art-technology-data
- https://landscapearchive.org/articles/reading-the-landscape-as-data

---

## 2026-07-17 - Strategy framing proposal + native strategy-deck diagrams

**Scope:** governance, registry, standard-explainer, copy, pages-deploy
**Status:** done

### Did
- Wrote `docs/STRATEGY_FRAMING_PROPOSAL.md`: per-element matrix of the founder's ecosystem
  strategy deck â†’ site (.org / .com.au / internal) + safe/sign-off/internal ruling + how each
  graphic was rebuilt natively. Includes a recommended `.org` framing narrative (standard as
  public good â†’ proposed governance â†’ honest maturity).
- Rebuilt the clean strategy graphics natively (no Tailwind/Chart.js/Inter; existing slate/paper
  tokens only): `StandardDomainsDiagram.astro` (4 metadata domains) + `ExportProfilesDiagram.astro`
  on `/registry`; `GovernanceFirewallDiagram.astro` (three-entity, Foundation node labelled
  "Proposed â€” not yet incorporated") + `StandardMaturityDiagram.astro` (Layer 1 live / 2 early /
  3 not started) on `/governance`. New data: `src/data/standardDomains.js`; export data reused from
  `builtEnvironmentExports.js`.

### Why
- Founder likes the deck's simple HTML/CSS diagrams and asked how to incorporate them on .org/.com.au
  and use the strategy to frame the .org site â€” without publishing pre-incorporation/legal/pricing
  claims as fact.

### Held for founder sign-off (NOT published)
- July 2026 hard launch date; GPL v3 asserted as code licence; "7 voting seats" / appointed Indigenous
  Advisory veto as existing; DPGA certification; GDP-indexed pricing ($50kâ€“$500k / $0 Sovereign Gift);
  "National/Sovereign Gift" narrative; NSW Schoolyard "Country Kit" self-serve CTA (tooling paused).

### Files touched
- `docs/STRATEGY_FRAMING_PROPOSAL.md`
- `src/data/standardDomains.js`
- `src/components/StandardDomainsDiagram.astro`, `ExportProfilesDiagram.astro`,
  `GovernanceFirewallDiagram.astro`, `StandardMaturityDiagram.astro`
- `src/pages/registry.astro`, `src/pages/governance.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional Archive (.com.au) echo of the domains/export explainer in Vue with Archive tokens (do not
  import .org components/datasets; marketing host only).
- Build passes (`npm run build`, 31 pages). `astro check` skipped (would require installing
  `@astrojs/check`). No git commit (not requested).

### Links
- https://landscapearchive.org/registry
- https://landscapearchive.org/governance

---

## 2026-07-16 - Pause Foundation donation / voluntary contribution intake

**Scope:** support, funding, copy, pages-deploy
**Status:** done

### Did
- Took down public bank-transfer / donation intake on `/support`, home Support section, purpose Funding, contact, footer, and related CTAs.
- Calm status copy: due to incorporation status (Foundation not yet an independent incorporated entity), contribution intake is paused; open-spec reference remains free under CC BY-NC-ND.
- Bank facts kept in `support.js` for ops only â€” not rendered. Deployed org.

### Why
- Founder asked to remove the donation surface until incorporation is clear.

### Files touched
- `src/pages/support.astro`, `src/data/homeContent.js`, `purposeContent.js`, `contactContent.js`, `support.js`, `articles.js`, `governanceContent.js`, `topicPages.js`, `SiteFooter.astro`, `docs/CHANGELOG.md`

### Follow-ups / blockers
- Institutional licensing roadmap is counsel + product planning only (no code this slice).

### Links
- https://landscapearchive.org/support

---

## 2026-07-16 - Licence sequence: pause tools + Licence & scope

**Scope:** licence, foundation-tools, adopt, governance, pages-deploy
**Status:** done

### Did
- Froze self-serve Foundation tools (Evidence Checker upload UI, validator â€œtry itâ€ CTAs) with calm paused / draft notices; kept dictionary / registry / crosswalks / charter as draft reference.
- Added quiet `/licence` Licence & scope page (CC BY-NC-ND 4.0 public spec; Vault copyright; Archive commercial products separate; no dual-licence campaign).
- Updated nav, footer, home, adopt, practice, governance, downloads, Field Notes gates, and before/after example nav for licence honesty.
- Decision recorded in `foundationWing.js`: public spec stays CC BY-NC-ND 4.0. Deployed org. No commit.

### Why
- Founder six-step licence sequence while counsel is instructed: do not advertise production-ready tooling or imply Library/Hub/API are Creative Commons.

### Files touched
- `src/pages/licence.astro`, `evidence-checker.astro`, `downloads.astro`, `index.astro`, â€¦
- `src/data/foundationDownloads.js`, `licenceScopeContent.js`, `adoptContent.js`, `topicPages.js`, `homeContent.js`, `governanceContent.js`, `foundationWing.js`, `site.js`
- `src/components/SiteFooter.astro`, `LicenceNotice.astro`, `FieldNotesMemberBody.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Un-pause tools after counsel clears (`FOUNDATION_SELF_SERVE_TOOLS_PAUSED` in `foundationDownloads.js`).
- Counsel docs live in sibling `la-frontend/docs/LICENCE_*`.

### Links
- https://landscapearchive.org/licence
- https://landscapearchive.org/evidence-checker

---

## 2026-07-16 - Awards page: remove idea/sketch chrome

**Scope:** foundation-awards, copy, pages-deploy
**Status:** done

### Did
- Removed Awards status banner and intro lead chrome (`hideLead`).
- Rewrote Scope/evaluative purpose and related awards copy in calm present voice â€” no idea/sketch/hypothetical framing; stripped all `draft emphasis:` prefixes.
- Deleted the data-architecture line about the draft evaluative idea referencing the field registry.
- Softened Field Notes awards CTA label; mirrored twin to la-frontend; deployed org (`deploy:unsafe` after smoke GET / flake + wrangler timeout retry).

### Why
- Founder: awards should read as professional programme copy, not a consultation sketch banner.

### Files touched
- `src/data/foundationAwardsProgramme.js`
- `src/pages/[topic].astro`
- `src/data/articles.js`
- (sibling) `la-frontend/src/content/foundationAwardsProgramme.js`, `FoundationTopicPage.vue`

### Follow-ups / blockers
- None.

### Links
- https://landscapearchive.org/awards
- https://eb20ad43.landscapearchive-org.pages.dev/awards

---


## 2026-07-16 - Awards page: idea/consultation posture

**Scope:** foundation-awards, copy, pages-deploy
**Status:** done

### Did
- Rewrote `/awards` as a draft idea for consultation: no launch years/dates, no â€œWhen activeâ€, no `!` in public awards copy.
- Removed Archival stewardship section; softened Scope/evaluative purpose + streams + criteria + governance CTAs.
- Softened Field Notes awards cross-link in `articles.js`. Mirrored `foundationAwardsProgramme.js` to la-frontend content twin.
- Deployed org (preview `f6c817e7`). No commit. No Flux.

### Why
- Founder: awards must read as exploration/feedback sketch, not a locked programme with countdown dates.

### Files touched
- `src/data/foundationAwardsProgramme.js`
- `src/data/articles.js`
- (sibling) `la-frontend/src/content/foundationAwardsProgramme.js`

### Follow-ups / blockers
- None for this copy slice.

### Links
- https://landscapearchive.org/awards
- https://f6c817e7.landscapearchive-org.pages.dev/awards

---

## 2026-07-16 - Org Pages deploy (undeployed tree)

**Scope:** pages-deploy, foundation
**Status:** done

### Did
- Gated `npm run deploy` blocked on network `fetch failed` for GET `/` (+ related). Built + `deploy:unsafe`; first wrangler upload timed out; retry succeeded.
- Preview `ce722436`; production `landscapearchive.org`. Ships local Foundation copy/rule/pages work in tree. No commit.

### Why
- Founder deploy ask for Foundation current state.

### Files touched
- (deploy only; tree already dirty)

### Follow-ups / blockers
- Smoke network flakes on prod GET `/` ï¿½ recheck when CF connectivity steadier.

### Links
- https://ce722436.landscapearchive-org.pages.dev
- https://landscapearchive.org/
## 2026-07-16 - Gate Field Notes full text behind sign-in

**Scope:** field-notes, foundation-auth, pages-deploy
**Status:** done

### Did
- Mapped public vs gated Foundation surfaces; left dictionary / validator / Evidence Checker / open packs / charter / awards public (CC BY-NC-ND open-reference posture).
- Implemented Field Notes previewâ†’sign-in: guests get title, dek, short excerpt + Sign in CTA; signed-in members load full essay + Next Steps client-side (no full-body SSR for anonymous HTML).
- Allowed `/articles` and `/articles/:slug` as Foundation session handoff paths (org `memberAccess.js` + Archive `foundationOrgAccess.js`) so return-to-essay works after `/sign-in`.
- Public `/field-notes.json` now ships preview-only (v2) with a single Preview section for Ad Studio.
- Soft dictionary link on the gate (grammar stays public). Smoke check `field-notes-preview-gate` added.
- Deployed org Pages (`3fc4a33f`). Archive handoff twin (`3a116110`). Preview-gate smoke green on live. No Hub download flags. No Flux. No commit.

### Why
- Founder asked to gate Field Notes / instructional depth that â€œgives things away,â€ while preserving an open-standard credibility story. Gating the dictionary would contradict the free-grammar posture and look like a standards paywall â€” left public pending any explicit reverse decision.

### Files touched
- `src/pages/articles/[slug].astro`, `articles.astro`, `field-notes.json.js`, `sign-in.astro`
- `src/components/FieldNotesMemberBody.astro`
- `src/data/articles.js`, `memberAccess.js`
- `scripts/smoke-org.mjs`, `docs/ORG_SIGN_IN_HANDOFF.md`, `docs/CHANGELOG.md`
- Archive twin: `la-frontend/functions/_lib/foundationOrgAccess.js`, `src/config/foundationOrgAccess.js`

### Follow-ups / blockers
- Honest ceiling: full essay still lives in a signed-in-loaded JS chunk (`/_astro/articles.*.js`), not in article HTML â€” not DRM.
- Optional later: gate Adopt deep instructional packs only if founder still wants; leave grammar public.

### Links
- https://landscapearchive.org/articles
- https://landscapearchive.org/articles/four-things-land-art-technology-data
- https://3fc4a33f.landscapearchive-org.pages.dev
- https://schema.landscapearchive.org/dictionary

---


### Did
- Rewrote shared `FIELD_NOTES_NEXT_STEPS` (all 6 published Field Notes) to understated factual pointers: lead with Studio Pilot Kit, quiet Archive for-studios link, Contact â€” no sales opener or membership/pathway pitch.
- Deployed org Pages (`a8abae83`). Smoke 12/12. No Hub download flags. No Flux. No commit. Did not touch recent-updates (membership card already dropped).

### Why
- Founder feedback: Next Steps read as commercial soft-sell; keep the section and apex/studio links but editorial, not promo.

### Files touched
- `src/data/articles.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None for org; apex sibling membership-card mirror can land independently.

### Links
- https://landscapearchive.org/articles
- https://landscapearchive.org/adopt#studio-pilot
- https://landscapearchive.com.au/for-studios

---

## 2026-07-16 - Drop Archive public membership Whatâ€™s new card

**Scope:** recent-updates, pages-deploy
**Status:** done

### Did
- Removed â€œArchive public membership openâ€ (2026-07-29) from `src/data/recentPublicUpdates.js`.
- Deployed org Pages (`231311a4`) so live `/recent-updates.json` no longer lists it (15 items; card absent). No Hub download flags. No Flux. No commit.

### Why
- Founder ask: pull that self-serve membership / Hub waitlist / Store card from public Whatâ€™s new.

### Files touched
- `src/data/recentPublicUpdates.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Sibling apex fallback removed and Pages redeployed (`462b1700`).

### Links
- https://landscapearchive.org/recent-updates.json

---

## 2026-07-16 - Public tone: defensiveness, passive-aggression, and sarcasm cut

**Scope:** awards, field-notes, adopt, industry-practice, governance, marketing-copy, pages-deploy
**Status:** done

### Did
- Cut defensive, passive-aggressive, and sarcastic public copy (soft-launch morality plays, wry digs at institutes/vendors/Hub, smart-arse Field Notes asides).
- Awards: dominant DRAFT FRAMEWORK banner; streams Aâ€“D (no Distinguished Practitioner); future tense; consultation CTAs.
- Field Notes: shared **Next Steps** on all 6 published articles â†’ `https://landscapearchive.com.au/for-studios`.
- Deployed Pages (`61f80262`, production custom domain). Smoke home GET flaked from agent network â†’ `SKIP_ORG_SMOKES=1` used once after 10/11 secondary checks passed. No Hub download flags. No Flux. No commit.

### Why
- Founder ask: calm professional confidence â€” status facts without attitude, eye-rolls, or â€œweâ€™re smarter than the field.â€

### Files touched
- `src/data/{foundationAwardsProgramme,articles,adoptContent,topicPages,governanceContent,recentPublicUpdates,foundationWing,homeContent,purposeContent}.js`
- `src/pages/[topic].astro`, `articles/[slug].astro`, `field-notes.json.js`, `propose-term.astro`, `directors/apply.astro`, `founding-charter.astro`
- `src/components/{DirectorApplicationForm,DraftConsultationForm,TermProposalForm,VolunteerApplicationForm}.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional: regenerate Awards Instagram carousel (DP removed from programme data).
- Sibling apex deploy: Contact prefills + awards SPA + recent-updates fallback.

### Links
- https://landscapearchive.org/awards
- https://landscapearchive.org/articles
- https://landscapearchive.com.au/for-studios

---

## 2026-07-16 - Professional copy rewrite (defensiveness cut + Awards streams + Field Notes Next Steps)

**Scope:** awards, field-notes, adopt, industry-practice, governance, marketing-copy, pages-deploy
**Status:** done

### Did
- Cut defensive â€œwe are not Xâ€ walls across public Foundation surfaces (Adopt, Industry & practice, governance CTAs, Field Notes openings, recent-updates blurbs, draft-consultation / director forms) while keeping clear status on incorporation and draft programmes.
- Awards: dominant draft-status banner; collapsed categories into 4 streams (Aâ€“D) with future-tense rubrics; removed Distinguished Practitioner; consultation CTA (feedback, not entries).
- Field Notes: shared **Next Steps** on all 6 published articles linking apex `https://landscapearchive.com.au/for-studios` (+ Studio Pilot Kit + Archive contact).
- Deployed Pages when ready. No Hub download flags flipped. No Flux. No commit.

### Why
- Founder ask: calm professional confidence instead of repeated disclaimer energy; awards structure exactly as specified; every Field Note should hand off to the apex studio pathway.

### Files touched
- `src/data/foundationAwardsProgramme.js`, `articles.js`, `adoptContent.js`, `topicPages.js`, `governanceContent.js`, `recentPublicUpdates.js`, `foundationWing.js`
- `src/pages/[topic].astro`, `articles/[slug].astro`, `field-notes.json.js`, `founding-charter.astro`
- `src/components/DirectorApplicationForm.astro`, `DraftConsultationForm.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional: regenerate Awards Instagram carousel assets (category slide count changed; Distinguished Practitioner removed from programme data).
- Apex mirror: `la-frontend` Contact prefills + awards SPA + recent-updates fallback updated in sibling deploy.

### Links
- https://landscapearchive.org/awards
- https://landscapearchive.org/articles
- https://landscapearchive.com.au/for-studios

---

**Scope:** links, media, adopt, recent-updates, pages-deploy
**Status:** done

### Did
- Added `/examples/before-after-conformance/index.html` so directory links resolve
  (was README-only â†’ likely 404).
- Adopt â€œcapability grantâ€ CTA â†’ public schema dictionary (was auth-walled
  Archive `/foundation/capability-grant`).
- Hid `/media` (and events) from public nav + sitemap until press kit ships;
  Contact press route â†’ Archive form + How to cite.
- Rewrote 29 Jul Whatâ€™s new blurb (removed Authenticode ops leak).

### Why
- Founder ask: ensure .org links work; placeholders were leaking into nav.

### Files touched
- `public/examples/before-after-conformance/index.html`
- `src/data/{adoptContent,site,contactContent,recentPublicUpdates}.js`
- `src/components/{SiteHeader,SiteFooter}.astro`
- `astro.config.mjs`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Ship thin Media kit or keep /media orphaned until ready
- Live-check schema portal deep links before launch week

### Links
- https://landscapearchive.org/examples/before-after-conformance/
- https://landscapearchive.org/adopt

---

**Scope:** studio-pilot, industry-practice, soft-launch, pages-deploy
**Status:** done

### Did
- Added `/adopt#studio-pilot-outreach`: 3â€“5 cohort tracker + invite email (open reference only; no Hub/Vault pitch).
- Linked from industry-practice learning modules + studios section; recent-updates row; smoke checks outreach anchor.
- Soft-launch honesty retained. Deployed with Pages when ready. No commit. No Flux.

### Why
- Industry tools roadmap I-1 â€” measurable studio outreach without new product surface.

### Files touched
- `src/data/adoptContent.js`
- `src/data/topicPages.js`
- `src/data/recentPublicUpdates.js`
- `scripts/smoke-org.mjs`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Founder fills named studios and sends invites.
- Optional apex recent-updates sync after deploy.

### Links
- Live: https://landscapearchive.org/adopt#studio-pilot-outreach

---
## 2026-07-13 - RFQ checklist (Industry & practice I-2)

**Scope:** industry-practice, adopt, soft-launch, pages-deploy
**Status:** done

### Did
- Added `/industry-practice#rfq-checklist`: printable procurement / RFQ one-pager (copy-paste) pairing Evidence Checker + validator + published procurement sentence.
- Linked from practice path, learning modules, Studio Pilot Kit; recent-updates row; smoke looks for RFQ checklist.
- Soft-launch honesty retained (interim Foundation, not ISO / accreditation). Deployed Pages. No commit. No Flux.

### Why
- Industry tools roadmap I-2 thin slice â€” Evidence Checker â†’ procurement one-pager without new product surface.

### Files touched
- `src/data/topicPages.js`
- `src/data/adoptContent.js`
- `src/data/recentPublicUpdates.js`
- `scripts/smoke-org.mjs`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional apex recent-updates sync after deploy.

### Links
- Live: https://landscapearchive.org/industry-practice#rfq-checklist
- Studio Pilot: https://landscapearchive.org/adopt#studio-pilot

---
## 2026-07-13 - Practice copy: remove snark, academic tone

**Scope:** industry-practice, adopt, soft-launch, pages-deploy
**Status:** done

### Did
- Rewrote `/industry-practice` (Practice nav) copy to Foundation academic tone: removed â€œlogo on a slide deckâ€, product-tour / essay-list digs, and stacked sales-negation phrasing.
- Matched adoption-ladder + Studio Pilot Kit lines on `/adopt`; calmed practice founding-outreach email subject.
- Soft-launch honesty retained (interim Foundation, not ISO, empty modules OK, dictionary free). Deployed Pages. No commit. No Flux.

### Why
- Founder ask: Practice section must read as precise, citeable Foundation prose â€” no passive-aggressive vendor or consultancy dunks.

### Files touched
- `src/data/topicPages.js`
- `src/data/adoptContent.js`
- `src/data/foundingAlliancePitch.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None for this copy pass.

### Links
- Live: https://landscapearchive.org/industry-practice
- Adopt ladder: https://landscapearchive.org/adopt#adoption-ladder
- Deploy preview: https://5f6e3f67.landscapearchive-org.pages.dev/industry-practice

---

**Scope:** industry-practice, education, soft-launch, pages-deploy
**Status:** done

### Did
- Added `/industry-practice#in-plain-language`: scannable plain-language blocks for dictionary, terms, schema pack, Evidence Checker/validator, free grammar vs paid fill, and next steps.
- Linked from practice path, Studio Pilot Kit, registry quickstart, org homepage Specification, footer, and recent updates.
- Soft-launch honesty preserved (interim Foundation, not ISO; empty modules OK; no invented keys). Deployed Pages. No commit. No Flux.

### Why
- Founder YES: user-friendly explainer for LAs / students / procurement â€” Foundation education path, not apex Hub dump; public copy says â€œplain languageâ€, not â€œdumbed downâ€.

### Files touched
- `src/data/topicPages.js`
- `src/data/adoptContent.js`
- `src/pages/registry.astro`
- `src/components/SiteFooter.astro`
- `src/data/homeContent.js`
- `src/data/recentPublicUpdates.js`
- `scripts/smoke-org.mjs`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/CHANGELOG.md`
- Paired: `la-frontend/federation/portal/dictionary.html` (portal notice + CTA)

### Follow-ups / blockers
- Schema portal deploy picks up dictionary.html notice.
- Apex already deep-links Industry & practice; optional dedicated â€œplain languageâ€ footer link later.

### Links
- Live: https://landscapearchive.org/industry-practice#in-plain-language
- Studio Pilot: https://landscapearchive.org/adopt#studio-pilot
- Dictionary: https://schema.landscapearchive.org/dictionary

---

## 2026-07-13 - Dictionary term proposals (Foundation form)

**Scope:** propose-term, dictionary, soft-launch, pages-deploy
**Status:** done

### Did
- Added `/propose-term` with structured TermProposalForm (change type, term key/id, rationale, evidence URLs).
- Linked from contact routes, footer, and recent public updates; soft-launch honesty (steward review, no auto-merge, no GitHub required).
- Paired with la-frontend `POST /api/foundation/term-proposal` + schema portal CTA rewiring.

### Why
- GitHub Issues path remains blocked; practitioners need a Foundation-native proposal channel.

### Files touched
- `src/pages/propose-term.astro`
- `src/components/TermProposalForm.astro`
- `src/data/contactContent.js`, `foundationWing.js`, `memberAccess.js`, `recentPublicUpdates.js`
- `src/components/SiteFooter.astro`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Deploy with paired la-frontend Pages (API) + federation schema portal.
- Optional Turnstile when secrets ready.

### Links
- https://landscapearchive.org/propose-term
- https://schema.landscapearchive.org/dictionary

---

### Did
- Expanded `/industry-practice` into education path: dictionary â†’ Studio Pilot â†’ Evidence Checker â†’ draft consultation; free grammar / paid fill honesty; three thin learning modules.
- Dictionary gravity: homepage Specification + Commercial actions, footer Open field dictionary, Studio Pilot citation loop + copy-paste brief.
- Recent updates title refreshed; smoke + FOUR_DEPLOYMENTS criteria tightened.
- Deployed Pages. No commit. No Flux.

### Why
- Founder YES on Top 5 from landscape-data future-options memo; Foundation owns public grammar/education.

### Files touched
- `src/data/topicPages.js`
- `src/data/homeContent.js`
- `src/data/adoptContent.js`
- `src/data/recentPublicUpdates.js`
- `src/components/SiteFooter.astro`
- `scripts/smoke-org.mjs`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Apex mirror: sibling la-frontend sync recent-updates after apex deploy if needed.

### Links
- Live: https://landscapearchive.org/industry-practice
- Studio Pilot: https://landscapearchive.org/adopt#studio-pilot
- Dictionary: https://schema.landscapearchive.org/dictionary

---

## 2026-07-13 - Industry & practice brief

**Scope:** industry-practice, education, soft-launch, pages-deploy
**Status:** done

### Did
- Shipped `/industry-practice` topic page (nav label **Practice**): education-adjacent brief for studios/universities linking Studio Pilot Kit, Adopt, field registry, Evidence Checker, schema validator.
- Soft-launch honesty: interim Foundation, no accreditation/ISO claims, no Hub ops / Workbench / pricing / installer language.
- Wired footer Open standard link, homepage Specification actions, Recent updates row; extended `smoke:org` + FOUR_DEPLOYMENTS checklist.
- Deployed Pages (`SKIP_ORG_SMOKES=1` for chicken-egg new feed title; post-deploy smoke **11/11**). No commit. No Flux.

### Why
- Founder asked for Education on org; thin practice landing advances Studio Pilot distribution without overbuilding courses or leaking product ops.

### Files touched
- `src/data/topicPages.js`
- `src/data/site.js`
- `src/data/homeContent.js`
- `src/data/recentPublicUpdates.js`
- `src/components/SiteFooter.astro`
- `scripts/smoke-org.mjs`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Founder memo lives in sibling `la-frontend/docs/LANDSCAPE_DATA_FUTURE_OPTIONS.md`.

### Links
- Live: https://landscapearchive.org/industry-practice
- Deploy: https://02c109c6.landscapearchive-org.pages.dev/industry-practice
- Studio Pilot: https://landscapearchive.org/adopt#studio-pilot

---

## 2026-07-13 - Soft-launch smoke:org (pre-deploy)

**Scope:** smoke, soft-launch, ops
**Status:** done

### Did
- Added `npm run smoke:org` HTTP checks: home, `/adopt` Studio Pilot Kit, withdrawn Field Notes 301â†’/articles, `/recent-updates.json`, Evidence Checker, soft-launch honesty scan (no Hub ops / DocuSign / Workbench leaks).
- Gated `npm run deploy` via `scripts/deploy-org-gated.mjs` (escape: `SKIP_ORG_SMOKES=1` or `deploy:unsafe`).
- Updated `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`. Ran smoke **9/9**. No Pages deploy (scripts/docs only). No commit. No Flux.

### Why
- Soft-launch audit quick win: cheap pre-deploy probe for Foundation org without founder secrets.

### Files touched
- `scripts/smoke-org.mjs`
- `scripts/deploy-org-gated.mjs`
- `package.json`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None.

### Links
- Live smoke base: https://landscapearchive.org/

---

## 2026-07-13 - Studio Pilot Kit on /adopt

**Scope:** adopt, studio-pilot, recent-updates, pages-deploy
**Status:** done

### Did
- Shipped Studio Pilot Kit as `/adopt#studio-pilot` (not a separate `/practice/` route â€” Adopt already owns procurement + validator path).
- Copy-paste studio brief + three core links (schema portal validator, Evidence Checker, procurement sentence); gaps â†’ draft consultation; optional before/after fixtures pointer.
- Soft-launch honesty: interim Foundation, open reference only, empty modules OK, no Hub/Vault/Workbench marketing.
- Wired discoverability: adopt intro CTA + TOC, footer Open standard link, downloads index entry, Recent updates one-liner.
- Deployed landscapearchive-org Pages. No commit. No Flux.

### Why
- Founder YES to Studio Pilot Kit from soft-launch advisory â€” practice-facing handout without inventing registry keys or republishing withdrawn Field Notes.

### Files touched
- `src/data/adoptContent.js`
- `src/components/DocsSection.astro`
- `src/pages/adopt.astro`
- `src/components/SiteFooter.astro`
- `src/data/foundationDownloads.js`
- `src/data/recentPublicUpdates.js`
- `public/examples/before-after-conformance/README.md`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Apex recent-updates mirror picks up Studio Pilot Kit row via `/recent-updates.json` on next fetch.

### Links
- Live: https://landscapearchive.org/adopt#studio-pilot
- Deploy: https://df6fd844.landscapearchive-org.pages.dev/adopt#studio-pilot

---

## 2026-07-13 - Withdraw two latest Field Notes

**Scope:** field-notes, recent-updates, pages-deploy
**Status:** done

### Did
- Removed published Field Notes *Before and after: a sanitised conformance case study* and *Messy landscape metadata and sustainability reporting appendix risk* from `articles.js`.
- Dropped matching homepage Recent updates rows; LinkedIn marketing copy now points at IFRS/AASB crosswalks only.
- 301 redirects from withdrawn slugs â†’ `/articles`; updated soft-launch smoke checklist.
- Deployed landscapearchive-org Pages.

### Why
- Founder asked to remove the two latest Field Notes from landscapearchive.org.

### Files touched
- `src/data/articles.js`
- `src/data/recentPublicUpdates.js`
- `docs/marketing/IFRS_S2_COMPLIANCE_PAIN_LINKEDIN.md`
- `public/docs/marketing/IFRS_S2_COMPLIANCE_PAIN_LINKEDIN.md`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `public/_redirects`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Example artefacts under `public/examples/before-after-conformance/` left in place (not linked from Field Notes index).
- Apex recent-updates mirror refreshes from org `/recent-updates.json` on next fetch.

### Links
- Deploy: https://4a3ecb6d.landscapearchive-org.pages.dev
- https://landscapearchive.org/articles

---


**Scope:** field-notes, governance, volunteers, crosswalks, outreach, pages-deploy
**Status:** done

### Did
- Draft consultation Trojan Horse: outreach scripts (`docs/outreach/DRAFT_CONSULTATION_OUTREACH.md`), governance `#draft-consultation` + awards CTA, on-site review-pack form on `/contact`, Evidence Checker / registry / shared-vocabulary links; founding-alliance seats framed as aspirational only.
- Before/after conformance Field Note + sanitised messy excerpt + sample open TLA-185 JSON under `/examples/before-after-conformance/`.
- Curated Technical reviewers / Registry contributors intake on `/volunteers` (tracks + skills); truth-tellers + footer wiring; VOLUNTEER_APPLICATIONS docs where submissions land (R2 + admin mail).
- IFRS S2 / AASB sustainability-appendix Field Note + LinkedIn-ready markdown; public AASB S2 crosswalk page at `/crosswalk/aasb-s2` (mirrored markdown).
- Recent updates strip + smoke checklist `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`. No commit. No Flux.

### Why
- Founder YES on all four operator moves from the soft-launch strategy brief: market outcomes + critique invites without leaking Hub/Vault/Workbench/DocuSign/pricing/pipeline internals.

### Files touched
- `docs/outreach/DRAFT_CONSULTATION_OUTREACH.md`
- `docs/marketing/IFRS_S2_COMPLIANCE_PAIN_LINKEDIN.md`
- `docs/ops/FOUR_DEPLOYMENTS_SMOKE.md`
- `docs/VOLUNTEER_APPLICATIONS.md`
- `docs/CHANGELOG.md`
- `src/data/articles.js`, `governanceContent.js`, `topicPages.js`, `contactContent.js`, `recentPublicUpdates.js`, `foundationAwardsProgramme.js`, `foundationDownloads.js`, `adoptContent.js`
- `src/components/DraftConsultationForm.astro`, `VolunteerApplicationForm.astro`, `SiteFooter.astro`
- `src/pages/contact.astro`, `crosswalk/aasb-s2.astro`
- `public/crosswalk/aasb-s2-tla185-mapping.md`
- `public/examples/before-after-conformance/*`
- `public/docs/marketing/IFRS_S2_COMPLIANCE_PAIN_LINKEDIN.md`

### Follow-ups / blockers
- Founder: fill outreach checklist with real contacts and send emails.
- Requires paired **la-frontend** Pages deploy for contact enquiry type + volunteer track/skills API.
- Partner Center / Vault PHP re-upload remain separate tracks.

### Links
- Deploy: https://018a7f82.landscapearchive-org.pages.dev
- https://landscapearchive.org/governance#draft-consultation
- https://landscapearchive.org/contact#draft-consultation
- https://landscapearchive.org/articles/before-after-conformance-case-study
- https://landscapearchive.org/volunteers#technical-reviewers
- https://landscapearchive.org/articles/messy-metadata-sustainability-appendix-risk
- https://landscapearchive.org/crosswalk/aasb-s2

---

**Scope:** field-notes, copy, pages-deploy
**Status:** done

### Did
- Renamed essay title from *A shared vocabulary for a fragmented profession* â†’ *A shared vocabulary for the profession* (card/H1 source in `articles.js`).
- Essay body and dek left unchanged (dek already avoided â€œfragmentedâ€).
- Deployed `landscapearchive-org` **`7ccd775d`**. No commit. No la-frontend mirror of this title.

### Why
- Follow-up to dropping the Field Notes index fragmentation teaser: surface chrome should not still lead with â€œfragmented.â€

### Files touched
- `src/data/articles.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None.

### Links
- Deploy: https://7ccd775d.landscapearchive-org.pages.dev
- Live: https://landscapearchive.org/articles/a-shared-vocabulary
- Index: https://landscapearchive.org/articles

---

## 2026-07-12 - Field Notes index: drop fragmentation teaser

**Scope:** field-notes, copy, pages-deploy
**Status:** done

### Did
- Removed Field Notes index lead blurb that framed the profession as â€œfragmentedâ€ (redundant with H1 + essay deks).
- Left Field Notes article bodies and titles untouched (including *A shared vocabulary for a fragmented profession*).
- Deployed `landscapearchive-org` **`f22dc5ad`**. No commit.

### Why
- Soft-launch institutional tone: avoid marketing â€œfragmentationâ€ framing on the index teaser; essay titles stay as published editorial.

### Files touched
- `src/pages/articles.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None.

### Links
- Deploy: https://f22dc5ad.landscapearchive-org.pages.dev
- Live: https://landscapearchive.org/articles

---

## 2026-07-12 - Foundation site: institutional copy + motion cut

**Scope:** foundation-chrome, copy, pages-deploy
**Status:** done

### Did
- Disabled pixel mosaic chrome and portal entrance animations site-wide (solid header/footer; no ambient waves).
- Tightened public copy on home, governance, purpose, charter, awards, contact, support, truth-tellers; removed promo eyebrows / hero stats / â€œFive standards, one argumentâ€ framing.
- Shortened draft banner; Field Notes / articles untouched.
- Deployed `landscapearchive-org` **`d7e141b1`**. No commit.

### Why
- Soft-launch posture: fewer words, less marketing motion, more secure-institution tone without changing Field Notes editorial.

### Files touched
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`, `governance.astro`, `contact.astro`, `founding-charter.astro`, `support.astro`, `[topic].astro`
- `src/data/homeContent.js`, `governanceContent.js`, `purposeContent.js`, `contactContent.js`, `foundingCharterContent.js`, `foundationAwardsProgramme.js`, `topicPages.js`, `site.js`, `foundationWing.js`
- `src/components/RecentUpdatesStrip.astro`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional: further trim awards category `webBody` paragraphs if still long in carousel export.
- Mirror draft-banner string already synced in `la-frontend/src/config/foundationWing.js` (needs separate frontend deploy if banner surfaces there).

### Links
- Deploy: https://d7e141b1.landscapearchive-org.pages.dev
- Live: https://landscapearchive.org/

---

## 2026-07-12 - Private /vault gate â†’ vault.landscapearchive.org

**Scope:** vault-privacy, redirects, pages-deploy
**Status:** done

### Did
- Added noindex `/vault` Astro redirect + `public/_redirects` for `/vault` and `/vault/*` â†’ `https://vault.landscapearchive.org` (Access-gated SPA on `m-laririt-m`).
- robots.txt Disallow `/vault`; `_headers` noindex + no-referrer; sitemap filter excludes `/vault`.
- README notes Vault is not Foundation marketing and must not appear in public nav (`SITE_NAV_LINKS` unchanged â€” no Vault link).
- Deployed `landscapearchive-org` **`902ff8fb`**. No commit.

### Why
- Soft-launch privacy: Foundation apex must not advertise Vault; path fallback exists for bookmarks only.

### Files touched
- `src/pages/vault.astro`
- `public/_redirects`, `public/robots.txt`, `public/_headers`
- `astro.config.mjs`, `README.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Founder still needs DNS CNAME + Access on `vault.landscapearchive.org` (see `../la-frontend/docs/VAULT_CLOUDFLARE_TUNNEL.md`).

### Links
- Deploy: https://902ff8fb.landscapearchive-org.pages.dev
- Gate: https://landscapearchive.org/vault

---


**Scope:** foundation-docs, w3id
**Status:** done

### Did
- Documented permanent-ID namespace `https://w3id.org/tlaf/` in `docs/FOUNDATION_CHARTER_AND_AWARDS.md` (scheme root `â€¦/tlaf/185`); note that `/tla/` is Total Learning Architecture, not Foundation.

### Why
- Align Foundation charter brief with the dedicated `/tlaf/` w3id registration after #6338 rejection.

### Files touched
- `docs/FOUNDATION_CHARTER_AND_AWARDS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None on this site until w3id PR merges (IDs already documented as pending).

### Links
- Closed: https://github.com/perma-id/w3id.org/pull/6338 (superseded)
- New: https://github.com/perma-id/w3id.org/pull/6348

---

## 2026-07-11 - Recent updates dates + four-things Field Note

**Scope:** recent-updates, field-notes, cultural-pillars, deploy
**Status:** done

### Did
- Backfilled ISO dates on `recentPublicUpdates.js` (day-level from changelog context); UI shows casual short form via `formatShortDate` (e.g. 11 Jul 2026); softened date typography (no uppercase tracking).
- Published Field Note **Four things: land, art, technology, data** at `/articles/four-things-land-art-technology-data`; linked lightly to `/governance#cultural-pillars`.
- Added the essay as the newest homepage / feed update (2026-07-11).

### Why
- Month-only â€œJuly 2026â€ labels were too coarse; day dates make the Whatâ€™s new strip scannable. Pillars needed a short reflective public home beyond the governance table.

### Files touched
- `src/data/recentPublicUpdates.js`
- `src/data/articles.js`
- `src/components/RecentUpdatesStrip.astro`
- `docs/marketing/FOUNDATION_PUBLIC_UPDATE_POSTS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Apex fallback + date formatter redeployed separately on `m-laririt-m` (live mirror still via `/recent-updates.json`).

### Links
- https://landscapearchive.org/articles/four-things-land-art-technology-data
- https://landscapearchive.org/recent-updates.json
- https://landscapearchive.org/governance#cultural-pillars
- Deploy: `986c6db6` â†’ https://986c6db6.landscapearchive-org.pages.dev

---

## 2026-07-11 - Four cultural pillars on /governance

**Scope:** governance, cultural-pillars, founding-charter, deploy
**Status:** done

### Did
- Published the four cultural pillars (Land, Art, Technology, Data) with does / does not clarity on `/governance#cultural-pillars`, placed before the five Foundation Standards.
- Included product-as-instrument vs Foundation-as-charter framing; cross-linked from `/founding-charter` consultation respond section.
- Updated founder brief pointers so live `/governance` is the public home for the cultural frame (awards left alone).

### Why
- Pillars are charter/identity, not awards recognition; `/governance` already hosts Standards and stewardship voice, so a dedicated subsection there beats a new URL or forcing `/awards`.

### Files touched
- `src/data/governanceContent.js`
- `src/pages/governance.astro`
- `src/data/foundingCharterContent.js`
- `docs/FOUNDATION_CHARTER_AND_AWARDS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None for this publish; awards strand summary remains optional when strands are adopted.

### Links
- https://landscapearchive.org/governance#cultural-pillars
- https://landscapearchive.org/founding-charter
- Deploy: https://ad753a4f.landscapearchive-org.pages.dev

---

## 2026-07-11 - Foundation charter + awards brief (one-pager)

**Scope:** foundation-charter, awards, docs
**Status:** done

### Did
- Added founder-facing one-pager `docs/FOUNDATION_CHARTER_AND_AWARDS.md`: public trust layer (art Ã— land Ã— technology Ã— data), product-as-instrument vs Foundation-as-charter, four cultural pillars, awards strands (Evidence / Instrument / Form / Offset) with anti-silo inclusion guidance.
- Aligned explicitly with live `/founding-charter`, `/governance` (five Standards), and `/awards` (detailed categories in preparation); no public UI change.

### Why
- Founder needed a scannable cultural charter + awards brief that sits above legal draft constitution and the long awards category list, without contradicting published Foundation surfaces.

### Files touched
- `docs/FOUNDATION_CHARTER_AND_AWARDS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional: when strands are adopted, fold a short public summary into `/awards` programme governance.
- Founder may rename strands before any public copy lands.

### Links
- Doc: `docs/FOUNDATION_CHARTER_AND_AWARDS.md`
- Live: https://landscapearchive.org/awards Â· https://landscapearchive.org/founding-charter Â· https://landscapearchive.org/governance

---

## 2026-07-11 - Public `/recent-updates.json` for apex mirror

**Scope:** recent-updates, marketing-feed, deploy
**Status:** done

### Did
- Added `/recent-updates.json` from `src/data/recentPublicUpdates.js` (absolute URLs) so apex marketing can mirror the homepage strip without duplicating cards.
- Documented one-place edit path in `FOUNDATION_PUBLIC_UPDATE_POSTS.md`.

### Why
- Apex was hand-maintaining a drifted copy; SoT stays on .org.

### Files touched
- `src/pages/recent-updates.json.js`
- `src/data/recentPublicUpdates.js`
- `public/_headers`
- `docs/marketing/FOUNDATION_PUBLIC_UPDATE_POSTS.md`

### Links
- Feed: https://landscapearchive.org/recent-updates.json
- Deploy: https://abbbebd6.landscapearchive-org.pages.dev

---

## 2026-07-11 - Foundation downloads + Evidence Checker

**Scope:** foundation-downloads, evidence-checker, landscapearchive-org, deploy
**Status:** done

### Did
- Added footer **Foundation tools** column (labelled *Foundation tools â€” not Landscape Archive Hub*) with open artefacts only: TLA-185 schema pack, field registry preview JSON, open-pack zip, adopt kit, charter, UK crosswalk, Evidence Checker, and `/downloads` index.
- Published `/downloads` (open artefacts index) and `/evidence-checker` (client-side inspector for TLA-185 JSON and Archive Audit Pack `.tlaa`).
- Inspector refuses commercial Landscape Archive Package (`.tla` / `landscape-archive.tla.json` / `.rfa`) and encrypted `.lapkg` (no decrypt); files stay in-browser.
- Bundled `public/foundation-wing/tla185-open-pack.zip` (preview JSON + crosswalk MDs + draft constitution).
- Homepage â€œWhatâ€™s newâ€ item; README deploy notes for downloads/checker.

### Why
- Auditors and adopters need a clear Foundation-side download surface and a lightweight open-package inspector without conflating Hub / commercial `.tla` delivery.

### Files touched
- `src/data/foundationDownloads.js`
- `src/components/SiteFooter.astro`
- `src/pages/downloads.astro`
- `src/pages/evidence-checker.astro`
- `public/scripts/evidence-checker.js`
- `public/foundation-wing/tla185-open-pack.zip`
- `src/data/recentPublicUpdates.js`
- `public/_headers`
- `README.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Optional: wire schema-portal deep-validate handoff from checker results.
- Hard-refresh landscapearchive.org after deploy so footer + `/scripts/evidence-checker.js` are not sticky.

### Links
- https://landscapearchive.org/downloads
- https://landscapearchive.org/evidence-checker
- Open pack: https://landscapearchive.org/foundation-wing/tla185-open-pack.zip
- Deploy: https://1195d6af.landscapearchive-org.pages.dev (`npm run deploy`)

---
## 2026-07-09 - Director EOI globe: black dots on white

**Scope:** directors, homepage, deploy
**Status:** done

### Did
- Restored white media panel (`#ffffff`) on the homepage EOI popup.
- Confirmed `/images/director-invite-globe-dots.png` is black dots + alpha on transparent; render without `filter: invert(1)` so the globe reads black-on-white.
- Kept the shorter copy (no descriptive lead under â€œHelp set the standardâ€).
- Updated `docs/DIRECTOR_APPLICATIONS.md` popup notes.

### Why
- Prior â€œblack panelâ€ pass misread the ask: the reference is black halftone dots on white, not light dots on a black panel.

### Files touched
- `src/components/DirectorEasterEgg.astro`
- `docs/DIRECTOR_APPLICATIONS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Hard-refresh `/`; clear `sessionStorage` key `la-director-invite-dismissed` if popup was dismissed this tab.

### Links
- Live: https://landscapearchive.org/
- Form: https://landscapearchive.org/directors/apply
- Org deploy: https://0b33e5e2.landscapearchive-org.pages.dev

---
## 2026-07-09 - Director EOI popup: less copy + black globe

**Scope:** directors, homepage, eoi-copy, deploy
**Status:** done

### Did
- Removed descriptive lead + Singapore italic aside under â€œHelp set the standardâ€ on the homepage EOI popup; kept eyebrow, heading, legal note, and CTAs.
- Pointed `aria-describedby` at the legal note; tightened titleâ†’note spacing slightly.
- Globe media panel: black background (`#000`); removed `filter: invert(1)` so `/images/director-invite-globe-dots.png` shows native light dots on black.
- Updated `docs/DIRECTOR_APPLICATIONS.md` popup notes.

### Why
- Founder ask: less text under the heading, and the invite image should read black (not the inverted white-panel treatment).

### Files touched
- `src/components/DirectorEasterEgg.astro`
- `docs/DIRECTOR_APPLICATIONS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Hard-refresh `/`; clear `sessionStorage` key `la-director-invite-dismissed` if popup was dismissed this tab.

### Links
- Live: https://landscapearchive.org/
- Form: https://landscapearchive.org/directors/apply
- Org deploy: https://745ab212.landscapearchive-org.pages.dev

---
## 2026-07-09 - Director EOI legal framing + white globe panel

**Scope:** directors, homepage, eoi-copy, deploy
**Status:** done

### Did
- Reframed homepage popup + `/directors/apply` as founding board / director **expression of interest** (not appointment/job offer); kept not-yet-incorporated disclaimer; added About intended Foundation + privacy notice + clearer consents; CTAs â€œApply to express interestâ€ / â€œSubmit expression of interestâ€.
- White left panel on invite modal; `filter: invert(1)` on light-on-black globe asset so dark dots read on white.
- Documented counsel-still-required in `docs/DIRECTOR_APPLICATIONS.md`; softened la-frontend API success/email copy to match EOI tone.

### Why
- Comms/product hygiene toward â€œas legal as possibleâ€ without claiming compliance; mockup asked for white globe panel.

### Files touched
- `src/components/DirectorEasterEgg.astro`
- `src/components/DirectorApplicationForm.astro`
- `src/pages/directors/apply.astro`
- `docs/DIRECTOR_APPLICATIONS.md`
- `docs/CHANGELOG.md`
- (la-frontend) `functions/api/foundation/director-application.js`

### Follow-ups / blockers
- **Counsel review still required** before treating copy as final.
- Hard-refresh `/`; clear `sessionStorage` key `la-director-invite-dismissed` if popup was dismissed this tab.

### Links
- Live: https://landscapearchive.org/
- Form: https://landscapearchive.org/directors/apply
- Org deploy: https://38d38ac1.landscapearchive-org.pages.dev

---
## 2026-07-09 - Director invite horizontal mockup layout

**Scope:** directors, homepage, deploy
**Status:** done

### Did
- Restructured homepage director invitation to a wider horizontal split: static dots-globe left, invitation copy/actions right (stacks on mobile).
- Copied globe asset to `public/images/director-invite-globe-dots.png`.
- Added Share control (Web Share API + clipboard fallback) for `/directors/apply` on the current origin.
- Kept Singapore italic aside, honesty disclaimer, Apply / Not now, and `sessionStorage` dismiss key.

### Why
- Match founder mockup: longer modal with side graphic, plus a share path for the apply URL.

### Files touched
- `src/components/DirectorEasterEgg.astro`
- `public/images/director-invite-globe-dots.png`
- `docs/DIRECTOR_APPLICATIONS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Hard-refresh `/` to see the new layout; clear `sessionStorage` key `la-director-invite-dismissed` if the popup was already dismissed this tab.

### Links
- Live: https://landscapearchive.org/
- Asset: `/images/director-invite-globe-dots.png`
- Deploy: https://87a0b46b.landscapearchive-org.pages.dev

---
## 2026-07-09 - Director invite copy: Singapore aside

**Scope:** directors, homepage, deploy
**Status:** done

### Did
- Added smaller italic second line under London/DC invite copy: â€œor anywhere else, perhaps Singapore.â€
- Updated `docs/DIRECTOR_APPLICATIONS.md` popup copy note; deployed org Pages.

### Why
- Soften geography of the invitation without diluting the London/DC lead line.

### Files touched
- `src/components/DirectorEasterEgg.astro`
- `docs/DIRECTOR_APPLICATIONS.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- None.

### Links
- Live: https://landscapearchive.org/
- Deploy: https://b2035969.landscapearchive-org.pages.dev

---
## 2026-07-09 - Director invitation popup + apply form

**Scope:** directors, foundation-auth, intake, homepage, deploy
**Status:** done

### Did
- Replaced subtle homepage wink with a clear centered modal: London/DC invitation copy, Apply CTA, Not now / Escape / backdrop dismiss (sessionStorage).
- Full director application at `/directors/apply` (Archive sign-in gate + structured fields).
- Documented pipeline in `docs/DIRECTOR_APPLICATIONS.md`; org-access handoff includes `/directors/apply`.
- Deployed landscapearchive-org Pages.

### Why
- Invitation must be noticeable on the Foundation homepage while staying on-brand and legally honest (apply â‰  appointment).

### Files touched
- `src/components/DirectorEasterEgg.astro`
- `src/components/DirectorApplicationForm.astro`
- `src/pages/directors/apply.astro`
- `src/pages/index.astro`
- `src/data/memberAccess.js`
- `docs/DIRECTOR_APPLICATIONS.md`
- `docs/ORG_SIGN_IN_HANDOFF.md`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Requires la-frontend deploy of `POST /api/foundation/director-application` + handoff path `/directors/apply` before submissions succeed in production.

### Links
- Form: https://landscapearchive.org/directors/apply
- Doc: docs/DIRECTOR_APPLICATIONS.md
- Deploy: https://2279665e.landscapearchive-org.pages.dev

---
## 2026-07-09 - Standard Share + Field Notes JSON feed

**Scope:** section-share, field-notes, marketing-feed, deploy
**Status:** done

### Did
- Replaced public Share menu Instagram Story / Story pack / Post with standard share: Web Share when available, Copy link, Open link, LinkedIn, X, Email.
- Removed Instagram pack script from BaseLayout; cache-bust `section-share.js?v=20260709c`.
- Added public `/field-notes.json` from published Field Notes for Admin Ad Studio.

### Why
- User feedback: Instagram multi-pack Share was still failing / confusing. Primary Share should be instant native/social. Story creatives move to admin marketing tied to .org content.

### Files touched
- `src/components/SectionShareLinks.astro`
- `public/scripts/section-share.js`
- `src/layouts/BaseLayout.astro`
- `src/pages/field-notes.json.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Hard-refresh landscapearchive.org after deploy (Ctrl+Shift+R) so old share JS is not sticky.
- Admin Ad Studio consumes feed via la-frontend proxy.

### Links
- Feed: https://landscapearchive.org/field-notes.json
- Deploy: https://67907f19.landscapearchive-org.pages.dev (`npm run deploy`, commit `0f628b9`)
- Share smoke: any article section Share button â€” hard-refresh Ctrl+Shift+R

---
## 2026-07-09 - Foundation browser tab title pattern

**Scope:** seo, document-title, branding
**Status:** done

### Did
- BaseLayout titles now use `The Landscape Archive | Foundation` (home) and `{page} Ã‚Â· The Landscape Archive | Foundation` (inner pages), matching the commercial host pattern.

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
- Clarified download path: **Instagram Story pack (multi)** Ã¢â€ â€™ ZIP of PNGs (`tla-foundation-story-pack-*.zip`), not a PDF.
- Share speed: open menu paints instantly + warms fonts/mark in background; stop awaiting `document.fonts.ready`; parallel slide renders; progress label (Ã¢â‚¬Å“Slide n/mÃ¢â‚¬Â¦Ã¢â‚¬Â) + visible status; script `?v=20260709b` cache-bust.

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
- Replaced dense bullet slides with **descriptor + highlighted quote** slides; title Ã¢â€ â€™ quotes Ã¢â€ â€™ CTA structure (up to 6 frames).
- Footer shows host only (`landscapearchive.org`) Ã¢â‚¬â€ no runaway article paths; cream disc behind mark for charcoal contrast.
- Kept honesty bullet as its own quote slide (Ã¢â‚¬Å“not claimed here as accomplished factÃ¢â‚¬Â).

### Why
- Draft pack screenshots were plain white, top-heavy, with truncated long URLs and dense bullets Ã¢â‚¬â€ not presentation-ready for IG Stories.

### Files touched
- `public/scripts/section-share-instagram.js`
- `docs/CHANGELOG.md`

### Follow-ups / blockers
- Re-export from article share row after deploy: Field Note Ã¢â€ â€™ section Ã¢â‚¬Å“How automation flips the modelÃ¢â‚¬Â Ã¢â€ â€™ Instagram Story pack (multi).

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

## 2026-07-09 - Foundation adoption copy Ã¢â‚¬â€ institutional tone

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
- None Ã¢â‚¬â€ deploy via `npm run deploy`.

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
- None Ã¢â‚¬â€ deploy via `npm run deploy`.

---

## 2026-07-08 - Foundation on-site sign-in form

**Scope:** foundation-auth, sign-in, volunteers, landscapearchive-org
**Status:** done

### Did
- Replaced `/sign-in` redirect-only panel with email/password form (sans-serif UI) posting to `POST /api/foundation/org-sign-in` on Landscape Archive; supports two-factor step and social OAuth fallback link.
- Volunteer `#apply` gate now links to `/sign-in?return=/volunteers#apply` instead of Archive org-access redirect.
- Documented handoff contract in `docs/ORG_SIGN_IN_HANDOFF.md`; updated `docs/VOLUNTEER_APPLICATIONS.md`.

### Why
- Member programme access should sign in on the Foundation site while using the same Landscape Archive identity Ã¢â‚¬â€ without exposing implementation detail or storing credentials on `.org`.

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
- Ran `npm run deploy` Ã¢â‚¬â€ production `/volunteers#apply` was still serving pre-187e365 WordPress/cookie exposition until this deploy (commit was on `main` but Pages had not been updated).

### Why
- Copy fix was merged locally but `.org` uses manual `npm run deploy`, not git-connected auto-publish.

### Files touched
- (deploy only Ã¢â‚¬â€ no source edits)

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
- Shortened volunteer `#apply` sign-in gate and intro lead in `VolunteerApplicationForm.astro` Ã¢â‚¬â€ removed cross-domain cookie/token exposition.

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
- Fixed story/post canvas layout: measured title/body fit, Instagram safe-zone footer, wrapped URLs, explicit 1080Ãƒâ€”1920 export canvas (no DPR/CSS bleed).
- Removed export-only hint line that sat below the footer stack and appeared cropped in Story uploads.
- Added **Instagram Story pack (multi)** Ã¢â‚¬â€ ZIP of 2Ã¢â‚¬â€œ5 slides (`tla-story-01.png` Ã¢â‚¬Â¦) built from section title, bullets/excerpt, and CTA.

### Why
- Long governance headings hit hard line caps and footer content sat in InstagramÃ¢â‚¬â„¢s bottom crop zone, making downloads look truncated. Multi-slide ZIP matches manual Story carousel workflow better than a single tall composite.

### Files touched
- `public/scripts/section-share-instagram.js`
- `public/scripts/section-share.js`
- `src/components/SectionShareLinks.astro`

### Follow-ups / blockers
- Verify ZIP unpack + upload order on iPhone Photos Ã¢â€ â€™ Instagram Stories

### Links
- https://landscapearchive.org/governance

---

## 2026-07-08 - Share mobile overlay z-index fix

**Scope:** section-share, landscapearchive-org, federation-portal
**Status:** done

### Did
- Wrapped portaled backdrop + panel in `.section-share__overlay-root` on `document.body` with `isolation: isolate` and `position: fixed; inset: 0`.
- Mobile (Ã¢â€°Â¤720px): overlay `z-index: 2147483646`; desktop overlay stays `1100`; inner backdrop/panel use `1`/`2`.
- Added `body.section-share-open { overflow: hidden }` on mobile sheet open to prevent scroll bleed.

### Why
- Prior fix (1100/1099 on separate body children) still painted behind following `.section-block` headings on narrow viewports Ã¢â‚¬â€ likely competing stacking contexts from `[data-animate-in]` transforms and sticky chrome. Single isolated overlay root with max practical z-index guarantees the sheet covers all page content.

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
- Mobile (Ã¢â€°Â¤720px): bottom-sheet panel anchored to viewport bottom with safe-area padding instead of floating dropdown positioning.

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
- Share rows sit at the bottom of each section; absolutely positioned panels (`z-index: 30` within parent stacking context) painted behind the next sectionÃ¢â‚¬â„¢s DOM (e.g. Ã¢â‚¬Å“Encode claimsÃ¢â‚¬Â heading). Mobile taps hit obscured or clipped panels.

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
- Removed redundant page-level `SectionShareLinks` on article pages (last section already had a share row Ã¢â€ â€™ overlapping duplicate near footer).

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
- Legal-hardened `institutions-standards-and-the-infrastructure-gap` in `articles.js` Ã¢â‚¬â€ neutral institutional framing, conditional adoption language, opinion markers, softened market-economics copy, article-level `legalNote`.
- Updated `articles/[slug].astro` to render optional `legalNote` disclaimer footer on Field Notes.

### Why
- Editorial/legal-comms hygiene: avoid implied peak-body endorsement, negative third-party claims, and anti-competitive market language while preserving the essayÃ¢â‚¬â„¢s structural argument.

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
- Rewrote **Founding alliance** section in `governanceContent.js` Ã¢â‚¬â€ intent/possibility language; explicit "no alliance exists today"; removed "under review with advisers and prospective members"; softened participant/CTA framing; updated facts row.

### Why
- Public copy implied an alliance was being actively convened or in preparation. Align with `FOUNDATION_PUBLIC_NAMING_AND_LEGAL_SAFETY.md`: draft/interim tone, no incorporated entity, affiliate Ã¢â€°Â  founding.

### Files touched
- `src/data/governanceContent.js`

### Links
- https://landscapearchive.org/governance#founding-alliance

---


**Scope:** adoption, founding-charter, governance, marketing
**Status:** done

### Did
- Added `/adopt` practitioner guide: why specs go unused, 15-minute path (open pack Ã¢â€ â€™ validator Ã¢â€ â€™ procurement sentence), adoption ladder, honest interim footer.
- Added `foundingAlliancePitch.js` Ã¢â‚¬â€ copy-paste email templates (university, public body, practice) and one-page plain-text pitch.
- Published `/founding-charter` consultation page with draft constitution sections and `?intent=founding-alliance` CTA.
- Homepage primary CTA Ã¢â€ â€™ adopt; registry quick-start banner; nav + footer links; governance founding-alliance and international-adoption cross-links.
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
- Extended `SectionShareLinks` with **IG story** (1080Ãƒâ€”1920), **IG post** (1080Ãƒâ€”1080) card downloads and **Copy caption** (title + short URL + hashtags).
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
- Root cause: Astro never emitted `SectionShareLinks` component `<script>` in production HTML when many instances render per page Ã¢â‚¬â€ Copy link buttons had no listeners.
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
- Third non-AU jurisdiction crosswalk for US Reg S-K Item 1300 adopters Ã¢â‚¬â€ same structural mapping as UK/EU with NOAA / USFS / USGS / NEX-GDDP bindings.
- Custom domains required for production Foundation home at apex `.org`.

### Files touched
- `src/data/governanceContent.js`
- `src/pages/crosswalk/us-sec-climate.astro`
- `public/crosswalk/us-sec-climate-tla185-mapping.md`
- `public/crosswalk/uk-ifrs-s2-tla185-mapping.md`
- `public/crosswalk/eu-csrd-esrs-tla185-mapping.md`

### Follow-ups / blockers
- Custom domains attached but **status pending** (HTTP validation / certificate provisioning in progress at attach time). Verify DNS CNAME records if not auto-created: apex and `www` Ã¢â€ â€™ `landscapearchive-org.pages.dev` (proxied).

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
- Second non-AU jurisdiction crosswalk for CSRD adopters Ã¢â‚¬â€ same structural mapping as UK/AASB with EU dataset bindings.

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
- Added `SectionShareLinks.astro` Ã¢â‚¬â€ restrained copy-link, LinkedIn, email, and Web Share API on mobile; slate `#343d4a` small-caps styling.
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
- Added homepage **What's new** strip (`RecentUpdatesStrip.astro`, `recentPublicUpdates.js`) Ã¢â‚¬â€ founding alliance draft, export profiles, awards data architecture; interim/consultation tone.
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
- Added **Founding alliance** section to governance page Ã¢â‚¬â€ international coalition framing (practices, universities, public bodies, Indigenous protocol authorities, nurseries, implementation partners worldwide).
- Clarified affiliate partner programme (commercial Archive referral) Ã¢â€°Â  Foundation founding membership; no separate Ã¢â‚¬Å“Landscape AllianceÃ¢â‚¬Â trademark.
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
- User-facing copy should describe IFC property sets, GeoJSON civic registries, USD sidecars, and spreadsheet crosswalks in professional language Ã¢â‚¬â€ not internal profile codes.

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


