import terser from '@rollup/plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import bundleSize from 'rollup-plugin-bundle-size';
import { defineConfig } from 'rollup';

const esConfig = {
  format: 'esm',
};

const pluginsConfig = [
  babel({
    babelHelpers: 'bundled',
  }),
  nodeResolve({
    customResolveOptions: {
      moduleDirectories: ['node_modules'],
    },
  }),
  commonjs({
    include: /node_modules/,
  }),
  bundleSize(),
];

const config = defineConfig([
  {
    input: 'src/index.js',
    output: [
      {
        file: 'lib/index.js',
        ...esConfig,
        plugins: [
          terser({
            compress: {
              drop_console: true,
            },
          }),
        ],
      },
    ],
    plugins: pluginsConfig,
  },
]);

export default config;
