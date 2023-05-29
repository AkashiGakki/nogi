import { getAge } from '@use-kit/functions'
import member from '../json/member.json'

export const memberField = [
  'id', 'name', 'nickname', 'kana', 'use',
  'code', 'height', 'birthday', 'age', 'blood', 'cate',
]

// take one of each to combine keys
const data = member.data.filter(m => m.code !== '10001').find(m => m)
const target = {
  id: '05-01',
  use: 'nagi inoue',
  nickname: 'nagi',
  age: getAge('2005/02/17'),
  height: 156,
  active: true,
}

export const allMemberField = Object.keys(data as any).concat(Object.keys(target as any))
