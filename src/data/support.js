// Voluntary Foundation support — bank transfer (interim via Archive Pty Ltd).

export const FOUNDATION_SUPPORT_ACCOUNT_NAME = 'The Landscape Archive Pty Ltd'
export const FOUNDATION_SUPPORT_BSB = '067-873'
export const FOUNDATION_SUPPORT_ACCOUNT_NUMBER = '2184 8100'
export const FOUNDATION_SUPPORT_CURRENCY = 'AUD'

export const FOUNDATION_SUPPORT_PAYMENT_REFERENCE_PREFIX = 'FOUNDATION-SUPPORT'
export const FOUNDATION_SUPPORT_PAYMENT_REFERENCE_HINT =
  `${FOUNDATION_SUPPORT_PAYMENT_REFERENCE_PREFIX} — your name or organisation`

export const FOUNDATION_SUPPORT_BANK_FACTS = Object.freeze([
  { label: 'Account name', value: FOUNDATION_SUPPORT_ACCOUNT_NAME },
  { label: 'BSB', value: FOUNDATION_SUPPORT_BSB },
  { label: 'Account number', value: FOUNDATION_SUPPORT_ACCOUNT_NUMBER },
  { label: 'Currency', value: FOUNDATION_SUPPORT_CURRENCY },
  { label: 'Payment reference', value: FOUNDATION_SUPPORT_PAYMENT_REFERENCE_HINT }
])
