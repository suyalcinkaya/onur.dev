import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import _import from 'eslint-plugin-import'
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const patchedConfig = [
  ...fixupConfigRules(
    compat.extends(
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier',
      'plugin:import/recommended'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      'simple-import-sort': simpleImportSort,
      import: fixupPluginRules(_import)
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node
      },
      ecmaVersion: 6,
      sourceType: 'module'
    },
    settings: {
      react: {
        pragma: 'React',
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
  }
]

const config = [...patchedConfig, prettierConfigRecommended, { ignores: ['.next/*'] }]

export default config
