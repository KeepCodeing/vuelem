import Vue from 'vue'
import Vuex from 'vuex'

import home_store from './home'
import details_store from './details'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home_store,
    details_store,
  }
})
