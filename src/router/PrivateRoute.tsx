import React, { ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStores } from '@/hooks/useStore'

interface PrivateRouteProps {
  path: string;
  component: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { path, component } = props
  const { userStore } = useStores()
  return (
    <Route path={path}>
      {
        userStore.userInfo.login
          ? component
          : <Redirect to="/login" />
      }
    </Route>
  )
}

export default PrivateRoute