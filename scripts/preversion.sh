BABEL_ENV=test jest
npm run-script build
cp scripts/sanity.js dist/sanity.spec.js
BABEL_ENV=test jest dist/sanity.spec.js
