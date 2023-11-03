import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-300 rounded-lg border'>{title}</button>
    </div>
  )
}

export default Button