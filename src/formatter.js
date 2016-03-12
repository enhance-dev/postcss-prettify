import defined from 'defined'
import getDepth from './get-depth'

export default function formatter() {
  const depth = getDepth.call(this)
  const indentStr = '  '.repeat(depth)
  const indent = k => {
    this.raws[k] = defined(this.raws[k], '').trim().concat(`\n${indentStr}`)
  }

  switch (this.type) {
    case 'decl':
      indent('before')
      this.raws.between = ': '
      break

    case 'rule':
      indent('before')
      indent('after')
      this.raws.between = ' '
      this.raws.semicolon = true
      if (this.selector.indexOf(', ') >= 0) {
        this.selector = this.selector.replace(/, /g, ',\n')
      }
      break

    case 'atrule':
      indent('before')
      indent('after')
      this.raws.between = ' '
      if (this.params) {
        this.raws.afterName = ' '
        this.params = this.params.replace(/:([^\s])/g, ': $1')
      }
      break

    case 'comment':
      break

    default:
      throw this.error('unknown type')
  }
}
