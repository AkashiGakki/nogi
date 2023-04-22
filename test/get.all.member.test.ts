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

    expect(getAllMember('merge', ['active', 'zhname']).slice(2, 3)).toMatchInlineSnapshot(`
      [
        {
          "active": false,
          "age": 28,
          "birthday": "1994/05/25",
          "blood": "O型",
          "cate": "1期生",
          "code": "273",
          "height": 159,
          "id": "01-02",
          "kana": "にしの ななせ",
          "name": "西野 七瀬",
          "nickname": "nanase",
          "use": "nishino nanase",
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

    expect(getAllMember({ filters: ['name']}).slice(2, 3)).toMatchInlineSnapshot(`
      [
        {
          "name": "西野 七瀬",
        },
      ]
    `)

    expect(getAllMember({ type: 'default' }).slice(4, 5)).toMatchInlineSnapshot(`
      [
        {
          "age": 30,
          "birthday": "1992/08/20",
          "blood": "A型",
          "cate": "1期生",
          "code": "268",
          "height": 162,
          "id": "01-04",
          "kana": "しらいし まい",
          "name": "白石 麻衣",
          "nickname": "mai",
          "use": "shiraishi mai",
        },
      ]
    `)

    expect(getAllMember({}).slice(3, 4)).toMatchInlineSnapshot(`
      [
        {
          "age": 30,
          "birthday": "1993/02/20",
          "blood": "B型",
          "cate": "1期生",
          "code": "275",
          "height": 163,
          "id": "01-03",
          "kana": "はしもと ななみ",
          "name": "橋本 奈々未",
          "nickname": "nanami",
          "use": "hashimoto nanami",
        },
      ]
    `)
  })
})
