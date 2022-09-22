import { getAge } from '@use-kit/functions'

export const thirdOsu = [
  'shiori', 'yama', 'ume', 'yoda', 'momoko', 'renka',
  'riria', 'tamami', 'reno',
  'hazuki', 'den', 'yoshita',
]

export const thirdMember = [{
  id: '03-01',
  use: 'kubo shiori',
  nickname: 'shiori',
  age: getAge('2001/07/14'),
  height: 161,
  active: true,
}, {
  id: '03-02',
  use: 'yamashita mizuki',
  nickname: 'yama',
  age: getAge('1999/07/26'),
  height: 160,
  active: true,
}, {
  id: '03-03',
  use: 'umezawa minami',
  nickname: 'ume',
  age: getAge('1999/01/06'),
  height: 170,
  active: true,
}, {
  id: '03-04',
  use: 'yoda yuuki',
  nickname: 'yoda',
  age: getAge('2000/05/05'),
  height: 153,
  active: true,
}, {
  id: '03-06',
  use: 'iwamoto renka',
  nickname: 'renka',
  age: getAge('2004/02/02'),
  height: 159,
  active: true,
}, {
  id: '03-07',
  use: 'itou riria',
  nickname: 'riria',
  age: getAge('2002/10/08'),
  height: 154,
  active: true,
}, {
  id: '03-08',
  use: 'sakaguchi tamami',
  nickname: 'tamami',
  age: getAge('2001/11/10'),
  height: 161,
  active: true,
}, {
  id: '03-09',
  use: 'nakamura reno',
  nickname: 'reno',
  age: getAge('2001/09/27'),
  height: 167,
  active: true,
}, {
  id: '03-10',
  use: 'mukai hazuki',
  nickname: 'hazuki',
  age: getAge('1999/08/23'),
  height: 152,
  active: true,
}, {
  id: '03-11',
  use: 'sato kaede',
  nickname: 'den',
  age: getAge('1998/03/23'),
  height: 161,
  active: true,
}, {
  id: '03-12',
  use: 'yoshida ayanochristie',
  nickname: 'yoshida',
  age: getAge('1995/09/06'),
  height: 161,
  active: true,
}]

export const thirdGraduated = [{
  id: '03-05',
  use: 'oozono momoko',
  nickname: 'momoko',
  age: getAge('1999/09/13'),
  height: 156,
  active: false,
}]

export const cateThird = thirdMember.concat(thirdGraduated)
