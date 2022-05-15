import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Interfaces
interface Props {
  displayName: string
  register: UseFormRegisterReturn
  options: { displayName: string; value: string }[]
  placeholder?: string
  error?: string
}

const DropdownSelect: React.FC<Props> = ({
  displayName,
  register,
  error,
  placeholder,
  options,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <p className="font-bold md:mr-4 w-[100px] text-center md:text-right">
          {displayName}:
        </p>
        <select
          className="border-2 border-gray-400 w-[200px] text-center px-2 py-0.5 md:text-left"
          {...register}
          placeholder={placeholder}
        >
          <option></option>
          {options.map((option) => (
            <option key={`select_${option.value}`} value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      </div>
      <p className="text-red-600 text-sm mb-4">{error}</p>
    </>
  )
}

export default DropdownSelect
