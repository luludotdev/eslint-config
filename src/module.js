// @ts-check

/** @type {string[]} */
const extend = []

/**
 * @param {boolean} old
 */
const plugins = old => (old ? [] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {}

module.exports = { extends: extend, plugins, rules }
