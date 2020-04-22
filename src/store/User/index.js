import API from '../../boot/'
import { Dark } from 'quasar'

const state = {
  user: {
    theme: false
  }
}
const getters = {
  user: state => state.user,
  theme: state => state.user.theme
}
const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_THEME (state, payload) {
    state.user.theme = payload
  },
  REMOVE_USER (state, payload) {
    state.user = {}
  }
}
const actions = {
  fetchUserData ({ commit }) {
    return new Promise((resolve, reject) => {
      API.defaults.headers.authorization = localStorage.getItem('jwt')
      API.get('user/')
        .then(res => {
          commit('SET_USER', res.data.data)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  setTheme ({ commit, getters }, payload) {
    if (payload.initial) {
      if (JSON.parse(window.localStorage.getItem('__userData'))) {
        commit('SET_THEME', JSON.parse(window.localStorage.getItem('__userData')).theme)
        Dark.set(getters.theme)
      } else {
        Dark.set(false)
      }
    } else {
      Dark.toggle()
      commit('SET_THEME', Dark.isActive)
      window.localStorage.setItem('__userData', JSON.stringify(getters.user))
    }
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
