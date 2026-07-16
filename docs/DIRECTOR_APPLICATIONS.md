# Foundation director expressions of interest

**Status:** MVP shipped 2026-07-09 (EOI framing updated same day)  
**Public page:** https://landscapearchive.org/directors/apply  
**Homepage invitation:** Visible modal dialog on `/` after a short delay  
**API:** `POST https://landscapearchive.com.au/api/foundation/director-application`  
**Storage:** R2 `foundation-director-applications/` (same bucket as other intake forms)  
**Ops email:** `FOUNDATION_ADMIN_EMAIL` (default `admin@landscapearchive.org`)

> **Not legal advice.** Public copy is framed carefully as a founding board / director
> **expression of interest**. It does **not** claim legal compliance, appointment, employment,
> incorporation, charity registration, or existing boards in London / DC / Singapore.
> **Counsel review is still required** before treating this flow as final for entity formation,
> director appointments, privacy notices, or any binding recruitment process.

---

## What exists today

| Layer | Behaviour |
|-------|-----------|
| **Homepage popup** | Wide horizontal modal on `/`: white left panel + black halftone dots-globe, EOI copy + Share + Apply CTA right |
| **EOI form** | `/directors/apply` — **requires Archive account** (same handoff as volunteers) |
| **Auth handoff** | On-site `/sign-in` → `POST /api/foundation/org-sign-in` → HMAC token → return to `/directors/apply` |
| **Submission** | Cross-origin POST to la-frontend Pages Function with token + structured fields |
| **Ops triage** | Admin notification email + R2 record; copilot `get_application_record` with `applicationType: foundation-director` |

**Tone (comms/product):** founding board / director **expression of interest** — invitation ≠ offer of appointment or employment; Foundation **not yet incorporated**; submitting creates no legal relationship and no guarantee of selection. London / DC / Singapore = **regions of interest**, not existing boards.

---

## Homepage popup behaviour

1. Open https://landscapearchive.org/
2. After ~0.9s (or ~0.2s if `prefers-reduced-motion`), a wide horizontal dialog appears over a dimmed backdrop (stacks on narrow viewports)
3. Left (above on mobile): white panel; static globe at `/images/director-invite-globe-dots.png` as black halftone dots on white (asset is black+alpha; no invert)
4. Copy: heading “Help set the standard” + legal EOI / not-yet-incorporated disclaimer (no supporting lead under the heading; region detail lives on `/directors/apply`)
5. **Apply to express interest** → `/directors/apply`
6. **Share** → Web Share API when available, else copy `https://landscapearchive.org/directors/apply` (current origin + `/directors/apply`)
7. Dismiss: **Not now**, backdrop click, or `Escape` — stored in `sessionStorage` (`la-director-invite-dismissed`) so it does not reappear in the same browser tab session
8. Focus is trapped in the dialog while open; body scroll is locked

---

## Application fields

**Required:** full name, account email, city, country, location preference (London / DC / elsewhere / remote), current role, organisation, LinkedIn **or** CV URL, why Foundation, ≥1 experience area, relevant experience detail, time commitment, conflicts/disclosures (or “None”), invitation / accuracy / privacy consents.

**Optional:** preferred name, phone, availability notes, references.

Form also shows a short **About the intended Foundation** block (purpose + vehicle TBD with counsel) and a **privacy notice** for application data.

---

## Privacy / PII

- Expressions of interest contain identity, contact, CV/LinkedIn, governance disclosures — treat as **personal data** under AU Privacy Act.
- Stored in private R2 (`SPECIES_DATA_BUCKET`); not bundled in public JS.
- Confirmation + admin notification via Foundation mail helpers (`FOUNDATION_*` env vars).
- Retention: follow contact-enquiry retention policy until Foundation entity + DPA are finalised.
- On-page privacy notice + consent checkbox are **product hygiene**, not a substitute for counsel-approved privacy wording or a registered entity’s privacy policy.

---

## Deploy / secrets

| Secret / env | Repo | Required |
|--------------|------|----------|
| `FOUNDATION_ORG_ACCESS_SECRET` | la-frontend (Pages) | **Yes in prod** — HMAC for handoff + director POST |
| `SPECIES_DATA_BUCKET` | la-frontend | Yes (existing) |
| `FOUNDATION_ADMIN_EMAIL`, `FOUNDATION_FROM_EMAIL`, `FOUNDATION_RESEND_API_KEY` | la-frontend | Recommended for branded mail |

Deploy order: **la-frontend first** (API + handoff path `/directors/apply`), then **landscapearchive-org** (easter egg + form UI).

---

## Counsel / legal follow-ups (required)

- [ ] Counsel review of EOI / founding-board public copy (popup + `/directors/apply` + confirmation email)
- [ ] Confirm intended vehicle language (e.g. AU company limited by guarantee / NFP) once advice is received — do not invent a false registration
- [ ] Privacy notice / consent wording aligned to final controller + retention schedule
- [ ] Entity formation before any appointment, employment, or contracts in the Foundation’s name

## Product follow-ups (operator decisions)

- [ ] Admin UI list view for `foundation-director-applications/`
- [ ] Optional CV file upload (today: URL only)
- [ ] Link from governance / founding-charter once entity formation advances
