import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breadbutton } from '../slices/breadcrumb'

const Navber = () => {
    let disPatch = useDispatch()
    let handlebtn=(itm)=>{
        disPatch(breadbutton(itm))
    }
    return (
        <nav className='py-[32px]'>
            <Container>
                <Flex>
                    <div className='w-5/12'>
                        <Link to='/'><Image src={Logo} /></Link>
                    </div>
                    <div className='w-7/12'>
                        <ul className='flex gap-x-10'>
                            <Link onClick={()=>handlebtn('Home')} to='/'><List text='Home'/></Link>
                            <Link onClick={()=>handlebtn('Shop')} to='/shop'><List text='Shop'/></Link>
                            <Link onClick={()=>handlebtn('About')} to='/about'><List text='About'/></Link>
                            <Link onClick={()=>handlebtn('Contacts')} to='/contacts'><List text='Contacts'/></Link>
                            <Link onClick={()=>handlebtn('Journal')} to='/product'><List text='Journal'/></Link>
                        </ul>
                    </div>
                </Flex>
            </Container>
        </nav>

    )
}

export default Navber