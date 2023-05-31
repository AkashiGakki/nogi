import { isObject, isString } from '@use-kit/functions'
import type { MergeType } from './type'
import { getAllMember } from './getAllMember'

// export function getMember(unique: string, type: MergeType = 'default') {
//   return getAllMember(type, []).find(
//     m => m.id === unique
//       || m.name === unique
//       || m.nickname === unique
//       || m.use === unique
//       || m.code === unique,
//   )
// }

interface Params {
  unique: string
  type?: MergeType
  filters?: string[]
}

function filterCallback(members: any[], unique: string) {
  return members.find(
    m => m.id === unique
      || m.name === unique
      || m.nickname === unique
      || m.use === unique
      || m.code === unique,
  )
}

export function getMember(
  params: string | Params,
  type: MergeType = 'default',
  filters: string[] = [],
) {
  let unique = ''
  let members: any[] = []

  if (isString(params)) {
    unique = params as string
    members = getAllMember(type, filters)
  }

  if (isObject(params)) {
    const obj = params as Params
    unique = obj.unique
    filters = obj.filters as string[]
    members = getAllMember({ type: obj.type, filters: obj.filters })
  }

  return filterCallback(members, unique)
}
