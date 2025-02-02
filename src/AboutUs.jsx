import React, { Fragment } from 'react'
import SuperQuality from './Sections/SuperQuality'
import Services from './Sections/Services'

const AboutUs = () => {
  return (
    <main className='relative'>
        <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
       </section>
    </main>
  )
}

export default AboutUs