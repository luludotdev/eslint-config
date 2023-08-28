// @ts-check

import { writeFile } from 'node:fs/promises'
import { parse } from 'node:path'
import { iterateDir } from './common.mjs'

/**
 * @param {string} name
 */
const legacy = name =>
  `
const src = require('./src/${name}.js')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [...src.extends, 'neon/${name}'],
  plugins: src.plugins(true),
  rules: src.rules,
}
`.trim()

const entries = await iterateDir()
const jobs = entries.map(async ([base]) => {
  const { name } = parse(base)

  await writeFile(`./${base}`, legacy(name) + '\n')
})

await Promise.all(jobs)
