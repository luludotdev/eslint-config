/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/typescript'],
  rules: {
    'typescript-sort-keys/interface': ['off'],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-throw-literal': [
      'error',
      {
        allowThrowingAny: false,
        allowThrowingUnknown: true,
      },
    ],
    '@typescript-eslint/no-useless-empty-export': ['error'],
    '@typescript-eslint/parameter-properties': [
      'error',
      { prefer: 'parameter-property' },
    ],
  },
}
