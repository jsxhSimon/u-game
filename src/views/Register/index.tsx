import React, {useState} from 'react'
import theme from '@/utils/theme'
import Input from '@/components/Input'
import Header from '@/components/Header'
import { useHistory } from 'react-router-dom'

const Register: React.FC = () => {
  let history = useHistory()
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [recommendCode, setRecommendCode] = useState('')
  return (
    <div className="register page pd-header">
      <Header style={{backgroundColor: theme.bgColor}} leftContent={<span className="iconfont icon-guanbi" onClick={() => history.push('/')}></span>} hideLogo={true} />
      <div className="wrap pb-50">
        <div className="login-logo"></div>
        <div className="uw-form">
          <Input label="用户名" value={userName} onChange={(val) => setUserName(val)} placeholder="6-12位字母与数字组成" />
          <Input label="手机号" value={phone} onChange={val => setPhone(val)} />
          <Input label="验证码" value={code} onChange={val => setCode(val)} />
          <Input label="密码" value={passWord} onChange={val => setPassWord(val)} placeholder="6-20位字母与数字组成" />
          <Input label="确认密码" value={confirmPwd} onChange={val => setConfirmPwd(val)} />
          <Input label="推荐代码" value={recommendCode} onChange={val => setRecommendCode(val)} />
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