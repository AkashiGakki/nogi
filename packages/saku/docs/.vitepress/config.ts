import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAKU",

  appearance: 'dark',

  description: "Sakurazaka46 Members Data Info",

  themeConfig: {
    logo: '/saku.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Akashi Sai'
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/saku-32x32.svg', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/saku.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Akashi Sai' }],

    ['meta', { property: 'og:title', content: 'SAKU' }],
    ['meta', { property: 'og:description', content: 'Sakurazaka46 Members Data Info' }],
  ],
})
