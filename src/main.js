import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Axios from 'axios';
Vue.config.productionTip = false
Vue.prototype.$http = Axios;
router.beforeEach((to,from,next)=>{//在路由跳转的时候，我们需要一些权限判断或者其他操作
  const token = sessionStorage.getItem('demo-token');
  console.log('token:'+token)
  if(to.path === '/'){
    if (token !== 'null' && token !== null) {
      next('/todolist') // 如果有token就转向todolist不返回登录页
    }else{
      next() // 否则跳转回登录页
    }
  }else{
    if (token !== 'null' && token !== null) {
      next() // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
