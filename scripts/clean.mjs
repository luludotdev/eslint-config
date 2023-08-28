import { rm, unlink } from 'node:fs/promises'
import { isLint, iterateDir, LINT_DIR } from './common.mjs'

const lint = isLint()

if (lint) {
  await rm(LINT_DIR, { force: true, recursive: true })
} else {
  const entries = await iterateDir()
  const jobs = entries.map(async ([name]) => {
    try {
      await unlink(`./${name}`)
    } catch {
      // Pass
    }
  })

  await Promise.all(jobs)
}
