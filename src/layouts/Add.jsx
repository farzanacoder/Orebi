import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Ad_1 from '../assets/Ad_1.jpg'
import Ad_2 from '../assets/Ad_2.jpg'
import Ad_3 from '../assets/Ad_3.jpg'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
            <Flex className='justify-between'>
                <div className='w-[48%]'>
                    <Link to='/shop'><Image className='w-full' src={Ad_1}/></Link>
                </div>
                <div className='w-[48%]'>
                <Image className='pb-7 w-full' src={Ad_2}/>
                <Image className='w-full' src={Ad_3}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Add