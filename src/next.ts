import type { TSESLint } from "@typescript-eslint/utils";
import next from "eslint-config-neon/next";
import merge from "lodash.merge";

const rules: TSESLint.FlatConfig.Rules = {
  "@typescript-eslint/no-use-before-define": ["off"],

  "n/prefer-global/url": ["off"],
  "n/prefer-global/url-search-params": ["off"],

  "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],

  "react-refresh/only-export-components": ["off"],

  "unicorn/prefer-node-protocol": ["off"],
};

const config: TSESLint.FlatConfig.ConfigArray = [
  {
    rules,
  },
];

const merged: TSESLint.FlatConfig.ConfigArray = merge(next, config);
export default merged;
