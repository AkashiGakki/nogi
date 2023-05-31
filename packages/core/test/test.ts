import { fifthOsu, firstOsu, fourthOsu, secondOsu, thirdOsu } from '../packages/data'
import { getDuplicatedValue } from '../utils'

const list = firstOsu.concat(secondOsu, thirdOsu, fourthOsu, fifthOsu)
const ret = getDuplicatedValue(list)
console.log('ret', ret)
