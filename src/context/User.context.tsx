import { createContext } from 'react'
import { UserState } from './User.types'

const initialState: UserState = {
  user: null,
  updateUser: () => {},
}

const UserContext = createContext<UserState>(initialState)

export default UserContext
