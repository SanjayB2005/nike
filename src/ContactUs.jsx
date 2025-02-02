import React from 'react'
import Button from './Buttons/Button'
import { contactus } from './assets/icons'


const ContactUs = () => {
  return (
    <main className='relative'>
      <section className='padding max-container'>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='flex-1'>
            <img  src={contactus} alt='Contact Us' className='w-full h-auto object-cover rounded-lg' />
          </div>
          <div className='flex-1'>
            <h1 className='text-4xl font-palanquin font-bold mb-6'>Get in Touch</h1>
            <p className='info-text mb-6'>
              We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
            </p>
            <form className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label htmlFor='name' className='font-montserrat text-lg mb-2'>Name</label>
                <input type='text' id='name' className='input shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]' placeholder='Your Name' required />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='email' className='font-montserrat text-lg mb-2'>Email</label>
                <input type='email' id='email' className='input shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] ' placeholder='Your Email' required />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='message' className='font-montserrat text-lg mb-2'>Message</label>
                <textarea id='message' className='input shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]' placeholder='Your Message' rows='5' required></textarea>
              </div>
              <Button name='Send Message' fullWidth />
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs