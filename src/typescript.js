/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['neon/typescript'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
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

    // TODO: Uncomment when eslint-import-i is updated or replaced
    // 'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    'typescript-sort-keys/interface': ['off'],
  },
}
