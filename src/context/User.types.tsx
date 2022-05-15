import { UserModel } from '../models/User.type'
export const UPDATE_USER = 'UPDATE_USER'

export type UserState = {
  user: null | UserModel
  updateUser: (user: null | UserModel) => void
}

export type UserAction = {
  type: 'UPDATE_USER'
  payload: null | UserModel
}
