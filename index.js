// import modules
//------------------------------------------------------------------------------
const postcss = require('postcss')

// define modifiers
//------------------------------------------------------------------------------
const call = mods => entity => mods.forEach(mod => mod.call(entity))

function precedingEmptyLine() {
  if (this.raws.before === '\n') this.raws.before = '\n\n'
}

function oneSelectorPerLine() {
  if (this.selector.indexOf(', ') >= 0) {
    this.selector = this.selector.replace(/, /g, ',\n')
  }
}

// call modifiers and export
//------------------------------------------------------------------------------
module.exports = postcss.plugin('postcss-prettify', () => css => {
  css.walkRules(call([
    oneSelectorPerLine,
    precedingEmptyLine,
  ]))

  css.walkAtRules(call([
    precedingEmptyLine,
  ]))
})
