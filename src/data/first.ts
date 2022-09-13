import { getAge } from '@use-kit/functions'

export const firstOsu = [
  'asuka', 'nanase', 'nanami', 'shiraishi', 'erika', 'marika',
  'minami', 'misa', 'manastu', 'sayuri', 'kazumi', 'sakurai', 'himeka', 'maimai',
  'inoue', 'yuuri', 'ikoma', 'noujou', 'waka',
  'mahiro', 'kawago', 'higuchi', 'maaya', 'seirari', 'chiharu',
]

export const firstMember = [{
  id: '01-01',
  use: 'saito asuka',
  nickname: 'asuka',
  age: getAge('1998/08/10'),
  active: true,
}, {
  id: '01-09',
  use: 'akimoto manatsu',
  nickname: 'manatsu',
  age: getAge('1993/08/20'),
  active: true,
}]

export const firstGraduated = [{
  id: '01-02',
  use: 'nishino nanase',
  nickname: 'nanase',
  age: getAge('1994/05/25'),
  active: false,
}, {
  id: '01-03',
  use: 'hashimoto nanami',
  nickname: 'nanami',
  age: getAge('1993/02/20'),
  active: false,
}, {
  id: '01-04',
  use: 'shiraishi mai',
  nickname: 'mai',
  age: getAge('1992/08/20'),
  active: false,
}, {
  id: '01-05',
  use: 'ikuta erika',
  nickname: 'erika',
  age: getAge('1997/01/22'),
  active: false,
}, {
  id: '01-06',
  use: 'itou marika',
  nickname: 'marika',
  age: getAge('1996/02/20'),
  active: false,
}, {
  id: '01-23',
  use: 'woda maaya',
  nickname: 'maaya',
  age: getAge('1998/04/23'),
}]
