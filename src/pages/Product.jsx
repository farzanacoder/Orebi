import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Product_1 from '../assets/Image_1.png'
import Product_2 from '../assets/Image_2.png'
import Product_3 from '../assets/Image_3.png'
import Product_4 from '../assets/Image_4.png'
import Flex from '../components/Flex'
import { FaStar } from 'react-icons/fa'
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'
import Button from '../components/Button'
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'


const Product = () => {
  let name = useSelector((state) => state.bread.prevvalue)

  return (
    <section className='py-[150px]'>
      <Container>
        <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Product</h1>
      <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
        <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
          {name && (
            <>
              {name}
              <LiaAngleRightSolid />
            </>
          )}
        </Link>
        Product
      </p>
        <Flex className='flex-wrap justify-between gap-y-6'>
          <div className='w-w49'>
        <Image className='w-full' src={Product_1}/>
          </div>
          <div className='w-w49'>
        <Image className='w-full' src={Product_2}/>
          </div>
          <div className='w-w49'>
        <Image className='w-full' src={Product_3}/>
          </div>
          <div className='w-w49'>
        <Image className='w-full' src={Product_4}/>
          </div>
        </Flex>

        <h1 className='text-xl pt-12 pb-4 text-secondary font-bold font-dm mb-12'>Products</h1>
        <Flex className='gap-x-6 items-center'>
          <ul className='flex gap-x-[2px]'>
            <li><FaStar className='text-[#FFD881]'/></li>
            <li><FaStar className='text-[#FFD881]'/></li>
            <li><FaStar className='text-[#FFD881]'/></li>
            <li><FaStar className='text-[#FFD881]'/></li>
          </ul>
          <p className='text-sm font-normal text-primary font-dm'>1 Review</p>
        </Flex>

        <Flex className='items-center gap-x-[22px] py-6 border-b border-[#F0F0F0] w-w49'>
          <del className='text-primary'><p className='text-primary text-base font-dm  font-normal '>$88.00</p></del>
          <p className='text-secondary text-xl font-dm  font-bold '>$44.00</p>
        </Flex>

        <Flex className='items-center gap-x-[53px] pt-8'>
          <h4 className='text-base font-dm font-bold text-secondary'>COLOR:</h4>
          <ul className='flex gap-x-[15px]'>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-125 duration-500 bg-[#000000]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-125 duration-500 bg-[#FF8686]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-125 duration-500 bg-[#7ED321]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-125 duration-500 bg-[#B6B6B6]'></li>
            <li className='w-[20px] h-[20px] rounded-full hover:scale-125 duration-500 bg-[#15CBA5]'></li>
          </ul>
        </Flex>


        <Flex className='items-center gap-x-[75px] pt-8'>
          <h4 className='text-base font-dm font-bold text-secondary'>SIZE:</h4>
          <select name="" id="" className='py-1 px-12 border border-[#F0F0F0]'>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">LG</option>
          </select>
        </Flex>

        <Flex className='items-center gap-x-[30px] pt-8 border-b border-[#F0F0F0] w-w49 pb-[30px]'>
          <h4 className='text-base font-dm font-bold text-secondary'>QUANTITY:</h4>
          <div className='py-1 px-7 border border-[#F0F0F0] flex gap-x-5 items-center'>
          <HiOutlineMinusSmall />
          <span>1</span>
          <HiOutlinePlusSmall />
          </div>
        </Flex>


        <Flex className='items-center gap-x-[37px] pt-8 border-b border-[#F0F0F0] w-w49 pb-[30px]'>
          <h4 className='text-base font-dm font-bold text-secondary'>STATUS:</h4>
          <h5 className='text-base font-dm font-normal text-primary'>InStock</h5>
        </Flex>

        <Flex className='gap-x-[20px] py-[30px]  border-b border-[#F0F0F0] w-w49'>
          <Button className='!bg-transparent !text-black !border-secondary hover:!text-white hover:!bg-black' text='Add to Wish List'/>
          <Button text='Add to Cart'/>
        </Flex>

        <div className='flex justify-between py-[30px]  border-b border-[#F0F0F0] w-w49'>
        <h4 className='text-base font-dm font-bold text-secondary'>FEATURES & DETAILS</h4>
        <BiPlus />
        </div>
        <div className='flex justify-between py-[30px]  border-b border-[#F0F0F0] w-w49'>
        <h4 className='text-base font-dm font-bold text-secondary'>SHIPPING & RETURNS</h4>
        <BiPlus />
        </div>

        <div className='text-primary font-dm font-normal py-8 text-base w-w49'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      
        <Flex className='items-center gap-x-[37px] pt-8 pb-[30px]'>
          <h5 className='text-xl font-dm font-normal text-primary'>Description</h5>
          <h4 className='text-xl font-dm font-bold text-secondary'>Reviews (1)</h4>
        </Flex>

        <h5 className='text-sm font-dm font-normal text-primary border-b border-[#F0F0F0] w-full pb-[30px]'>1 review for Product</h5>

        <Flex className='justify-between items-center'>
        <Flex className='gap-x-6 items-center pt-8'>
          <p className='text-base font-normal text-[#262626] font-dm'>John Ford</p>
          <ul className='flex gap-x-[2px]'>
            <li><FaStar className='text-[#FFD881]'/></li>
            <li><FaStar className='text-[#FFD881]'/></li>
            <li><FaStar className='text-[#FFD881]'/></li>
            <li><FaStar className='text-[#FFD881]'/></li>
          </ul>
        </Flex>
        <h5 className='text-base font-dm font-normal text-primary'>6 months ago</h5>
        </Flex>
        <div className='text-primary font-dm font-normal py-8 text-base border-b border-[#F0F0F0] pt-8 w-full pb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>

        <h4 className='text-xl font-dm font-bold text-secondary py-12'>Add a Review</h4>

        <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Name <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your name here'/>
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Email <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your email here'/>
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Review <br />
          <textarea className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your review here'/>
        </label> <br />

        <Button className='inline-block' text='Post'/>
      </Container>
    </section>
  )
}

export default Product