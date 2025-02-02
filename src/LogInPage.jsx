import React from 'react'
import logo from '../public/favicon.ico'
import Button from './Buttons/Button'
import { NavLink } from 'react-router-dom'

const LogInPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='w-full max-w-sm mb-8 flex justify-between items-center'>
        <NavLink to={'/'}>
          <img src={logo} alt="logo" className='h-12 w-12' />
        </NavLink>
      </div>
      <h1 className='text-3xl font-bold text-center mb-4'>
        Enter your email to join us or  <br />
        <span>Sign in.</span>
      </h1>
      <div className='w-full max-w-sm mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='country'>
          Country
        </label>
        <select id='country' className='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>France</option>
        </select>
      </div>
      <div className='w-full max-w-sm mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
          Email
        </label>
        <input id='email' type="email" placeholder="Email*" className='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
      </div>
      <p className='text-center text-gray-600 text-sm mb-4'>
        By continuing, I agree to Nike's <span className='text-blue-500 cursor-pointer'>Privacy Policy</span> and <span className='text-blue-500 cursor-pointer'>Terms of Use</span>.
      </p>
      <div className='w-full max-w-sm flex justify-end'>
        <Button name='Continue'   />
      </div>
    </div>
  )
}

export default LogInPage