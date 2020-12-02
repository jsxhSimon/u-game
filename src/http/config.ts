import axios, { AxiosRequestConfig } from 'axios'
import api from './api'
import qs from 'qs'
import { Toast } from 'antd-mobile'
import userStore from '@/store/userStore'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : '/uwapi'
const serves = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Agent': 'h5'
  }
})

let pending: string[] = []
const CancelToken = axios.CancelToken

interface requestConfig extends AxiosRequestConfig {
  _url: string;
}

const removePending = (config: requestConfig, f?: Function) => {
  let flagUrl = config._url + '&' + config.method
  if (pending.includes(flagUrl)) {
    if (f) {
      f()
    } else {
      pending.splice(pending.indexOf(flagUrl), 1)
    }
  } else {
    let propertyName = config.url.split('?')[0]
    if (propertyName in api) {
      if (api[propertyName].loading === undefined || api[propertyName].loading) {
        Toast.loading('加载中...', api[propertyName].loading || 0)
        setTimeout(() => {
          Toast.hide()
        }, 1500)
      }
    }
    if (f) {
      pending.push('flagUrl')
    }
  }
}

serves.interceptors.request.use(
  (config: requestConfig) => {
    const reqUrl = config.url.replace(baseUrl, '')
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      config.data = qs.stringify(config.data)
    }
    if (config.method === 'get') {
      config._url = objectToUrlParams(reqUrl, config.params)
    } else {
      config._url = reqUrl
    }
    config.cancelToken = new CancelToken(c => {
      removePending(config, c)
    })
    return config
  },
  error => Promise.reject(error.data.error.message)
)

serves.interceptors.response.use(
  res => {
    const resUrl = res.config.url.replace(baseUrl, '')
    let isSpecial = (api[resUrl] || {}).special
    if (isSpecial) {
      return res.data
    }
    if (res.data.message === 'login' && !(api[resUrl] || {}).nologin) {
      res.data.success = -1
    }
    if (res.data.message === 'login') {
      res.data.message = ''
    }
    // 异地登录判断是否需要输入验证码
    if (res.data.message && res.data.message.indexOf('valid_phone') !== -1) {
      userStore.setUserInfo({tailNumber: res.data.message.split(':')[1]})
      return new Promise(() => {})
    }
    if ((typeof res.data).toLocaleLowerCase() === 'string') res.data = {state: false, message: res.data}

    let msg = res.data.message || (api[resUrl] || [])[Number(res.data.state)]

    if ((api[resUrl] || []).nomsg) msg = ''

    if ((api[resUrl] || []).noMsgForTrue && res.data.state) msg = ''

    if (msg && !res.data.href) Toast[!res.data.state ? 'fail' : 'succes'](msg, 2.5)

    delete res.data.message

    if (res.data.state) {
      delete res.data.state
      return res.data
    }
    if (res.data.sucess ===  -1) {
      userStore.setUserInfo({login: false})
    }
    return new Promise(() => {})
  },
  error => {

  }
)

export default serves

export const objectToUrlParams = (url, params) => {
  if (!params) return url
  let rs = []
  for (let p in params) {
    rs.push(p + '=' + params[p])
  }
  if (rs.length < 1) return url
  return (url += url.indexOf('?') !== -1 ? rs.join('&') : '?' + rs.join('&'))
}

