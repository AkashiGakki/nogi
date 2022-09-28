import type { MergeType } from './type'
import { getAllMember } from '.'

export function getMemberByFilter(callback: Function, fields: string[] = [], type: MergeType = 'default') {
  return getAllMember(fields, type).filter(m => callback(m))
}

// const ret = getMemberByFilter((member: any) => member.age < 19, ['name', 'age'])
// console.log('ret: ', ret)
