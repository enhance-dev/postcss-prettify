import atrule from './atrule'
import comment from './comment'
import decl from './decl'
import rule from './rule'

export default node => ({ atrule, comment, decl, rule }[node.type](node))
