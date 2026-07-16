# Soft-launch ops — four Foundation deployments smoke checklist

**Deployed surfaces (landscapearchive.org).** Soft-launch honesty: market outcomes + critique invites; do not leak Hub ops, Vault DAM, Workbench, DocuSign, pricing SKUs, or pipeline internals.

| # | Deployment | Live URL | Pass criteria |
|---|------------|----------|---------------|
| 1 | Draft consultation CTA + form | https://landscapearchive.org/governance#draft-consultation · https://landscapearchive.org/contact#draft-consultation · https://landscapearchive.org/awards (programme governance CTA) | CTA visible; form submits; admin mail / R2 `foundation-contact/` |
| 1b | Dictionary term proposal | https://landscapearchive.org/propose-term · schema dictionary “Propose a change” CTA | Prefill from term card; form submits; R2 `foundation-term-proposals/`; no registry write |
| 2 | Technical reviewers intake | https://landscapearchive.org/volunteers#technical-reviewers · `#apply` · https://landscapearchive.org/truth-tellers | Copy says curated; tracks in form; footer link works |
| 3 | IFRS S2 / AASB crosswalks | https://landscapearchive.org/crosswalk/uk-ifrs-s2 · https://landscapearchive.org/crosswalk/aasb-s2 | Crosswalks 200; LinkedIn copy points at crosswalks (Field Notes withdrawn) |
| 4 | Studio Pilot Kit | https://landscapearchive.org/adopt#studio-pilot | Copy-paste brief + three core links; footer Open standard link; no Hub/Vault/Workbench marketing |
| 5 | Industry & practice | https://landscapearchive.org/industry-practice · `#in-plain-language` | Education path + plain-language explainer: dictionary → Studio Pilot → Evidence Checker → consultation; free grammar / paid fill honesty; no Hub/Vault/Workbench/pricing |

## Automated HTTP smoke (agent / pre-deploy)

```bash
npm run smoke:org
# optional base override:
# npm run smoke:org -- --base https://landscapearchive.org
```

Checks (read-only, no secrets): home 200, `/adopt` Studio Pilot Kit, withdrawn Field Notes **301 → /articles**, `/recent-updates.json` (Studio Pilot + Industry & practice present; withdrawn notes absent), `/evidence-checker`, `/industry-practice`, soft-launch honesty scan (no DocuSign / Partner Center / Workbench / Control room / etc. on key pages).

`npm run deploy` runs `smoke:org` first (fail-closed). Escape: `SKIP_ORG_SMOKES=1 npm run deploy` or `npm run deploy:unsafe`.

## Extra checks

- [ ] Outreach scripts present: `docs/outreach/DRAFT_CONSULTATION_OUTREACH.md`
- [ ] LinkedIn copy: `docs/marketing/IFRS_S2_COMPLIANCE_PAIN_LINKEDIN.md` (public mirror `/docs/marketing/…`)
- [ ] Homepage Recent updates does **not** list withdrawn Field Notes *(covered by `smoke:org`)*
- [ ] Recent updates lists Studio Pilot Kit → `/adopt#studio-pilot` *(covered by `smoke:org`)*
- [ ] `/articles/before-after-conformance-case-study` and `/articles/messy-metadata-sustainability-appendix-risk` **301 → /articles** *(covered by `smoke:org`; checklist previously said 404)*
- [ ] Before/after fixtures still at `/examples/before-after-conformance/` (not Field Notes)
- [ ] Archive Contact prefill: `?topic=foundation-support&intent=draft-consultation` (guest OK)
- [ ] Volunteer API accepts `track` + `technical-reviewer` / `registry-contributor` skills (la-frontend Pages deploy)

## Founder actions (not done by this deploy)

- Fill the outreach checklist with real contacts and send emails / LinkedIn messages
- Partner Center certification (Hub Store path — separate track)
- Vault bridge WP PHP re-upload if still pending (`vaultSessionHandoff`)
- Optional: triage first review-pack and volunteer submissions in R2 / admin mail
