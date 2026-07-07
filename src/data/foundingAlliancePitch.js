import { ARCHIVE_ORIGIN, SCHEMA_PORTAL_URL } from './site.js'
import { TLA185_DISPLAY_ID } from './foundationWing.js'
import { ADOPT_PROCUREMENT_SENTENCE } from './adoptContent.js'

const CHARTER_URL = 'https://landscapearchive.org/founding-charter'
const ADOPT_URL = 'https://landscapearchive.org/adopt'
const CONSULTATION_URL = `${ARCHIVE_ORIGIN}/contact?topic=foundation-support&intent=founding-alliance`

/**
 * One-page founding alliance pitch — designed for copy-paste into outreach emails.
 * Honest interim language; no ISO or incorporation claims.
 */
export const FOUNDING_ALLIANCE_PITCH = Object.freeze({
  subject: `Draft charter consultation — open ${TLA185_DISPLAY_ID} landscape metadata standard`,

  problem: `Landscape projects still ship with implicit claims — "native planting," "climate resilient," "sustainable" — while BIM and GIS tools export incompatible vocabularies. Teams rarely adopt open metadata standards because there is no mandated first use case, no fifteen-minute validator path, and no procurement sentence they can paste. Governance PDFs do not fix Monday-morning workflows.`,

  offer: `We publish ${TLA185_DISPLAY_ID} as open reference infrastructure: field registry, JSON Schema modules, browser validator, worked examples, and jurisdiction crosswalks (UK, EU, US, Australia) at ${SCHEMA_PORTAL_URL}. Year one is free to reference — validate an example bundle, cite the registry in one brief or RFQ, run a single pilot export. Capability grant manifests let vendors declare integration scope without implying Council membership.`,

  ask: `Review the draft constitution (consultation only — we are not incorporated yet) and nominate one organisational representative if you want to be listed as a founding supporter when the standard launches publicly. Optional: commit to one pilot — validate the example bundle and add the procurement sentence to an upcoming studio brief or tender. Charter consultation: ${CONSULTATION_URL}`,

  whatWeDoNotAsk: [
    'Binding membership in an entity that does not yet exist',
    'Adoption of commercial Archive products or subscriptions',
    'Transfer of proprietary project IP or client data',
    'Joint liability with other participants',
    'Endorsement that TLA-185 is an ISO or government standard',
    'Logo placement without a documented pilot or validator run'
  ],

  conflictRules: [
    'The Landscape Archive Pty Ltd is a founding implementation partner — no default Council vote',
    'The Landscape Vault Pty Ltd holds specification copyright until assignment to the incorporated Foundation',
    'Affiliate partner programme (commercial referrals) is unrelated to founding alliance consultation',
    'Cultural-context field rules require Indigenous advisory sign-off before adoption — not overrideable by majority vote',
    'RFC changes are public; vendor roadmaps do not control the field dictionary'
  ],

  links: Object.freeze([
    { label: 'Get started in 15 minutes', href: ADOPT_URL },
    { label: 'Draft constitution', href: CHARTER_URL },
    { label: 'Schema portal', href: SCHEMA_PORTAL_URL },
    { label: 'Charter consultation', href: CONSULTATION_URL }
  ])
})

/** Plain-text email body for university outreach. */
export const FOUNDING_PITCH_EMAIL_UNIVERSITY = `Subject: ${FOUNDING_ALLIANCE_PITCH.subject}

Dear [Programme lead / Studio coordinator],

${FOUNDING_ALLIANCE_PITCH.problem}

${FOUNDING_ALLIANCE_PITCH.offer}

A concrete ask for your studio: add this sentence to one upcoming brief and run the public validator on our NSW coastal schoolyard example (${SCHEMA_PORTAL_URL}/validate). Adoption guide: ${ADOPT_URL}

${FOUNDING_ALLIANCE_PITCH.ask}

We do not ask for: ${FOUNDING_ALLIANCE_PITCH.whatWeDoNotAsk.slice(0, 3).join('; ')}.

Draft constitution: ${CHARTER_URL}
`

/** Plain-text email body for public body / procurement outreach. */
export const FOUNDING_PITCH_EMAIL_PUBLIC_BODY = `Subject: Open landscape metadata reference for procurement — draft consultation

Dear [Procurement / digital twin lead],

${FOUNDING_ALLIANCE_PITCH.problem}

${FOUNDING_ALLIANCE_PITCH.offer}

Procurement sentence you can paste into an RFQ or information-management schedule:

"${ADOPT_PROCUREMENT_SENTENCE}"

Crosswalks map these field slots to disclosure frameworks your teams may already use (UK IFRS S2, EU CSRD, US SEC climate, AASB S2). Start here: ${ADOPT_URL}

${FOUNDING_ALLIANCE_PITCH.ask}

Conflict rules: Archive is implementation partner only (no Council vote); Vault holds IP until Foundation incorporation; affiliate referrals are unrelated to founding consultation.

Charter consultation: ${CONSULTATION_URL}
`

/** Plain-text email body for private practice outreach. */
export const FOUNDING_PITCH_EMAIL_PRACTICE = `Subject: One pilot, not another standards deck — ${TLA185_DISPLAY_ID}

Dear [Principal / BIM lead],

${FOUNDING_ALLIANCE_PITCH.problem}

${FOUNDING_ALLIANCE_PITCH.offer}

Practical ask: validate one bundle this week (${SCHEMA_PORTAL_URL}/validate) and cite the registry in one deliverable — handover memo, climate appendix, or client-facing methods section. Fifteen-minute guide: ${ADOPT_URL}

If the pilot surfaces mapping gaps, we want those as public RFC feedback — not a sales conversation.

Founding alliance is draft consultation only (not incorporated). Review the charter if you want your practice listed as a founding supporter: ${CHARTER_URL}

${FOUNDING_ALLIANCE_PITCH.ask}
`

/** Full one-pager as plain text (all sections). */
export function formatFoundingAlliancePitchPlainText() {
  const { problem, offer, ask, whatWeDoNotAsk, conflictRules, links } = FOUNDING_ALLIANCE_PITCH
  return [
    'FOUNDING ALLIANCE — ONE-PAGE PITCH (DRAFT / NOT INCORPORATED)',
    '',
    'PROBLEM',
    problem,
    '',
    'OFFER',
    offer,
    '',
    'ASK',
    ask,
    '',
    'WHAT WE DO NOT ASK',
    ...whatWeDoNotAsk.map((item) => `• ${item}`),
    '',
    'CONFLICT RULES',
    ...conflictRules.map((item) => `• ${item}`),
    '',
    'LINKS',
    ...links.map((l) => `• ${l.label}: ${l.href}`),
    '',
    'PROCUREMENT SENTENCE',
    ADOPT_PROCUREMENT_SENTENCE
  ].join('\n')
}
