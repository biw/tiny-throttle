import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    ignorePatterns: ['dist/**'],
  },
  fmt: {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    sortPackageJson: false,
    ignorePatterns: ['dist/**'],
  },
  test: {
    include: ['tests/**/*.test.js'],
  },
  pack: {
    entry: {
      'tiny-throttle': './src/index.js',
    },
    format: ['esm', 'cjs', 'umd'],
    globalName: 'tinyThrottle',
    outDir: 'dist',
    dts: false,
    minify: true,
    sourcemap: true,
    hash: false,
    target: 'es2015',
  },
})
