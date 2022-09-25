import { getObjectFiled } from '@use-kit/functions'

import { cateFirst, cateSecond, cateThird, cateFourth, cateFifth } from "../data";
import { mergeMemberList } from "../utils";
import member from '../json/member.json'

const filed = ['id', 'name', 'nickname', 'kana', 'use', 'code', 'height', 'birthday', 'age', 'blood', 'cate']

export function getAllMember(filters: string[] = filed) {
  const members = cateFirst.concat(cateSecond, cateThird, cateFourth, cateFifth)
  const jsonData = member.data.filter(m => m.code != '10001')

  return mergeMemberList(members, jsonData).map(m => getObjectFiled(m as any, filters))
}
