import postcss from 'postcss'

import format from './format'

const prettify = postcss.plugin('postcss-prettify', () => css => {
  css.walk(format)
  if (css.first && css.first.raws) css.first.raws.before = ''
})

prettify.process = css => postcss([prettify]).process(css)

export default prettify
