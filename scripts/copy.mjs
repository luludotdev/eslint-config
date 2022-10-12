import { writeFile } from 'node:fs/promises'
import { iterateDir } from './common.mjs'

const entries = await iterateDir()
const jobs = entries.map(async ([name]) => {
  const data = `module.exports = require('./src/${name}')\n`
  await writeFile(`./${name}`, data)
})

await Promise.all(jobs)
