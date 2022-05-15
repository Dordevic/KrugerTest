/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { authorize } from '../../../config/Utils'
import UserContext from '../../../context/User.context'

const Home: React.FC = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    authorize(user, navigate)
  }, [])
  return <div>Redirecting...</div>
}

export default Home
