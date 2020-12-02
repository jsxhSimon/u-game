import React from 'react'
import { Flex } from 'antd-mobile'
import { NavLink, useRouteMatch } from 'react-router-dom'

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  let { url } = useRouteMatch()
  const { className } = props
  return (
    <footer className={className}>
      <Flex align="center">
        <Flex.Item>
          <NavLink exact to={url}>
            <span className="iconfont icon-shouye"></span>
            <p className="mt-6">首页</p>
          </NavLink>
        </Flex.Item>
        <Flex.Item>
          <NavLink to={`${url}/match`}>
            <span className="iconfont icon-saishi"></span>
            <p className="mt-6">赛事</p>
          </NavLink>
        </Flex.Item>
        <Flex.Item>
          <NavLink to={`${url}/activity`}>
            <span className="iconfont icon-huoremen"></span>
            <p className="mt-6">活动</p>
          </NavLink>
        </Flex.Item>
        <Flex.Item>
          <NavLink to={`${url}/user`}>
            <span className="iconfont icon-yixianshi_huaban"></span>
            <p className="mt-6">我的</p>
          </NavLink>
        </Flex.Item>
      </Flex>
    </footer>
  )
}

export default Footer