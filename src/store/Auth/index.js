import API from '../../boot/'

const state = {
  token: null
}
const getters = {
  token: state => state.token
}
const mutations = {
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  REMOVE_TOKEN (state, payload) {
    state.token = null
  }
}
const actions = {
  register ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      API.post('/auth/register', payload)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('auth/login ', data)
        .then((res) => {
          const token = res.data.token
          commit('SET_TOKEN', res.token)
          localStorage.setItem('jwt', token)
          API.defaults.headers.authorization = 'Bearer ' + token
          resolve(res.data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
