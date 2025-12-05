// @ts-check

import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import vitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import testingLibrary from "eslint-plugin-testing-library";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import ts from "typescript-eslint";

/** @see https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files */
const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["**/*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
    },
    settings: {
      "import/internal-regex": "^(@|~)/",
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
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
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      "@next/next": next,
    },
    rules: {
      ...next.configs.recommended.rules,
    },
  },
  vitest.configs.recommended,
  jestDom.configs["flat/recommended"],
  testingLibrary.configs["flat/react"],
  ...storybook.configs["flat/recommended"],
  prettier,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": [
        "warn",
        {
          allowWithName: "Props$",
        },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
]);
