import { fifthOsu, firstOsu, fourthOsu, secondOsu, thirdOsu } from '../src/data'
import { getDuplicatedValue } from '../src/utils'

const list = firstOsu.concat(secondOsu, thirdOsu, fourthOsu, fifthOsu)
const ret = getDuplicatedValue(list)
console.log('ret', ret)
