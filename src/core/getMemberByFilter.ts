import type { MergeType } from './type'
import { getAllMember } from '.'

export function getMemberByFilter(callback: Function, fields: string[] = [], type: MergeType = 'default') {
  return getAllMember(type, fields).filter(m => callback(m))
}
