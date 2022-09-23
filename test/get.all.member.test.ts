import { describe, expect, it } from 'vitest'
import { getAllMember } from "../src"

describe('should', () => {
  it('exported', () => {
    expect(getAllMember().length).toEqual(86)
  })
})
