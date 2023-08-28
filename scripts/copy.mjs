// @ts-check

import { mkdir, writeFile } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { isLint, iterateDir, LINT_DIR } from './common.mjs'

const lint = isLint()

/**
 * @param {string} name
 */
const legacy = name =>
  `
const src = require('${lint ? '..' : '.'}/src/${name}.js')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [...src.extends, 'neon/${name}'],
  plugins: src.plugins(true),
  rules: src.rules,
}
`.trim()

if (lint) await mkdir(LINT_DIR, { recursive: true })

const entries = await iterateDir()
const jobs = entries.map(async ([base]) => {
  const { name } = parse(base)
  const path = lint ? join(LINT_DIR, `./${base}`) : `./${base}`

  await writeFile(path, legacy(name) + '\n')
})

await Promise.all(jobs)
