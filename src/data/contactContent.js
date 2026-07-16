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
      heading: 'Routes',
      paragraphs: [
        'The Foundation is not yet incorporated. Interim correspondence is handled through The Landscape Archive Pty Ltd and The Landscape Vault Pty Ltd.',
        'Use the route that matches the enquiry. Responses are typically within one to two business days.'
      ],
      facts: [
        { label: 'Open standard & governance', value: 'Specification stewardship, registry, citation, governance updates.' },
        { label: 'Commercial licensing', value: 'Enterprise use, TLA Brain, BIM integration, paid implementation beyond CC BY-NC-ND.' },
        { label: 'Voluntary support', value: 'Hosting contributions — see Support the standard.' }
      ]
    },
    {
      id: 'contact-routes',
      heading: 'Contact',
      paragraphs: [
        'The secure contact form is on the commercial Archive site (shared operations desk). Foundation-standard messages are routed accordingly.'
      ],
      actions: [
        { label: 'Draft consultation — review pack', href: '#draft-consultation' },
        { label: 'Propose a dictionary term', href: '/propose-term' },
        { label: 'Foundation enquiry', href: `${ARCHIVE_ORIGIN}/contact?topic=foundation-support`, external: true },
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Support the standard', href: FOUNDATION_SUPPORT_CONTACT_PATH, external: true },
        { label: 'Email', href: `mailto:${FOUNDATION_CONTACT_EMAIL}?subject=${encodeURIComponent('Foundation enquiry')}` }
      ]
    },
    {
      id: 'self-service',
      heading: 'Published references',
      paragraphs: [
        `${TLA185_DISPLAY_ID} specification, field registry, and governance model are public.`
      ],
      actions: [
        { label: 'Governance', href: GOVERNANCE_PATH },
        { label: 'Field registry', href: REGISTRY_PATH },
        { label: 'Citation', href: `${GOVERNANCE_PATH}#citation-guidance` },
        { label: 'Archive citations', href: ARCHIVE_CITATIONS_PATH, external: true },
        { label: 'Voluntary support', href: SUPPORT_PATH }
      ]
    },
    {
      id: 'press-media',
      heading: 'Press',
      paragraphs: [
        'For embargoed material or spokesperson requests, use the Archive contact form or email admin@landscapearchive.com.au with “Press — Foundation” in the subject.',
        'Cite the Foundation and specification version (Governance → How to cite). A dedicated Media kit page will ship when press assets are ready.'
      ],
      actions: [
        { label: 'Press enquiry', href: `${ARCHIVE_ORIGIN}/contact?topic=foundation-support`, external: true },
        { label: 'How to cite', href: `${GOVERNANCE_PATH}#citation-guidance` }
      ]
    }
  ])
}
