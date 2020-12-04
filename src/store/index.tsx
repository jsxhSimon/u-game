import React, { Context, createContext } from 'react'
import useUserStore from '@/hooks/useUserStore'

interface StoreContextState {
  userStore: UserInfo
}

export const StoreContext = createContext<StoreContextState>(null)

export const StoreProvider: React.FC = ({children}) => {
  const [userStore] = useUserStore()
  return (
    <StoreContext.Provider value={{userStore}}>
      {children}
    </StoreContext.Provider>
  )
}