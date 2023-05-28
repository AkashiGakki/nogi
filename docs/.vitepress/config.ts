import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NOGI',

  appearance: 'dark',

  description: 'Nogizaka46 Members Data Info',

  themeConfig: {
    logo: '/nogi.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AkashiGakki/nogi' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Akashi Sai',
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/nogi-32x32.svg', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/nogi.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Akashi Sai' }],

    ['meta', { property: 'og:title', content: 'NOGI' }],
    ['meta', { property: 'og:description', content: 'Nogizaka46 Members Data Info' }],
  ],
})
