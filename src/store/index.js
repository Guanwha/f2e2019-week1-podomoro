import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { state, mutations } from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters,
  strict: false
})
