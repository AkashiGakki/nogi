import fs from 'fs'
import { getMemberData } from '../src/utils'

const member = await getMemberData()

try {
  const data = JSON.stringify(member, null, 2)
  fs.writeFileSync('./src/json/member.json', data, 'utf8')
  console.log('File is written successfully!')
}
catch (err) {
  console.log(`Error writing file: ${err}`)
}
