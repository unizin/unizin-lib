BABEL_ENV=test jest
yarn build
flow-copy-source src dist/esm
cp scripts/sanity.js dist/sanity.spec.js
BABEL_ENV=test jest dist/sanity.spec.js
