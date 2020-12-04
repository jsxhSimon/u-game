import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'
import {
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory
} from 'react-router-dom'
import useStore from '@/hooks/useStore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from './Home'
import KeFu from '@/components/KeFuIcon'
import PrivateRoute from '@/router/PrivateRoute'
const Match = lazy(() => import('./Match'))
const Activity = lazy(() => import('./Activity'))
const User = lazy(() => import('./User'))

const App: React.FC = () => {
  const [headerCls, setHeaderCls] = useState('')
  const [footerCls, setFooterCls] = useState('')
  const homeRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  let { path } = useRouteMatch()
  let location = useLocation()
  let history = useHistory()
  const userStore = useStore()
  useEffect(() => {
    const mainScroll = (e) => {
      if (e.target.scrollTop > 10) {
        setHeaderCls('drop-down')
      } else {
        setHeaderCls('')
      }
      let h = e.target.offsetHeight + e.target.scrollTop - mainRef.current.offsetHeight
      if (h <= 10 && h >= 0) {
        setFooterCls('in-bottom')
      } else {
        setFooterCls('')
      }
    }
    const homeEl = homeRef.current
    homeEl.addEventListener('scroll', mainScroll, { passive: false })
    return () => {
      homeEl.removeEventListener('scroll', mainScroll)
    }
  }, [])
  const getHeader = () => {
    switch (location.pathname) {
      case '/home':
        let rightContent
        if (userStore.login) {
          rightContent = [<KeFu />]
        } else {
          rightContent = [
            <KeFu className="mr-16" />,
            <span className="v3-btn" onClick={() => history.push('/login')}>登录</span>
          ]
        }
        return <Header
                className={headerCls}
                sideBar={true}
                rightContent={rightContent}
              />
      case '/home/activity':
        return (
          <Header
            className={headerCls}
            title="活动中心"
            rightContent={
              <KeFu />
            }
          />
        )
      case '/home/user':
        return (
          <Header
            className={headerCls}
            title="个人中心"
            rightContent={
              [
                <span className="iconfont icon-shezhi fs-22 mr-12"></span>,
                <KeFu />
              ]
            }
          />
        )
    }
  }
  return (
    <div className="home page pd-header-footer" ref={homeRef}>
      {
        getHeader()
      }
      <div className="main-container" ref={mainRef}>
        <Suspense fallback={<div className="page-loading"></div>}>
          <Switch>
            <Route exact path={path}>
              <Home />
            </Route>
            <Route path={`${path}/match`}>
              <Match />
            </Route>
            <Route path={`${path}/activity`}>
              <Activity />
            </Route>
            <PrivateRoute path={`${path}/user`} component={<User />} />
          </Switch>
        </Suspense>
      </div>
      <Footer className={footerCls} />
    </div>
  )
}

export default App