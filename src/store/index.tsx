import React, { createContext } from 'react'
import userStore from './userStore'

export const StoreContext = createContext(userStore)

export const StoreProvider: React.FC = ({children}) => {
  return (
    <StoreContext.Provider value={userStore}>
      {children}
    </StoreContext.Provider>
  )
}