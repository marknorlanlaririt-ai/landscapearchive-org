/**
 * Institutional asks — proposed stewardship instruments the Foundation positions toward.
 * Honesty: these are public asks / goals in formation — not incorporated bodies,
 * not government agencies, and not instruments with legal force today.
 */

import { GOVERNANCE_PATH, TLA185_DISPLAY_ID } from './foundationWing.js'

export const INSTITUTIONAL_ASKS_SECTION_ID = 'institutional-asks'
export const INSTITUTIONAL_ASKS_PATH = `${GOVERNANCE_PATH}#${INSTITUTIONAL_ASKS_SECTION_ID}`
export const INSTITUTIONAL_ASKS_HEADING = 'Institutional asks'

export const INSTITUTIONAL_ASKS_STATUS_LINE =
  'Public asks in formation — not incorporated bodies, not government agencies, and not instruments with legal force today.'

/**
 * @typedef {{
 *   id: string,
 *   shortName: string,
 *   fullName: string,
 *   definition: string
 * }} InstitutionalAsk
 */

/** @type {readonly InstitutionalAsk[]} */
export const INSTITUTIONAL_ASKS = Object.freeze([
  {
    id: 'ebda',
    shortName: 'EBDA',
    fullName: 'The Ecological & Built-Environment Data Authority (EBDA)',
    definition:
      `A proposed public-interest stewardship instrument for ecological and built-environment data conformance, disclosure shape, and standards gravity that orbits ${TLA185_DISPLAY_ID}. ` +
      'The Foundation asks for EBDA as institutional weight beside the open grammar — not as an existing authority or government mandate.'
  },
  {
    id: 'eldx',
    shortName: 'ELDX',
    fullName: 'The International Land-Data Exchange (ELDX)',
    definition:
      'A proposed cross-border interchange for land and landscape project records under the open metadata grammar. ' +
      'The Foundation asks for ELDX as exchange infrastructure — not a marketplace, not a biodiversity occurrence network, and not a live exchange today.'
  }
])

export const INSTITUTIONAL_ASKS_INTRO =
  'Beyond the published field spine and draft orbits, the Foundation names two institutional instruments it seeks. ' +
  'Both are stewardship goals and public asks for consultation — not claims that such bodies already exist, are incorporated, or carry legal force.'

export const INSTITUTIONAL_ASKS_FOOTNOTE =
  'These asks sit with the Foundation layer. They are distinct from Archive Seal, commercial Archive products, and Vault proprietary IP. ' +
  'Licence for the open specification remains CC BY-NC-ND 4.0.'

/** Compact home / standards band copy (one short paragraph). */
export const INSTITUTIONAL_ASKS_HOME_BLURB =
  'The Foundation asks for two proposed instruments beside the open grammar: ' +
  'the Ecological & Built-Environment Data Authority (EBDA) for public-interest data stewardship gravity, ' +
  'and the International Land-Data Exchange (ELDX) for cross-border land/landscape interchange under open metadata — both asks in formation, not existing authorities.'
