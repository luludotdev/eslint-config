// @ts-check

/** @type {string[]} */
const extend = []

/**
 * @param {boolean} old
 */
const plugins = old => (old ? [] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  '@typescript-eslint/no-use-before-define': ['off'],

  'n/prefer-global/url-search-params': ['off'],

  'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],

  'unicorn/prefer-node-protocol': ['off'],
}

module.exports = { extends: extend, plugins, rules }
