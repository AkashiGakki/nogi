import { describe, expect, it } from 'vitest'
import { getObjectField } from '@use-kit/functions'

import { getMember } from '../src'
import type { Member } from '../src/core/type'

describe('should', () => {
  it('getMember', () => {
    expect(
      getObjectField(getMember('shiori') as Member, ['id', 'name', 'age', 'height']),
    ).toMatchInlineSnapshot(`
      {
        "age": 21,
        "height": 161,
        "id": "03-01",
        "name": "久保 史緒里",
      }
    `)
  })
})
