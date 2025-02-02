import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import PopularProducts from './Sections/PopularProducts'
import SuperQuality from './Sections/SuperQuality'
import Services from './Sections/Services'
import SpecialOffers from './Sections/SpecialOffers'
import CustomerReviews from './Sections/CustomerReviews'
import Subscribe from './Sections/Subscribe'
import Footer from './Sections/Footer'

const HomePage = () => {
  return (
    <main className="relative">
    
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      
    </main>
  )
}

export default HomePage