import React, { useState } from 'react'
import Header from '@/components/Header'
import theme from '@/utils/theme'
import Input from '@/components/Input'
import { useHistory } from 'react-router-dom'
import { JSEncrypt } from 'jsencrypt'
import { apiLoginKey, apiLogin } from '@/http'
import { userNameValidator, passWordValidator, pwdValidator } from '@/utils/validator'
import { Toast } from 'antd-mobile'
import { useStores } from '@/hooks/useStore'
import { useLocation } from 'react-router-dom'

const Login = () => {
  let history = useHistory()
  let location = useLocation()
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  // const [phone, setPhone] = useState('')
  // const [code, setCode] = useState('')
  const [isLock, setIsLock] = useState(false)
  const [once, setOnce] = useState(true)
  const { userStore } = useStores()
  const login = () => {
    let name = userNameValidator(userName)
    let pwd = passWordValidator(passWord)
    if (name.valid && pwd.valid) {
      if (isLock) return
      setIsLock(true)
      apiLoginKey()
        .then(res => {
          const publicKey = res.data
          let encryptor = new JSEncrypt()
          encryptor.setPublicKey(publicKey)
          let PassWord = encryptor.encrypt(passWord)
          if (PassWord) {
            apiLogin({UserName: userName, PassWord: PassWord})
              .then((res: any) => {
                // 校验密码是否符合最新规则，不符合登录后提醒用户修改密码
                let pwdValid = pwdValidator(passWord, userName)
                if (pwdValid.valid) {
                  localStorage.removeItem('pwdValid')
                } else {
                  localStorage.setItem('pwdValid', 'false')
                }
                userStore.getUserInfo()
                userStore.getIsFundsPwd()
                setTimeout(() => {
                  if (location.search) {
                    history.replace('/' + location.search.split('=')[1])
                  } else {
                    history.replace('/')
                  }
                }, 400)
              })
          } else {
            if (once) {
              setOnce(false)
              login()
            } else {
              Toast.fail('请稍后再试')
            }
          }
        })
        .finally(() => {
          setIsLock(false)
        })
    } else {
      Toast.fail(name.valid ? pwd.msg : name.msg)
    }
  }

  return (
    <div className="login page pd-header">
      <Header
        style={{backgroundColor: theme.bgColor}}
        leftContent={<span className="iconfont icon-guanbi" onClick={() => history.push('/')}></span>}
        hideLogo={true} />
      <div className="wrap">
        <div className="login-logo">
          <p>WELCOME BACK!</p>
        </div>
        <div className="uw-form">
          <Input label="用户名/手机号" value={userName} onChange={val => setUserName(val)} />
          <Input label="密码" type="password" value={passWord} onChange={val => setPassWord(val)} />
          {/* <Input label="手机号" type="text" value={phone} onChange={val => setPhone(val)} /> */}
          <div className="sub-btn mt-30" onClick={() => login()}>
            登录
          </div>
          <p className="mt-18 clearfix theme-color">
            <span onClick={() => history.push('/register')} className="fl">注册新用户</span>
            <span className="fr">忘记密码？</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login