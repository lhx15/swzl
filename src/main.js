import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './static/style.css'
import store from './store'
import Axios from 'axios';
Vue.config.productionTip = false
Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
