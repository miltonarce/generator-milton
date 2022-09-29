module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: ["standard", "prettier", "eslint:recommended"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        bracketSpacing: false,
        trailingComma: "es5",
        printWidth: 120,
        endOfLine: "auto",
      },
    ],
  },
};
