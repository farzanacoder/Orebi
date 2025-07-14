import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'

const Contact = () => {
  let name = useSelector((state) => state.bread.prevvalue)

  return (
    <Container>
       <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Contacts</h1>
            <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
              <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
                {name && (
                  <>
                    {name}
                    <LiaAngleRightSolid />
                  </>
                )}
              </Link>
              Contacts
            </p>
      <h1 className='py-[120px] font-bold font-dm text-3xl text-secondary'>Fill Up a Form</h1>
      <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Name <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your name here' />
      </label> <br />
      <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Email <br />
        <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your email here' />
      </label> <br />
      <label className='text-base font-dm font-bold text-secondary' htmlFor="name">Message <br />
        <textarea className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-w49' type="text" name="" id="" placeholder='Your message here' />
      </label> <br />
      <Button className=' mb-[140px]' text='Post' />

      <div className='relative pb-[140px] w-[1100px] h-[530px]'>

        <iframe  className=' w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.888864601404!2d90.36885300000002!3d23.751342200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf51e7aee4ff%3A0x21c88cabfebf5243!2sIBN%20Sina%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1746879275351!5m2!1sen!2sbd"></iframe>

        <div className='ml-5 w-[310px] flex flex-col absolute top-14 left-14 h-[280px] bg-white'>
          <div className='flex gap-x-35 items-center py-[10px]  border-b border-[#F0F0F0] w-full'>
            <h4 className='ml-5 text-base font-dm font-bold text-secondary'>Germany Office</h4>
            <BiPlus />
          </div>
          <div className='flex gap-x-35 items-center py-[10px]  border-b border-[#F0F0F0] w-full'>
            <h4 className='ml-5 text-base font-dm font-bold text-secondary'>Slovakia Office</h4>
            <BiPlus />
          </div>
          <div className='ml-5'>
            <h4 className='text-base font-dm my-5 font-bold text-secondary'>Lithuania Office</h4>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>575 Crescent Ave. Quakertown, PA 18951</p>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>+432 533 12 523</p>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>info@domain.com</p>
            <p className='font-dm text-sm mb-2.5 text-primary font-normal'>Mon - Fri: 9am - 6pm</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact