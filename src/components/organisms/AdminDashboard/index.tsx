/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Model
import { EmployeeModel } from '../../../models/User.type'

// Services
import { getUsers } from '../../../services'

const AdminDashboard: React.FC = () => {
  const [filtered, setFiltered] = useState<EmployeeModel[]>([])
  const [employees, setEmployees] = useState<EmployeeModel[]>([])

  const [vaxine, setVaxine] = useState('All')
  const [vaxinated, setVaxinated] = useState(false)
  const [unvaxinated, setUnvaxinated] = useState(false)
  const [endDate, setEndDate] = useState<string | null>(null)
  const [startDate, setStartDate] = useState<string | null>(null)
  const navigate = useNavigate()

  const loadEmployees = async () => {
    const data = await getUsers()
    setEmployees(data)
  }

  useEffect(() => {
    loadEmployees()
  }, [])

  useEffect(() => {
    setFiltered(
      employees.filter((empl) => {
        let vax = true,
          unvax = true,
          brand = true,
          date = true,
          before = true,
          after = true
        if (vaxinated && !unvaxinated) vax = empl.vaxinated === true
        if (unvaxinated && !vaxinated)
          unvax =
            empl.vaxinated === false || typeof empl.vaxinated === 'undefined'

        if (vaxine !== 'All') brand = empl.vaxination?.vaxine === vaxine

        if (endDate) {
          if (empl.vaxination?.date)
            before = endDate > String(empl.vaxination.date)
          else before = false
        }
        if (startDate) {
          if (empl.vaxination?.date)
            after = startDate < String(empl.vaxination.date)
          else after = false
        }
        return brand && date && vax && unvax && before && after
      })
    )
  }, [employees, vaxinated, vaxine, unvaxinated, endDate, startDate])

  return (
    <div className="box-border px-8">
      <div className="flex justify-center mb-4">
        <div
          className="bg-blue-900 text-white px-2 py-2 mx-2 rounded cursor-pointer"
          onClick={() => {
            navigate('create')
          }}
        >
          Create Employee
        </div>
        <div
          className="bg-blue-900 text-white px-2 py-2 mx-2 rounded cursor-pointer"
          onClick={() => {
            navigate('self')
          }}
        >
          My info
        </div>
      </div>

      <h1 className="text-xl font-bold mb-4">Employee Vaxination List</h1>
      <div className="flex flex-wrap justify-evenly items-center bg-gray-200 p-2 mb-2">
        <div className="font-bold">Filters:</div>
        <div>
          <div>
            <span className="mr-2">Vaxinated:</span>
            <input
              type="checkbox"
              onChange={(e) => {
                setVaxinated(e.target.checked)
              }}
            />
          </div>
          <div>
            <span className="mx-2">Unvaxinated:</span>
            <input
              type="checkbox"
              onChange={(e) => {
                setUnvaxinated(e.target.checked)
              }}
            />
          </div>
        </div>
        <div>
          <span className="mr-2">Vaxine:</span>
          <select
            onChange={(e) => {
              setVaxine(e.target.value)
            }}
          >
            <option value="All">All</option>
            <option value="Sputnik">Sputnik</option>
            <option value="AstraZeneca">AstraZeneca</option>
            <option value="Pfizer">Pfizer</option>
            <option value="Jhonson&Jhonson">Jhonson & Jhonson</option>
          </select>
        </div>
        <div>
          <div className="mb-1">
            <span className="mr-2">Start date</span>
            <input
              type="date"
              onChange={(e) => {
                setStartDate(e.target.value)
              }}
            />
          </div>
          <div>
            <span className="mx-2">End date</span>
            <input
              type="date"
              onChange={(e) => {
                setEndDate(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-8 gap-2">
        <div className="font-bold">Employee</div>
        <div className="hidden md:block font-bold">Email</div>
        <div className="hidden md:block font-bold">ID Number</div>
        <div className="hidden md:block font-bold">Vaxinated</div>
        <div className="font-bold">Vaxine</div>
        <div className="font-bold">Dose</div>
        <div className="font-bold">Vaxination Date</div>
        <div className="font-bold">Employee data</div>
      </div>
      {filtered?.map((employee) => (
        <div
          key={`row_${employee.username}`}
          className="grid grid-cols-5 md:grid-cols-8 gap-2"
        >
          <div>{`${employee.name} ${employee.lastname}`}</div>
          <div className="hidden md:block">{employee.email}</div>
          <div className="hidden md:block">{employee.idNumber}</div>
          <div className="hidden md:block">
            {typeof employee.vaxinated !== 'undefined'
              ? String(employee.vaxinated)
              : ''}
          </div>
          <div>{employee.vaxination?.vaxine}</div>
          <div>{employee.vaxination?.dose}</div>
          <div>
            {employee.vaxination?.date ? String(employee.vaxination?.date) : ''}
          </div>
          <div
            className="underline cursor-pointer text-blue-900"
            onClick={() => {
              navigate(`${employee.id}`)
            }}
          >
            Employee info
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminDashboard
