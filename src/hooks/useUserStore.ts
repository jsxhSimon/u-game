import { useLocalStore } from 'mobx-react'
import { localIsFundsPwd } from '@/store/local'
import { apiUserInfo, apiIsset } from '@/http'

const useUserStore = () => {
  const userStore = useLocalStore<UserInfo>(() => ({
    login: false,
    UserName: '',
    NickName: '',
    tailNumber: '',
    isFundsPwd: localIsFundsPwd.get(),
    current_grade: null,
    setUserInfo: (obj: SubsetOfUserInfo) => {
      for (let key in obj) {
        userStore[key] = obj[key]
      }
    },
    getUserInfo: () => {
      apiUserInfo()
        .then(res => {
          userStore.setUserInfo(Object.assign(res.data, {login: true}))
        })
    },
    getIsFundsPwd: () => {
      apiIsset()
        .then((res: any) => {
          if (res.state) {
            userStore.isFundsPwd = res.data
            localIsFundsPwd.set(res.data)
          }
        })
    }
  }))
  return [userStore]
}

export default useUserStore