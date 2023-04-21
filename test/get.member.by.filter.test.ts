import { describe, expect, it } from 'vitest'

import { cateFifth, cateFirst, cateFourth, cateSecond, cateThird } from '../src/data'
import { getMemberByFilter } from '../src/core/getMemberByFilter'

describe('should', () => {
  it('getMemberByFilter', () => {
    const members = cateFirst.concat(cateSecond, cateThird, cateFourth, cateFifth)

    expect(
      getMemberByFilter((m: { age: number }) => m.age < 19),
    ).toHaveLength(members.filter(m => m.age < 19).length)
  })
})
