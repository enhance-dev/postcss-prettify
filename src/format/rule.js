import depth from '../depth'
import doubleSpace from '../double-space'
import indent from '../indent'

export default function rule(node) {
  const nodeDepth = depth(node)
  indent(node, nodeDepth)(['before', 'after'])
  node.raws.between = ' '
  node.raws.semicolon = true
  if (node.selector.indexOf(', ') >= 0) {
    node.selector = node.selector.replace(/, /g, ',\n')
  }
  if (nodeDepth === 0) doubleSpace(node)
}
