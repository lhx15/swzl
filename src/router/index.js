import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Login from '../components/Login'
import TodoList from '../components/TodoList'
export default new Router({
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path: '/todolist',
            component: TodoList
        }
    ]
})