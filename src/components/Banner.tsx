import React from 'react'
import { Carousel } from 'antd-mobile'

interface BannerProps {
  list: Banner[]
}

const Banner: React.FC<BannerProps> = (props) => {
  const { list } = props
  return (
    <div className="banner">
      <Carousel
        autoplay={false}
        infinite
      >
        {
          list.map((banner, index) => {
            return (
              <div className="banner-item" style={{backgroundImage: `url(${banner.pic})`}} key={index}></div>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Banner