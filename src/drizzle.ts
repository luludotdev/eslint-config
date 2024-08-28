import { fixupPluginRules } from "@eslint/compat";
import type { TSESLint } from "@typescript-eslint/utils";
// @ts-expect-error eslint-plugin-drizzle is not typed
import eslintPluginDrizzle from "eslint-plugin-drizzle";

const rules: TSESLint.FlatConfig.Rules = {
  ...eslintPluginDrizzle.configs.recommended.rules,
};

const config: TSESLint.FlatConfig.ConfigArray = [
  {
    plugins: {
      drizzle: fixupPluginRules(eslintPluginDrizzle),
    },
    rules,
  },
];

export default config;
