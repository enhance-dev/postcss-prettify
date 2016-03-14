import depth from '../depth'
import doubleSpace from '../double-space'

export default function comment(node) {
  if (depth(node) === 0) doubleSpace(node)
}
