/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/node'],
  rules: {
    'n/prefer-promises/dns': ['error'],
    'n/prefer-promises/fs': ['error'],
  },
}
