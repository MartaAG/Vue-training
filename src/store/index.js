import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history:[]
  },

  getters: {
    
    showNumbers: state => state.history
  },

  mutations: {
    addToHistory (state, id){
        state.history.push(id)
    }
    }
})
