import { getAge } from '@use-kit/functions'

export const fourthOsu = [
  'ayame', 'kaki', 'mayu', 'saku', 'nao',
  'yuri', 'saya', 'rika', 'hayashi',
  'seira', 'yuna', 'miyu', 'sayaka', 'mio', 'kuromi', 'rei',
]

export const fourthMember = [{
  id: '04-01',
  use: 'tsutsui ayame',
  nickname: 'ayame',
  age: getAge('2004/06/08'),
  height: 160,
  active: true,
}, {
  id: '04-02',
  use: 'kaki haruka',
  nickname: 'kaki',
  age: getAge('2001/08/08'),
  height: 166,
  active: true,
}, {
  id: '04-03',
  use: 'tamura mayu',
  nickname: 'mayu',
  age: getAge('1999/01/12'),
  height: 160,
  active: true,
}, {
  id: '04-04',
  use: 'endo sakura',
  nickname: 'saku',
  age: getAge('2001/10/03'),
  height: 164,
  active: true,
}, {
  id: '04-05',
  use: 'yumiki nao',
  nickname: 'nao',
  age: getAge('1999/02/03'),
  height: 165,
  active: true,
}, {
  id: '04-06',
  use: 'kitagawa yuri',
  nickname: 'yuri',
  age: getAge('2001/08/08'),
  height: 165,
  active: true,
}, {
  id: '04-07',
  use: 'kanagawa saya',
  nickname: 'saya',
  age: getAge('2001/10/31'),
  height: 165,
  active: true,
}, {
  id: '04-08',
  use: 'sato rika',
  nickname: 'rika',
  age: getAge('2001/08/09'),
  height: 160,
  active: true,
}, {
  id: '04-09',
  use: 'hayashi runa',
  nickname: 'hayashi',
  age: getAge('2003/10/02'),
  height: 164,
  active: true,
}, {
  id: '04-10',
  use: 'hayakawa seira',
  nickname: 'seira',
  age: getAge('2000/08/24'),
  height: 164,
  active: true,
}, {
  id: '04-11',
  use: 'shibata yuna',
  nickname: 'yuna',
  age: getAge('2003/03/03'),
  height: 160,
  active: true,
}, {
  id: '04-12',
  use: 'matsuo miyu',
  nickname: 'miyu',
  age: getAge('2004/01/03'),
  height: 167,
  active: true,
}, {
  id: '04-13',
  use: 'kakehashi sayaka',
  nickname: 'sayaka',
  age: getAge('2002/11/20'),
  height: 154,
  active: true,
}, {
  id: '04-14',
  use: 'yakubo mio',
  nickname: 'mio',
  age: getAge('2002/08/14'),
  height: 153,
  active: true,
}, {
  id: '04-15',
  use: 'kuromi haruka',
  nickname: 'kuromi',
  age: getAge('2004/01/19'),
  height: 162,
  active: true,
}, {
  id: '04-16',
  use: 'seimiya rei',
  nickname: 'rei',
  age: getAge('2003/08/01'),
  height: 164,
  active: true,
}]

export const fourthGraduated = []

export const cateFourth = fourthMember.concat(fourthGraduated)
