import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:JSON.parse(sessionStorage.getItem('isLogin'))||false
  },
  mutations: {
    login(state){
      state.isLogin=true;
    },
    logout(state){
      state.isLogin=false;
    }
  },
  actions: {
  },
  modules: {
  }
})
