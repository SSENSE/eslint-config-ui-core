# eslint-config-ui-core

# SSENSE JavaScript Style Guide for core Services

# Installation

```shell
npm install --save-dev eslint eslint-config-ui-core
```

Because of this issue: https://github.com/eslint/eslint/issues/3458 (current inability for sharable configs) to supply their dependencies you will also need to:

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

# CLI eslint

We can preview all linting errors from the command line by running:
```shell
./node_modules/.bin/eslint **
```

We can also run it with --fix, which should fix most of the problems:
```shell
./node_modules/.bin/eslint ** --fix
```

Or even better we can add a script to package.json which runs this for us:
```json
"lint": "eslint 'app/**'",
"lint:fix": "eslint 'app/**' --fix",
```

In this particular case, we are validating everything inside our /app folder


# Extends

### `airbnb-base` https://github.com/airbnb/javascript[↗]

We extend the AirBnB rules for historical reasons. Our configuration will continue to evolve and may not be based on it one day if we eventually disable or adjust too much of it via overrides.

# Plugins

### `import` https://github.com/benmosher/eslint-plugin-import[↗]
Provides rules that help prevent import bugs and enforces style.

### `react` https://github.com/yannickcr/eslint-plugin-react[↗]
React specific linting rules for ESLint



# Rules

This section contains documentation about certain (not all) rules we enforce. Each rule section contains rationale and pass/fail examples. Over time we will complete exhaustive documentation. So far we have focused on significant deviations from our AirBnB inheritance.

(..@todo)
