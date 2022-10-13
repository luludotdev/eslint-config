/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/jsx'],
  rules: {
    'react/jsx-fragments': ['error', 'syntax'],
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
  },
}
