// console.log(11);
import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules:{
  	user
  }
});

export default store
