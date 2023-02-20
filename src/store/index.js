import { createStore } from 'vuex'

export default createStore({
  state: {
    authToken: ''
  },
  mutations: {
    setAuthToken (state, payload) {
      state.authToken = payload
    }
  },
  getters: {
    getAuthToken (state) {
      return state.authToken
    }
  },
  modules: {}
})
