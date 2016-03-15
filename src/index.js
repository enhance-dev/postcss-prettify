import postcss from 'postcss'

import format from './format'

const prettify = postcss.plugin('postcss-prettify', () => css => {
  css.walk(format)
  css.first.raws.before = ''
})

prettify.process = css => postcss([prettify]).process(css)

export default prettify
