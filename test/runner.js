// utils ---------------------------------------------------

import path from 'path'
import { readFile, readdir } from 'mz/fs'
import test from 'ava'
import postcss from 'postcss'
import prettify from '..'

// tests ---------------------------------------------------

const processor = postcss([prettify])

const read = (dir, file) =>
  readFile(path.resolve('cases', dir, `${file}.css`), 'utf-8')

const run = testCase => test(testCase, function* runner(t) {
  const raw = yield read(testCase, 'in')
  const expected = yield read(testCase, 'out')
  const actual = yield processor.process(raw)
  t.same(actual.css, expected)
})

readdir(path.resolve('cases')).then(cases => cases.forEach(run))
