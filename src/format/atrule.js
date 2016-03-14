import depth from '../depth'
import doubleSpace from '../double-space'
import indent from '../indent'

export default function atrule(node) {
  const nodeDepth = depth(node)
  indent(node, nodeDepth)(['before', 'after'])
  node.raws.between = ' '
  if (node.params) {
    node.raws.afterName = ' '
    node.params = node.params.replace(/:([^\s])/g, ': $1')
  }
  if (nodeDepth === 0) doubleSpace(node)
}
