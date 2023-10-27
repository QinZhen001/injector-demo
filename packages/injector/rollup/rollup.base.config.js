import path from 'path';
import fs from 'fs';
import pkg from "../package.json"
import dotenv from "rollup-plugin-dotenv"
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';

const DEFAULT_ENV = process.env.NODE_ENV || 'development';
const extensions = ['.js', 'cjs', '.mjs', '.ts'];

const baseConfig = (env = DEFAULT_ENV, { sourcemap = false } = {}) => {
  return {
    input: 'src/index.ts',
    output: {
      sourcemap,
      file: `dist/index.js`,
      format: 'cjs',
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      json(),
      dotenv(),
      resolve({
        extensions,
        mainFields: ['browser', 'module', 'main', 'jsnext:main'],
        preferBuiltins: false,
        browser: true,
      }),
      commonjs(),
 
      replace({
        values: {

        },
        preventAssignment: true,
      })
    ]
  }
}



export default baseConfig
