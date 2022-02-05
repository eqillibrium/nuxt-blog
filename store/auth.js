export const state = () => ({
  token: false
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}

export const actions = {
  async login ({ commit, dispatch }, formData) {
    try {
      const token = await ('')
      dispatch('auth/setToken', token)
    } catch (e) {
      console.log(e)
    }
  },
  setToken ({ commit }, token) {
    commit('setToken', token)
  }
}

export const getters = {
  isAuth: state => !!state.token
}
