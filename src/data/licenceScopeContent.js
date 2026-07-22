/**
 * Quiet Licence & scope copy for Foundation (public, scope-limited).
 * Keep aligned with la-frontend foundationWing CC BY-NC-ND decision.
 * Do not add Vault→Archive commercial grant campaign lines here.
 */

import {
  FOUNDATION_ASSIGNEE,
  FOUNDATION_COMMERCIAL_CONTACT_PATH,
  FOUNDATION_IP_HOLDER,
  FOUNDATION_INTERIM_HOST,
  FOUNDATION_LICENCE_LABEL,
  FOUNDATION_LICENCE_URL,
  TLA169_DISPLAY_ID,
  TLA185_DISPLAY_ID
} from './foundationWing.js'

export const LICENCE_PATH = '/licence'

export const LICENCE_PAGE_TITLE = 'Licence & scope'

export const LICENCE_PAGE_DESCRIPTION =
  `Public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification under ${FOUNDATION_LICENCE_LABEL}. Commercial products, desktop tools, Archive Seal, and populated datasets are licensed separately.`

export function buildLicenceScopeSections() {
  return Object.freeze([
    {
      id: 'public-specification',
      heading: 'Public specification',
      paragraphs: [
        `Public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification and schema documentation are published under ${FOUNDATION_LICENCE_LABEL}.`,
        'Attribution is required. Non-commercial reference use is permitted without modification under that licence. Commercial implementation requires a separate Archive licence.'
      ],
      actions: [
        { label: FOUNDATION_LICENCE_LABEL, href: FOUNDATION_LICENCE_URL, external: true }
      ]
    },
    {
      id: 'copyright',
      heading: 'Copyright',
      paragraphs: [
        `Copyright in the public specification is held by ${FOUNDATION_IP_HOLDER}.`,
        `Copyright is intended for assignment to ${FOUNDATION_ASSIGNEE} when a suitable independent entity is established. Until then, the Foundation is stewarded and powered by ${FOUNDATION_IP_HOLDER}; commercial products and support are operated by ${FOUNDATION_INTERIM_HOST}.`
      ]
    },
    {
      id: 'open-grammar-vs-commercial',
      heading: 'Open grammar vs commercial tools',
      paragraphs: [
        `Citing the open ${TLA185_DISPLAY_ID} field dictionary and conformance rules under ${FOUNDATION_LICENCE_LABEL} is free. That Creative Commons notice does not licence Landscape Archive Tools desktop applications, filled Library depth, Hub / Revit delivery, Data API, Archive Seal attestation, or other commercial products of ${FOUNDATION_INTERIM_HOST}.`,
        'Self-serve Foundation validators and Evidence Checker may remain paused. Local desktop Evidence checks and admin-operated Seal verification are Archive product surfaces — not the open Creative Commons grant. Binding Archive terms are published on the commercial site.'
      ],
      actions: [
        { label: 'Archive Terms of Use', href: 'https://landscapearchive.com.au/legal?tab=terms-of-use', external: true },
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true }
      ]
    },
    {
      id: 'commercial-products',
      heading: 'Commercial products',
      paragraphs: [
        `Commercial products, populated datasets, and software — including the Landscape Library, The Landscape Archive Hub, Landscape Archive Tools desktop applications, connectors, Studio+™ materials, Data API, Archive Seal, and related delivery tooling — are licensed separately by ${FOUNDATION_INTERIM_HOST}.`,
        'Those products are not offered under Creative Commons.'
      ],
      actions: [
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Archive legal centre', href: 'https://landscapearchive.com.au/legal', external: true }
      ]
    }
  ])
}
