import React from 'react'
import Navber from './Navber'
import Sideber from './Sideber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <div>
        <Navber/>
        <Sideber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout