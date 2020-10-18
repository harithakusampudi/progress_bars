// .eslintrc.js
"use strict";

module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: [
    "import",
    "flowtype",
    "jsx-a11y",
    "react",
    "react-hooks",
    "prettier",
  ],

  rules: {
    "prettier/prettier": "warn",
    // << add your own custom rules here >>
  },
};
