import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div >
      <h1 className='text-9xl mb-4 font-bold'>404</h1>
      <h3 className='text-xl mb-6'>Page not found</h3>
      <Link to={'/'} className='underline text-gray-500'>Regresar al Home</Link>
    </div>
  )
}

export default NotFound
