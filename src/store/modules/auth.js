import { loginUser, registerUser, logoutUser } from '../../services/authAPI'

const initialState = {
  user: null,
  token: '',
}

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token)
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    CLEAR_USER_DATA(state) {
      Object.assign(state, { ...initialState })
    },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const { data } = await loginUser(payload)
      const { user, token } = data

      commit('SET_USER_DATA', user)
      commit('SET_TOKEN', token)
    },
    async registerUser({ commit }, payload) {
      const { data } = await registerUser(payload)
      const { user, token } = data

      commit('SET_USER_DATA', user)
      commit('SET_TOKEN', token)
    },
    async logoutUser({ commit }) {
      await logoutUser()
      commit('CLEAR_USER_DATA')
    },
  },
}
