import { getAge } from '@use-kit/functions'

export const fifthOsu = [
  'nagi', 'teresa', 'satsuki', 'sakura', 'aruno', 'naonao',
  'miku', 'mao', 'iroha', 'aya', 'hina',
]

export const fifthMember = [{
  id: '05-01',
  use: 'nagi inoue',
  nickname: 'nagi',
  age: getAge('2005/02/17'),
  height: 156,
  active: true,
}, {
  id: '05-02',
  use: 'teresa ikeda',
  nickname: 'teresa',
  age: getAge('2002/05/12'),
  height: 159,
  active: true,
}, {
  id: '05-03',
  use: 'satsuki sugawara',
  nickname: 'satsuki',
  age: getAge('2005/10/31'),
  height: 157,
  active: true,
}, {
  id: '05-04',
  use: 'sakura kawasaki',
  nickname: 'sakura',
  age: getAge('2003/04/17'),
  height: 155,
  active: true,
}, {
  id: '05-05',
  use: 'aruno nakanishi',
  nickname: 'aruno',
  age: getAge('2003/03/17'),
  height: 157,
  active: true,
}, {
  id: '05-06',
  use: 'nao tomisato',
  nickname: 'naonao',
  age: getAge('2006/09/18'),
  height: 164,
  active: true,
}, {
  id: '05-07',
  use: 'miku ichinose',
  nickname: 'miku',
  age: getAge('2003/05/24'),
  height: 156,
  active: true,
}, {
  id: '05-08',
  use: 'mao ioki',
  nickname: 'mao',
  age: getAge('2005/07/29'),
  height: 166,
  active: true,
}, {
  id: '05-09',
  use: 'iroha okuda',
  nickname: 'iroha',
  age: getAge('2005/08/20'),
  height: 157,
  active: true,
}, {
  id: '05-10',
  use: 'aya ogawa',
  nickname: 'aya',
  age: getAge('2007/06/27'),
  height: 154,
  active: true,
}, {
  id: '05-11',
  use: 'hina okamoto',
  nickname: 'hina',
  age: getAge('2003/12/17'),
  height: 158,
  active: true,
}]

export const fifthGraduated = []

export const cateFifth = fifthMember.concat(fifthGraduated)
