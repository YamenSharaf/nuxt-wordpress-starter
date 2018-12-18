import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      blogRes: {}
    }),
    getters: {},
    actions: {
      async nuxtServerInit({ commit }, { $axios }) {
        const blogRes = await $axios.$get(
          'https://personal-wp-exp.000webhostapp.com/wp-json'
        )
        commit('BLOG_OVERALL', blogRes)
      }
    },
    mutations: {
      BLOG_OVERALL(state, blogRes) {
        state.blogRes = blogRes
        console.log('blogRes', blogRes)
      }
    }
  })
}

export default createStore
