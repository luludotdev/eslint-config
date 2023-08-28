// @ts-check

/** @type {string[]} */
const extend = []

/**
 * @param {boolean} old
 */
const plugins = old => (old ? [] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  'n/prefer-promises/dns': ['error'],
  'n/prefer-promises/fs': ['error'],
}

module.exports = { extends: extend, plugins, rules }
