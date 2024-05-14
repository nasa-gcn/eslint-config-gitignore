[![NPM Version](https://img.shields.io/npm/v/%40nasa-gcn%2Feslint-config-gitignore)](https://www.npmjs.com/package/@nasa-gcn/eslint-config-gitignore)

# eslint-plugin-gitignore

ESLint plugin to ignore files listed in .gitignore

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-gitignore`:

```sh
npm install @nasa-gcn/eslint-config-gitignore --save-dev
```

## Usage

Add `gitignore` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "extends": [
        "@nasa-gcn/eslint-config-gitignore"
    ]
}
```


