import { unlink } from 'node:fs/promises'
import { iterateDir } from './common.mjs'

const entries = await iterateDir()
const jobs = entries.map(async ([name]) => {
  try {
    await unlink(`./${name}`)
  } catch {
    // Pass
  }
})

await Promise.all(jobs)
