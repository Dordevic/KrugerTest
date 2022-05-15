/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Services
import { getUser } from '../../../services'
import { EmployeeModel } from '../../../models/User.type'

const EmployeeSheet: React.FC = () => {
  const { id } = useParams()
  const [info, setInfo] = useState<EmployeeModel | null>(null)

  const loadEmployee = async (id: number) => {
    const data = await getUser(id)
    setInfo(data[0])
  }
  useEffect(() => {
    if (id) loadEmployee(Number(id))
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Employee Personal Data
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="text-right">Name: </div>
        <div className="text-left">{info?.name} </div>
        <div className="text-right">Lastname: </div>
        <div className="text-left">{info?.lastname} </div>
        <div className="text-right">Email: </div>
        <div className="text-left">{info?.email} </div>
        <div className="text-right">ID Number: </div>
        <div className="text-left">{info?.idNumber} </div>
        <div className="text-right">Birthdate: </div>
        <div className="text-left">{info?.birthdate && String(info?.birthdate)} </div>
      </div>
      <h1 className="text-xl font-bold my-4">
        Employee Vaxination Data
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="text-right">Vaxinated: </div>
        <div className="text-left">{typeof info?.vaxinated !== 'undefined'?String(info?.vaxinated):''} </div>
        <div className="text-right">Vaxine: </div>
        <div className="text-left">{info?.vaxination?.vaxine} </div>
        <div className="text-right">Dose: </div>
        <div className="text-left">{info?.vaxination?.dose} </div>
        <div className="text-right">Date: </div>
        <div className="text-left">{info?.vaxination?.date && String(info?.vaxination?.date)} </div>
      </div>
    </div>
  )
}

export default EmployeeSheet
