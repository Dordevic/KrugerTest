/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authorize } from '../../../config/Utils'

// Context
import UserContext from '../../../context/User.context'

const Header: React.FC = () => {
  const { user, updateUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    authorize(user, navigate)
  }, [user])

  return (
    <div className="bg-sky-900 text-white w-100 flex justify-evenly items-center p-4">
      <p className="text-2xl font-bold">Registro de Vacunación</p>
      {user && (
        <p>
          {user?.username}{' '}
          <span
            className="underline cursor-pointer"
            onClick={() => {
              updateUser(null)
            }}
          >
            Logout
          </span>
        </p>
      )}
    </div>
  )
}

export default Header
