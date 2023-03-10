/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/jsx'],
  rules: {
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
  },
}
