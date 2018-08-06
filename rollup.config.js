const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

const { readdirSync } = require('fs');

export default ['cjs', 'esm'].map(format => ({
    experimentalCodeSplitting: true,
    input: readdirSync('./src/exports').map(file => `./src/exports/${file}`),
    external: ['react', 'react-dom', 'redux', 'react-redux', 'prop-types', 'styled-components'],
    output: {
        dir: `./dist/${format}`,
        format,
    },
    plugins: [
        resolve(),
        babel({
            exclude: ['node_modules/**'],
        }),
        commonjs({
            namedExports: {
                'node_modules/react-is/index.js': ['isValidElementType'],
            },
        }),
        terser(),
    ],
}));
