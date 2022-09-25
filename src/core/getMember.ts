import { MergeType } from './type'
import { getAllMember } from '.'

export function getMember(unique: string, type: MergeType = 'default') {
  return getAllMember([], type).find(
    m => m.id === unique
      || m.name === unique
      || m.nickname === unique
      || m.use === unique
      || m.code === unique,
  )
}
