export default function ({ store }) {
  // Only in development
  if (process.dev) {
    window.onNuxtReady(($nuxt) => {
      $nuxt.$on('content:update', ({ event, path }) => {
        store.dispatch('blog/setAuthors')
        store.dispatch('blog/setCategories')
      })
    })
  }
}