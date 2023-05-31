import { getObjectField } from '@use-kit/functions'

import { allMemberField, memberField } from './config'
import { mergeMemberList, uniqueStringList } from './utils'

import type { Member, MergeType, ObjParams, UnionParams } from './type'

let members: Partial<Member[]> = []

export function getAllMember(params?: UnionParams, filters: string[] = []) {
  return []
}

function getFilters(params?: UnionParams, filters: string[] = []) {
  if (Object.prototype.toString.call(params) === '[object Object]') {
    const obj = params as ObjParams
    return getFiltersByType(obj.type, obj.filters)
  }

  if (Array.isArray(params)) {
    const arr = params as string[]
    return getFiltersByType('default', arr)
  }

  if (Object.prototype.toString.call(params) === '[object String]') {
    const type = params as MergeType
    return getFiltersByType(type, filters)
  }

  return getFiltersByType()
}

function getFiltersByType(type: MergeType = 'default', filters: string[] = []) {
  if (filters.length && type === 'default')
    type = 'use'

  const map: Map<string, () => string[]> = new Map([
    ['default', () => memberField],
    ['use', () => filters],
    ['merge', () => uniqueStringList(filters, memberField)],
    ['all', () => allMemberField],
  ])

  const fn = map.get(type)
  return fn ? fn() : []
}
