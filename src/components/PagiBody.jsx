import React from 'react'

const PagiBody = ({text,className}) => {
  return (
    <h4 className={`font-normal pt-5 font-dm pb-5 text-sm text-primary border-b border-[#F0F0F0] ${className}`}>{text}</h4>
  )
}

export default PagiBody