import { describe, expect, it } from 'vitest'
import { getObjectField } from '@use-kit/functions'

import { getAllMember, getMember } from '../src'

describe('should', () => {
  it('exported', () => {
    expect(getAllMember()).toHaveLength(86)
    expect(getAllMember(['name']).slice(0, 1)).toMatchInlineSnapshot(`
      [
        {
          "name": "齋藤 飛鳥",
        },
      ]
    `)
  })

  it('getMember', () => {
    expect(getObjectField(getMember('shiori') as any, ['id', 'name', 'age', 'height'])).toMatchInlineSnapshot(`
      {
        "age": 21,
        "height": 161,
        "id": "03-01",
        "name": "久保 史緒里",
      }
    `)
  })
})
