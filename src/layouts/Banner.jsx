import React from 'react'
import Image from '../components/Image'
import Two from '../assets/2.png'
import Path from '../assets/Path.png'
import Shape from '../assets/Shape.png'
import Banner1 from '../assets/banner.jpg'
import Banner2 from '../assets/Ads_2.png'
import Banner3 from '../assets/Ad_2.jpg'
import Banner4 from '../assets/Ad_3.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div>
        0{i + 1}
      </div>
    )
  };
  return (
    <div>
      <section className='border-b border-[#F0F0F0]'>
        <Slider {...settings}>
          <div className='h-[400px]'>
            <Link to='/shop'><Image className='w-full' src={Banner1} /></Link>
          </div>
          <div className='h-[400px]'>
            <Link to='/shop'><Image className='w-full' src={Banner2} /></Link>
          </div>
          <div className='h-[400px]'>
            <Link to='/shop'><Image className='w-full h-full' src={Banner3} /></Link>
          </div>
          <div className='h-[400px]'>
            <Link to='/shop'><Image className='w-full h-full' src={Banner4} /></Link>
          </div>
        </Slider>

        <Container>
          <Flex className='justify-between'>
            <Flex className='items-center gap-x-4  py-[30px]'>
              <Image src={Two} />
              <p className='font-dm font-normal text-base text-[#6D6D6D]'>Two years warranty</p>
            </Flex>
            <Flex className='items-center gap-x-4  py-[30px]'>
              <Image src={Shape} />
              <p className='font-dm font-normal text-base text-[#6D6D6D]'>Free shipping</p>
            </Flex>
            <Flex className='items-center gap-x-4  py-[30px]'>
              <Image src={Path} />
              <p className='font-dm font-normal text-base text-[#6D6D6D]'>Return policy in 30 days</p>
            </Flex>
          </Flex>
        </Container>
      </section>
    </div>
  )
}

export default Banner