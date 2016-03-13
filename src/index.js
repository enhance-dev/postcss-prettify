import postcss from 'postcss'

import formatter from './formatter'
import doubleSpace from './double-space'

export default postcss.plugin('postcss-prettify', () => css => {
  css.walk(formatter)
  css.each(doubleSpace)
  css.first.raws.before = ''
})

/* eslint no-param-reassign: [2, {"props": false}] */
