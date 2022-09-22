type Member = Record<string, unknown>
type MemberList = Member[]

export function mergeMemberList(baseList: MemberList, targetList: MemberList): MemberList {
  const ret: MemberList = []
  console.log('base len', baseList.length)
  console.log('target len', targetList.length)

  baseList.forEach(() => {
    const member = baseList.pop()
    const target = targetList.find(t => t['english_name'] === member?.use)
    member && target && ret.push(Object.assign(target, member))
  })

  return ret
}
