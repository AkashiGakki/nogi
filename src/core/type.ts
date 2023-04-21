export type MergeType = 'default' | 'merge' | 'use' | 'all'

interface MemberProps {
  id: string
  age: number
  use: string // 罗马音
  nickname: string
  // fullname: string;
  height: number
  active: boolean

  // default
  code: string
  name: string
  english_name: string
  kana: string
  cate: string
  img: string
  link: string
  pick: string
  god: string
  under: string
  birthday: string
  blood: string
  constellation: string
  graduation: string
  groupcode: string
}

export type Member = Partial<MemberProps>

export interface ObjParams { type?: MergeType; filters?: string[] }

export type UnionParams = MergeType | string[] | ObjParams
