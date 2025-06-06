import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import PrefixWrap from 'postcss-prefixwrap';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import dtsModule from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
const dts = dtsModule.default || dtsModule;

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            image(),
            peerDepsExternal(),
            // excludeDependenciesFromBundle({peerDependencies: true}),
            resolve({
                ignoreGlobal: false,
                include: ['node_modules/**'],
            }),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['dev/**'],
            }),
            postcss({
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                    PrefixWrap('.eclipse', {
                        ignoredSelectors: ['.dark'],
                    }),
                ],
                extract: 'styles.css',
                minimize: true,
            }),
            terser(),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts(), del({ hook: 'buildEnd', targets: './dist/types' })],
        external: [/\.css$/, /\.woff2$/, /\.woff$/],
    },
];
