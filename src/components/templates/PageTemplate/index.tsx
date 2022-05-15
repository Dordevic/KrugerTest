import React from 'react'

// Components
import Header from '../../organisms/Header'

interface Props {
  children?: React.ReactNode
}

const Home: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <div className="bg-black w-100 text-white p-4">By: Daniel Penagos</div>
    </div>
  )
}

export default Home
