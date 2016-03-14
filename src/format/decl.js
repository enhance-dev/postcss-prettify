import indent from '../indent'

export default node => {
  indent(node)(['before'])
  node.raws.between = ': '
}
