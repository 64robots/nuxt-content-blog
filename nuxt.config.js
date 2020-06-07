export default {
  mode: 'universal',

  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxt/components'],
  hooks: {
    'content:file:beforeInsert': document => {
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
      }
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
}
