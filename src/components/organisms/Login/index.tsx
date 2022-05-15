import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

// Components
import CustomButton from '../../atoms/CustomButton'
import InputField from '../../atoms/InputField'

// Interfaces
import { login } from '../../../services'
import { LoginData } from '../../../models/Forms.type'

// Context
import UserContext from '../../../context/User.context'

const Login: React.FC = () => {
  const { updateUser } = useContext(UserContext)
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>({
    mode: 'onChange',
  })
  
  const handleLogin: SubmitHandler<LoginData> = async (data) => {
    try {
      const user = await login(data)
      if (user[0]) {
        updateUser(user[0])
      } else {
        setError('password', { message: 'Credenciales incorrectas' })
      }
    } catch (error) {}
  }
  return (
    <div>
      <h1 className="text-xl font-bold mb-6"> Login </h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleLogin)}
      >
        <InputField register={register('username')} displayName={'Username'} />
        <InputField register={register('password')} displayName={'Password'} />
        <CustomButton text="Log in" type="submit" />
        <p className="text-red-600 text-sm">{errors.password?.message}</p>
      </form>
    </div>
  )
}

export default Login
