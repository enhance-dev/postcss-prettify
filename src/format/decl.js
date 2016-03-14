import depth from '../depth'
import indent from '../indent'

export default function decl(node) {
  indent(node, depth(node))(['before'])
  node.raws.between = ': '
}
