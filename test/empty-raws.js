// utils ---------------------------------------------------

import postcss from 'postcss'
import assert from 'assert'
import path from 'path'
import fs from 'mz/fs'
import prettify from '../src'

// tests ---------------------------------------------------

exports['empty-raws'] = function* emptyRaws() {
  const fixture = path.resolve('test', 'fixtures', 'empty-raws.css')
  const expected = yield fs.readFile(fixture, 'utf8')
  const css = postcss.parse('body{background:red;}')
  css.append('.foo{background:blue;}')
  css.append('@media(min-width:600px){.bar{background:yellow;}}')
  assert.equal(prettify.process(css).css, expected.trim())
}
