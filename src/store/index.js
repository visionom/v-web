import Vuex from 'vuex'
import Vue from 'vue'
import { mutations, state } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
