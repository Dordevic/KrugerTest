export interface UserModel {
  id: number
  username: string
  role: 'Admin'|'Employee'
}

export type Vaxination = {
  vaxine?: 'Sputnik' | 'AstraZeneca' | 'Pfizer' | 'Jhonson&Jhonson'
  date?: Date
  dose?: 1 | 2 | 3 | 4
} 

export interface EmployeeModel extends UserModel {
  name: string
  email: string
  password: string
  lastname: string
  idNumber: number
  birthdate?: Date
  address?: string
  cellphone?: number
  vaxinated?: boolean
  vaxination: Vaxination
}
