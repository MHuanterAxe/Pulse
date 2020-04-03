import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './Auth/'
import Add from './Add/'
import Notes from './Notes'
Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      Auth, Add, Notes
    },
    strict: process.env.DEV
  })

  return Store
}
