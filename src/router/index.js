import Vue from 'vue'
import Router from 'vue-router'
import adminLayout from '../components/adminLayout'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
// import Layout from '@/components/login'
import Home from '../components/Home.vue'
import Lunbo from '../components/Lunbo.vue'
import LossGoods from '../components/lossGoods.vue'
import PickGoods from '../components/pickGoods.vue'
import MyInfo from '../components/myInfo.vue'
import ChangePass from '../components/changePass.vue'
import GoodsInfo from '../components/goodsInfo.vue'
// import Tables from '../components/Tables'
// import Recommend from '../components/recommend'
// import Donate from '../components/donate'
import store from '../store'
import {getUserInfo} from '../api/index';

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        login: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        login: false
      }
    }
    ,
    {
      path: '/home/index',
      name: 'home',
      component: Home,
      meta: {
        login: true
      },
      children: [{
          path: '/home/index',
          name: 'index',
          component: Lunbo,
          meta: {
            login: true
          }
        },
        {
          path: '/home/lossGoods',
          name: 'lossGoods',
          component: LossGoods,
          meta: {
            login: true
          }
        },
        {
          path: '/home/pickGoods',
          name: 'pickGoods',
          component: PickGoods,
          meta: {
            login: true
          }
        },
        {
          path: '/home/myInfo',
          name: 'myInfo',
          component: MyInfo,
          meta: {
            login: true
          }
        },
        {
          path: '/home/changePass',
          name: 'changePass',
          component: ChangePass,
          meta: {
            login: true
          }
        },
        {
          path: '/home/goodsInfo',
          name: 'goodsInfo',
          component: GoodsInfo,
          meta: {
            login: true
          }
        },
        


      ]
    },
    {
      path:'*',
      redirect:'/home/index'
    }


  ]
})

router.beforeEach(async (to, from, next) => {
  /**
   * 判断是否已经登录
   * 是否有localStorage
   * 判断页面是否需要登录
   */
  console.log(store.state.user.login)
  console.log(to.matched.some(record => record.meta.login))
  if (to.matched.some(record => record.meta.login)){
    
    if (!store.state.user.name) {
      //没登录
      //但是有本地存储过
      
      if (localStorage.getItem("login")) {
        const res = await getUserInfo();
        if(res.success){
          store.dispatch('setUser',res.data);
          next();
        }else{
          next({path:'/login'})
        }
      }else{
        next({path:'/login'})
      }
  }else{
      next()
    }
  }else{
    next()
  }

})

export default router
