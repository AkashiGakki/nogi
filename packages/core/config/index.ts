import { getAge } from '@use-kit/functions'

export const memberField = [
  'id', 'name', 'nickname', 'kana', 'use',
  'code', 'height', 'birthday', 'age', 'blood', 'cate',
]

// take one of each to combine keys
const data = {
  code: '55400',
  name: '川﨑 桜',
  english_name: 'sakura kawasaki',
  kana: 'かわさき さくら',
  cate: '5期生',
  img: 'https://www.nogizaka46.com/images/46/b4e/2a4faecdf5e257fa5e8aae4672f82.jpg',
  link: 'https://www.nogizaka46.com/s/n46/artist/55400?ima=4049',
  pick: '選抜メンバー',
  god: '十一福神',
  under: '',
  birthday: '2003/04/17',
  blood: '不明',
  constellation: 'おひつじ座',
  graduation: 'NO',
  groupcode: '',
}
const target = {
  id: '05-01',
  use: 'nagi inoue',
  nickname: 'nagi',
  age: getAge('2005/02/17'),
  height: 156,
  active: true,
}

export const allMemberField = Object.keys(data as any).concat(Object.keys(target as any))
