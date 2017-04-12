# eslint-config-ui-core

# SSENSE JavaScript Style Guide for core Services

# Installation

```shell
npm install --save-dev eslint eslint-config-ui-core
```

Because of the https://github.com/eslint/eslint/issues/3458[current inability for sharable configs] to supply their dependencies you will also need to:

```shell
npm install --save-dev \
  babel-eslint \
  eslint-config-airbnb \
  eslint-plugin-import \
  eslint-plugin-react
```

# Usage

Edit your `package.json`

For client-side projects (only one supported at the moment)
```json
  "eslintConfig": {
    "extends": "ssense/client"
  }
```

`/client` specializations are that it permits browser globals, requires the `react` plugin.


# Extends

### `airbnb-base` https://github.com/airbnb/javascript[↗]

We extend the AirBnB rules for historical reasons. Our configuration will continue to evolve and may not be based on it one day if we eventually disable or adjust too much of it via overrides.

# Plugins

### `import` https://github.com/benmosher/eslint-plugin-import[↗]
Provides rules that help prevent import bugs and enforces style.

### `react` https://github.com/yannickcr/eslint-plugin-react[↗]
React specific linting rules for ESLint
