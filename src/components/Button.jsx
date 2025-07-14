import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-sm font-bold font-dm text-white bg-black py-4 px-16 border border-transparent hover:bg-transparent hover:text-black duration-500 hover:border-secondary ${className}`}>{text}</button>
  )
}

export default Button