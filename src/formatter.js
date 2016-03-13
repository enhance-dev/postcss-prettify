import defined from 'defined'
import getDepth from './get-depth'

export default function formatter(node) {
  const depth = getDepth(node)
  const indentStr = '  '.repeat(depth)
  const indent = k => {
    node.raws[k] = defined(node.raws[k], '').trim().concat(`\n${indentStr}`)
  }

  switch (node.type) {
    case 'decl':
      indent('before')
      node.raws.between = ': '
      break

    case 'rule':
      indent('before')
      indent('after')
      node.raws.between = ' '
      node.raws.semicolon = true
      if (node.selector.indexOf(', ') >= 0) {
        node.selector = node.selector.replace(/, /g, ',\n')
      }
      break

    case 'atrule':
      indent('before')
      indent('after')
      node.raws.between = ' '
      if (node.params) {
        node.raws.afterName = ' '
        node.params = node.params.replace(/:([^\s])/g, ': $1')
      }
      break

    case 'comment':
      break

    default:
      throw node.error('unknown type')
  }
}
