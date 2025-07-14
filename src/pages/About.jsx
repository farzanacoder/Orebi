import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import about_img from '../assets/Image_5.png'
import Product_1 from '../assets/Image_1.png'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from 'react-icons/lia'


const About = () => {

  let name = useSelector((state) => state.bread.prevvalue)

  return (
    <Container>
      <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>About</h1>
      <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
        <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
          {name && (
            <>
              {name}
              <LiaAngleRightSolid />
            </>
          )}
        </Link>
        About
      </p>



      <Flex className='justify-between gap-y-6 pt-[163px] pb-[128px]'>
        <div className='w-w49 relative'>
          <Image className='w-full' src={about_img} />
          <Button className='absolute bottom-6 left-42' text='Our Brands' />
        </div>
        <div className='w-w49 relative'>
          <Image className='w-full' src={Product_1} />
          <Button className='absolute bottom-6 left-42' text='Our Brands' />
        </div>
      </Flex>

      <p className='font-dm font-normal text-secondary text-2xl mb-[118px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

      <Flex className='pb-[130px] gap-x-6'>
        <div className='w-[48%]'>
          <h4 className='font-dm font-bold text-2xl text-secondary pb-3.5'>Our Vision</h4>
          <p className='font-normal font-dm text-xl text-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-[48%]'>
          <h4 className='font-dm font-bold text-2xl text-secondary pb-3.5'>Our Vision</h4>
          <p className='font-normal font-dm text-xl text-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-[48%]'>
          <h4 className='font-dm font-bold text-2xl text-secondary pb-3.5'>Our Vision</h4>
          <p className='font-normal font-dm text-xl text-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </Flex>
    </Container>
  )
}

export default About