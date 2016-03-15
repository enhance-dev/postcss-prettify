// utils ---------------------------------------------------

import path from 'path'
import assert from 'assert'
import fs from 'mz/fs'
import prettify from '../src'

// tests ---------------------------------------------------

const read = (dir, file) =>
  fs.readFile(path.resolve('test', 'cases', dir, `${file}.css`), 'utf-8')

fs.readdirSync(path.resolve('test', 'cases'))
  .forEach(test => {
    exports[test] = function* testGenerator() {
      const raw = yield read(test, 'in')
      const expected = yield read(test, 'out')
      const actual = yield prettify.process(raw)
      assert.equal(actual.css, expected)
    }
  })
