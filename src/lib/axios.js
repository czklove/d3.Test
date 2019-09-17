import axios from 'axios'
import { baseURL } from '@/config'
import { getToken, setToken, localSave } from '@/lib/util'
// import router from '@/router'
/* 异步的axios请求 */
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  // request 拦截器 里面加入 请求时loading ,response 里面加入全局的loading 验证
  interceptors (instance, url) {
    // http request 拦截器
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      // 添加头部的token
      let token = getToken()
      if (token) {
        config.headers['apiAuthorization'] = getToken()
      }
      // let expiredtime = localRead('expiredtime')
      return config
    }, error => {
      return Promise.reject(error)
    })
    // http response 拦截器
    instance.interceptors.response.use(res => {
      this.distroy(url)
      const { data } = res
      // 判断返回的数据是否是因为未登入，或者登入过期返回false
      if (data.success === false) {
        if (data.code) {
          if (data.code === '400' || data.code === '401' || data.code === '402') {
            // 返回 401 清除token信息
            setToken('')
            localSave('', 'expiredtime')
            console.log(111)
            window.location.hash = '/adminlogin'
            return data
          }
        }
      }
      return data
    }, error => {
      this.distroy(url)
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
const httpaxios = new HttpRequest()
export default httpaxios
