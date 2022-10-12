import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SCRIPTS_DIR = dirname(fileURLToPath(import.meta.url))
const SRC_DIR = join(SCRIPTS_DIR, '..', 'src')

export const iterateDir = async () => {
  /**
   * @type {[name: string, path: string][]}
   */
  const entries = []
  const dir = await readdir(SRC_DIR)

  for (const file of dir) {
    const path = join(SRC_DIR, file)
    entries.push([file, path])
  }

  return entries
}
