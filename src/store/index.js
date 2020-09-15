export const state = () => ({
  authors: [],
  categories: [],
})

export const actions = {
  async setAuthors({ commit }) {
    const categories = await this.$content('authors').fetch()
    commit('SET_AUTHORS', categories)
  },

  async setCategories({ commit }) {
    const categories = await this.$content('categories').fetch()
    commit('SET_CATEGORIES', categories)
  },
}

export const mutations = {
  SET_AUTHORS(state, authors) {
    state.authors = authors
  },

  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}
