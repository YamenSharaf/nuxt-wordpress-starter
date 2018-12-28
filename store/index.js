import Vuex from 'vuex'
import { getBaseEndpoint, getFullEndpoint } from '@/services/index.js'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      siteInfo: {},
      pages: {},
      posts: {}
    }),
    getters: {
      getPosts(state) {
        return state.posts
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { $axios }) {
        const blogInfo = await $axios
          .$get(getBaseEndpoint())
          .catch(err => console.log('ERROR', err))
        const pages = await $axios
          .$get(getFullEndpoint('pages'))
          .catch(err => console.log('ERROR', err))
        // const posts = await $axios
        //   .$get(getFullEndpoint('posts'))
        //   .catch(err => console.log('ERROR', err))
        commit('BLOG_OVERALL', blogInfo)
        commit('SET_PAGES', pages)
        // commit('SET_POSTS', posts)
      },
      async fetchPage(context, slug) {
        const [page] = await this.$axios.$get(
          getFullEndpoint(`pages?slug=${slug}`)
        )
        return page
      },
      async fetchPost(context, slug) {
        const [post] = await this.$axios.$get(
          getFullEndpoint(`posts?slug=${slug}`)
        )
        return post
      }
    },
    mutations: {
      BLOG_OVERALL(state, blogInfo) {
        state.blogInfo = blogInfo
      },
      SET_PAGES(state, pages) {
        state.pages = pages.reduce((map, page) => {
          map[page.slug] = page
          return map
        }, {})
      },
      SET_POSTS(state, posts) {
        state.posts = posts
      }
    }
  })
}

export default createStore
