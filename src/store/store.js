import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    isAdminLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isAdminLoggedIn = true
      } else {
        state.isAdminLoggedIn = false
      }
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    }
  }
})
