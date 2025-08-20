import { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from 'eslint/config';
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  {
    name: "custom",
    plugins: {
      "@stylistic": stylistic,
    },

    rules: {
      "no-console": "error",
      "@stylistic/arrow-spacing": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/eol-last": "error",
      "@stylistic/indent": ["error", 2, {
        SwitchCase: 1,
      }],
      "@stylistic/no-extra-semi": "error",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": ["error", {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
      }],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/quotes": "error",
      "@stylistic/semi": "error",
      "@stylistic/space-before-function-paren": ["error", {
          anonymous: "always",
          named: "never",
      }],
      "@stylistic/space-in-parens": "error",
      "@stylistic/type-annotation-spacing": "error",
    },
  },
]);

export default eslintConfig;
