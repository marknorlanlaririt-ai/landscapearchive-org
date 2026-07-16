# Foundation org sign-in handoff

**Status:** shipped 2026-07-08  
**Public page:** https://landscapearchive.org/sign-in  
**API:** `POST https://landscapearchive.com.au/api/foundation/org-sign-in`  
**Session storage:** `sessionStorage` key `la-foundation-org-access` (12h HMAC token)

---

## Architecture (Option B)

`.org` and `.com.au` are different registrable domains — browsers do not share WordPress auth cookies across them. The Foundation site hosts the **sign-in UI**; credentials are proxied server-side to the existing Landscape Archive account service, then a short-lived org-access token is minted for `.org`.

| Step | What happens |
|------|----------------|
| 1 | User submits email/password on `landscapearchive.org/sign-in` |
| 2 | Browser `POST`s JSON to `/api/foundation/org-sign-in` (CORS + credentials) |
| 3 | Pages Function forwards to `blog.landscapearchive.com.au/wp-json/la-auth/v1/sign-in` with allowed `Origin: https://landscapearchive.org` |
| 4 | On success, Function mints HMAC org-access token (`FOUNDATION_ORG_ACCESS_SECRET`) and returns `redirectUrl` |
| 5 | Browser redirects to e.g. `https://landscapearchive.org/events?la_org_access=…` |
| 6 | `ArchiveSessionBootstrap.astro` verifies token via `/api/foundation/org-access-verify` and stores it in `sessionStorage` |

**Credentials never touch `.org` static hosting** — only transit in HTTPS POST to the Archive edge API.

Social sign-in (Google, Microsoft, Apple, LinkedIn) still uses the Archive OAuth handoff at `/foundation/org-access?target=…` because OAuth requires a first-party redirect on `.com.au`.

---

## Request contract

`POST /api/foundation/org-sign-in`

```json
{
  "login": "member@example.com",
  "password": "…",
  "remember": true,
  "path": "/sign-in",
  "return": "/volunteers#apply"
}
```

| Field | Purpose |
|-------|---------|
| `login` / `email` | Account email |
| `password` | Account password |
| `remember` | Persist Archive session cookies on `.com.au` (default `true`) |
| `path` / `return` | Foundation org destination after sign-in (must be a valid handoff path) |

**Two-factor follow-up:**

```json
{
  "challengeToken": "…",
  "code": "123456",
  "remember": true,
  "path": "/sign-in",
  "return": "/events"
}
```

**Success response:**

```json
{
  "ok": true,
  "signedIn": true,
  "email": "member@example.com",
  "path": "/volunteers",
  "redirectUrl": "https://landscapearchive.org/volunteers?la_org_access=v1.…",
  "expiresAt": 1750000000000
}
```

**Two-factor challenge (HTTP 200):**

```json
{
  "requiresTwoFactor": true,
  "challengeToken": "…",
  "message": "Enter the 6-digit code from your authenticator app."
}
```

Set-Cookie headers from WordPress are forwarded so the member also has an Archive session on `.com.au` subdomains when visiting the commercial site later.

---

## Valid handoff paths

| Path | Use |
|------|-----|
| `/sign-in` | Session bootstrap |
| `/volunteers` | Volunteer application (`#apply` preserved via `return`) |
| `/directors/apply` | Director application |
| `/events` | Member-only working sessions |
| `/articles` / `/articles/:slug` | Field Notes handoff — public preview; full essay after sign-in |

Member-only pages (`/events`) hide from navigation for guests and redirect to `/governance` when the org-access token is missing or expired.

Field Notes stay **publicly indexable as teasers** (title, dek, short excerpt + Sign in CTA). Full section HTML is not SSR’d for guests. Dictionary, schema portal validator, Evidence Checker, and open download packs remain ungated.

---

## Related endpoints

| Endpoint | Role |
|----------|------|
| `GET /api/foundation/org-access-verify` | Validate stored token from `.org` |
| `GET /api/foundation/org-access-mint` | Legacy handoff after Archive-first login |
| `GET /api/foundation/session-verify` | Best-effort Archive cookie check (usually empty cross-site) |
| `POST /api/foundation/sign-out` | Clear Archive cookies + client should clear `sessionStorage` |

---

## Deploy order

1. **la-frontend** — ship `org-sign-in` Pages Function (requires `FOUNDATION_ORG_ACCESS_SECRET` in prod)
2. **landscapearchive-org** — ship `/sign-in` form UI (`npm run deploy`)

Volunteer apply flow: `/volunteers#apply` → **Sign in to apply** → `/sign-in?return=/volunteers%23apply` → API → return with token → form unlocks.

Director apply flow: homepage easter egg → `/directors/apply` → **Sign in to apply** → `/sign-in?return=/directors/apply` → API → return with token → form unlocks.

---

## Secrets

| Env | Repo | Required |
|-----|------|----------|
| `FOUNDATION_ORG_ACCESS_SECRET` | la-frontend | Yes (prod) |
| WordPress bridge on `blog.landscapearchive.com.au` | WordPress ops | Yes (allows `landscapearchive.org` origin) |

No new secrets on the Astro site.
