import { getAllMember } from '.'

import type { MergeType } from './type'

export function getMemberByFilter( callback: Function, fields: string[] = [], type: MergeType = 'default') {
  return getAllMember(fields, type).filter(m => callback(m))
}

// const ret = getMemberByFilter((member: any) => member.age < 19, ['name', 'age'])
// console.log('ret: ', ret)
