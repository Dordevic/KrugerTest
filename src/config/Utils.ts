import { UserModel } from '../models/User.type'
import { LocalStorage } from './LocalStorage'

export const writeLocal = (key: LocalStorage, value: string) => {
  localStorage.setItem(key, value)
}

export const readLocal = (key: LocalStorage): string => {
  return localStorage.getItem(key) as string
}

export const deleteLocal = (key: LocalStorage) => {
  localStorage.removeItem(key)
}

export const authorize = (
  user: UserModel | null,
  navigate: (path: string) => void
) => {
  if (user && user.role === 'Admin') navigate('/admin')
  else if (user) navigate('/employee')
  else navigate('/login')
}
