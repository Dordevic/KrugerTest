import React, { MouseEventHandler } from 'react'

// Interfaces
interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const CustomButton: React.FC<Props> = ({ text, type, disabled, onClick }) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`${
        disabled
          ? 'bg-gray-700'
          : 'bg-blue-800 hover:bg-blue-700 active:bg-blue-900'
      } text-white rounded-md py-1 px-2 mb-4`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CustomButton
