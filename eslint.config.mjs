// @ts-check

import common from "./dist/common.js";
import node from "./dist/node.js";
import prettier from "./dist/prettier.js";
import typescript from "./dist/typescript.js";

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
  ...common,
  ...node,
  ...typescript,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  ...prettier,
];

export default config;
