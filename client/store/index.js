import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import modules from './modules'

// production URL base
let urlBase = '/api/v1/auth'

if (process.env.NODE_ENV === 'development') {
  // set up development endpoint base
  // urlBase = 'http://localhost:3032/api/v1/auth'
  urlBase = 'https://dcloud-collab-toolbox-rtp.cxdemo.net/api/v1/auth'
}

const endpoints = {
  login: urlBase + '/login',
  logout: urlBase + '/logout',
  user: urlBase + '/user',
  userDemo: urlBase + '/user/demo',
  vertical: 'https://mm.cxdemo.net/api/v1/verticals?all=true&summary=true'
}

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules,
  state: {
    demoConfigId: 'cwcc-tsa-prod',
    pkg,
    endpoints,
    working: {
      app: {},
      admin: {},
      user: {},
      session: {},
      dcloud: {}
    },
    loading: {
      app: {},
      admin: {},
      user: {},
      session: {},
      dcloud: {}
    }
  },
  mutations
})

export default store
