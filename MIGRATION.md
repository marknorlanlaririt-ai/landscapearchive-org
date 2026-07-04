# Foundation migration — la-frontend → landscapearchive.org

Tracking the move of the Foundation surface off `home.landscapearchive.com.au/foundation`
onto the standalone `landscapearchive.org` site. Soft cutover: the `.com.au/foundation`
routes stay live and 301 here once this site is on the domain.

## Decisions

- **Repo:** `../landscapearchive-org` (sibling to `la-frontend`, `la-desktop`).
- **Stack:** Astro static (SEO + longevity).
- **Auth:** public-first. The open standard, governance, and a registry *preview*
  are all public. Gated/commercial actions hand back to `landscapearchive.com.au`
  (no cross-apex cookie sharing attempted).
- **Transition:** soft — keep `/foundation` live on `.com.au`, add 301 → `.org`.

## Ported (done)

| From `la-frontend` | To this repo |
|---|---|
| `src/content/foundationHomeContent.js` | `src/data/homeContent.js` |
| `src/content/foundationGovernanceContent.js` | `src/data/governanceContent.js` |
| `src/content/foundationTopicPages.js` | `src/data/topicPages.js` |
| `src/config/foundationCharterPillars.js` | `src/data/charterPillars.js` |
| `src/config/foundationSupport.js` | `src/data/support.js` |
| `src/config/foundationWing.js` (subset) | `src/data/foundationWing.js` + `src/data/site.js` |
| `src/pages/FoundationHome.vue` | `src/pages/index.astro` |
| `src/pages/FoundationGovernance.vue` | `src/pages/governance.astro` |
| `src/pages/FoundationWingRegistry.vue` (preview only) | `src/pages/registry.astro` |
| `src/pages/FoundationTopicPage.vue` | `src/pages/[topic].astro` |
| `public/foundation-wing/tla185-fields-preview.json` | `public/foundation-wing/` + `src/data/` |

### Brand mark

The placeholder braced-cross (`FoundationMark`) has been retired in favour of the
**TLA wordmark logo** (`public/tla-foundation-logo.png`), used in the header, hero,
footer, favicon, apple-touch-icon, and Organization JSON-LD. A matching 1200×630
social card lives at `public/og-foundation.png`.

### Path re-rooting

Standalone site is apex-rooted: `/foundation` → `/`, `/foundation/governance` →
`/governance`, `/foundation/registry` → `/registry`, topic pages → `/volunteers` etc.

### Public-first changes vs the gated Vue version

- GitHub / schema-portal links are **direct** (were behind `/foundation/access/*`
  Archive sign-in gates).
- Registry shows the **public preview** JSON only (the full `tla185-fields.json`
  was auth-gated by a Pages Function; not carried here).
- Commercial + support links are **absolute** URLs to `landscapearchive.com.au`.

## Done since scaffold

- [x] **GitHub**: pushed to `github.com/marknorlanlaririt-ai/landscapearchive-org` (public).
- [x] **Logo**: TLA wordmark adopted across header/hero/footer/favicon/JSON-LD.
- [x] **OG image**: 1200×630 social card at `public/og-foundation.png`.

## Not yet moved / open items

- [ ] **Schema portal** (`federation/` + `la-federation-schema` Pages project →
      `schema.landscapearchive.org`). Left in `la-frontend` for now; decide whether
      to fold `federation/` into this repo or keep it as its own deploy.
- [ ] **Full (gated) registry** — remains on `.com.au` behind member profile.
      Reconsider once a public-vs-gated policy for the full dictionary is set.
- [ ] **Cloudflare**: attach `landscapearchive.org` + `www` to this Pages project;
      `www` → apex 301; Full-strict SSL.
- [ ] **la-frontend soft cutover**: point marketing `/foundation` links to
      `https://landscapearchive.org` and 301 `/foundation*` once this is live.
- [ ] **i18n**: content is English-only; add locales if international audiences need them.

## Kept on la-frontend (by design)

- Commercial contact/licensing (`/contact?topic=foundation-*`), shop, member auth.
- `federation/` schema build + validator scripts and the registry JSON generators
  (`scripts/foundation/build-tla*-registry.mjs`) — they feed both sites; this repo
  currently consumes a copied snapshot of the preview JSON.
