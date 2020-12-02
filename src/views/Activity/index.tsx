import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd-mobile'
import { apiActivityList } from '@/http'

const tabs = [
  {title: '全部'},
  {title: '电竞'},
  {title: '体育'},
  {title: '真人'},
  {title: '其他'}
]

const Activity = () => {
  const [list, setList] = useState<Activity[]>([])
  useEffect(() => {
    apiActivityList()
      .then(res => {
        setList(res.data)
      })
  }, [])
  return (
    <div className="activity">
      <Tabs
        tabs={tabs}
        tabBarBackgroundColor="transparent"
        tabBarActiveTextColor="#fff"
        tabBarTextStyle={{color: '#a2a8ba'}}
        tabBarUnderlineStyle={{border: '.015rem #00fff6 solid', width: '.34rem', transform: 'translate(.2rem, -.06rem)'}}
      >
        <div className="activity-list">
          {
            list.map(activity => {
              return (
                <div className="activity-item" key={activity.url}>
                  <p className="fs-14 text-white">
                    整点雨红包
                  </p>
                  <div className="activity-pic mt-8" style={{backgroundImage: `url(${activity.pic})`}}></div>
                  <p className="mt-12 act-name">
                    截止时间：2020年11月30日
                    <span className="iconfont icon-xiangyou fr"></span>
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <p className="fs-14 text-white">
              整点雨红包
            </p>
            <div className="activity-pic mt-8"></div>
            <p className="mt-12 act-name">
              截止时间：2020年11月30日
              <span className="iconfont icon-xiangyou fr"></span>
            </p>
          </div>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <p className="fs-14 text-white">
              整点雨红包
            </p>
            <div className="activity-pic mt-8"></div>
            <p className="mt-12 act-name">
              截止时间：2020年11月30日
              <span className="iconfont icon-xiangyou fr"></span>
            </p>
          </div>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <p className="fs-14 text-white">
              整点雨红包
            </p>
            <div className="activity-pic mt-8"></div>
            <p className="mt-12 act-name">
              截止时间：2020年11月30日
              <span className="iconfont icon-xiangyou fr"></span>
            </p>
          </div>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <p className="fs-14 text-white">
              整点雨红包
            </p>
            <div className="activity-pic mt-8"></div>
            <p className="mt-12 act-name">
              截止时间：2020年11月30日
              <span className="iconfont icon-xiangyou fr"></span>
            </p>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default Activity