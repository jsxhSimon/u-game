import React from 'react'
import { useHistory } from 'react-router-dom'

interface KeFuIcon {
  className?: string;
}

const KeFuIcon: React.FC<KeFuIcon> = (props) => {
  const { className } = props
  let history = useHistory()
  return <span className={`iconfont icon-htmal5icon31 ${className}`} onClick={() => history.push('/kefu')}></span>
}

export default KeFuIcon