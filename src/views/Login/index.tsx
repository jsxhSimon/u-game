import React, { useContext, createContext, useEffect } from 'react'
import Header from '@/components/Header'
import theme from '@/utils/theme'
import Input from '@/components/Input'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import LoginStore from './store'
import { observer } from 'mobx-react'

const Login = () => {
  let history = useHistory()
  let location = useLocation()
  let store = useContext(createContext(LoginStore))
  useEffect(() => {
    return () => store.reset()
  }, [store])
  const sucessLogin = () => {
    if (location.search) {
      history.replace(location.search.split('=')[1])
    } else {
      history.push('/')
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
          <Input label="用户名/手机号" value={store.userName} onChange={val => store.set({userName: val})} />
          <Input label="密码" type="password" value={store.passWord} onChange={val => store.set({passWord: val})} />
          {/* <Input label="手机号" type="text" value={phone} onChange={val => setPhone(val)} /> */}
          <div className="sub-btn mt-30" onClick={() => store.login(sucessLogin)}>
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

export default observer(Login)