import API from '../../boot/'

const state = {
  tasks: [],
  tasksDone: []
}
const getters = {
  tasks: state => state.tasks,
  tasksDone: state => state.tasksDone,
  count: state => state.tasks.length,
  countDone: state => state.tasksDone.length
}
const mutations = {
  SET_TASKS (state, payload) {
    state.tasks = payload
  },
  SET_DONE_TASKS (state, payload) {
    state.tasksDone = payload
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
  fetchDoneTasks ({ commit }) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.get('/tasks/done')
        .then(res => {
          commit('SET_DONE_TASKS', res.data.data)
        })
    })
  },
  updateTask ({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.put('/tasks/update/' + payload)
        .then(response => {
          dispatch('fetchTasks').then(() => resolve(response))
          dispatch('fetchDoneTasks').then(() => resolve(response))
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
          dispatch('fetchDoneTasks').then(() => resolve(response))
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
