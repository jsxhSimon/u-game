import api from './api'
import http from './config'

export const apiBannerList = () => {
  return http.get(api.bannerList)
}

export const apiHotMatch = () => {
  return http.get(api.featuredEvent)
}

export const apiConfigInfo = () => {
  return http.get(api.configInfo)
}

export const apiGameList = (params = {}) => {
  return http.get(api.gameList, {params})
}

// 获取活动列表
export const apiActivityList = (params = {}) => {
  return http.get(api.activityList, {params})
}

export const apiUserInfo = () => {
  return http.get(api.userInfo)
}

// 获取登录key
export const apiLoginKey = () => {
  return http.get(api.loginKey)
}

interface apiLoginParams {
  UserName: string;
  PassWord: string;
  is_steam?: boolean;
  /** v 默认为 4 */
  v?: number;
  code?: string;
}

export const apiLogin = (params: apiLoginParams) => {
  params.v = 4
  return http.post(api.login, params)
}

export const apiIsset = () => {
  return http.get(api.Isset)
}

export const apiUserBalance = () => {
  return http.get(api.userBalance)
}