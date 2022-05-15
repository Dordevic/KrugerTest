import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Interfaces
interface Props {
  displayName: string
  value: string
  register: UseFormRegisterReturn
}

const RadioButton: React.FC<Props> = ({ displayName, value, register }) => {
  return (
    <label
      htmlFor={`${register.name}_${value}`}
      className="flex items-center mx-2"
    >
      <p className="font-bold text-right mr-2">{displayName}:</p>
      <input
        type="radio"
        className="border-2 border-gray-400 text-center px-2 py-0.5 md:text-left"
        {...register}
        value={value}
        id={`${register.name}_${value}`}
      />
    </label>
  )
}

export default RadioButton
