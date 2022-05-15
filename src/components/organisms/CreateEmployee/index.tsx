import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

// Components
import CustomButton from '../../atoms/CustomButton'
import InputField from '../../atoms/InputField'

// Interfaces
import { createUser, getUsers } from '../../../services'
import { CreateData } from '../../../models/Forms.type'

const CreateEmployee: React.FC = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateData>({
    mode: 'onChange',
  })

  const requiredObj = { required: 'Required Field' }

  const handleCreate: SubmitHandler<CreateData> = async (data) => {
    try {
      const users = await getUsers()
      // Mock of the backend
      data.id = users.length + 1
      data.username = `${data.name}${data.lastname}`.replace(/\s/, '')
      data.password = `${data.name}${data.lastname}`.replace(/\s/, '')
      data.role = 'Employee'
      // End of mock
      const user = await createUser(data)
      if (user) {
        navigate('/admin')
      }
    } catch (error) {}
  }
  return (
    <div>
      <h1 className="text-xl font-bold mb-6"> Create User </h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleCreate)}
      >
        <InputField
          register={register('name', {
            ...requiredObj,
            pattern: {
              value: /^[A-Z\s]*$/i,
              message: 'Invalid Name',
            },
            minLength: { value: 3, message: 'Use at least 3 characters' },
          })}
          displayName={'Name'}
          error={errors.name?.message}
        />
        <InputField
          register={register('lastname', {
            ...requiredObj,
            pattern: {
              value: /^[A-Z\s]*$/i,
              message: 'Invalid Lastname',
            },
            minLength: { value: 3, message: 'Use at least 3 characters' },
          })}
          displayName={'Lastname'}
          error={errors.lastname?.message}
        />
        <InputField
          register={register('email', {
            ...requiredObj,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Email',
            },
          })}
          displayName={'Email'}
          error={errors.email?.message}
        />
        <InputField
          register={register('idNumber', {
            ...requiredObj,
            pattern: {
              value: /^[0-9]{10}$/i,
              message: 'Invalid ID Number',
            },
          })}
          displayName={'ID Number'}
          error={errors.idNumber?.message}
        />
        <CustomButton text="Create" type="submit" />
      </form>
    </div>
  )
}

export default CreateEmployee
