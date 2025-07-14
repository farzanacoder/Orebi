import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PagiHead from '../components/PagiHead'
import PagiBody from '../components/PagiBody'
import Image from '../components/Image'
import Grid_1 from '../assets/Grid_1.png'
import Grid_2 from '../assets/Grid_2.png'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { HiMiniPlus } from 'react-icons/hi2'
import Pagination from '../components/Pagination'
import Pagination_2 from '../components/Pagination_2'
import Category from '../components/Category'
import { useDispatch, useSelector } from 'react-redux'
import SubCategory from '../components/SubCategory'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from 'react-icons/lia'

const Shop = () => {
  const [viewType, setViewType] = useState('grid')
  let category = useSelector((state) => state.category.value)


  let [store, setStore] = useState(10)
  let handleChange = (e) => {
    setStore(e.target.value);

  }

  let name = useSelector((state) => state.bread.prevvalue)




  return (
    <section>
      <Container>
        <h1 className='pt-[120px] font-bold font-dm text-4xl text-secondary'>Shop</h1>
        <p className='font-dm font-normal text-[12px] text-[#6D6D60] flex items-center gap-x-2 mt-5'>
          <Link to={name === "Home" ? "/" : `/${name}`} className="flex items-center gap-x-2">
            {name && (
              <>
                {name}
                <LiaAngleRightSolid />
              </>
            )}
          </Link>
          Shop
        </p>
        <Flex className='pt-[120px] pb-[140px]'>
          <div className='w-[373px] h-[1743px] mr-5'>

            <PagiHead text='Shop by Category' />

            <Category title='Category 1' type='true' />
            {
              category &&
              <>
                <SubCategory title='Phone' />
                <SubCategory title='Laptop' />
                <SubCategory title='Tab' />
                <SubCategory title='PC' />
                <SubCategory title='Desktop' />
              </>
            }

            <Category title='Category 2' type='false' />
            {
              category &&
              <>
                <SubCategory title='Phone' />
                <SubCategory title='Laptop' />
                <SubCategory title='Tab' />
                <SubCategory title='PC' />
                <SubCategory title='Desktop' />
              </>
            }

            <Category title='Category 3' type='true' />
            {
              category &&
              <>
                <SubCategory title='Foundation' />
                <SubCategory title='Powder' />
                <SubCategory title='Lipstick' />
                <SubCategory title='Eyeliner' />
              </>
            }

            <Category title='Category 4' type='false' />
            {
              category &&
              <>
                <SubCategory title='Phone' />
                <SubCategory title='Laptop' />
                <SubCategory title='Tab' />
                <SubCategory title='PC' />
                <SubCategory title='Desktop' />
              </>
            }

            <Category title='Category 5' type='false' />
            {
              category &&
              <>
                <SubCategory title='Phone' />
                <SubCategory title='Laptop' />
                <SubCategory title='Tab' />
                <SubCategory title='PC' />
                <SubCategory title='Desktop' />
              </>
            }


            <Flex className='flex-row items-center justify-between pointer-events-none  border-b border-[#F0F0F0]'>
              <PagiHead className='mt-[53px]' text='Shop by Color' />  <TiArrowSortedUp />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-black rounded-full w-[11px] h-[11px]'>
              </div>
              <PagiBody text='Color 1' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#FF8686] rounded-full w-[11px] h-[11px]'>
              </div>
              <PagiBody text='Color 2' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#7ED321] rounded-full w-[11px] h-[11px]'>
              </div>
              <PagiBody text='Color 3' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#B6B6B6] rounded-full w-[11px] h-[11px]'>
              </div>
              <PagiBody text='Color 4' />
            </Flex>
            <Flex className='border-b border-[#F0F0F0] items-center'>
              <div className='mr-2.5 bg-[#15CBA5] rounded-full w-[11px] h-[11px]'>
              </div>
              <PagiBody text='Color 5' />
            </Flex>

            <Flex className='flex-row items-center justify-between pointer-events-none  border-b border-[#F0F0F0]'>
              <PagiHead className='mt-[53px]' text='Shop by Brand' />  <TiArrowSortedUp />
            </Flex>
            <PagiBody text='Brand 1' />
            <PagiBody text='Brand 2' />
            <PagiBody text='Brand 3' />
            <PagiBody text='Brand 4' />
            <PagiBody text='Brand 5' />

            <PagiHead className='mt-[53px]' text='Shop by Price' />
            <PagiBody text='$0.00 - $9.99' />
            <PagiBody text='$10.00 - $19.99' />
            <PagiBody text='$20.00 - $29.99' />
            <PagiBody text='$30.00 - $39.99' />
            <PagiBody text='$40.00 - $69.99' />
          </div>


          <div className='w-[800px] h-[2010px]'>
            <Container className=' pb-[118px]'>
              <Flex className='justify-between'>
                <Flex className='gap-x-2.5'>
                  <div onClick={() => { setViewType('grid') }}><Image src={Grid_1} /></div>
                  <div onClick={() => { setViewType('list') }}><Image src={Grid_2} /></div>

                </Flex>

                <Flex>
                  <div className="relative font-dm text-base font-normal text-primary mr-10">Sort by:
                    <select className='ml-4 border border-[#F0F0F0] w-[239px] h-[36px] pl-4 appearance-none' id="size" defaultValue="">
                      <option value="Featured">Featured</option>
                      <option value="red">red</option>
                      <option value="green">green</option>
                      <option value="blue">blue</option>
                    </select>

                    <div className="pointer-events-none absolute top-2.5 right-1 flex items-center pr-1">
                      <TiArrowSortedDown className="text-secondary w-4 h-4" />
                    </div>
                  </div>

                  <div className="relative font-dm text-base font-normal text-primary">Show:
                    <select onChange={handleChange} className='ml-4 border border-[#F0F0F0] w-[139px] h-[36px] pl-4 appearance-none' id="size" defaultValue="">
                      <option value="10">10</option>
                      <option value="3">3</option>
                      <option value="7">7</option>
                      <option value="9">9</option>
                    </select>

                    <div className="pointer-events-none absolute top-2.5 right-1 flex items-center pr-1">
                      <TiArrowSortedDown className="text-secondary w-4 h-4" />
                    </div>
                  </div>
                </Flex>

              </Flex>

              {
                viewType === 'grid' ?
                  (<Pagination itemsPerPage={parseInt(store)} />)
                  :
                  (<Pagination_2 itemsPerPage={parseInt(store)} />)
              }


            </Container>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Shop