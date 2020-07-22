import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history:[1,2,3,4,5,6,7,8,9,10]
  },

  getters: {
    //getters
    showNumbers: state => state.history
  },

  actions: {
    //invoked on user action, in this case when the user clicks the navigation
  },

  mutations: {
    }
})
