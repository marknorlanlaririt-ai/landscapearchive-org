# Foundation volunteer applications

**Status:** MVP shipped 2026-07-08  
**Public page:** https://landscapearchive.org/volunteers#apply  
**API:** `POST https://landscapearchive.com.au/api/foundation/volunteer-application`  
**Storage:** R2 `foundation-volunteer-applications/` (same bucket as other intake forms)

---

## What exists today

| Layer | Behaviour |
|-------|-----------|
| **Programme charter** | Public `/volunteers` page (Astro, `landscapearchive-org`) — no sign-in to read |
| **Application form** | `#apply` section on the same page — **requires Archive account** |
| **Auth handoff** | `/foundation/org-access` on `.com.au` mints 12h HMAC token → `landscapearchive.org/volunteers?la_org_access=…` |
| **Session on .org** | Token stored in `sessionStorage` (`la-foundation-org-access`); not a shared cookie |
| **Submission** | Cross-origin POST to la-frontend Pages Function with token + structured fields |
| **Ops triage** | Admin copilot `get_application_record` with `applicationType: foundation-volunteer` |

Legacy path (`landscapearchive.com.au/contact?topic=foundation-support&intent=volunteer`) still works for unstructured enquiries but is no longer the primary CTA.

---

## Auth architecture (cross-domain reality)

`.org` and `.com.au` are **different registrable domains**. Browsers block third-party WordPress auth cookies on `fetch()` from `landscapearchive.org` → `landscapearchive.com.au`.

**What works (in production):**

1. User clicks **Sign in to apply** → Archive org-access gate (`/foundation/org-access?target=https://landscapearchive.org/volunteers`).
2. WordPress login on `.com.au` (first-party cookies).
3. `GET /api/foundation/org-access-mint` validates WP session, returns signed token.
4. Redirect to `.org/volunteers?la_org_access=…`; client stores token (12h).
5. Form POST includes `orgAccessToken`; API verifies HMAC + email match.

**What does not work:**

- Shared WordPress cookie across `.org` / `.com.au` apexes
- JWT on a common parent domain (no shared parent)
- Cloudflare Access as primary member auth (would duplicate WP user store unless wired to IdP)

**Alternatives considered**

| Option | Verdict |
|--------|---------|
| OAuth redirect to app host | **Chosen pattern** — already implemented as org-access handoff |
| Magic link / email-only apply | Possible fallback for non-members; skipped for MVP (adds verification flow) |
| Cloudflare Access | Ops overhead; separate identity from Library accounts |
| Foundation-only lightweight auth | Duplicates WP; rejected |
| Hand off entirely to app route | Works but splits UX off `.org`; kept as sign-in only |

---

## Application fields

Required: name, account email, ≥1 skill area, timezone/availability, privacy consent.  
Optional: institution, portfolio URL, free-text context.

Skill ids: `documentation`, `schema-review`, `crosswalks`, `truth-telling`, `translation`, `outreach`.

---

## Privacy / PII

- Applications contain name, email, skills, availability, optional employer/portfolio — treat as **personal data** under AU Privacy Act.
- Stored in private R2 (`SPECIES_DATA_BUCKET`); not bundled in public JS.
- Applicant must accept privacy checkbox linking to Archive Privacy Policy (interim implementation partner hosts legal docs).
- Confirmation + admin notification email via Foundation mail helpers (`FOUNDATION_*` env vars).
- Retention: follow contact-enquiry retention policy until Foundation entity + DPA are finalised.

---

## Deploy / secrets

| Secret / env | Repo | Required |
|--------------|------|----------|
| `FOUNDATION_ORG_ACCESS_SECRET` | la-frontend (Pages) | **Yes in prod** — HMAC for handoff + volunteer POST |
| `SPECIES_DATA_BUCKET` | la-frontend | Yes (existing) |
| `FOUNDATION_ADMIN_EMAIL`, `FOUNDATION_FROM_EMAIL`, `FOUNDATION_RESEND_API_KEY` | la-frontend | Recommended for branded mail |
| `RESEND_API_KEY` | la-frontend | Fallback sender |

Deploy order: **la-frontend first** (API + handoff path), then **landscapearchive-org** (form UI).

---

## Follow-ups (operator decisions)

- [ ] Admin UI list view for `foundation-volunteer-applications/` (today: copilot + R2)
- [ ] Allow apply without Archive account via email verification (guest volunteers)
- [ ] Sync `foundationTopicPages.js` mirror on `.com.au` if `/foundation/volunteers` redirect should land on `#apply`
- [ ] Formal retention schedule once Foundation incorporates
