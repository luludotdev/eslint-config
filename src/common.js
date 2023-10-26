// @ts-check

/** @type {string[]} */
const extend = []

/**
 * @param {boolean} old
 */
const plugins = old => (old ? ['eslint-comments', 'no-use-extend-native'] : {})

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  'accessor-pairs': [
    'error',
    {
      enforceForClassMembers: true,
      getWithoutSet: false,
      setWithoutGet: true,
    },
  ],
  'default-case': ['warn', { commentPattern: '^skip\\sdefault' }],
  'default-case-last': ['error'],
  'max-depth': ['warn'],
  'no-await-in-loop': ['warn'],
  'no-constant-condition': ['warn'],
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty': ['warn', { allowEmptyCatch: true }],
  'no-implied-eval': ['error'],
  'no-invalid-this': ['error'],
  'no-negated-condition': ['off'],
  'no-new': ['error'],
  'no-sparse-arrays': ['error'],
  'no-warning-comments': [
    'warn',
    {
      location: 'start',
      terms: ['TODO', '@todo', 'fixme', '@fixme', 'fix', '@fix'],
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],

  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  'eslint-comments/no-aggregating-enable': ['error'],
  'eslint-comments/no-duplicate-disable': ['error'],
  'eslint-comments/no-unused-disable': ['error'],
  'eslint-comments/no-unused-enable': ['error'],

  'no-use-extend-native/no-use-extend-native': ['error'],

  'unicorn/explicit-length-check': ['error'],
  // 'unicorn/no-array-callback-reference': ['error'],
  'unicorn/no-array-push-push': ['error'],
  'unicorn/no-await-expression-member': ['error'],
  'unicorn/no-console-spaces': ['error'],
  'unicorn/prefer-add-event-listener': ['error'],
  'unicorn/prefer-negative-index': ['error'],
  'unicorn/prefer-set-has': ['error'],
  'unicorn/prefer-spread': ['error'],
  'unicorn/prefer-switch': ['error'],
  'unicorn/prefer-ternary': ['error'],
}

module.exports = { extends: extend, plugins, rules }
