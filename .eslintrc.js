module.exports = {
    root: true,
    extends: [],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      "@typescript-eslint/no-explicit-any": ["off"],
      "prefer-const": "off",
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-this-alias": 0,
      '@typescript-eslint/no-empty-function': 0,
      "@typescript-eslint/no-parameter-properties": 0,
      'no-useless-escape': 'off'
    },
    overrides: [
      {
        files: [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        env: {
          mocha: true
        }
      }
    ]
  };
  