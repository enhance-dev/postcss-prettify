export default function indent(node, depth) {
  const indentStr = '  '.repeat(depth)
  return ar => ar.forEach(key => {
    node.raws[key] = (node.raws[key] || '').trim().concat(`\n${indentStr}`)
  })
}
