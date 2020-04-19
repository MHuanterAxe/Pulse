import API from '../../boot/'

const state = {
  tasks: []
}
const getters = {
  tasks: state => state.tasks,
  count: state => state.tasks.length
}
const mutations = {
  SET_TASKS (state, payload) {
    state.tasks = payload
  }
}
const actions = {
  fetchTasks ({ commit }) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.get('/tasks')
        .then(res => {
          commit('SET_TASKS', res.data.data)
        })
    })
  },
  updateTask ({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.put('/tasks/update/' + payload)
        .then(response => {
          dispatch('fetchTasks').then(() => resolve(response))
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteTask ({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.delete('/tasks/delete/' + payload)
        .then(response => {
          dispatch('fetchTasks').then(() => resolve(response))
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
