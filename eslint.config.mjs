// @ts-check

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
import { flatConfigs as importflatConfigs } from "eslint-plugin-import";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import testingLibrary from "eslint-plugin-testing-library";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import ts from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = ts.config(
  {
    files: ["**/*.{js,jsx,ts,tsx}", "**/*.{cjs,mjs,cts,mts}"],
    ignores: [".next/"], // + Default ignores ["**/node_modules/", ".git/"]
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowWithName: "Props$", // Allow empty object types with a name ending with "Props".
        },
      ],
    },
  },
  // plugin:@next/next/recommended
  // Do not use `next/core-web-vitals` because it has duplicate rules with `plugin:react/recommended`, `plugin:react-hooks/recommended`, etc.
  ...fixupConfigRules(compat.extends("plugin:@next/next/recommended")), // Replace "plugin:" syntax when flat config is supported
  // eslint:recommended
  js.configs.recommended,
  // plugin:@typescript-eslint/recommended
  ...ts.configs.recommended,
  // plugin:react/recommended
  react.configs.flat?.recommended ?? {},
  // plugin:react/jsx-runtime
  react.configs.flat?.["jsx-runtime"] ?? {},
  // plugin:react-hooks/recommended
  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")), // Replace "plugin:" syntax when flat config is supported
  // plugin:jsx-a11y/recommended
  jsxA11y.flatConfigs.recommended,
  // plugin:@vitest/recommended
  vitest.configs.recommended,
  // plugin:jest-dom/recommended
  jestDom.configs["flat/recommended"],
  // plugin:testing-library/react
  testingLibrary.configs["flat/react"],
  // plugin:storybook/recommended
  ...storybook.configs["flat/recommended"],
  // plugins: ["import"] - Custom configuration
  {
    plugins: {
      import:
        importflatConfigs.recommended.plugins
          .import /** @see createFlatConfig */,
    },
  },
  // plugins: ["simple-import-sort"] - Recommended configuration
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
    },
    settings: {
      "import/internal-regex": "^@/",
    },
  },
  // plugins: ["unused-imports"] - Recommended configuration
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  // prettier - Disable eslint rules that conflict with prettier.
  prettier,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }
);

export default config;
