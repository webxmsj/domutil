import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const banner = `
/*!
 * ${pkg.name} - v${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright (c) 2018 ${pkg.author}
 * Released under ${pkg.license} License
 */
`;

export default [
  {
    input: 'src/domq.js',
    output: [
      {
        name: 'jUtil',
        banner,
        file: "dist/jUtil.js",
        format: 'umd'
      },
      {
        banner,
        file: 'dist/jUtil.common.js',
        format: 'cjs'
      },
      {
        banner,
        file: 'dist/jUtil.esm.js',
        format: 'es'
      }
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/domq.modular.js',
    output: [
      {
        banner,
        file: 'dist/jUtil.modular.js',
        format: 'es'
      }
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve(),
      commonjs(),
    ],
  },
];
