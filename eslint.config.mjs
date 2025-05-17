import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    eslint.configs.recommended,
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'eslint-config-prettier',
    ),

    {
        plugins: {
            '@typescript-eslint': tseslint,
        },
        languageOptions: {
            parser: eslintParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                ecmaFeatures: { jsx: true },
            },
        },
    },
];

export default eslintConfig;
