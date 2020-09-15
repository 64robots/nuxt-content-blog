import { actions, state, mutations } from '../store'

export default async function ({ store }) {
  store.registerModule('blog', {
    namespaced: true,
    actions,
    state,
    mutations
  })
  await store.dispatch('blog/setAuthors')
  await store.dispatch('blog/setCategories')
}