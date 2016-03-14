import indent from '../indent'

export default node => {
  indent(node)(['before', 'after'])
  node.raws.between = ' '
  node.raws.semicolon = true
  if (node.selector.indexOf(', ') >= 0) {
    node.selector = node.selector.replace(/, /g, ',\n')
  }
}
