import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/addToCartSlice'

const Carts = ({price,className,img,basicTxt}) => {
  let dispatch = useDispatch()
  
  let handleAddToCart = ()=>{
    dispatch(addToCart({
      basicTxt : basicTxt,
      price :price,
      image : img,
      quantity : 1
    }))
    
  }

  return (
    <div className='w-[240px] relative group overflow-hidden'>
      <Image className={className} src={img}/>
      <div className='w-full bg-white absolute left-0 -bottom-[32px] group-hover:bottom-[92px] duration-500 opacity-0 group-hover:opacity-100 '>
        <ul className='flex flex-col items-end py-6 px-8 gap-y-4 cursor-pointer'>
          <li>Add to Wish List<FaHeart className='text-sm inline ml-4'/></li>
          <li>Compare<FaCodeCompare className='text-sm inline ml-4'/></li>
          <li onClick={handleAddToCart}>Add to Cart<FaShoppingCart className='text-sm inline ml-4'/></li>
        </ul>
      </div>
      <Flex className={`items-center justify-between pt-6 pb-4 ${basicTxt}`}>
        <h4 className='text-xl text-secondary font-bold font-dm'>Basic Crew Neck Tee</h4>
        <p className='text-base text-primary font-normal font-dm'>{price}$</p>
      </Flex>
      <p className='text-base text-primary font-normal font-dm'>Black</p>
      
      <button className='py-2 px-8 bg-black text-white text-sm font-bold font-dm absolute top-5 left-5'>New</button>
    </div>
  )
}

export default Carts