import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  outDir: "dist",
  format: "esm",
  dts: true,
  entry: ["src/*.ts"],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  bundle: true,
  target: "es2022",
  tsconfig: "./tsconfig.json",
  keepNames: true,
  treeshake: true,
});
