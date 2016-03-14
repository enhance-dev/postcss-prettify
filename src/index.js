import postcss from 'postcss'

import format from './format'

export default postcss.plugin('postcss-prettify', () => css => {
  css.walk(format)
  css.first.raws.before = ''
})
