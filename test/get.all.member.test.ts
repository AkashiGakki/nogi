import { describe, expect, it } from 'vitest'
import { getAllMember } from '../src'

describe('should', () => {
  it('getAllMember', () => {
    expect(getAllMember()).toHaveLength(86)

    expect(getAllMember().slice(0, 1)).toMatchInlineSnapshot(`
      [
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
        },
      ]
    `)
  })

  it('getAllMember(type: MergeType)', () => {
    expect(getAllMember('all').slice(0, 1)).toMatchInlineSnapshot(`
      [
        {
          "active": true,
          "age": 24,
          "birthday": "1998/08/10",
          "blood": "O型",
          "cate": "1期生",
          "code": "264",
          "constellation": "しし座",
          "english_name": "saito asuka",
          "god": "十一福神",
          "graduation": "NO",
          "groupcode": "5期生",
          "height": 158,
          "id": "01-01",
          "img": "https://www.nogizaka46.com/images/46/83c/8edd4e0d72fd9bc2f6b7aed33ea56.jpg",
          "kana": "さいとう あすか",
          "link": "https://www.nogizaka46.com/s/n46/artist/264?ima=5206",
          "name": "齋藤 飛鳥",
          "nickname": "asuka",
          "pick": "選抜メンバー",
          "under": "",
          "use": "saito asuka",
        },
      ]
    `)
  })

  it('getAllMember(filter: string[])', () => {
    expect(getAllMember(['name']).slice(0, 1)).toMatchInlineSnapshot(`
      [
        {
          "name": "齋藤 飛鳥",
        },
      ]
    `)
  })

  it('getAllMember(type: MergeType, filter: string[])', () => {
    expect(getAllMember('use', ['name', 'age']).slice(0, 1)).toMatchInlineSnapshot(`
      [
        {
          "age": 24,
          "name": "齋藤 飛鳥",
        },
      ]
    `)
  })

  it('getAllMember(params: ObjParams)', () => {
    expect(
      getAllMember({ type: 'default', filters: ['name'] }).slice(0, 1),
    ).toMatchInlineSnapshot(`
      [
        {
          "name": "齋藤 飛鳥",
        },
      ]
    `)
  })
})
