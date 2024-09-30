import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends('eslint:recommended'),
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true, // Include any specific globals here
        jest: true,    // Since you're using Jest, this is a common global
      },
    },
    rules: {
      // Add your custom ESLint rules here if needed
    },
  },
];
