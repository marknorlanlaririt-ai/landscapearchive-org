# Foundation volunteer applications

**Status:** MVP shipped 2026-07-08; curated technical-reviewer / registry-contributor tracks 2026-07-13  
**Public page:** https://landscapearchive.org/volunteers#apply  
**Curated intake:** https://landscapearchive.org/volunteers#technical-reviewers  
**API:** `POST https://landscapearchive.com.au/api/foundation/volunteer-application`  
**Storage:** R2 `foundation-volunteer-applications/` (same bucket as other intake forms)  
**Ops email:** `FOUNDATION_ADMIN_EMAIL` (admin notification + applicant confirmation when mail configured)

---

## What exists today

| Layer | Behaviour |
|-------|-----------|
| **Programme charter** | Public `/volunteers` page (Astro, `landscapearchive-org`) — no sign-in to read |
| **Curated tracks** | Technical reviewer / Registry contributor — stress-test dictionary corners; not open free-for-all |
| **Application form** | `#apply` section — **requires Archive account**; includes intake `track` + skills |
| **Auth handoff** | On-site `/sign-in` form → `POST /api/foundation/org-sign-in` → HMAC token → return to requested `.org` page |
| **Legacy handoff** | `/foundation/org-access` on `.com.au` still works for social OAuth and deep links |
| **Session on .org** | Token stored in `sessionStorage` (`la-foundation-org-access`); not a shared cookie |
| **Submission** | Cross-origin POST to la-frontend Pages Function with token + structured fields |
| **Ops triage** | Admin email + R2; copilot `get_application_record` with `applicationType: foundation-volunteer` |

Legacy path (`landscapearchive.com.au/contact?topic=foundation-support&intent=volunteer`) still works for unstructured enquiries but is no longer the primary CTA.

**GitHub:** public repository may remain temporarily unavailable; email / pack review is an accepted contribution path.

---

## Application fields

Required: name, account email, intake `track`, ≥1 skill area, timezone/availability, privacy consent.  
Optional: institution, portfolio URL, free-text context.

**Tracks:** `general`, `technical-reviewer`, `registry-contributor`.

**Skill ids:** `technical-reviewer`, `registry-contributor`, `documentation`, `schema-review`, `crosswalks`, `truth-telling`, `translation`, `outreach`.

---

## Where submissions land

| Destination | Detail |
|-------------|--------|
| **R2** | `foundation-volunteer-applications/{YYYY-MM-DD}/{id}-{emailHash}.json` on `SPECIES_DATA_BUCKET` |
| **Admin email** | `FOUNDATION_ADMIN_EMAIL` via Foundation mail helpers |
| **Applicant email** | Confirmation when Resend / Foundation mail is configured |
| **Admin copilot** | `get_application_record` · `applicationType: foundation-volunteer` |

---

## Deploy / secrets

| Secret / env | Repo | Required |
|--------------|------|----------|
| `FOUNDATION_ORG_ACCESS_SECRET` | la-frontend (Pages) | **Yes in prod** — HMAC for handoff + volunteer POST |
| `SPECIES_DATA_BUCKET` | la-frontend | Yes (existing) |
| `FOUNDATION_ADMIN_EMAIL`, `FOUNDATION_FROM_EMAIL`, `FOUNDATION_RESEND_API_KEY` | la-frontend | Recommended for branded mail |
| `RESEND_API_KEY` | la-frontend | Fallback sender |

Deploy order: **la-frontend first** (API + handoff path), then **landscapearchive-org** (form UI).
