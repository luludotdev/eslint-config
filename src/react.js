// @ts-check

const jsx = require('./jsx.js')

/** @type {string[]} */
const extend = ['neon/jsx']

/**
 * @param {boolean} old
 */
const plugins = old => (old ? [] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  ...jsx.rules,
  'react/boolean-prop-naming': [
    'error',
    {
      validateNested: true,
    },
  ],
  'react/function-component-definition': [
    'warn',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/no-array-index-key': ['warn'],
  'react/no-unescaped-entities': ['error'],
}

module.exports = { extends: extend, plugins, rules }
