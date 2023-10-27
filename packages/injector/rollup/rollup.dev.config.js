// dev mode no need babel
import path from 'path';
import babel from '@rollup/plugin-babel';
import { printBuildInfo, mergeConfig } from "./utils"
import baseConfig from "./rollup.base.config"

const env = 'development';
const extensions = ['.js', 'cjs', '.mjs', '.ts'];

printBuildInfo(env)

const config = mergeConfig(baseConfig(env, {
  sourcemap: true,
}), {
  plugins: [
    babel({
      configFile: path.resolve(__dirname, './babel.config.js'),
      babelHelpers: 'runtime',
      extensions,
      exclude: [/node_modules/],
    }),
  ]
})

export default config 
