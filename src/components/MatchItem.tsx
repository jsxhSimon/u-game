import React from 'react'
import { Flex } from 'antd-mobile'
import UWImage from './UWImage'

interface MatchItemProps {
  match: Match
}

const MatchItem: React.FC<MatchItemProps> = (props) => {
  const { match } = props
  return (
    <div className="match-item">
      <div className="match-item-header flex align-items-center flex-between">
        <div className="flex align-items-center">
          <div className="match-type-logo" style={{backgroundImage: `url(${match.CategoryPic})`}}></div>
          <div className="type-name">{match.LeagueName}</div>
        </div>
        <div className="markets-count">+{match.active_markets_count}</div>
      </div>
      <div className="match-item-detail mt-16">
        <Flex>
          <Flex.Item>
            <UWImage
              className="match-item-logo"
              url={match.HomeTeamPic}
            />
            <p className="match-team-name mt-16 text-center text-ellipsis plr-4">{match.HomeTeamName}</p>
          </Flex.Item>
          <Flex.Item>
            <div className="match-item-date">

            </div>
          </Flex.Item>
          <Flex.Item>
          <UWImage
              className="match-item-logo"
              url={match.AwayTeamPic}
            />
            <p className="match-team-name mt-16 text-center text-ellipsis plr-4">{match.AwayTeamName}</p>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  )
}

export default MatchItem