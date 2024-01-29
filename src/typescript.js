// @ts-check

/** @type {string[]} */
const extend = []

/**
 * @param {boolean} old
 */
const plugins = old => (old ? [] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  '@typescript-eslint/consistent-type-definitions': 'off',
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

  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

  'typescript-sort-keys/interface': ['off'],
}

module.exports = { extends: extend, plugins, rules }
