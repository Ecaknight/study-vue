/**
 * 封装共有的http请求,满足和后端的请求
 */

import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // baseURL: ''
  timeout: 15000,
  withCredentials: true
})

// 请求拦截
service.interceptors.request.use(
  function (config) {
    // 在这里可以配置特定的通用请求信息,如token
    if (!config.headers['X-Token']) {
      config.headers['X-Token'] = 111231
    }
    return config
  },
  function (error) {
    Message.error(`请求错误: ${error.message}`)
    return Promise.reject(error)
  }
)

service.interceptors.request.use(
  function (response) {
    // todo 请求报错就处理跳转到登录页
    return response.data
  },
  function (err) {
    Message.error(`响应错误: ${err.message}`)
    return Promise.reject(err)
  }
)

export default service
