import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import UserContext from './User.context'
import UserReducer from './User.reducer'
import { UPDATE_USER, UserState } from './User.types'

// Types
import { UserModel } from '../models/User.type'

// Utilities
import { readLocal, writeLocal, deleteLocal } from '../config/Utils'

interface Props {
  children?: React.ReactNode
}

const UserProvider: React.FC<Props> = ({ children }) => {
  let initialState: UserState = {
    user: readLocal('USER')
      ? (JSON.parse(readLocal('USER')) as UserModel)
      : null,
    updateUser: () => null,
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const updateUser = (user: null | UserModel) => {
    if (user) {
      writeLocal('USER', JSON.stringify(user))
    } else {
      deleteLocal('USER')
    }
    dispatch({ type: UPDATE_USER, payload: user })
  }
  initialState = {
    ...initialState,
    updateUser,
  }
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default UserProvider
