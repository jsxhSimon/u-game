import React from 'react'
import { Flex } from 'antd-mobile'

interface SideBarProps {
  list?: RecentGame[]
}

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <div className="side-bar">
      <div className="filter-mask"></div>
      <div className="side-bar-container">
        <div className="header">
          <div className="wrap uw-logo">
            <span className="iconfont icon-xiangzuo fs-22 theme-color"></span>
          </div>
        </div>
        <div className="game-list">
          <div className="game-list-item">
            <h3 className="fs-18">电竞赛事</h3>
            <Flex wrap="wrap">
              <div className="game-card">
                <div className="game-logo"></div>
                <p className="text-center">电子竞技</p>
              </div>
              <div className="game-card">
                <div className="game-logo"></div>
                <p className="text-center">电子竞技</p>
              </div>
              <div className="game-card">
                <div className="game-logo"></div>
                <p className="text-center">电子竞技</p>
              </div>
              <div className="game-card">
                <div className="game-logo"></div>
                <p className="text-center">电子竞技</p>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar