import { describe, expect, it } from 'vitest'
import { getObjectField } from '@use-kit/functions'

import { getMember } from '../..'
import type { Member } from '../type'

describe('should', () => {
  it('getMember(unique: string)', () => {
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

  it('getMember(unique: string)', () => {
    expect(getMember('saito asuka')).toMatchInlineSnapshot(`
      {
        "age": 24,
        "birthday": "1998/08/10",
        "blood": "O型",
        "cate": "1期生",
        "code": "264",
        "height": 158,
        "id": "01-01",
        "kana": "さいとう あすか",
        "name": "齋藤 飛鳥",
        "nickname": "asuka",
        "use": "saito asuka",
      }
    `)
  })

  it('getMember(unique: string, type, filter)', () => {
    expect(getMember('shiori', 'use', ['nickname', 'name'])).toMatchInlineSnapshot(`
      {
        "name": "久保 史緒里",
        "nickname": "shiori",
      }
    `)
  })

  it('getMember(params)', () => {
    expect(getMember({ unique: 'shiori', type: 'use', filters: ['nickname', 'name'] })).toMatchInlineSnapshot(`
      {
        "name": "久保 史緒里",
        "nickname": "shiori",
      }
    `)
  })

  // TODO: case -> `filters` array not concat `unique` field
})
