// utils ---------------------------------------------------

const postcss = require('postcss')
const assert = require('assert')
const prettify = require('../dist')

// tests ---------------------------------------------------

const processor = postcss([prettify])

const expected =
`body {
  background: red;
}

.foo {
  background: blue;
}

@media (min-width: 600px) {
  .bar {
    background: yellow;
  }
}`

exports['empty-raws'] = () => {
  const css = postcss.parse('body{background:red;}')
  css.append('.foo{background:blue;}')
  css.append('@media(min-width:600px){.bar{background:yellow;}}')
  assert.equal(processor.process(css).css, expected)
}
