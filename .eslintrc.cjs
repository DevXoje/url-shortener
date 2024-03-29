/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:astro/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      processor: "astro/client-side-ts",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        quotes: ["error", "single", { avoidEscape: true }],
        "no-console": ["error", { allow: ["error", "warn"] }],
        "max-len": ["error", 200, 4],
        "lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: true },
        ],
      },
    },
  ],
};
