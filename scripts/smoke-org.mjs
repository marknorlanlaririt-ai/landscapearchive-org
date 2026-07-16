#!/usr/bin/env node
/**
 * Read-only Foundation org soft-launch smoke (landscapearchive.org).
 *
 *   npm run smoke:org
 *   node scripts/smoke-org.mjs --base https://landscapearchive.org
 *
 * Covers FOUR_DEPLOYMENTS_SMOKE.md agent-doable HTTP checks. No secrets.
 * Run before `npm run deploy` (documented; deploy is not gated so emergencies stay simple).
 */

const DEFAULT_BASE = 'https://landscapearchive.org'
const FETCH_TIMEOUT_MS = 15000
const SMOKE_UA = 'LandscapeArchive-OrgSmoke/1.0 (+https://landscapearchive.org)'

/** Ops / commercial leaks that must not appear on soft-launch Foundation marketing pages. */
const FORBIDDEN_OPS_PATTERNS = [
  /DocuSign/i,
  /Partner Center/i,
  /Plant Workbench/i,
  /Vault DAM/i,
  /Control room/i,
  /Authenticode/i,
  /Needs attention/i,
  /publish:edge/i,
  /OPERATOR_STATUS/i,
  /SSL\.com/i,
  /Workers AI/i,
  /\bFlux\b/,
  /admin\.landscapearchive\.com\.au/i,
  /Hub Triage/i,
  /BIM Desk/i
]

const WITHDRAWN_ARTICLE_PATHS = [
  '/articles/before-after-conformance-case-study',
  '/articles/messy-metadata-sustainability-appendix-risk'
]

function parseArgs(argv) {
  const baseIndex = argv.indexOf('--base')
  const base = baseIndex >= 0
    ? String(argv[baseIndex + 1] || '').replace(/\/$/, '')
    : DEFAULT_BASE
  return { base }
}

function withTimeout(ms) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), ms)
  return { signal: controller.signal, clear: () => clearTimeout(timer) }
}

/**
 * @param {string} url
 * @param {{ redirect?: RequestRedirect, accept?: string }} [opts]
 */
async function probe(url, { redirect = 'follow', accept = 'text/html,application/json;q=0.9,*/*;q=0.8' } = {}) {
  const { signal, clear } = withTimeout(FETCH_TIMEOUT_MS)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { accept, 'user-agent': SMOKE_UA },
      redirect,
      signal
    })
    const contentType = response.headers.get('content-type') || ''
    const bodyText = await response.text()
    let json = null
    if (contentType.includes('application/json') || bodyText.trim().startsWith('{')) {
      try {
        json = JSON.parse(bodyText)
      } catch {
        // ignore
      }
    }
    return {
      url,
      status: response.status,
      finalUrl: response.url,
      location: response.headers.get('location') || '',
      bodyText,
      json,
      error: null
    }
  } catch (error) {
    return {
      url,
      status: 0,
      finalUrl: '',
      location: '',
      bodyText: '',
      json: null,
      error: error?.name === 'AbortError' ? 'timeout' : (error?.message || 'fetch_failed')
    }
  } finally {
    clear()
  }
}

function findForbidden(text) {
  return FORBIDDEN_OPS_PATTERNS.filter((re) => re.test(text)).map((re) => String(re))
}

/**
 * @param {{ id: string, label: string, pass: boolean, detail: string }} check
 */
function printCheck(check) {
  const mark = check.pass ? 'ok' : 'FAIL'
  console.log(`[${mark}] ${check.label} — ${check.detail}`)
}

async function main() {
  const { base } = parseArgs(process.argv.slice(2))
  /** @type {{ id: string, label: string, pass: boolean, detail: string }[]} */
  const checks = []

  // 1. Home
  {
    const home = await probe(`${base}/`)
    const pass = !home.error && home.status === 200 && /Landscape Archive|Foundation/i.test(home.bodyText)
    checks.push({
      id: 'home',
      label: 'GET /',
      pass,
      detail: home.error
        ? home.error
        : pass
          ? `HTTP ${home.status}`
          : `Expected 200 Foundation home, got HTTP ${home.status || 0}`
    })
    if (pass) {
      const hits = findForbidden(home.bodyText)
      checks.push({
        id: 'home-ops-leak',
        label: 'Home soft-launch honesty (no Hub ops leaks)',
        pass: hits.length === 0,
        detail: hits.length ? `Forbidden: ${hits.join(', ')}` : 'no forbidden ops strings'
      })
    }
  }

  // 2. Adopt + Studio Pilot Kit + outreach pack anchors
  {
    const adopt = await probe(`${base}/adopt`)
    const hasAnchor =
      /id=["']studio-pilot["']|#studio-pilot|Studio Pilot Kit/i.test(adopt.bodyText)
    const hasOutreach =
      /id=["']studio-pilot-outreach["']|Studio Pilot outreach pack/i.test(adopt.bodyText)
    const pass = !adopt.error && adopt.status === 200 && hasAnchor
    checks.push({
      id: 'adopt-studio-pilot',
      label: 'GET /adopt#studio-pilot',
      pass,
      detail: adopt.error
        ? adopt.error
        : pass
          ? 'HTTP 200 · Studio Pilot Kit present'
          : `Expected Studio Pilot Kit on /adopt, got HTTP ${adopt.status || 0}`
    })
    checks.push({
      id: 'adopt-studio-pilot-outreach',
      label: 'GET /adopt#studio-pilot-outreach',
      pass: !adopt.error && adopt.status === 200 && hasOutreach,
      detail: adopt.error
        ? adopt.error
        : hasOutreach
          ? 'HTTP 200 · outreach pack present'
          : `Expected Studio Pilot outreach pack on /adopt, got HTTP ${adopt.status || 0}`
    })
    if (adopt.status === 200 && !adopt.error) {
      const hits = findForbidden(adopt.bodyText)
      checks.push({
        id: 'adopt-ops-leak',
        label: 'Adopt soft-launch honesty (no Hub ops leaks)',
        pass: hits.length === 0,
        detail: hits.length ? `Forbidden: ${hits.join(', ')}` : 'no forbidden ops strings'
      })
    }
  }

  // 3. Withdrawn Field Notes → 301 /articles
  for (const path of WITHDRAWN_ARTICLE_PATHS) {
    const result = await probe(`${base}${path}`, { redirect: 'manual' })
    const loc = String(result.location || '')
    const pass =
      !result.error
      && result.status === 301
      && (/\/articles\/?$/i.test(loc) || loc.endsWith('/articles'))
    checks.push({
      id: `withdrawn-${path.split('/').pop()}`,
      label: `Withdrawn ${path} → 301 /articles`,
      pass,
      detail: result.error
        ? result.error
        : pass
          ? `HTTP 301 → ${loc}`
          : `Expected 301 → /articles, got HTTP ${result.status || 0} Location=${loc || '(none)'}`
    })
  }

  // 3b. Published Field Note — public teaser only (no full-body SSR dump)
  {
    const sample = await probe(`${base}/articles/four-things-land-art-technology-data`)
    const hasGate = /Sign in to (read the full Field Note|continue)/i.test(sample.bodyText)
    const hasPreview = /Four cultural pillars|cultural frame/i.test(sample.bodyText)
    // Deep body phrasing from later sections should not appear in anonymous HTML.
    const bodyLeak = /None of the four is enough alone/i.test(sample.bodyText)
    const pass =
      !sample.error
      && sample.status === 200
      && hasGate
      && hasPreview
      && !bodyLeak
    checks.push({
      id: 'field-notes-preview-gate',
      label: 'GET /articles/:slug preview gate',
      pass,
      detail: sample.error
        ? sample.error
        : pass
          ? 'HTTP 200 · teaser + sign-in gate · deep body absent from HTML'
          : `HTTP ${sample.status || 0} · gate=${hasGate} · preview=${hasPreview} · bodyLeak=${bodyLeak}`
    })
  }

  // 4. recent-updates.json
  {
    const feed = await probe(`${base}/recent-updates.json`, {
      accept: 'application/json'
    })
    const updates = Array.isArray(feed.json?.updates) ? feed.json.updates : []
    const titles = updates.map((u) => String(u?.title || ''))
    const hasStudioPilot = titles.some((t) => /Studio Pilot Kit/i.test(t))
    const hasIndustryPractice = titles.some((t) => /Industry\s*&\s*practice/i.test(t))
    const hasWithdrawn =
      titles.some((t) => /before.?after.?conformance/i.test(t))
      || titles.some((t) => /messy.?metadata/i.test(t))
      || updates.some((u) => /before-after-conformance|messy-metadata/i.test(String(u?.href || '')))
    const pass =
      !feed.error
      && feed.status === 200
      && updates.length > 0
      && hasStudioPilot
      && hasIndustryPractice
      && !hasWithdrawn
    checks.push({
      id: 'recent-updates-json',
      label: 'GET /recent-updates.json',
      pass,
      detail: feed.error
        ? feed.error
        : pass
          ? `HTTP 200 · ${updates.length} items · Studio Pilot + Industry & practice present · withdrawn notes absent`
          : `HTTP ${feed.status || 0} · studioPilot=${hasStudioPilot} · industryPractice=${hasIndustryPractice} · withdrawnLeak=${hasWithdrawn} · count=${updates.length}`
    })
  }

  // 5. Evidence Checker
  {
    const page = await probe(`${base}/evidence-checker`)
    const looksLikeChecker =
      /Evidence Checker|TLA-185|\.tlaa/i.test(page.bodyText)
    const pass = !page.error && page.status === 200 && looksLikeChecker
    checks.push({
      id: 'evidence-checker',
      label: 'GET /evidence-checker',
      pass,
      detail: page.error
        ? page.error
        : pass
          ? `HTTP ${page.status}`
          : `Expected Evidence Checker page, got HTTP ${page.status || 0}`
    })
    if (page.status === 200 && !page.error) {
      const hits = findForbidden(page.bodyText)
      checks.push({
        id: 'evidence-checker-ops-leak',
        label: 'Evidence Checker soft-launch honesty',
        pass: hits.length === 0,
        detail: hits.length ? `Forbidden: ${hits.join(', ')}` : 'no forbidden ops strings'
      })
    }
  }

  // 6. Industry & practice (education-adjacent)
  {
    const page = await probe(`${base}/industry-practice`)
    const looksLikeBrief =
      /Industry\s*&\s*practice|In plain language|open field dictionary|Studio Pilot Kit|Evidence Checker|free grammar|RFQ checklist|Procurement \/ RFQ checklist/i.test(
        page.bodyText
      )
    const pass = !page.error && page.status === 200 && looksLikeBrief
    checks.push({
      id: 'industry-practice',
      label: 'GET /industry-practice',
      pass,
      detail: page.error
        ? page.error
        : pass
          ? `HTTP ${page.status}`
          : `Expected Industry & practice brief, got HTTP ${page.status || 0}`
    })
    if (page.status === 200 && !page.error) {
      const hits = findForbidden(page.bodyText)
      checks.push({
        id: 'industry-practice-ops-leak',
        label: 'Industry & practice soft-launch honesty',
        pass: hits.length === 0,
        detail: hits.length ? `Forbidden: ${hits.join(', ')}` : 'no forbidden ops strings'
      })
    }
  }

  for (const check of checks) printCheck(check)

  const passed = checks.filter((c) => c.pass).length
  const failed = checks.length - passed
  const ok = failed === 0
  console.log(`\n${passed}/${checks.length} passed` + (ok ? '' : ` (${failed} failed)`))
  console.log(`Base: ${base}`)
  if (!ok) process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
