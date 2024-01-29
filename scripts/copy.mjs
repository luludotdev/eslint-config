// @ts-check

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { isLint, iterateDir, LINT_DIR } from './common.mjs'

const lint = isLint()

/**
 * @param {string} name
 * @param {boolean} extend
 */
const legacy = (name, extend = true) =>
  `
const src = require('${lint ? '..' : '.'}/src/${name}.js')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [...src.extends${extend ? `, 'neon/${name}'` : ''}],
  plugins: src.plugins(true),
  rules: src.rules,
}
`.trim()

if (lint) await mkdir(LINT_DIR, { recursive: true })

const entries = await iterateDir()
const jobs = entries.map(async ([base, filepath]) => {
  const { name } = parse(base)
  const path = lint ? join(LINT_DIR, `./${base}`) : `./${base}`

  const content = await readFile(filepath, 'utf8')
  const extend = !content.includes('// no-extend\n')

  await writeFile(path, legacy(name, extend) + '\n')
})

await Promise.all(jobs)
