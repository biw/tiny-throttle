import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import {
  mkdtempSync,
  mkdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tempDir = mkdtempSync(join(tmpdir(), 'tiny-throttle-package-'))

try {
  const packOutput = execFileSync(
    'npm',
    ['pack', '--json', '--pack-destination', tempDir],
    {
      cwd: rootDir,
      encoding: 'utf8',
    },
  )
  const jsonStart = packOutput.lastIndexOf('\n[')
  assert.notEqual(jsonStart, -1, 'npm pack did not return JSON output')
  const [pack] = JSON.parse(packOutput.slice(jsonStart + 1))
  const tarballPath = join(tempDir, pack.filename)

  execFileSync('tar', ['-xzf', tarballPath, '-C', tempDir])

  const consumerDir = join(tempDir, 'consumer')
  mkdirSync(join(consumerDir, 'node_modules'), { recursive: true })
  symlinkSync(
    join(tempDir, 'package'),
    join(consumerDir, 'node_modules', 'tiny-throttle'),
    'dir',
  )

  const smokeTestPath = join(consumerDir, 'smoke.mjs')
  writeFileSync(
    smokeTestPath,
    `
      import assert from 'node:assert/strict'
      import { readFileSync } from 'node:fs'
      import { createRequire } from 'node:module'
      import vm from 'node:vm'
      import { debounce, throttle } from 'tiny-throttle'

      const require = createRequire(import.meta.url)
      const commonJs = require('tiny-throttle')
      const umd = require('tiny-throttle/umd')
      const exports = { debounce, throttle, ...commonJs, ...umd }

      for (const [name, value] of Object.entries(exports)) {
        assert.equal(typeof value, 'function', name + ' should be a function')
      }

      const context = {}
      vm.runInNewContext(
        readFileSync(require.resolve('tiny-throttle/umd'), 'utf8'),
        context,
      )
      assert.equal(typeof context.tinyThrottle?.debounce, 'function')
      assert.equal(typeof context.tinyThrottle?.throttle, 'function')
    `,
  )

  execFileSync(process.execPath, [smokeTestPath], {
    cwd: consumerDir,
    stdio: 'inherit',
  })
} finally {
  rmSync(tempDir, { force: true, recursive: true })
}
