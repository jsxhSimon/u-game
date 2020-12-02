import React, { useEffect, useState } from 'react'


interface UWImageProps {
  url: string;
  className?: string;
  type?: 'user' | 'team';
}

const UWImage: React.FC<UWImageProps> = (props) => {
  const {url, className, type} = props
  const [sucImg, setSucImg] = useState('')
  useEffect(() => {
    if (!url) return
    let img = new Image()
    img.src = url
    img.onload = function () {
      setSucImg(url)
    }
  }, [url])
  return (
    <div className={`uw-img ${type ? `default-${type}` : 'default-team'} ${className}`} style={sucImg ? {backgroundImage: `url(${sucImg})`} : {}}></div>
  )
}

export default UWImage