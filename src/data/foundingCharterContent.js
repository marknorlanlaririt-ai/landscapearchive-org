import {
  FOUNDATION_IP_HOLDER,
  FOUNDATION_INTERIM_HOST,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  TLA169_DISPLAY_ID,
  TLA185_DISPLAY_ID,
  ADOPT_PATH
} from './foundationWing.js'
import { ARCHIVE_ORIGIN } from './site.js'

export const FOUNDING_CHARTER_PATH = '/founding-charter'
export const FOUNDING_CHARTER_DOC_PATH = '/docs/FOUNDATION_DRAFT_CONSTITUTION.md'

export const FOUNDING_CHARTER_CONSULTATION_URL = `${ARCHIVE_ORIGIN}/contact?intent=founding-alliance`

export function buildFoundingCharterSections() {
  return Object.freeze([
    {
      id: 'what-this-is',
      heading: 'What this page is',
      paragraphs: [
        'Draft charter consultation for The Landscape Archive Foundation — intended independent steward of the open landscape metadata standard. The Foundation is <strong>not yet incorporated</strong>.',
        'Publishing a draft constitution for comment is common for standards bodies. This page does <strong>not</strong> solicit binding membership and is <strong>not</strong> legal advice.',
        'Organisations reviewing the draft may be listed as founding supporters when the standard launches — separate from commercial Archive adoption or the affiliate programme.'
      ]
    },
    {
      id: 'legal-framing',
      heading: 'Legal framing',
      paragraphs: [
        'The draft constitution is a starting point for qualified advisers. It is <strong>not filing-ready</strong> until reviewed by an Australian not-for-profit / charity lawyer.',
        'Do <strong>not</strong> claim incorporated charity status, ACNC registration, or government endorsement until those processes complete. Public specification copyright is held by <strong>' +
          FOUNDATION_IP_HOLDER +
          '</strong> pending assignment. Interim hosting: <strong>' +
          FOUNDATION_INTERIM_HOST +
          '</strong>.'
      ],
      bullets: [
        'Draft consultation — not a membership contract',
        'Not legal advice — lawyer review required before ASIC lodgement',
        'No incorporated status claim until registration completes',
        'Vault holds IP until assignment deed executes'
      ]
    },
    {
      id: 'incorporation-timeline',
      heading: 'Proposed timeline',
      facts: [
        { label: '1 · Consultation', value: 'Publish draft; collect founding-alliance feedback' },
        { label: '2 · Lawyer review', value: 'Adapt for CLG, employment law, cultural-protocol, ACNC strategy' },
        { label: '3 · ASIC registration', value: 'Company limited by guarantee; adopt constitution; appoint directors' },
        { label: '4 · IP assignment', value: `${FOUNDATION_IP_HOLDER} → incorporated Foundation` },
        { label: '5 · Founding alliance', value: 'Members admitted; inaugural Council; by-laws' },
        { label: '6 · ACNC (if applicable)', value: 'Only after legal advice — not assumed' }
      ],
      actions: [
        { label: 'Download draft (Markdown)', href: FOUNDING_CHARTER_DOC_PATH },
        { label: 'Charter consultation', href: FOUNDING_CHARTER_CONSULTATION_URL, external: true }
      ]
    },
    {
      id: 'draft-summary',
      heading: 'Draft constitution summary',
      paragraphs: [
        `Proposed entity: <strong>The Landscape Archive Foundation Limited</strong> — company limited by guarantee under the <em>Corporations Act 2001</em> (Cth). Objects centre on stewardship of ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID}, education infrastructure, RFC governance, and advocacy — without controlling member practices or commercial stacks.`,
        'Three-entity firewall: Foundation (public specification), Vault (proprietary IP), Archive (commercial operator). Implementation partners hold no Council voting majority.'
      ],
      bullets: [
        'Membership — practice, academic, public-body, Indigenous advisory, implementation advisory (no vote)',
        'Council — 7 voting seats; 2-year terms; conflict-of-interest rules',
        'RFC — 14-day comment; semver; simple majority minor; two-thirds major / charter',
        'Cultural context — Indigenous advisory sign-off required',
        'Dissolution — asset lock keeps open specification under public licences'
      ],
      actions: [
        { label: 'Full draft constitution', href: FOUNDING_CHARTER_DOC_PATH },
        { label: 'Governance', href: '/governance#founding-alliance' }
      ]
    },
    {
      id: 'three-entity',
      heading: 'Three-entity structure',
      facts: [
        { label: FOUNDATION_IP_HOLDER, value: 'Current copyright owner of the public specification pending assignment.' },
        { label: FOUNDATION_INTERIM_HOST, value: 'Commercial operator and interim Foundation hosting. No default Council vote.' },
        { label: 'The Landscape Archive Foundation Limited (proposed)', value: 'Intended independent steward. Not incorporated.' }
      ]
    },
    {
      id: 'respond',
      heading: 'Respond',
      paragraphs: [
        'Nominate a representative, request a briefing, or submit structured feedback. Feedback may inform the lawyer-reviewed version; it does not create membership.',
        'Governance context: <a href="/governance">governance page</a>. Commercial licensing and affiliate partnership use separate Archive routes.'
      ],
      actions: [
        {
          label: 'Charter consultation',
          href: FOUNDING_CHARTER_CONSULTATION_URL,
          external: true
        },
        { label: 'Adoption', href: ADOPT_PATH },
        { label: 'Cultural pillars', href: '/governance#cultural-pillars' },
        { label: 'Governance', href: '/governance' }
      ]
    }
  ])
}
