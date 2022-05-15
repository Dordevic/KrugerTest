import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Interfaces
interface Props {
  displayName: string
  register: UseFormRegisterReturn
  placeholder?: string
  error?: string
  type?: 'text' | 'number' | 'date'
}

const InputField: React.FC<Props> = ({
  displayName,
  register,
  type,
  error,
  placeholder,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <p className="font-bold md:mr-4 w-[100px] text-center md:text-right">
          {displayName}:
        </p>
        <input
          className="border-2 border-gray-400 w-[200px] text-center px-2 py-0.5 md:text-left"
          {...register}
          type={type ? type : 'text'}
          placeholder={placeholder}
        />
      </div>
      <p className="text-red-600 text-sm mb-4">{error}</p>
    </>
  )
}

export default InputField
