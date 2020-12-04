import { observable } from "mobx"
import { createContext } from 'react'

class MatchStore {
  @observable count = 0
}

export default createContext(new MatchStore())