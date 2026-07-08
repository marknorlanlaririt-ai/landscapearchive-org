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
        'This is a <strong>draft charter consultation</strong> for The Landscape Archive Foundation — an intended independent steward of the open landscape metadata standard. The Foundation is <strong>not yet incorporated</strong> and has no legal personality today.',
        'Publishing a draft constitution for public comment is lawful and common for standards bodies and not-for-profit alliances. This page does <strong>not</strong> solicit binding membership in an unincorporated entity, and it does <strong>not</strong> constitute legal advice.',
        'Organisations reviewing the draft and nominating a representative may be listed as founding supporters when the standard launches publicly — separate from commercial Archive product adoption or the affiliate partner programme.'
      ]
    },
    {
      id: 'legal-framing',
      heading: 'Legal framing',
      paragraphs: [
        'The AI-assisted draft constitution below is a starting point for qualified advisers. It is <strong>not filing-ready</strong> until reviewed by an Australian not-for-profit / charity lawyer familiar with companies limited by guarantee, ACNC obligations, and cultural-protocol governance.',
        'Do <strong>not</strong> claim incorporated charity status, ACNC registration, or government endorsement until those processes complete. Public specification copyright is held by <strong>' +
          FOUNDATION_IP_HOLDER +
          '</strong> pending assignment to the incorporated Foundation by deed. Interim hosting is provided by <strong>' +
          FOUNDATION_INTERIM_HOST +
          '</strong> as implementation partner.'
      ],
      bullets: [
        'Draft consultation — lawful; not a membership contract',
        'Not legal advice — lawyer review required before ASIC lodgement',
        'No incorporated status claim until ASIC (and ACNC if applicable) complete',
        'Vault holds IP until formal assignment deed executes'
      ]
    },
    {
      id: 'incorporation-timeline',
      heading: 'Proposed incorporation timeline',
      facts: [
        { label: '1 · Consultation', value: 'Publish draft constitution; collect founding alliance feedback via this page' },
        { label: '2 · Lawyer review', value: 'Adapt for CLG, employment law, cultural-protocol enforceability, and ACNC strategy if sought' },
        { label: '3 · ASIC registration', value: 'Register company limited by guarantee; adopt constitution; appoint directors' },
        { label: '4 · IP assignment', value: `Execute assignment deed: ${FOUNDATION_IP_HOLDER} → incorporated Foundation` },
        { label: '5 · Founding alliance', value: 'Founding members admitted; inaugural Council elected; by-laws adopted' },
        { label: '6 · ACNC (if applicable)', value: 'Charity registration only after legal advice — not assumed in this draft' }
      ],
      actions: [
        { label: 'Download full draft (Markdown)', href: FOUNDING_CHARTER_DOC_PATH },
        { label: 'Charter consultation', href: FOUNDING_CHARTER_CONSULTATION_URL, external: true }
      ]
    },
    {
      id: 'draft-summary',
      heading: 'Draft constitution summary',
      paragraphs: [
        `The proposed entity is <strong>The Landscape Archive Foundation Limited</strong> — a company limited by guarantee under the <em>Corporations Act 2001</em> (Cth). Its objects centre on stewardship of the open ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} landscape metadata standard, education infrastructure, RFC governance, and national advocacy — without controlling member practices or commercial product stacks.`,
        'A <strong>three-entity firewall</strong> separates the Foundation (public specification), the Vault (proprietary IP holding), and the Archive (commercial operator). Implementation partners, including The Landscape Archive, hold no voting majority on Council.'
      ],
      bullets: [
        'Membership classes — practice, academic, public-body, Indigenous advisory (protocol authority), implementation advisory (no vote)',
        'Council — 7 voting seats across sectors; 2-year terms; conflict-of-interest rules',
        'RFC process — 14-day comment period; semver; simple majority for minor releases; two-thirds super-majority for major / charter amendments',
        'Cultural context — Indigenous advisory sign-off required; cannot be overridden by majority',
        'Dissolution — asset lock keeps open specification under public licences; surplus to compatible not-for-profit'
      ],
      actions: [
        { label: 'Read full draft constitution', href: FOUNDING_CHARTER_DOC_PATH },
        { label: 'Governance overview', href: '/governance#founding-alliance' }
      ]
    },
    {
      id: 'three-entity',
      heading: 'Three-entity structure',
      facts: [
        { label: FOUNDATION_IP_HOLDER, value: 'Private holding company. Current copyright owner of the public specification pending assignment.' },
        { label: FOUNDATION_INTERIM_HOST, value: 'Commercial operator and interim Foundation hosting. Founding implementation partner — no default Council vote.' },
        { label: 'The Landscape Archive Foundation Limited (proposed)', value: 'Intended independent steward. Not incorporated. Public specification under CC BY-NC-ND 4.0 after assignment.' }
      ]
    },
    {
      id: 'respond',
      heading: 'Respond to the consultation',
      paragraphs: [
        'Use the charter consultation contact route to nominate an organisational representative, request a briefing, or submit structured feedback on the draft. Feedback may inform the lawyer-reviewed version; it does not create membership until incorporation completes.',
        'For governance context and the five Foundation Standards, see the <a href="/governance">governance page</a>. For commercial licensing or affiliate partnership, use separate Archive contact routes.'
      ],
      actions: [
        {
          label: 'Charter consultation',
          href: FOUNDING_CHARTER_CONSULTATION_URL,
          external: true
        },
        { label: 'Adoption quickstart', href: ADOPT_PATH },
        { label: 'Governance', href: '/governance' }
      ]
    }
  ])
}
