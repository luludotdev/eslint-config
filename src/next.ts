import type { TSESLint } from "@typescript-eslint/utils";
import next from "eslint-config-neon/next";
import { merge } from "./_utils/merge.ts";

const rules: TSESLint.FlatConfig.Rules = {
  "@typescript-eslint/no-use-before-define": ["off"],

  "n/prefer-global/url": ["error", "always"],
  "n/prefer-global/url-search-params": ["error", "always"],

  "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],

  "react-refresh/only-export-components": ["off"],

  "unicorn/prefer-node-protocol": ["off"],
};

const config: TSESLint.FlatConfig.Config = {
  rules,
};

const merged: TSESLint.FlatConfig.ConfigArray = merge(config, next);
export default merged;
