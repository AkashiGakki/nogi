import { cateFifth } from '../data'
import member from '../json/member.json'

export const memberField = [
  'id', 'name', 'nickname', 'kana', 'use',
  'code', 'height', 'birthday', 'age', 'blood', 'cate',
]

const data = member.data.filter(m => m.code !== '10001').find(m => m)
const target = cateFifth.find(m => m)
export const allMemberField = Object.keys(data as any).concat(Object.keys(target as any))
