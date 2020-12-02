import React from 'react'
import { Carousel } from 'antd-mobile'

const Notice: React.FC = () => {
  return (
    <div className="notice">
      <div className="wrap flex align-items-center space-between">
        <span className="iconfont fs-20 mr-6 icon-guangbo"></span>
        <div className="div-notice-context">
          <Carousel
            className="notice-carousel"
            vertical
            dots={false}
            autoplay
            infinite
          >
            <div className="notice-item">流口水的弗兰克设计费斯洛伐克就酸辣粉酸辣粉结算了就发酸辣粉就酸辣粉就酸辣粉就数量开发教室里飞教室里飞教室里飞教室里飞教室里飞教室里飞就算了烦死了发</div>
            <div className="notice-item"> carousel 2</div>
          </Carousel>
        </div>
        <span className="iconfont icon-more"></span>
      </div>
    </div>
  )
}

export default Notice