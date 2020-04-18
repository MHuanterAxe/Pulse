import API from '../../boot/'

const state = {}
const getters = {}
const mutations = {}
const actions = {
  addNote ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      API.post('/notes/create', payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  addTask ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      API.post('/tasks/create', payload)
        .then(response => {
          resolve(response)
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
