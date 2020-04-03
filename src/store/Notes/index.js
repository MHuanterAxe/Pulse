import API from '../../boot/'

const state = {
  notes: []
}
const getters = {
  notes: state => state.notes
}
const mutations = {
  SET_NOTES (state, payload) {
    state.notes = payload
  }
}
const actions = {
  fetchNotes ({ commit }) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.get('/notes')
        .then(res => {
          commit('SET_NOTES', res.data.data)
        })
    })
  },
  deleteNote ({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.delete('/notes/delete/' + payload)
        .then(response => {
          dispatch('fetchNotes').then(() => resolve(response))
        })
        .catch(error => {
          reject(error)
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
