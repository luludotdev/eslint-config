/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/next'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
  },
}
