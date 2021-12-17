# eslint-config-react

ESLint configuration for React projects at Reflektor Digital.

## What's inside this config?

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

## Installation

```
yarn add @reflektor/eslint-config-react -D
```

ESLint only exports the configuration from this package and not the dependencies. Hence, in order to use this config, **we'll also need to install the dependencies separately**.

```
yarn add eslint eslint-import-resolver-alias eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y -D
```

## Usage

Once the package and dependencies are installed, we can apply this ESLint config into our project.

```js
// .eslintrc.js

module.exports = {
  // ...
  extends : [
    // ...
    '@reflektor/react'
  ]
};
```

## Guidelines

- [Code of Conduct](./docs/CODE_OF_CONDUCT.md)
- [Contributing](./docs/CONTRIBUTING.md)
- [Code Review](./docs/CODE_REVIEW.md)
- [Git Standards](./docs/GIT_STANDARDS.md)
- [Pull Request Template](./docs/PULL_REQUEST_TEMPLATE.md)

## License

[MIT License](./LICENSE.md)