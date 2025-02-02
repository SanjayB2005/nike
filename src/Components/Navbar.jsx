import React, { useState, useEffect } from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../Constants/index'
import { hamburger } from '../assets/icons'
import { NavLink } from 'react-router-dom'
import shoppingBag from '../assets/images/shoppingBag.png'

const Navbar = ({ cart }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { 
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className='padding-x py-8 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={30} />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item, index) => (
            <NavLink key={index} to={item.href}>
              <li className='font-montserrat leading-normal text-slate-gray text-lg'>
              <p className="text-lg m-6 group relative w-max">
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-coral-red group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-coral-red group-hover:w-3/6"></span>
              </p>
              </li>
            </NavLink>
          ))}
        </ul>
        <NavLink to='/cart'>
          <div className='flex gap-1 max-lg:hidden items-center justify-center mr-10 cursor-pointer'>
            <img src={shoppingBag} alt='Cart' width={24} height={24} />
            <p className='font-palanquin text-xl bg-primary h-8 w-8 rounded-full flex items-center justify-center flex-wrap'>{totalItems}</p>
          </div>
        </NavLink>
        <div key="log-in" className='font-montserrat leading-normal text-black text-lg gap-2 max-lg:hidden wide:mr-24 font-medium'>
          <NavLink to={'login'}>Sign in / Explore now</NavLink>
        </div>
        <div className='max-lg:block hidden'>
          <img src={hamburger} alt='Hamburger' width={24} height={24} onClick={toggleMenu} className='cursor-pointer' />
        </div>
      </nav>
      {menuOpen && (
        <div className='max-lg:flex flex-col items-center bg-white shadow-lg py-4'>
          {navLinks.map((item, index) => (
            <NavLink key={index} to={item.href} onClick={toggleMenu}>
              <p className='font-montserrat "text-lg m-4 group relative w-max"'>
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-coral-red group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-coral-red group-hover:w-3/6"></span>
              </p>
            </NavLink>
          ))}
          <NavLink to='/cart' onClick={toggleMenu}>
            <div className='flex gap-1 items-center justify-center cursor-pointer py-2'>
              <img src={shoppingBag} alt='Cart' width={24} height={24} />
              <p className='font-palanquin text-xl bg-primary h-8 w-8 rounded-full flex items-center justify-center flex-wrap'>{totalItems}</p>
            </div>
          </NavLink>
          <NavLink to={'login'} onClick={toggleMenu}>
            <div className='font-montserrat leading-normal text-black text-lg gap-2 font-medium py-2'>
            <p className='font-montserrat "text-lg m-4 group relative w-max"'>
                <span>Sign in / Explore now</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-coral-red group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-coral-red group-hover:w-3/6"></span>
              </p>
            </div>
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar