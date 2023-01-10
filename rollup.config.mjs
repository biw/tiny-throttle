import buble from '@rollup/plugin-buble'
import fs from 'fs'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  input: 'src/index.js',
  plugins: [buble()],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      name: 'tinyThrottle',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name: 'tinyThrottle',
    },
    {
      file: pkg['umd:main'],
      format: 'umd',
      sourcemap: true,
      name: 'tinyThrottle',
    },
  ],
}
