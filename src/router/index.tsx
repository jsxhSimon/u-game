import { lazy, Suspense } from 'react'
import App from '@/views'
import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Login = lazy(() => import('@/views/Login'))
const Wallet = lazy(() => import('@/views/User/Wallet'))
const Register = lazy(() => import('@/views/Register'))
const Service = lazy(() => import('@/views/Service'))

const RouterPage = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loading"></div>}>
        <Switch>
          <Route path="/home">
            <App />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/wallet" component={<Wallet />} />
          <Route path="/kefu">
            <Service />
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterPage