import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { FaSearch } from 'react-icons/fa'

const Error = () => {
  return (
    <section>
      <Container>
        <h1 className='py-[120px] font-bold font-dm text-9xl text-secondary'>404</h1>
        <p className='font-dm w-[55%] mb-15 font-normal text-base text-primary'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className='relative w-[643px] mb-15'>
          <input type="search" name="" id="" placeholder='Type to search' className='w-full pr-5 pl-5 placeholder:pl-5 h-[71px] border border-b border-[#F0F0F0]' />
          <FaSearch className='absolute top-7 right-4' />
        </div>

        <Button className='mb-[156px]' text='Back to Home' />
      </Container>
    </section>
  )
}

export default Error