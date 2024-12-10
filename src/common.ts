import { fixupPluginRules } from "@eslint/compat";
import type { TSESLint } from "@typescript-eslint/utils";
import common from "eslint-config-neon/common";
// @ts-expect-error eslint-plugin-eslint-comments is not typed
import eslintPluginEslintComments from "eslint-plugin-eslint-comments";
// @ts-expect-error eslint-plugin-no-use-extend-native is not typed
import eslintPluginNoUseExtendNative from "eslint-plugin-no-use-extend-native";
import { merge } from "./_merge.ts";

const rules: TSESLint.FlatConfig.Rules = {
  "accessor-pairs": [
    "error",
    {
      enforceForClassMembers: true,
      getWithoutSet: false,
      setWithoutGet: true,
    },
  ],
  "default-case": ["warn", { commentPattern: "^skip\\sdefault" }],
  "default-case-last": ["error"],
  "max-depth": ["warn"],
  "no-await-in-loop": ["warn"],
  "no-constant-condition": ["warn"],
  "no-else-return": ["error", { allowElseIf: false }],
  "no-empty": ["warn", { allowEmptyCatch: true }],
  "no-implied-eval": ["error"],
  "no-invalid-this": ["error"],
  "no-negated-condition": ["off"],
  "no-new": ["error"],
  "no-sparse-arrays": ["error"],
  "no-warning-comments": [
    "warn",
    {
      location: "start",
      terms: ["TODO", "@todo", "fixme", "@fixme", "fix", "@fix"],
    },
  ],
  "sort-imports": [
    "error",
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],

  "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
  "eslint-comments/no-aggregating-enable": ["error"],
  "eslint-comments/no-duplicate-disable": ["error"],
  "eslint-comments/no-unused-disable": ["error"],
  "eslint-comments/no-unused-enable": ["error"],

  "no-use-extend-native/no-use-extend-native": ["error"],

  "unicorn/explicit-length-check": ["error"],
  // 'unicorn/no-array-callback-reference': ['error'],
  "unicorn/no-array-push-push": ["error"],
  "unicorn/no-await-expression-member": ["error"],
  "unicorn/no-console-spaces": ["error"],
  "unicorn/prefer-add-event-listener": ["error"],
  "unicorn/prefer-negative-index": ["error"],
  "unicorn/prefer-set-has": ["error"],
  "unicorn/prefer-spread": ["error"],
  "unicorn/prefer-switch": ["error"],
  "unicorn/prefer-ternary": ["error"],
};

const config: TSESLint.FlatConfig.Config = {
  plugins: {
    "eslint-comments": fixupPluginRules(eslintPluginEslintComments),
    "no-use-extend-native": fixupPluginRules(eslintPluginNoUseExtendNative),
  },
  rules,
};

const merged: TSESLint.FlatConfig.ConfigArray = merge(config, common);
export default merged;
