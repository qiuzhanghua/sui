module.exports = {
  "root": true,
  "extends": [
    "lxsmnsyc/typescript/solid"
  ],
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/quotes": ["off", "single"],
    "no-restricted-syntax": "off",
    "no-param-reassign": "off",
    "no-unused-vars": "warn",
    "no-unreachable": "warn",
  }
};
