type Member = Record<string, unknown>
type MemberList = Member[]

export function mergeMemberList(baseList: MemberList, targetList: MemberList): MemberList {
  const ret: MemberList = []

  baseList.forEach((member) => {
    const target = targetList.find(t => t.english_name === member.use)
    member && target && ret.push(Object.assign(member, target))
  })

  return ret
}
