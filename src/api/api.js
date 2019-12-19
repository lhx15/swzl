/** axios封装
  * 请求拦截、相应拦截、错误统一处理
*/
import axios from 'axios'
// import router from '../router/index.js'
import DOMAIN from '../assets/js/domain'
import { Loading } from 'element-ui'
import { messages } from '../assets/js/common.js'
import qs from 'querystring'

axios.defaults.baseURL = DOMAIN 
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.withCredentials = true
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

let loading = null

/*
 *请求前拦截
 *用于处理需要请求前的操作
*/
axios.interceptors.request.use(
  config => {
    loading = Loading.service({
      text: '正在加载中......',
      fullscreen: true
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/*
 *请求响应拦截
 *用于处理数据返回后的操作
*/
axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      if (loading) {
        loading.close()
      }
      console.log(response);
      const res = response.data;
      console.log(res.success);
      if (res.success) {
        resolve(res)
      } else {
        resolve(res)
        const info = res.info;
        console.log(info);
        messages('error',info);
      }
    })
  },
  error => {
    if (loading) {
      loading.close()
    }
    console.log(error);
    
    // if (!error.response) {
    //   if (error.message.includes('timeout')) {
    //     messages('error', '请求超时，请检查互联网连接')
    //   } else {
    //     messages('error', '请检查网络是否已连接')
    //   }
    //   return
    // }
    const info = error.info;
    console.log(info);
    messages('error',info);
    return Promise.reject(error)
  }
)
/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
*/
export function get (url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params, ...config })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
*/
export function post (url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {...config})
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function postForm (url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(params), {
        ...config,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
