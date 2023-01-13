/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/next'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['off'],

    'n/prefer-global/url-search-params': ['off'],

    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],

    'unicorn/prefer-node-protocol': ['off'],
  },
}
