module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-nested-ternary": "off",
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "prettier/prettier": "error",
  },
};
