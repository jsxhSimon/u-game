class SessionEvent {
  item = ''
  constructor(item) {
    this.item = item
  }
  get () {
    return JSON.parse(sessionStorage.getItem(this.item))
  }
  set (obj) {
    sessionStorage.setItem(this.item, JSON.stringify(obj))
  }
  clear () {
    sessionStorage.clear()
  }
}

export const localLogin = new SessionEvent('ISLOGIN')
export const localUserInfo = new SessionEvent('USER_INFO')
export const localIsFundsPwd = new SessionEvent('IS_FUNDS_PWD')