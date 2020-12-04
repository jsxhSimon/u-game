import { createContext } from 'react'
import { observable, action } from 'mobx'
import { pwdValidator, userNameValidator } from '@/utils/validator'
import { apiLogin, apiLoginKey } from '@/http'
import { JSEncrypt } from 'jsencrypt'
import userStore from '@/store/userStore'
import { Toast } from 'antd-mobile'

class LoginStore {
  @observable userName = ''

  @observable passWord = ''

  @observable isLock = false

  @observable once = true

  @action.bound login (callback: Function) {
    let nameValid = userNameValidator(this.userName)
    let pwdValid = userNameValidator(this.passWord)
    if (nameValid.valid && pwdValid.valid) {
      if (this.isLock) return
      this.isLock = true
      apiLoginKey()
        .then(res => {
          const publicKey = res.data
          let encryptor = new JSEncrypt()
          encryptor.setPublicKey(publicKey)
          let PassWord = encryptor.encrypt(this.passWord)
          if (PassWord) {
            apiLogin({UserName: this.userName, PassWord: PassWord})
              .then((res: any) => {
                let pwdValid = pwdValidator(this.passWord, this.userName)
                if (pwdValid.valid) {
                  localStorage.removeItem('pwdValid')
                } else {
                  localStorage.setItem('pwdValid', 'false')
                }
                userStore.getUserInfo()
                userStore.getIsFundsPwd()
                if (res.state) {
                  setTimeout(() => {
                    callback && callback()
                  }, 400)
                }
              })
          } else {
            if (this.once) {
              this.once = false
              this.login(callback)
            } else {
              Toast.fail('请稍后再试')
            }
          }
        })
        .finally(() => {
          this.isLock = false
        })
    } else {
      Toast.fail(nameValid.valid ? pwdValid.msg : nameValid.msg)
    }
  }
}

export default createContext(new LoginStore())