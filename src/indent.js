import defined from 'defined'
import getDepth from './get-depth'

export default function indent(node) {
  const depth = getDepth(node)
  const indentStr = '  '.repeat(depth)
  return ar => ar.forEach(key => {
    node.raws[key] = defined(node.raws[key], '').trim().concat(`\n${indentStr}`)
  })
}
