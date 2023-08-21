const { existsSync, readFileSync } = require('node:fs')

/** @type {import('eslint').Linter.Config} */
const config = {}

const filename = '.gitignore'

// Adapted from:
// https://github.com/eslint/eslintrc/blob/v2.1.2/lib/config-array-factory.js#L153-L155
// https://github.com/eslint/eslintrc/blob/v2.1.2/lib/config-array-factory.js#L278-L290
if (existsSync(filename))
  config.ignorePatterns = readFileSync('.gitignore', { encoding: 'utf-8' })
    .replace(/^\ufeff/u, '')
    .split(/\r?\n/gu)
    .filter((line) => line.trim() !== '' && !line.startsWith('#'))

module.exports = config
