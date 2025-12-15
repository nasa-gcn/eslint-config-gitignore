// Adapted from https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files
import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import { cwd } from 'node:process'
import { resolve } from 'node:path'

const gitignorePath = resolve(cwd(), '.gitignore')

export default defineConfig([
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
])
