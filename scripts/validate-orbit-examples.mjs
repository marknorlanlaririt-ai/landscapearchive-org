#!/usr/bin/env node
/**
 * Required-keys smoke for Foundation draft orbit golden examples.
 * Zero deps — not a full JSON Schema engine; not Archive Seal crypto.
 * Draft — not normative.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/** @typedef {{ path: string[], message: string }} Issue */

/**
 * @param {unknown} value
 * @param {Record<string, unknown>} schema
 * @param {string[]} path
 * @returns {Issue[]}
 */
function validateAgainst(value, schema, path = []) {
  /** @type {Issue[]} */
  const issues = []
  const here = path.length ? path.join('.') : '(root)'

  if (schema.type === 'object') {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
      issues.push({ path, message: `${here}: expected object` })
      return issues
    }
    const obj = /** @type {Record<string, unknown>} */ (value)
    for (const key of schema.required || []) {
      if (!(key in obj)) {
        issues.push({ path: [...path, key], message: `missing required key: ${[...path, key].join('.')}` })
      }
    }
    const props = /** @type {Record<string, Record<string, unknown>>} */ (schema.properties || {})
    for (const [key, childSchema] of Object.entries(props)) {
      if (key in obj) {
        issues.push(...validateAgainst(obj[key], childSchema, [...path, key]))
      }
    }
    return issues
  }

  if (schema.type === 'array') {
    if (!Array.isArray(value)) {
      issues.push({ path, message: `${here}: expected array` })
      return issues
    }
    if (typeof schema.minItems === 'number' && value.length < schema.minItems) {
      issues.push({
        path,
        message: `${here}: expected at least ${schema.minItems} item(s), got ${value.length}`
      })
    }
    if (schema.items) {
      value.forEach((item, index) => {
        issues.push(...validateAgainst(item, /** @type {Record<string, unknown>} */ (schema.items), [...path, String(index)]))
      })
    }
    return issues
  }

  if (schema.type === 'string') {
    if (typeof value !== 'string') {
      issues.push({ path, message: `${here}: expected string` })
    } else if (typeof schema.minLength === 'number' && value.length < schema.minLength) {
      issues.push({ path, message: `${here}: string too short` })
    }
    return issues
  }

  if (schema.type === 'integer') {
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      issues.push({ path, message: `${here}: expected integer` })
    } else if ('const' in schema && value !== schema.const) {
      issues.push({ path, message: `${here}: expected ${schema.const}, got ${value}` })
    }
    return issues
  }

  if (schema.type === 'boolean') {
    if (typeof value !== 'boolean') {
      issues.push({ path, message: `${here}: expected boolean` })
    }
    return issues
  }

  if ('const' in schema && value !== schema.const) {
    issues.push({ path, message: `${here}: expected ${JSON.stringify(schema.const)}, got ${JSON.stringify(value)}` })
  }

  return issues
}

const ORBITS = [
  {
    slug: 'tla-syn',
    example: 'public/examples/orbits/tla-syn-example.json',
    schema: 'public/schemas/orbits/tla-syn.required.schema.json'
  },
  {
    slug: 'tla-evid',
    example: 'public/examples/orbits/tla-evid-example.json',
    schema: 'public/schemas/orbits/tla-evid.required.schema.json'
  },
  {
    slug: 'tla-ml',
    example: 'public/examples/orbits/tla-ml-example.json',
    schema: 'public/schemas/orbits/tla-ml.required.schema.json'
  }
]

let failed = 0

for (const orbit of ORBITS) {
  const examplePath = join(root, orbit.example)
  const schemaPath = join(root, orbit.schema)
  const example = JSON.parse(readFileSync(examplePath, 'utf8'))
  const schema = JSON.parse(readFileSync(schemaPath, 'utf8'))
  const issues = validateAgainst(example, schema)
  if (issues.length === 0) {
    console.log(`ok  ${orbit.slug} · ${orbit.example}`)
  } else {
    failed += 1
    console.error(`FAIL ${orbit.slug}`)
    for (const issue of issues) {
      console.error(`  - ${issue.message}`)
    }
  }
}

if (failed) {
  console.error(`\n${failed}/${ORBITS.length} orbit example(s) failed required-keys smoke.`)
  process.exitCode = 1
} else {
  console.log(`\n${ORBITS.length}/${ORBITS.length} golden examples passed (Draft — not normative).`)
}
