import { apiIsset, apiUserInfo } from '@/http'
import { makeAutoObservable } from 'mobx'
import { localIsFundsPwd } from './local'

const createTodoStore = () => {
  const store = makeAutoObservable<UserInfo>({
    login: false,
    UserName: '',
    NickName: '',
    tailNumber: '',
    isFundsPwd: localIsFundsPwd.get() || false,
    current_grade: null,
    setUserInfo (obj: SubsetOfUserInfo) {
      for (let key in obj) {
        store[key] = obj[key]
      }
    },
    getUserInfo () {
      apiUserInfo()
        .then(res => {
          store.setUserInfo(Object.assign(res.data, {login: true}))
        })
    },
    getIsFundsPwd () {
      apiIsset()
        .then((res: any) => {
          store.isFundsPwd = res.data
          localIsFundsPwd.set(res.data)
        })
    }
  })
  return store
}

export default createTodoStore()