import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './Auth/'
import Add from './Add/'
import Notes from './Notes'
import Tasks from './Tasks'
import User from './User'
Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      Auth, Add, Notes, Tasks, User
    },
    strict: process.env.DEV
  })

  return Store
}
