/**
 * Foundation tools / open downloads — public artefacts only.
 * Never list Hub installers, Revit connectors, commercial `.tla`, or `.lapkg`.
 *
 * Self-serve interactive tools stay paused until licence comfort improves
 * (see la-frontend/docs/LICENCE_DUAL_AND_INTRA_GROUP_LAWYER_BRIEF.md).
 */

import {
  ADOPT_PATH,
  FEDERATION_SCHEMA_PORTAL_URL,
  FOUNDING_CHARTER_PATH,
  REGISTRY_PATH,
  TLA185_DISPLAY_ID
} from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'

/** Open package inspector (TLA-185 JSON + Archive Audit Pack `.tlaa`). */
export const EVIDENCE_CHECKER_PATH = '/evidence-checker'

/** Optional aggregated downloads landing (footer may deep-link artefacts directly). */
export const DOWNLOADS_PATH = '/downloads'

/**
 * When true, Evidence Checker upload UI, validator “try it” CTAs, and similar
 * self-serve tooling present as paused — not production-ready.
 * Dictionary / registry / draft reference docs remain available.
 */
export const FOUNDATION_SELF_SERVE_TOOLS_PAUSED = true

export const FOUNDATION_TOOLS_PAUSED_NOTICE =
  'Self-serve Foundation tools are paused while we complete licence and stewardship clarity. Draft dictionary and registry reference remain available.'

export const FOUNDATION_TOOLS_FOOTER_LABEL = 'Foundation tools'
export const FOUNDATION_TOOLS_DISCLAIMER =
  'Foundation tools — not Landscape Archive Hub'

export const FOUNDATION_DOWNLOAD_LINKS = Object.freeze([
  {
    id: 'schema-pack',
    label: `${TLA185_DISPLAY_ID} schema pack`,
    href: `${SCHEMA_PORTAL_URL}/schema/manifest.json`,
    external: true,
    note: 'Draft open JSON Schema modules + manifest',
    kind: 'reference'
  },
  {
    id: 'field-registry-preview',
    label: `${TLA185_DISPLAY_ID} field registry (preview JSON)`,
    href: '/foundation-wing/tla185-fields-preview.json',
    external: false,
    note: 'Public preview fields on this site (draft)',
    kind: 'reference'
  },
  {
    id: 'field-registry-page',
    label: 'Field registry page',
    href: REGISTRY_PATH,
    external: false,
    kind: 'reference'
  },
  {
    id: 'dictionary',
    label: 'Open field dictionary',
    href: `${FEDERATION_SCHEMA_PORTAL_URL}/dictionary`,
    external: true,
    note: 'Draft public grammar — calm reference',
    kind: 'reference'
  },
  {
    id: 'open-pack-zip',
    label: 'Open artefacts zip',
    href: '/foundation-wing/tla185-open-pack.zip',
    external: false,
    note: 'Preview JSON, crosswalks, draft constitution',
    kind: 'reference'
  },
  {
    id: 'schema-portal',
    label: 'Schema portal',
    href: FEDERATION_SCHEMA_PORTAL_URL,
    external: true,
    note: FOUNDATION_SELF_SERVE_TOOLS_PAUSED
      ? 'Dictionary and draft schemas — validator paused'
      : 'Schema portal',
    kind: 'reference'
  },
  {
    id: 'validator',
    label: 'Schema portal validator',
    href: `${SCHEMA_PORTAL_URL}/validate`,
    external: true,
    note: 'Paused — not available for self-serve pilots yet',
    kind: 'tool',
    paused: true
  },
  {
    id: 'adopt',
    label: 'Adopt kit (practitioner guide)',
    href: ADOPT_PATH,
    external: false,
    kind: 'reference'
  },
  {
    id: 'studio-pilot',
    label: 'Studio Pilot Kit',
    href: `${ADOPT_PATH}#studio-pilot`,
    external: false,
    note: FOUNDATION_SELF_SERVE_TOOLS_PAUSED
      ? 'Draft citation path — interactive validation paused'
      : 'Copy-paste studio brief',
    kind: 'reference'
  },
  {
    id: 'charter',
    label: 'Draft constitution / charter',
    href: FOUNDING_CHARTER_PATH,
    external: false,
    kind: 'reference'
  },
  {
    id: 'charter-md',
    label: 'Draft constitution (Markdown)',
    href: '/docs/FOUNDATION_DRAFT_CONSTITUTION.md',
    external: false,
    kind: 'reference'
  },
  {
    id: 'crosswalk-uk',
    label: 'UK IFRS S2 crosswalk',
    href: '/crosswalk/uk-ifrs-s2',
    external: false,
    kind: 'reference'
  },
  {
    id: 'crosswalk-aasb',
    label: 'AASB S2 crosswalk',
    href: '/crosswalk/aasb-s2',
    external: false,
    kind: 'reference'
  },
  {
    id: 'crosswalk-eu',
    label: 'EU CSRD / ESRS crosswalk',
    href: '/crosswalk/eu-csrd-esrs',
    external: false,
    kind: 'reference'
  },
  {
    id: 'crosswalk-us',
    label: 'US SEC climate crosswalk',
    href: '/crosswalk/us-sec-climate',
    external: false,
    kind: 'reference'
  },
  {
    id: 'evidence-checker',
    label: 'Foundation Evidence Checker',
    href: EVIDENCE_CHECKER_PATH,
    external: false,
    note: 'Paused — not available yet',
    kind: 'tool',
    paused: true
  }
])

/** Compact footer subset — keep the column scannable; prefer draft reference over paused tools. */
export const FOUNDATION_DOWNLOAD_FOOTER_LINKS = Object.freeze(
  [
    FOUNDATION_DOWNLOAD_LINKS.find((l) => l.id === 'dictionary'),
    FOUNDATION_DOWNLOAD_LINKS.find((l) => l.id === 'field-registry-preview'),
    FOUNDATION_DOWNLOAD_LINKS.find((l) => l.id === 'open-pack-zip'),
    FOUNDATION_DOWNLOAD_LINKS.find((l) => l.id === 'adopt'),
    FOUNDATION_DOWNLOAD_LINKS.find((l) => l.id === 'charter'),
    FOUNDATION_DOWNLOAD_LINKS.find((l) => l.id === 'crosswalk-uk'),
    { id: 'all-downloads', label: 'All Foundation downloads', href: DOWNLOADS_PATH, external: false },
    { id: 'licence-scope', label: 'Licence & scope', href: '/licence', external: false }
  ].filter(Boolean)
)
