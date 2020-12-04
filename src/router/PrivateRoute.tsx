import React, { ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'
import useStore from '@/hooks/useStore'
import { observer } from 'mobx-react'

interface PrivateRouteProps {
  path: string;
  component: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { path, component } = props
  const userStore = useStore()
  return (
    <Route path={path}>
      {
        userStore.login
          ? component
          : <Redirect to="/login" />
      }
    </Route>
  )
}

export default observer(PrivateRoute)