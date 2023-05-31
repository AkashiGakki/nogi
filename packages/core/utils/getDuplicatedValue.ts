export const getDuplicatedValue = (list: string[]): string[] => {
  const ret: string[] = []

  if (!list)
    return []

  list.forEach(() => {
    const pop = list.pop()
    const dup = list.find(v => v === pop)
    dup && ret.push(dup)
  })

  return ret
}
