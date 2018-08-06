const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

const { readdirSync } = require('fs');

const includeSrc = ['actions', 'components', 'reducers'];

export default {
    experimentalCodeSplitting: true,
    input: includeSrc.reduce(
        (acc, pathName) => [
            ...acc,
            ...readdirSync(`./src/${pathName}`).map(fileName => `./src/${pathName}/${fileName}`),
        ],
        []
    ),
    external: ['react', 'react-dom', 'redux', 'react-redux'],
    output: {
        dir: './dist',
        format: 'esm',
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
};
