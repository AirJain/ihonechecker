import axios from 'axios'   
import { Notify, Toast } from 'vant';
import { VueAxios } from './axios'
import router from '../router';

//Toast.allowMultiple();

let toast

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 30000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  Toast.clear(); 
  if (error.response) { 
    
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {

  toast = Toast.loading({
   duration: 0
  });  
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  Toast.clear(); 
  return response
}, errorHandler)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request)
  }
}


export default request

export {
  installer as VueAxios,
  request as axios
}


