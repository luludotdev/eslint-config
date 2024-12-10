import type { TSESLint } from "@typescript-eslint/utils";
import jsx from "eslint-config-neon/jsx";
import { merge } from "./_utils/merge.ts";

const rules: TSESLint.FlatConfig.Rules = {
  "react/jsx-fragments": ["error", "syntax"],
  "react/jsx-handler-names": ["off"],
  "react/jsx-key": [
    "error",
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    },
  ],
  "react/jsx-no-target-blank": [
    "error",
    {
      forms: true,
      warnOnSpreadAttributes: true,
    },
  ],
  "react/jsx-sort-default-props": ["off"],
  "react/sort-default-props": ["error"],
};

const config: TSESLint.FlatConfig.Config = {
  rules,
};

const merged: TSESLint.FlatConfig.ConfigArray = merge(config, jsx);
export default merged;
