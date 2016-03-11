const postcss = require('postcss')

module.exports = postcss.plugin('postcss-prettify', () => css =>
  css.walkRules(rule => {
    // one selector per line
    if (rule.selector.indexOf(', ') >= 0) {
      rule.selector = rule.selector.replace(/, /g, ',\n')
    }

    // empty line between rules
    if (rule.raws.before !== '') rule.raws.before = '\n\n'
  })
)
