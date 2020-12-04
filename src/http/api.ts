
const api = {
  // 首页 -> 热门赛事
  featuredEvent: '/Index/featuredMatch',
  // 全局分类配置
  configInfo: '/Index/AllCategories',
  '/Index/AllCategories': {loading: false},
  // 获取比赛列表
  gameList: '/Bookapp/List',
  '/Bookapp/List': {loading: false},
  bannerList: '/Promos/List?v=3',
  '/Promos/List?v=3': {loading: false},
  activityList: '/Promos/List?v=4',
  // 获取公告
  noticeList: '/Article/List',
  '/Article/List': {loading: false},
  userInfo: '/User/Info',
  loginKey: '/Index/GetPublicKey/Login',
  '/Index/GetPublicKey/Login': {special: true},
  login: '/Index/Login',
  // 用户是否设置过资金密码
  Isset: '/User/Isset',
  userBalance: '/User/Balance',
}

export default api

