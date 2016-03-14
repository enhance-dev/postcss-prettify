import postcss from 'postcss'

import format from './format'
import doubleSpace from './double-space'

export default postcss.plugin('postcss-prettify', () => css => {
  css.walk(format)
  css.each(doubleSpace)
  css.first.raws.before = ''
})
