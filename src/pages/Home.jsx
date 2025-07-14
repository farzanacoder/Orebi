import React from 'react'
import Banner from '../layouts/Banner'
import Add from '../layouts/Add'
import Carts from '../components/Carts'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Cart_1 from '../assets/cart_1.png'
import Cart_2 from '../assets/cart_2.jpg'
import Cart_3 from '../assets/cart_3.png'
import Cart_4 from '../assets/cart_4.jpg'
import Cart_5 from '../assets/cart_5.png'
import Cart_6 from '../assets/cart_6.png'
import Cart_7 from '../assets/cart_7.png'
import Cart_8 from '../assets/cart_8.png'
import Cart_9 from '../assets/cart_9.png'
import Cart_10 from '../assets/cart_10.png'
import Cart_11 from '../assets/cart_11.png'
import Cart_12 from '../assets/cart_12.png'
import Ads_2 from '../assets/Ads_2.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArr from '../components/prevArr'
import NextArr from '../components/nextArr'
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArr/>,
    nextArrow: <NextArr/>
  };
  return (


    <>
      <Banner />
      <Add />
      <Container className=' pb-[118px]'>
        <h1 className='text-xl text-secondary font-bold font-dm mb-12'>New Arrivals</h1>
        <Slider className='gap-x-10' {...settings}>
          <Carts className='w-[240px]' price='64.00' img={Cart_1} basicTxt='product one'/>
          <Carts className='w-[240px]' price='44.00' img={Cart_2} basicTxt='product two' />
          <Carts className='w-[240px]' price='34.00' img={Cart_3} basicTxt='product three' />
          <Carts className='w-[240px]' price='24.00' img={Cart_4} basicTxt='product four' />
        </Slider>

     
      </Container>
      <Container className=' pb-[118px]'>
        <h1 className='text-xl text-secondary font-bold font-dm mb-12'>Our Bestsellers</h1>
        <Flex className='gap-x-10'>
          <Carts price='$44.00' img={Cart_5} />
          <Carts price='$44.00' img={Cart_6} />
          <Carts price='$44.00' img={Cart_7} />
          <Carts price='$44.00' img={Cart_8} />
        </Flex>
      </Container>

      <Container>
        <img src={Ads_2} className="mb-[128px]" />
      </Container>


      <Container className=' pb-[118px]'>
        <h1 className='text-xl text-secondary font-bold font-dm mb-12'>Special Offers</h1>
        <Flex className='gap-x-10'>
          <Carts price='$44.00' img={Cart_9} />
          <Carts price='$44.00' img={Cart_10} />
          <Carts price='$44.00' img={Cart_11} />
          <Carts price='$44.00' img={Cart_12} />
        </Flex>
      </Container>
    </>
  )
}

export default Home