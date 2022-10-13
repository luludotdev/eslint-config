const jsx = require('./jsx.js')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/react'],
  rules: {
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
  },
}
