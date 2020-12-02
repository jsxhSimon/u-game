import React from 'react'
import theme from '@/utils/theme'
import Input from '@/components/Input'
import Header from '@/components/Header'
import { useHistory } from 'react-router-dom'

const Register = () => {
  let history = useHistory()
  return (
    <div className="register page pd-header">
      <Header style={{backgroundColor: theme.bgColor}} leftContent={<span className="iconfont icon-guanbi" onClick={() => history.push('/')}></span>} hideLogo={true} />
      <div className="wrap pb-50">
        <div className="login-logo"></div>
        <div className="uw-form">
          {/* <Input label="用户名" />
          <Input label="手机号" />
          <Input label="验证码" />
          <Input label="密码" />
          <Input label="确认密码" />
          <Input label="推荐代码" /> */}
          <div className="sub-btn mt-30">
            注册
          </div>
          <p className="mt-18 theme-color" onClick={() => history.push('/login')}>已有账号登录</p>
        </div>
      </div>
    </div>
  )
}

export default Register