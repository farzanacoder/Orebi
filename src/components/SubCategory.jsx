import React from 'react'
import PagiBody from './PagiBody'

const SubCategory = ({title}) => {
  return (
    <div>
        <PagiBody className='pl-6 text-red-500' text={title} />
    </div>
  )
}

export default SubCategory