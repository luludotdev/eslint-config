import type { TSESLint } from "@typescript-eslint/utils";
import node from "eslint-config-neon/node";
import { merge } from "./_utils/merge.ts";

const rules: TSESLint.FlatConfig.Rules = {
  "n/prefer-global/buffer": ["error", "never"],
  "n/prefer-global/console": ["error", "always"],
  "n/prefer-global/process": ["error", "never"],
  "n/prefer-global/text-decoder": ["error", "always"],
  "n/prefer-global/text-encoder": ["error", "always"],
  "n/prefer-global/url": ["error", "always"],
  "n/prefer-global/url-search-params": ["error", "always"],
  "n/prefer-promises/dns": ["error"],
  "n/prefer-promises/fs": ["error"],
};

const config: TSESLint.FlatConfig.Config = {
  rules,
};

const merged: TSESLint.FlatConfig.ConfigArray = merge(config, node);
export default merged;
