import {
  ARCHIVE_CITATIONS_PATH,
  FOUNDATION_COMMERCIAL_CONTACT_PATH,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  GOVERNANCE_PATH,
  REGISTRY_PATH,
  SUPPORT_PATH,
  TLA185_DISPLAY_ID
} from './foundationWing.js'
import { ARCHIVE_ORIGIN } from './site.js'

export const FOUNDATION_CONTACT_EMAIL = 'admin@landscapearchive.com.au'

export const FOUNDATION_CONTACT_PATH = '/contact'

/** Editorial sections for the Foundation contact page. */
export function buildFoundationContactSections() {
  return Object.freeze([
    {
      id: 'who-handles-what',
      heading: 'Who handles what',
      paragraphs: [
        'The Landscape Archive Foundation is not yet an incorporated entity. Interim correspondence for the open standard is handled through The Landscape Archive Pty Ltd (implementation partner) and The Landscape Vault Pty Ltd (IP holding company).',
        'Use the routes below so correspondence reaches the appropriate desk. Responses are usually provided within one to two business days.'
      ],
      facts: [
        { label: 'Open standard & governance', value: 'Specification stewardship, registry questions, citation, and governance updates.' },
        { label: 'Commercial licensing', value: 'Enterprise use, TLA Brain, BIM integration, and paid implementation beyond CC BY-NC-ND.' },
        { label: 'Voluntary support', value: 'Hosting contributions and recurring support arrangements — see Support the standard.' }
      ]
    },
    {
      id: 'contact-routes',
      heading: 'Contact routes',
      paragraphs: [
        'The secure contact form lives on the commercial Archive site (shared operations desk). Choose the topic that best matches the enquiry — Foundation-standard messages are routed to the published contact desk.'
      ],
      actions: [
        { label: 'General Foundation enquiry', href: `${ARCHIVE_ORIGIN}/contact?topic=foundation-support`, external: true },
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Support the standard', href: FOUNDATION_SUPPORT_CONTACT_PATH, external: true },
        { label: 'Email directly', href: `mailto:${FOUNDATION_CONTACT_EMAIL}?subject=${encodeURIComponent('Foundation enquiry')}` }
      ]
    },
    {
      id: 'self-service',
      heading: 'Before you write',
      paragraphs: [
        `Many questions are answered publicly without a ticket. The ${TLA185_DISPLAY_ID} specification, field registry, and governance model are open for independent review.`
      ],
      actions: [
        { label: 'Governance', href: GOVERNANCE_PATH },
        { label: 'Field registry', href: REGISTRY_PATH },
        { label: 'Citation guidance', href: `${GOVERNANCE_PATH}#citation-guidance` },
        { label: 'Archive citation hub', href: ARCHIVE_CITATIONS_PATH, external: true },
        { label: 'Voluntary support', href: SUPPORT_PATH }
      ]
    },
    {
      id: 'press-media',
      heading: 'Press & media',
      paragraphs: [
        'For embargoed material, spokesperson requests, or coverage of the open standard, use the contact form with a clear subject line or email directly with “Press — Foundation” in the subject.',
        'Brand assets and the borderless TLA lettermark are available on this site; cite the Foundation and specification version in coverage (see Governance → How to cite).'
      ],
      actions: [
        { label: 'Media page', href: '/media' },
        { label: 'Press enquiry form', href: `${ARCHIVE_ORIGIN}/contact?topic=foundation-support`, external: true }
      ]
    }
  ])
}
