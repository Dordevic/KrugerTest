import { UPDATE_USER, UserAction, UserState } from './User.types'

export default function UserReducer(
  state: UserState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
