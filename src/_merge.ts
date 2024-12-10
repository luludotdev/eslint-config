import type { TSESLint } from "@typescript-eslint/utils";
import $merge from "lodash.merge";

export function merge(
  config: TSESLint.FlatConfig.Config,
  parent: TSESLint.FlatConfig.ConfigArray,
): TSESLint.FlatConfig.ConfigArray {
  const last = parent.at(-1);
  if (!last) throw new Error("whoops");

  return [...parent.slice(0, -1), $merge(last, config)];
}
