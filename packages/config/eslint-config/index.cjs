/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unicorn"],
  extends: [
    "next",
    "turbo",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-console": "error",
    "unicorn/prevent-abbreviations": "off",
  },
};
