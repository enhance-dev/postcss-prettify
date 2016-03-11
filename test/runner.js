// utils ---------------------------------------------------

const path = require('path')
const fs = require('mz/fs')
const postcss = require('postcss')
const assert = require('chai').assert
const prettify = require('..')

// tests ---------------------------------------------------

const processor = postcss([prettify])

const read = (dir, file) =>
  fs.readFile(path.resolve('test', 'cases', dir, `${file}.css`), 'utf-8')

fs.readdirSync(path.resolve('test', 'cases'))
  .forEach(test => {
    exports[test] = function* testGenerator() {
      const raw = yield read(test, 'in')
      const expected = yield read(test, 'out')
      const actual = yield processor.process(raw)
      assert.equal(actual.css, expected)
    }
  })
