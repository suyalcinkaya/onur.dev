import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

const patchedConfig = [
  ...fixupConfigRules(
    compat.extends(
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:import/recommended'
    )
  ),
  {
    files: ['**/*.js?(x)'],
    plugins: {
      react: fixupPluginRules(react),
      'simple-import-sort': simpleImportSort,
      import: fixupPluginRules(_import),
      prettier: fixupPluginRules(prettier)
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node
      },
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
          paths: ['src']
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx']
        }
      }
    },
    rules: {
      'no-console': ['error', { allow: ['error', 'info'] }],
      'react/no-unescaped-entities': 0,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      '@next/next/no-img-element': 0,
      'import/no-named-as-default': 0
    }
  },
  {
    files: ['*.mjs'],
    rules: {
      'import/no-anonymous-default-export': 'off'
    }
  }
]

const config = [...patchedConfig, { ignores: ['.next/*'] }]

export default config
