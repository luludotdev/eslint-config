import type { TSESLint } from "@typescript-eslint/utils";
import typescript from "eslint-config-neon/typescript";
import merge from "lodash.merge";

const rules: TSESLint.FlatConfig.Rules = {
  "@typescript-eslint/consistent-type-definitions": "off",
  "@typescript-eslint/lines-between-class-members": "off",
  "@typescript-eslint/method-signature-style": ["error", "property"],
  "@typescript-eslint/no-explicit-any": ["error"],
  "@typescript-eslint/no-inferrable-types": [
    "error",
    {
      ignoreParameters: false,
      ignoreProperties: false,
    },
  ],
  "@typescript-eslint/no-throw-literal": [
    "error",
    {
      allowThrowingAny: false,
      allowThrowingUnknown: true,
    },
  ],
  "@typescript-eslint/no-useless-empty-export": ["error"],
  "@typescript-eslint/parameter-properties": [
    "error",
    { prefer: "parameter-property" },
  ],

  "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],

  "typescript-sort-keys/interface": ["off"],
};

const config: TSESLint.FlatConfig.ConfigArray = [
  {
    rules,
  },
];

const merged: TSESLint.FlatConfig.ConfigArray = merge(typescript, config);
export default merged;
