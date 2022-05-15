/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

// Models
import { VaxinationData } from '../../../models/Forms.type'

// Context
import UserContext from '../../../context/User.context'

// Components
import InputField from '../../atoms/InputField'
import RadioGroup from '../../molecules/RadioGroup'
import CustomButton from '../../atoms/CustomButton'
import DropdownSelect from '../../atoms/DropdownSelect'

// Services
import { getUser, updateUser } from '../../../services'

const Employee: React.FC = () => {
  const { user } = useContext(UserContext)
  const [display, setDisplay] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VaxinationData>({
    mode: 'onChange',
  })

  const handleVaxination: SubmitHandler<VaxinationData> = async (data) => {
    if (user) {
      data.vaxinated = data.vaxinated === 'true'
      if (!data.vaxinated) data.vaxination = {}
      updateUser({ ...data, id: user.id })
    }
  }
  const requiredObj = { required: 'Required Field' }
  const dynamicRequiredObj = {
    required: { value: display, message: 'Required Field' },
  }

  const loadEmployee = async (id: number) => {
    const data = await getUser(id)
    if (data && data[0]) {
      const info = data[0]
      if (info.birthdate) {
        setValue('birthdate', info.birthdate)
      }
      if (info.vaxination?.date) {
        setValue('vaxination.date', info.vaxination.date)
      }
      if (info.address) {
        setValue('address', info.address)
      }
      if (info.cellphone) {
        setValue('cellphone', info.cellphone)
      }
      if (typeof info.vaxinated !== 'undefined') {
        setValue('vaxinated', String(info.vaxinated))
        if (info.vaxinated) setDisplay(true)
      }
      if (info.vaxination?.vaxine) {
        setValue('vaxination.vaxine', info.vaxination.vaxine)
      }
      if (info.vaxination?.dose) {
        setValue('vaxination.dose', info.vaxination.dose)
      }
    }
  }
  useEffect(() => {
    if (user) loadEmployee(user?.id)
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">
        Employee Vaxination Self-Report
      </h1>
      <h2 className="text-l mb-6">
        Fill these fields to report your COVID vaxination status
      </h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleVaxination)}
      >
        <InputField
          displayName="Birthdate"
          register={register('birthdate', requiredObj)}
          error={errors.birthdate?.message}
          type="date"
        />
        <InputField
          register={register('address', {
            ...requiredObj,
            minLength: { value: 3, message: 'Must have at least 3 characters' },
          })}
          displayName={'Address'}
          error={errors.address?.message}
        />
        <InputField
          register={register('cellphone', {
            ...requiredObj,
            pattern: {
              value: /^3[0-9]{9}/,
              message: 'Invalid cellphone number',
            },
          })}
          displayName={'Cellphone'}
          error={errors.cellphone?.message}
        />
        <RadioGroup
          title="Have you been vaxinated?"
          values={[
            { displayName: 'Yes', value: 'true' },
            { displayName: 'No', value: 'false' },
          ]}
          register={register('vaxinated', {
            validate: (v) => {
              if (v === 'true') {
                setDisplay(true)
              } else {
                setDisplay(false)
              }
              return true
            },
            required: 'Required Field',
          })}
          error={errors.vaxinated?.message}
        />
        <div className={`${display ? '' : 'hidden '}`}>
          <h3 className="mb-4">Information of your last vaxine</h3>
          <DropdownSelect
            displayName="Brand"
            options={[
              { displayName: 'Sputnik', value: 'Sputnik' },
              { displayName: 'AstraZeneca', value: 'AstraZeneca' },
              { displayName: 'Pfizer', value: 'Pfizer' },
              { displayName: 'Jhonson&Jhonson', value: 'Jhonson&Jhonson' },
            ]}
            register={register('vaxination.vaxine', dynamicRequiredObj)}
            error={errors.vaxination?.vaxine?.message}
          />
          <InputField
            displayName="Date"
            register={register('vaxination.date', dynamicRequiredObj)}
            error={errors.vaxination?.date?.message}
            type="date"
          />
          <InputField
            register={register('vaxination.dose', {
              ...dynamicRequiredObj,
              min: { value: 1, message: 'Can only be 1,2,3 or 4' },
              max: { value: 4, message: 'Can only be 1,2,3 or 4' },
            })}
            displayName={'Dose'}
            type="number"
            error={errors.vaxination?.dose?.message}
          />
        </div>
        <CustomButton text="Save" type="submit" />
      </form>
    </div>
  )
}

export default Employee
