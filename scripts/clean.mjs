import { unlink } from 'node:fs/promises'
import { iterateDir } from './common.mjs'

const entries = await iterateDir()
const jobs = entries.map(async ([name]) => {
  await unlink(`./${name}`)
})

await Promise.all(jobs)
