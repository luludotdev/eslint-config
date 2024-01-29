// @ts-check
// no-extend

/** @type {string[]} */
const extend = ['plugin:drizzle/recommended']

/**
 * @param {boolean} old
 */
const plugins = old => (old ? ['drizzle'] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {}

module.exports = { extends: extend, plugins, rules }
