import type { MergeType } from './type'
import { getAllMember } from '.'

export function getMemberByFilter(callback: Function, fields: string[] = [], type: MergeType = 'default') {
  return getAllMember(type, fields).filter(m => callback(m))
}

// Usage
// const filters = nogi.getMembersByFilter((m) => m.age < 19)
// const filters = nogi.getMembersByFilter('all', (m) => m.active === true)
// const filters = nogi.getMembersByFilter(['name'], (m) => m.age < 19)
// const filters = nogi.getMembersByFilter('use', ['name', 'age'], callback())
// const filters = nogi.getMembersByFilter({ type: 'default', filter: ['name']}, callback())
