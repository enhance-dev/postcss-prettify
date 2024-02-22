import postcss from 'postcss'
import prettify from '../index.js'
import test from 'tape'

test('postcss prettify', t => {
  t.ok(prettify())
  t.end()
})

test('should prettify at rule spacing after name', t => {
  const input = `
@charset"UTF-8";

@font-face  {
  font-family: foo;
  src: local("foo")
}
`
  const expected = `
@charset "UTF-8";

@font-face {
  font-family: foo;
  src: local("foo")
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, `${actual} \n ${expected} \n prettifies at rule spacing after name`)
  t.end()

})
