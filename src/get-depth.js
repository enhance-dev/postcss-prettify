export default function getDepth() {
  let depth = 0
  let parent = this.parent
  while (parent.type !== 'root') {
    depth += 1
    parent = parent.parent
  }
  return depth
}
