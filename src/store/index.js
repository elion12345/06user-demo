import Vue from "vue";
import Vuex from "vuex";
import loginUser from './loginUser.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules:{
    loginUser
  },
  
})

export default store;