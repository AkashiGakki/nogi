import axios from 'axios'

const dataCleaning = (str: string): Record<string, unknown> => {
  const data = str.slice(4, -2)
  return JSON.parse(data)
}

export const getMemberData = async (): Promise<Record<string, unknown>> => {
  const resp = await axios.get('https://www.nogizaka46.com/s/n46/api/list/member')

  if (resp.data) {
    const ret = dataCleaning(resp.data)
    return ret
  }
  return {}
}

// const ret = await getMemberData()
// console.log('ret', ret)
