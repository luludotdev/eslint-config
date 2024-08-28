import type { TSESLint } from "@typescript-eslint/utils";
import node from "eslint-config-neon/node";
import merge from "lodash.merge";

const rules: TSESLint.FlatConfig.Rules = {
  "n/prefer-promises/dns": ["error"],
  "n/prefer-promises/fs": ["error"],
};

const config: TSESLint.FlatConfig.ConfigArray = [
  {
    rules,
  },
];

const merged: TSESLint.FlatConfig.ConfigArray = merge(node, config);
export default merged;
