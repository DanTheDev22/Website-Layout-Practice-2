import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'no-invalid-regexp': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-undef': 'warn',
      'no-unreachable': 'warn',
      'no-unused-vars': 'warn',
      'require-atomic-updates': 'warn',
      camelcase: 'warn',
      eqeqeq: ['error', 'always'],
      'no-unused-expressions': 'warn',
      'no-useless-catch': 'warn',
      'no-self-assign': 'warn',
      'no-console': 'warn',
      curly: 'error',
    },
  },
]);
