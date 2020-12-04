import Header from '@/components/Header'
import React from 'react'
import UWImage from '@/components/UWImage'
import ListItem from '@/components/ListItem'
import KeFu from '@/components/KeFuIcon'
import useStore from '@/hooks/useStore'
import { observer } from 'mobx-react'

const User = () => {
  const userStore = useStore()
  console.log(userStore)

  return (
    <div className="user page">
      <Header
        title="个人中心"
        rightContent={[<span className="iconfont icon-shezhi mr-16"></span>, <KeFu />]} />
      <div className="user-container">
        <div className="match-bg">
          <div className="wrap flex flex-between align-items-start user-detail-wrap">
            <div className="user-detail flex align-items center">
              <UWImage
                className="user-logo"
                url=""
                type="user"
              />
              <div className="ml-18 lh-24 mt-4">
                <p className="title">{userStore.UserName}</p>
                <p className="level lh-20 mt-6 icon-color">{userStore.current_grade.code}</p>
              </div>
            </div>
            <div className="sign-in btn mt-6">签到</div>
          </div>
        </div>
        <div className="mt-6">
          <ListItem
            icon={<span className="iconfont icon-qianbao"></span>}
            label="钱包"
            text="￥520.00"
            path="/wallet"
          />
        </div>
        <div className="mt-6">
          <ListItem
            icon={<span className="iconfont icon-xiaoxi"></span>}
            label="消息"
          />
          <ListItem
            icon={<span className="iconfont icon-renwu"></span>}
            label="任务"
            text="还可赚取 ￥8888.00"
          />
          <ListItem
            icon={<span className="iconfont icon-hrwelfarestaffSendRecord"></span>}
            label="投注记录"
          />
        </div>
        <div className="mt-6">
          <ListItem
            icon={<span className="iconfont icon-iconfontzhizuobiaozhun49"></span>}
            label="邀请好友"
          />
          <ListItem
            icon={<span className="iconfont icon-hezuo"></span>}
            label="合营计划"
            text="还可赚取 ￥666.00"
          />
        </div>
        <div className="mt-6">
          <ListItem
            icon={<span className="iconfont icon-qunfengshiyongguize"></span>}
            label="玩法规则"
          />
          <ListItem
            icon={<span className="iconfont icon-guanyu"></span>}
            label="关于"
          />
        </div>
      </div>
    </div>
  )
}

export default observer(User)