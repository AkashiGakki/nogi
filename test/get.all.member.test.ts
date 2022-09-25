import { describe, expect, it } from 'vitest'
import { getAllMember } from "../src"

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
})
