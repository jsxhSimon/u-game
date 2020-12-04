import Header from '@/components/Header'
import React from 'react'

const Wallet = () => {
  return (
    <div className="wallet page">
      <Header
        title="钱包"
        back={true}
      />
      <div className="wallet-detail pd-header match-bg">
        <p className="text-center icon-color fs-14 pt-30">余额</p>
        <div className="balance text-center text-white fs-36 lh-50 mt-6">¥ 520.00</div>
        <div className="btn-list flex flex-center mt-24">
          <div className="user-btn mr-30">
            <span className="iconfont icon-wupincunru-05 mr-6"></span>
            充值
          </div>
          <div className="user-btn mr-30">
            <span className="iconfont icon-wupinquchu-05 mr-6"></span>
            提款
          </div>
          <div className="user-btn">
            <span className="iconfont icon-zhuanzhang mr-6"></span>
            转账
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet