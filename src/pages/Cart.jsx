import React from 'react'
import Container from '../components/Container'
import Tabrow from '../components/Tabrow'
import Button from '../components/Button'
import Flex from '../components/Flex'
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'
import Image from '../components/Image'
import Sun from '../assets/sun.png'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { TiArrowSortedDown } from 'react-icons/ti'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'


const Cart = () => {
  let name = useSelector((state) => state.bread.prevvalue)

  return (
    <section>
      <Container>
         <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Cart</h1>
      <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
        <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
          {name && (
            <>
              {name}
              <LiaAngleRightSolid />
            </>
          )}
        </Link>
        Cart
      </p>
       
        <table className='border border-[#F0F0F0]'>
          <table class=" border border-[#F0F0F0]">
            <tbody>
              <tr>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm bg-[#F5F5F3]'>Product</td>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm bg-[#F5F5F3]'>Price</td>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm bg-[#F5F5F3]'>Quantity</td>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm bg-[#F5F5F3]'>Total</td>
              </tr>
            </tbody>
          </table>

          <table class=" border border-[#F0F0F0]">
            <tbody>
              <tr>
                <td class='flex flex-row items-center border-[#F0F0F0] w-[275px] h-[160px] pl-5 text-secondary text-base font-bold font-dm'>
                  <ImCross />
                  <Image className='pl-5' src={Sun} />
                  <p className='pl-5'>Product name</p>
                </td>

                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm'>$44.00</td>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm'>
                  <Flex className='items-center gap-x-[30px]'>
                    <div className='py-1 px-7 border border-[#F0F0F0] flex gap-x-5 items-center'>
                      <HiOutlineMinusSmall />
                      <span className='text-primary'>1</span>
                      <HiOutlinePlusSmall />
                    </div>
                  </Flex>
                </td>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm'>$44.00</td>
              </tr>
            </tbody>
          </table>

          <table class=" border border-[#F0F0F0]">
            <tbody>
              <tr>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm'>
                  <Flex className='items-center'>
                    <div className="relative">
                      <select className='border text-primary text-base pl-5 border-[#F0F0F0] w-[135px] h-[50px] appearance-none' id="size" defaultValue="">
                        <option value="SIZE">SIZE</option>
                      </select>

                      <div className="pointer-events-none absolute top-4 right-1 flex items-center pr-1">
                        <TiArrowSortedDown className="text-secondary w-4 h-4" />
                      </div>
                    </div>
                    <p className='text-sm pl-5 text-secodary'>Apply Coupon</p>
                  </Flex>
                </td>
                <td class=' border-[#F0F0F0] w-[1300px] h-[89px] pl-5 text-secondary text-base font-bold font-dm text-end pr-5'>Update Cart</td>
              </tr>
            </tbody>
          </table>
        </table>



        <div className='flex flex-col items-end'>
          <h3 className='font-dm text-xl font-bold mb-6 mt-[54px]'>Cart totals</h3>
          <table class="border-collapse border border-[#F0F0F0] mb-[60px]">
            <tbody>
              <Tabrow thead='Subtotal' tbody='389.99 $' />
              <Tabrow thead='Total' tbody='389.99 $' />
            </tbody>
          </table>
          <Button text='Proceed to Checkout' className='mb-[140px]' />
        </div>
      </Container>
    </section>
  )
}

export default Cart