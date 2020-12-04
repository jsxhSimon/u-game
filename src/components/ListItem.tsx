import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'

interface ListProps {
  icon: ReactNode;
  label: string;
  className?: string;
  text?: string;
  path?: string;
}

const List: React.FC<ListProps> = (props) => {
  const { icon, label, className, text, path } = props
  let history = useHistory()
  return (
    <div className={`user-item match-bg ${className}`}>
      <div className="user-item-icon">
        {
          icon
        }
      </div>
      <div className="user-item-detail flex align-items-center flex-between" onClick={() => path && history.push(path)}>
        <span className="label">{label}</span>
        <div className="right flex align-items-center">
          <span className="text mr-12">
            {text}
          </span>
          <span className="iconfont icon-xiangyou"></span>
        </div>
      </div>
    </div>
  )
}

export default List