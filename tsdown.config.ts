import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/*.ts"],
  target: "node22",
  sourcemap: true,

  exports: {
    customExports: (pkg, _context) => {
      for (const [id, path] of Object.entries(pkg)) {
        if (id === "package.json") continue;
        if (typeof path !== "string") continue;

        pkg[id] = {
          import: path,
          types: path.replace(".js", ".d.ts"),
        };
      }

      return pkg;
    },
  },
});
