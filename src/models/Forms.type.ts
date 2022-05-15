import { Vaxination } from './User.type'

export interface LoginData {
  username: string
  password: string
}

export interface CreateData {
  id: number
  name: string
  email: string
  username: string
  password: string
  lastname: string
  idNumber: number
  role: 'Admin'|'Employee'
}

export interface VaxinationData {
  id: number
  birthdate?: Date
  address?: string
  cellphone?: number
  vaxinated?: boolean | string
  vaxination?: Vaxination 
}
