#!/usr/bin/env node
/**
 * Fail-closed org Pages deploy: run smoke:org, then build + wrangler deploy.
 *
 * Escape hatch (emergencies only):
 *   SKIP_ORG_SMOKES=1 npm run deploy
 *   npm run deploy:unsafe
 */

import { spawn } from 'node:child_process'

function run(command, args, { env = process.env } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      env
    })
    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} ${args.join(' ')} exited ${code}`))
    })
  })
}

async function main() {
  const skip = String(process.env.SKIP_ORG_SMOKES || '').trim() === '1'

  if (skip) {
    console.warn('[deploy] SKIP_ORG_SMOKES=1 — skipping smoke:org (emergency only)')
  } else {
    console.log('[deploy] Running smoke:org (fail-closed)…')
    await run('npm', ['run', 'smoke:org'])
  }

  await run('npm', ['run', 'build'])
  await run('npx', [
    'wrangler',
    'pages',
    'deploy',
    'dist',
    '--project-name',
    'landscapearchive-org',
    '--branch',
    'main',
    '--commit-dirty=true'
  ])
}

main().catch((error) => {
  console.error(error?.message || error)
  process.exitCode = 1
})
