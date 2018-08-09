# Unizin-lib
A collection of accessible, styled, reusable React components for Unizin Engage and order-tool.

### Usage

`yarn install unizin-lib` will install the latest version. This library is under active development though, and frequent upgrades are recommended.

Unizin-lib bundles both ES6 and CommonJS modules; a webpack project should use the ES6 modules by default.

If you're using ES6 modules, you can rely on tree-shaking to eliminate unused code, rather than importing individual files. `import { Avatar } from 'unizin-lib'` is preferred over `import Avatar from 'unizin-lib/src/components/avatar'`.

### Development

1. Install the dependencies (`yarn`).
2. Install Rollup.js globally (`yarn global add rollup`).

### Storybook

`yarn run storybook` will start up Storybook on port 6006.

### Building

`yarn run build` will build the production bundle.

### Hooks

Please copy the `pre-push` hook from `scripts/` into `.git/hooks`
