import { getObjectField } from '@use-kit/functions'

import { cateFifth, cateFirst, cateFourth, cateSecond, cateThird } from '../data'
import { mergeMemberList, uniqueStringList } from '../utils'
import { allMemberField, memberField } from '../config'
import member from '../json/member.json'

import type { MergeType } from './type'

export function getAllMember(filters: string[] = [], type: MergeType = 'default') {
  filters = getFiltersByType(filters, type)

  const members = cateFirst.concat(cateSecond, cateThird, cateFourth, cateFifth)
  const jsonData = member.data.filter(m => m.code !== '10001')

  return mergeMemberList(members, jsonData).map(m => getObjectField(m as any, filters))
}

function getFiltersByType(filters: string[], type: MergeType) {
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
