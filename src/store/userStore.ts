import { observable, action } from "mobx"
import { apiUserInfo, apiIsset } from '@/http'
import { localIsFundsPwd } from "./local"

class UserStore {
  @observable userInfo: UserInfo = {
    login: false,
    UserName: '',
    NickName: '',
    tailNumber: '',
    isFundsPwd: localIsFundsPwd.get() || false,
    current_grade: null
  }

  @action.bound
  setUserInfo (obj: SubsetOfUserInfo) {
    this.userInfo = Object.assign(this.userInfo, obj)
  }

  @action.bound
  getUserInfo () {
    apiUserInfo()
      .then(res => {
        this.setUserInfo(Object.assign(res.data, {login: true}))
      })
  }

  @action.bound
  getIsFundsPwd () {
    apiIsset()
      .then((res: any) => {
        if (res.state) {
          this.userInfo.isFundsPwd = res.data
          localIsFundsPwd.set(res.data)
        }
      })
  }
}

export default new UserStore()