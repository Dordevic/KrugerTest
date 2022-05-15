import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import RadioButton from '../../atoms/RadioButton'

// Interfaces
interface Props {
  title?: string
  values: {
    displayName: string
    value: string
  }[]
  register: UseFormRegisterReturn
  error?: string
}

const RadioGroup: React.FC<Props> = ({ title, values, register, error }) => {
  return (
    <>
      <h3 className="font-bold ">{title} </h3>
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        {values.map((radio) => (
          <RadioButton
            key={`${register.name}_${radio.value}`}
            displayName={radio.displayName}
            value={radio.value}
            register={register}
          />
        ))}
      </div>
      <p className="text-red-600 text-sm mb-4">{error}</p>
    </>
  )
}

export default RadioGroup
