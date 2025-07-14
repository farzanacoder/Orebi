import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'

const Account = () => {
  let name = useSelector((state) => state.bread.prevvalue)

    
    return (
        <section>
            <Container>
                 <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>My Account</h1>
      <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
        <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
          {name && (
            <>
              {name}
              <LiaAngleRightSolid />
            </>
          )}
        </Link>
         Account
      </p>
                <Flex className='pt-[120px] pb-[140px]'>
                    <div className='w-[234px] h-[406px]'>
                        <h4 className='font-bold font-dm pb-5 text-base text-secondary border-b border-[#F0F0F0]'>Dashboard</h4>
                        <h4 className='font-normal pt-5 font-dm pb-5 text-sm text-primary border-b border-[#F0F0F0]'>Others</h4>
                        <h4 className='font-normal pt-5 font-dm pb-5 text-sm text-primary border-b border-[#F0F0F0]'>Donwloads</h4>
                        <h4 className='font-normal pt-5 font-dm pb-5 text-sm text-primary border-b border-[#F0F0F0]'>Addresses</h4>
                        <h4 className='font-normal pt-5 font-dm pb-5 text-sm text-primary border-b border-[#F0F0F0]'>Account details</h4>
                        <h4 className='font-normal pt-5 font-dm pb-5 text-sm text-primary border-b border-[#F0F0F0]'>Logout</h4>
                    </div>
                    <div className='w-[918px] h-[126px]'>
                        <div className='ml-10 font-dm text-base font-normal text-primary'><p className='mb-[50px]'>Hello <a href="#" className='text-secondary'>admin</a> (not <a href="#" className='text-secondary'>admin</a>? <a href="#" className='text-secondary'>Log out</a>)</p>
                            From your account dashboard you can view your <a href="#" className='text-secondary'>recent orders</a>, manage your <a href="#" className='text-secondary'>shipping and billing addresses</a>, and <a href="#" className='text-secondary'>edit your password and account details.</a></div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Account