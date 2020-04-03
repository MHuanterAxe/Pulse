import API from '../../boot/'

const state = {
  token: null,
  msg: ''
}
const getters = {
  token: state => state.token,
  msg: state => state.msg
}
const mutations = {
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  SET_MSG (state, payload) {
    state.msg = payload
  },
  REMOVE_TOKEN (state, payload) {
    state.token = null
  }
}
const actions = {
  register ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      API.post('/auth/register', payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('auth/login ', data)
        .then((Response) => {
          const token = Response.data.token
          commit('SET_TOKEN', Response.token)
          localStorage.setItem('jwt', token)
          API.defaults.headers.authorization = 'Bearer ' + token
          resolve(Response)
        }).catch(Response => {
          commit('SET_MSG', Response.message)
          reject(Response)
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
