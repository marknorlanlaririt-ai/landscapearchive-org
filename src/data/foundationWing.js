import { ARCHIVE_ORIGIN, FOUNDATION_DISPLAY_NAME, SCHEMA_PORTAL_URL } from './site.js'

// Standard identity ---------------------------------------------------------

export const TLA169_STANDARD_ID = '169'
export const TLA169_DISPLAY_ID = 'TLA-169'
export const TLA169_FIELD_COUNT = 169

export const TLA185_STANDARD_ID = '185'
export const TLA185_DISPLAY_ID = 'TLA-185'
export const TLA185_FIELD_COUNT = 185
export const TLA185_VERSION = '1.0.0'
export const TLA185_EXTENDS_FIELD_COUNT = 16

export const TLA_CURRENT_STANDARD_ID = TLA185_STANDARD_ID
export const TLA_CURRENT_FIELD_COUNT = TLA185_FIELD_COUNT
export const TLA_CURRENT_VERSION = TLA185_VERSION

export const TLA185_REGISTRY_PREVIEW_FIELD_LIMIT = 28

// Apex-rooted paths (standalone site: home is "/") ---------------------------

export const HOME_PATH = '/'
export const GOVERNANCE_PATH = '/governance'
export const REGISTRY_PATH = '/registry'
export const SUPPORT_SECTION_ID = 'support'
export const SUPPORT_PATH = `/support`

export const FOUNDATION_MARK_ASSET = '/foundation-mark.svg'

// GitHub / schema portal — public-first: link directly (no sign-in gate) -----

export const OPEN_STANDARD_GITHUB_REPO = 'marknorlanlaririt-ai/landscape-archive-foundation'
export const OPEN_STANDARD_GITHUB_URL = `https://github.com/${OPEN_STANDARD_GITHUB_REPO}`
export const OPEN_STANDARD_GITHUB_TAG_URL = `https://github.com/${OPEN_STANDARD_GITHUB_REPO}/releases/tag/185-v1.0.0`
export const FEDERATION_SCHEMA_PORTAL_URL = SCHEMA_PORTAL_URL

// Licence -------------------------------------------------------------------

export const FOUNDATION_LICENCE_ID = 'CC-BY-NC-ND-4.0'
export const FOUNDATION_LICENCE_LABEL = 'CC BY-NC-ND 4.0'
export const FOUNDATION_LICENCE_URL = 'https://creativecommons.org/licenses/by-nc-nd/4.0/'

// Ownership / entity structure ----------------------------------------------
//
// Pre-incorporation, the copyright in the public specification and this site
// sits with the IP holding company (the Vault), NOT the trading company
// (the Archive) and NOT the Foundation — which has no legal personality until
// it is incorporated. On incorporation the public-spec copyright is assigned
// from the Vault to the Foundation. See governance → "Three-entity structure".

/** Private IP holding company — current copyright owner (interim). */
export const FOUNDATION_IP_HOLDER = 'The Landscape Vault Pty Ltd'

/** Commercial operating company + interim host / implementation partner. */
export const FOUNDATION_INTERIM_HOST = 'The Landscape Archive Pty Ltd'

/** Intended eventual owner of the public specification copyright. */
export const FOUNDATION_ASSIGNEE = FOUNDATION_DISPLAY_NAME

/** Build the interim copyright line shown in the footer. */
export const buildFoundationCopyrightLine = (year = new Date().getFullYear()) =>
  `© ${year} ${FOUNDATION_IP_HOLDER}. Public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification licensed under ${FOUNDATION_LICENCE_LABEL}; copyright to be assigned to ${FOUNDATION_ASSIGNEE} on incorporation.`

// Commercial + support handoffs → the Archive .com.au site (absolute) --------

export const FOUNDATION_COMMERCIAL_CONTACT_TOPIC = 'foundation-commercial-licence'
export const FOUNDATION_COMMERCIAL_CONTACT_PATH = `${ARCHIVE_ORIGIN}/contact?topic=${FOUNDATION_COMMERCIAL_CONTACT_TOPIC}`
export const FOUNDATION_COMMERCIAL_INTEGRATIONS_URL = `${ARCHIVE_ORIGIN}/shop`

export const FOUNDATION_SUPPORT_CONTACT_TOPIC = 'foundation-support'
export const FOUNDATION_SUPPORT_CONTACT_PATH = `${ARCHIVE_ORIGIN}/contact?topic=${FOUNDATION_SUPPORT_CONTACT_TOPIC}`

export const ARCHIVE_CITATIONS_PATH = `${ARCHIVE_ORIGIN}/citations`

export const FOUNDATION_GOVERNANCE_CITATION_URL = `${SITE_ORIGIN.replace(/\/$/, '')}${GOVERNANCE_PATH}`

// Notices -------------------------------------------------------------------

export const FOUNDATION_LICENCE_SUMMARY =
  'Public TLA-185 / TLA-169 specification and schema documentation — attribution required; non-commercial reference without modification.'

export const FOUNDATION_COMMERCIAL_LICENCE_NOTICE =
  'Commercial use, TLA Brain, enterprise integration, and 3D assets require a separate licence.'

export const FOUNDATION_HOSTING_NOTICE =
  `Public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specification copyright is held by ${FOUNDATION_IP_HOLDER} (IP holding company). Interim hosting by ${FOUNDATION_INTERIM_HOST} (implementation partner). The copyright is intended for assignment to ${FOUNDATION_ASSIGNEE} on incorporation.`

export const FOUNDATION_DRAFT_BANNER =
  'Draft governance (interim). The Landscape Archive Foundation is not yet an incorporated entity and is not affiliated with, endorsed by, or representative of any professional institute or government body. The Landscape Archive Pty Ltd provides interim hosting as implementation partner. This page is informational only and is not legal advice.'
