import Vuex from 'vuex'

function getBaseEndpoint() {
  return `${process.env.baseEndpoint}`
}

function getFullEndpoint(param) {
  return `${process.env.baseEndpoint}${process.env.baseVersion}/${param}`
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      siteInfo: {}
    }),
    getters: {},
    actions: {
      async nuxtServerInit({ commit }, { $axios }) {
        const blogInfo = await $axios
          .$get(getBaseEndpoint())
          .catch(err => console.log('ERROR', err))
        commit('BLOG_OVERALL', blogInfo)
      }
    },
    mutations: {
      BLOG_OVERALL(state, blogInfo) {
        state.blogInfo = blogInfo
      }
    }
  })
}

export default createStore
