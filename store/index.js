import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      ip: ''
    }),
    getters: {},
    actions: {
      async nuxtServerInit({ commit }, { $axios }) {
        const ip = await $axios.$get('http://icanhazip.com')
        commit('SET_IP', ip)
      }
    },
    mutations: {
      SET_IP(state, ip) {
        state.ip = ip
        console.log('IP', ip)
      }
    }
  })
}

export default createStore
