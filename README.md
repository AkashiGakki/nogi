# nogi

> 🌸 nogi api.

[![NPM version](https://img.shields.io/npm/v/nogi-api?color=a1b858&label=)](https://www.npmjs.com/package/nogi-api)

## Usage

```ts
import nogi from 'nogi-api'

const members = nogi.getAllMember()
const members = nogi.getAllMember('merge')
const members = nogi.getAllMember(['name'])
const members = nogi.getAllMember('use', ['name', 'age'])
const members = nogi.getAllMember({ type: 'default', filter: ['name'] })
// MergeType: 'default': 预置 | 'use': 用户传入 | 'merge': 预置 + 用户 | 'all': 全部字段

const use = nogi.getMember('asuka') // nike name
const use = nogi.getMember('saito asuka') // full name
const use = nogi.getMember('shiori', 'all') // filter
```

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
