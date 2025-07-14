import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'

const Signup = () => {
  let name = useSelector((state) => state.bread.prevvalue)

  return (
    <section>
      <Container>
       <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Signup</h1>
      <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
        <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
          {name && (
            <>
              {name}
              <LiaAngleRightSolid />
            </>
          )}
        </Link>
        Signup
      </p>
     
      <div className='pt-[120px] w-full border-b border-[#F0F0F0]'>
      <p className='font-dm w-[55%] mb-15 font-normal text-base text-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      </div>
      <h1 className='py-[45px] font-bold font-dm text-3xl text-secondary'>Your Personal Details</h1>
      <Flex className='gap-x-10 flex-wrap w-full border-b border-[#F0F0F0] pb-[70px]'>
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">First Name <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='First Name' />
      </label> <br />
      <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="name">Last Name <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="password" name="" id="" placeholder='Last Name' />
      </label> <br />
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">Email address <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='company@domain.com' />
      </label> <br />
      <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="name">Telephone <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="password" name="" id="" placeholder='Your phone number' />
      </label> <br />
      </Flex>
      <h1 className='py-[45px] font-bold font-dm text-3xl text-secondary'>New Customer</h1>
      <Flex className='gap-x-10 flex-wrap -full border-b border-[#F0F0F0] pb-[70px]'>
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">Address 1 <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='4279 Zboncak Port Suite 6212' />
      </label> <br />
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">Address 2 <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='—' />
      </label> <br />
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">City <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='Your city' />
      </label> <br />
      <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="name">Post Code <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="password" name="" id="" placeholder='05228' />
      </label> <br />
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">Country <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='Please select' />
      </label> <br />
      <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="name">Region/State <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="password" name="" id="" placeholder='Region/State' />
      </label> <br />
      </Flex>
      <h1 className='py-[45px] font-bold font-dm text-3xl text-secondary'>Your Password</h1>
      <Flex className='gap-x-10 flex-wrap -full border-b border-[#F0F0F0] pb-[70px]'>
      <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">Password <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="email" name="" id="" placeholder='Password' />
      </label> <br />
      <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="name">Repeat Password <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="password" name="" id="" placeholder='Repeat Password' />
      </label> <br />
      </Flex>

      <ul className='pt-[65px] pb-[27px]'>
        <li className='font-dm font-normal text-sm text-primary'><input type="checkbox" className='pl-4'/>I have read and agree to the Privacy Policy</li>
        <Flex className='gap-x-1.5 mt-[23px]'>
        <li className='font-dm font-normal text-sm text-primary mr-[33px]'>Subscribe Newsletter</li>
        <li className='font-dm font-normal text-sm text-primary'><input className='mr-[15px]' type="checkbox" name="" id="" />Yes</li>
        <li className='font-dm font-normal text-sm text-primary'><input className='mr-[15px]' type="checkbox" name="" id="" />No</li>
        </Flex>
      </ul>
      <Button className='mb-[140px]' text='Log in'/>
      </Container>
    </section>
  )
}

export default Signup