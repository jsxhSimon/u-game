import React, { CSSProperties } from 'react'
import { useHistory } from 'react-router-dom'

interface HeaderProps {
  className?: string;
  title?: string;
  rightContent?: any;
  leftContent?: any;
  sideBar?: boolean;
  hideLogo?: boolean;
  style?: CSSProperties;
  back?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { className, title, rightContent, sideBar, hideLogo, leftContent, style, back } = props
  let history = useHistory()
  return (
    <header className={className} style={style}>
      <div className="wrap">
        <div className="header-container">
          <div className="fl">
            {
              back
                ? <span className="iconfont icon-xiangzuo" onClick={() => history.go(-1)}></span>
                : null
            }
            {
              leftContent
            }
          </div>
          {sideBar ? <span className="more iconfont icon-ziyuan"></span> : null}
          {
            title
              ? <div className="title">{title}</div>
              : hideLogo ? null : <div className="logo"></div>
          }
          <div className="flex space-between align-items-center fr">
            {
              rightContent
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header