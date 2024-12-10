import type { TSESLint } from "@typescript-eslint/utils";
import node from "eslint-config-neon/node";
import { merge } from "./_merge.ts";

const rules: TSESLint.FlatConfig.Rules = {
  "n/prefer-promises/dns": ["error"],
  "n/prefer-promises/fs": ["error"],
};

const config: TSESLint.FlatConfig.Config = {
  rules,
};

const merged: TSESLint.FlatConfig.ConfigArray = merge(config, node);
export default merged;
