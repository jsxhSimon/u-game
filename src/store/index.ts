import { createContext } from 'react'
import UserStore from './userStore'

export default createContext({
  userStore: UserStore
})