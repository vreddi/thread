module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows parsing of all modern ECMAcript features
    sourceType: "module" // Allow for the use of imports
  }
};
