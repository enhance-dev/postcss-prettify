import indent from '../indent'

export default node => {
  indent(node)(['before', 'after'])
  node.raws.between = ' '
  if (node.params) {
    node.raws.afterName = ' '
    node.params = node.params.replace(/:([^\s])/g, ': $1')
  }
}
