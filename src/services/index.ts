import axios from 'axios'

import { EmployeeModel, UserModel } from '../models/User.type'
import { CreateData, LoginData, VaxinationData } from '../models/Forms.type'

export const login = (data: LoginData): Promise<UserModel[]> =>
  axios
    .get(
      `http://localhost:3001/users?username=${data.username}&password=${data.password}`
    )
    .then((res) => res.data)

export const getUser = (id: number): Promise<EmployeeModel[]> =>
  axios.get(`http://localhost:3001/users?id=${id}`).then((res) => res.data)

export const getUsers = (): Promise<EmployeeModel[]> =>
  axios.get('http://localhost:3001/users').then((res) => res.data)

export const updateUser = (data: VaxinationData): Promise<EmployeeModel[]> =>
  axios
    .patch(`http://localhost:3001/users/${data.id}`, data)
    .then((res) => res.data)

export const createUser = (data: CreateData): Promise<EmployeeModel[]> =>
  axios
    .post('http://localhost:3001/users/', data)
    .then((res) => res.data)
