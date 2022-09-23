import { describe, expect, it } from 'vitest'

import { getDuplicatedValue } from '../src/utils'
import { fifthOsu, firstOsu, fourthOsu, secondOsu, thirdOsu } from '../src/data'

describe('should', () => {
  it('exported', () => {
    const list = firstOsu.concat(secondOsu, thirdOsu, fourthOsu, fifthOsu)
    expect(getDuplicatedValue(list)).toEqual([])
    expect(getDuplicatedValue(list)).toMatchInlineSnapshot('[]')
  })
})
