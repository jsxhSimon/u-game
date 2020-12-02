import React, { useState, useEffect } from 'react'
import Notice from '@/components/Notice'
import { apiBannerList, apiHotMatch, apiConfigInfo, apiGameList } from '@/http'
import Banner from '@/components/Banner'
import { Carousel } from 'antd-mobile'
import dayjs from 'dayjs'
import UWImage from '@/components/UWImage'
import Swiper from 'swiper'
import MatchItem from '@/components/MatchItem'
import SideBar from '@/components/SideBar'

const Home: React.FC = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([])
  const [hotMatchList, setHotMatchList] = useState<HotMatch[]>([])
  const [hotMatchIndex, setHotMatchIndex] = useState(0)
  const [recentGameList, setRecentGameList] = useState<RecentGame[]>([])
  const [scrollBallRecords, setScrollBallRecords] = useState<string[]>([])
  const [scrollBollMatches, setScrollBollMatches] = useState<ScrollBallMatchs>({})
  useEffect(() => {
    apiBannerList()
      .then(res => {
        setBannerList(res.data)
      })
    apiHotMatch()
      .then(res => {
        setHotMatchList(res.data)
      })
    apiConfigInfo()
      .then(res => {
        setRecentGameList(res.data.menuSort)
      })
    apiGameList({
      v: 3,
      cid: 0,
      p: 1,
      d: 1
    })
      .then(res => {
        setScrollBallRecords(res.data.records)
        setScrollBollMatches(res.data.matches)
      })
  }, [])
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10
    })
  }, [recentGameList])
  return (
    <>
      <Notice />
      <div className="main mt-10">
        <Banner list={bannerList} />
      </div>
      <div className="title mt-20 mb-14 wrap">
        热门赛事
        <span className="iconfont icon-xiangyou fr icon-color"></span>
      </div>
      <div className="hot-match">
        <Carousel
          frameOverflow="visible"
          slideWidth={0.74}
          autoplay={false}
          infinite
          dots={false}
          afterChange={index => setHotMatchIndex(index)}
        >
          {
            hotMatchList.map((match, index) => {
              return <div className={`hot-match-item flex space-between align-items-center ${hotMatchIndex === index ? 'active' : ''}`} key={match.id}>
                <div className="game-type"></div>
                <div className="match-detail">
                  <h3 className="title mb-6">{match.title}</h3>
                  <div className="date">
                    {dayjs.unix(match.matchTime).format('YYYY-MM-DD hh:mm:ss')}
                  </div>
                  <div className="line mt-10"></div>
                  <div className="teams flex space-between align-items-center">
                    <div className="team">
                      <UWImage
                        className="logo"
                        url={match.homeName}
                      />
                      <div className="team-name">
                        {match.homeName}
                      </div>
                    </div>
                    <span className="short-line"></span>
                    <div className="team">
                      <UWImage
                        className="logo"
                        url={match.awayImg}
                      />
                      <div className="team-name">
                        {match.awayName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </Carousel>
      </div>
      <div className="title mt-20 mb-14 wrap">
        最近游戏
        <span className="iconfont icon-xiangyou fr icon-color"></span>
      </div>
      <div className="recent-game">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              recentGameList.slice(0, 6).map(recentGame => {
                return (
                  <div className="swiper-slide" key={recentGame.id}>
                    <div className="game-logo"></div>
                    <div className="text-overflow">{recentGame.title}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="title mt-20 mb-14 wrap">
        推荐赛事
        <span className="iconfont icon-xiangyou fr icon-color"></span>
      </div>
      <div className="recommend-match">
        {
          scrollBallRecords.filter(item => {if(scrollBollMatches[item]) return true}).slice(0, 6).map(attr => {
            return <MatchItem match={scrollBollMatches[attr]} key={attr}/>
          })
        }
      </div>
      {/* <SideBar /> */}
    </>
  )
}

export default Home