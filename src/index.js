import path from 'path'
import defu from 'defu'

import tailwindConfig from './tailwind.config'

const defaultConfig = {
  target: 'static',

  ssr: true,

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
      },
    ],
  },

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const posts = await $content('posts', { deep: true })
        .only(['slug'])
        .fetch()

      const categories = await $content('categories')
        .only(['slug'])
        .fetch()

      return [...posts.map(p => `/${p.slug}`), ...categories.map(c => `/category/${c.slug}`)]
    },
  },

  transpile: [
    __dirname
  ],

  css: [],

  plugins: [
    '~/node_modules/@64robots/nuxt-content-blog/src/plugins/init',
    '~/node_modules/@64robots/nuxt-content-blog/src/plugins/update.client',
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxt/content'
  ],

  components: true,

  hooks: {
    'modules:before': ({ nuxt }) => {
      // Configure `components/` dir
      nuxt.hook('components:dirs', (dirs) => {
        dirs.push({
          path: path.resolve(__dirname, 'components'),
          global: true
        })
      })
      // Configure `tailwind.config.js` path
      nuxt.options.tailwindcss.configPath = nuxt.options.tailwindcss.configPath || path.resolve(nuxt.options.rootDir, 'tailwind.config.js')
      nuxt.options.tailwindcss.cssPath = nuxt.options.tailwindcss.cssPath || path.resolve(nuxt.options.rootDir, nuxt.options.dir.assets, 'css', 'tailwind.css')
    },
  },
  content: {},

  tailwindcss: {
    config: tailwindConfig
  }
}

export default (userConfig) => {
  const config = defu.arrayFn(userConfig, defaultConfig)

  config.hooks['content:file:beforeInsert'] = document => {
    if (document.extension === '.md') {
      const { text } = require('reading-time')(document.text)
      document.readingTime = text

      if (!document.category) {
        document.category = document.dir.replace('/category/', '')
      }

      if (!document.permalink) {
        document.permalink = document.title
          .replace(/[^a-z0-9]+/gi, '-')
          .replace(/^-*|-*$/g, '')
          .toLowerCase()
      }

      if (!document.language) {
        document.language = 'en'
      }
    }
  }

  return config
}
