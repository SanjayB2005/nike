import React from 'react'
import HomePage from '../HomePage'
import Navbar from '../Components/Navbar'
import Footer from '../Sections/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = ({cart}) => {
  return (
    <>
    <Navbar cart={cart} />
    <Outlet />
    <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </>
  )
}

export default RootLayout