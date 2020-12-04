import { apiLoginKey, apiLogin } from '@/http/index';
import { makeAutoObservable } from "mobx";
import { userNameValidator, passWordValidator, pwdValidator } from "@/utils/validator";
import { JSEncrypt } from 'jsencrypt'
import { Toast } from 'antd-mobile';
import userStore from '@/store/userStore'

const createLoginStore = () => {
  const store = makeAutoObservable({
    userName: '',
    passWord: '',
    isLock: false,
    once: true,
    reset () {
      store.userName = ''
      store.passWord = ''
      store.isLock = false
      store.once = true
    },
    set (obj) {
      for (let key in obj) {
        store[key] = obj[key]
      }
    },
    login (callback?: Function) {
      let nameValid = userNameValidator(store.userName)
      let pwdValid = passWordValidator(store.passWord)
      if (nameValid.valid && pwdValid.valid) {
        if (store.isLock) return
        store.isLock = true
        apiLoginKey()
          .then(res => {
            const publicKey = res.data
            let encryptor  = new JSEncrypt()
            encryptor.setPublicKey(publicKey)
            let PassWord = encryptor.encrypt(store.passWord)
            if (PassWord) {
              apiLogin({UserName: store.userName, PassWord: PassWord})
                .then((res: any) => {
                  let password = pwdValidator(store.passWord, store.userName)
                  if (password.valid) {
                    localStorage.removeItem('pwdValid')
                  } else {
                    localStorage.setItem('pwdValid', 'false')
                  }
                  userStore.getUserInfo()
                  userStore.getIsFundsPwd()
                  if (callback) {
                    setTimeout(() => {
                      callback()
                    }, 400)
                  }
                })
            } else {
              if (store.once) {
                store.once = false
                store.login(callback)
              } else {
                Toast.fail('请稍后再试')
              }
            }
          })
          .finally(() => {
            store.isLock = false
          })
      } else {
        Toast.fail(nameValid.valid ? pwdValid.msg : nameValid.msg)
      }
    }
  })
  return store
}

export default createLoginStore()