import depth from '../depth'
import doubleSpace from '../double-space'
import indent from '../indent'

/**
 * Append space to colon if necessary.
 *
 * in:  @media (min-width:600px)
 * out: @media (min-width: 600px)
 *
 * in:  @media (min-width: 600px)
 * out: @media (min-width: 600px)
 *
 * in:  @page :first
 * out: @page :first
 */
const params = {
  match: /(\(.*)(:)([^\s])(.*\))/g,
  replace: '$1$2 $3$4',
}

export default function atrule(node) {
  const nodeDepth = depth(node)
  indent(node, nodeDepth)(['before', 'after'])
  node.raws.between = node.nodes ? ' ' : ''
  if (node.params) {
    node.raws.afterName = ' '
    node.params = node.params.replace(params.match, params.replace)
  }
  if (nodeDepth === 0) doubleSpace(node)
}
