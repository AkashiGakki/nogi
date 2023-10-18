import { $fetch } from 'ofetch'
import axios from 'axios'

const memberMap = new Map()

export async function fetchMember(url: string) {
  const namespace = url.split('/').at(-2)
  console.log('url', url)

  const response = await $fetch(url)
  // const response = await axios.get(url)
  console.log('resp', response)
}

const ret = await fetchMember('https://sakamichi-bot.vercel.app/api/nogizaka/members/')
