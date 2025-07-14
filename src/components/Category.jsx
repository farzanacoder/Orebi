import React, { useState } from 'react'
import Flex from './Flex'
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2'
import PagiBody from './PagiBody'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFunction } from '../slices/categorySlice'

const Category = ({title,type}) => {
      let dispatch = useDispatch()
      let category = useSelector ((state)=>state.category.value)
    
    let handleMinus = () => {
        dispatch(categoryFunction(false))

    }
    let handlePlus = () => {
        dispatch(categoryFunction(true))

    }
    return (
        <div>
            <Flex className='flex-row items-center justify-between border-b border-[#F0F0F0]'>
                <PagiBody text={title} /> 
                        {
                            type=='true'?
                            category?
                            <HiMiniMinus  onClick={handleMinus} />
                            :
                            <HiMiniPlus onClick={handlePlus} />
                            :''
                        }
             </Flex>
           
        </div>
    )
}

export default Category