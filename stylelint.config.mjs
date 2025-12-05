/** @type {import("stylelint").Config} */
const config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-deprecated": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["custom-variant", "theme", "source", "plugin"],
      },
    ],
  },
};

export default config;
