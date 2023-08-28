// @ts-check

/** @type {string[]} */
const extend = []

/**
 * @param {boolean} old
 */
const plugins = old => (old ? [] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': ['off'],
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    },
  ],
  'react/jsx-no-target-blank': [
    'error',
    {
      forms: true,
      warnOnSpreadAttributes: true,
    },
  ],
  'react/jsx-sort-default-props': ['off'],
  'react/sort-default-props': ['error'],
}

module.exports = { extends: extend, plugins, rules }
