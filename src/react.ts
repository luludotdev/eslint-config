import type { TSESLint } from "@typescript-eslint/utils";
import react from "eslint-config-neon/react";
import { merge } from "./_merge.ts";
import jsx from "./jsx.ts";

const rules: TSESLint.FlatConfig.Rules = {
  "react/boolean-prop-naming": [
    "error",
    {
      validateNested: true,
    },
  ],
  "react/function-component-definition": [
    "warn",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  "react/no-array-index-key": ["warn"],
  "react/no-unescaped-entities": ["error"],
};

const config: TSESLint.FlatConfig.Config = {
  rules,
};

const merged: TSESLint.FlatConfig.ConfigArray = [
  ...jsx,
  ...merge(config, react),
];

export default merged;
