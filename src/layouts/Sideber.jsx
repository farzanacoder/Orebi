import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Icon from '../assets/icon.png'
import { IoSearchSharp } from 'react-icons/io5'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/addToCartSlice'

const Sideber = () => {
    let dispatch = useDispatch()
    let [showcart, setShowcart] = useState(false)
    let data = useSelector((state) => state.addToCart.cartItem)
    
    
    let handleincrement= (item)=>{
        dispatch(increment(item))
    }
    let handledecrement= (item)=>{
        dispatch(decrement(item))
    }


    let handleCart = () => {
        setShowcart(!showcart)
    }


    return (
        <div className='bg-[#F5F5F3] py-6'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-4/12 '>
                        <Flex className='gap-2.5 items-center'>
                            <Image src={Icon} />
                            <p className='text-sm font-dm font-normal text-secondary'>Shop by Category</p>
                        </Flex>
                    </div>
                    <div className='w-6/12 relative'>
                        <input placeholder='Search Products' type="text" className='py-4 pl-6 pr-16 bg-white w-full placeholder:text-sm placeholder:font-normal placeholder:text-[#C4C4C4]' />
                        <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-6' />
                    </div>
                    <div className='w-2/12 '>
                        <Flex className='justify-end'>
                            <FaUser />
                            <IoMdArrowDropdown className='mr-6 ml-2.5' />
                            <FaShoppingCart onClick={handleCart} />
                        </Flex>

                        {
                            showcart && 
                            <div className='w-1/3 h-screen bg-primary absolute top-0 right-0 z-10'>
                            <FaShoppingCart onClick={handleCart} />

                            <ul className='flex justify-between items-center border border-white px-5 py-3 bg-black text-white'>
                                        <li>Product:</li>
                                        <li>Price:</li>
                                        <li>Quantity:</li>
                                        <li>Subtotal:</li>
                                    </ul>
                            {
                                data.map(item=>(
                                    <ul className='flex justify-between items-center border border-white px-5 py-3 bg-black text-white'>
                                        <li>{item.basicTxt}</li>
                                        <li>{item.price}$</li>
                                        <li className='border border-white px-8 py-2 flex gap-x-3'>
                                            <span onClick={()=>handledecrement(item)}>-</span>
                                            <span>{item.quantity}</span>
                                            <span onClick={()=>handleincrement(item)}>+</span>
                                        </li>
                                        <li>{item.price*item.quantity}$</li>
                                    </ul>
                                ))
                            }
                            </div>
                        }


                
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Sideber