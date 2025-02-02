import React, { useState, useEffect, Fragment } from 'react'
import Button from './Buttons/Button'

const CartPage = ({ setCart, total, setTotal, totalUnits, setTotalUnits }) => {
  const [cart, setLocalCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setLocalCart(storedCart)
  }, [])

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    setTotal(total)
    const units = cart.reduce((acc, item) => acc + item.quantity, 0)
    setTotalUnits(units)
  }, [cart, setTotal, setTotalUnits])

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cart]
    newCart[index].quantity += delta
    if (newCart[index].quantity < 1) {
      newCart[index].quantity = 1
    }
    setLocalCart(newCart)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index)
    setLocalCart(newCart)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <Fragment>
      <h1 className='font-montserrat font-semibold text-3xl mb-0 mt-6 ml-24'>Bag</h1>
      {totalUnits === 0 ? <h1 className='max-container flex items-center justify-center font-montserrat text-3xl'>Your Bag is Empty</h1> : null}
      <div className='max-container padding flex flex-row max-sm:flex-col max-md:flex-col  mt-0 gap-8'>
        <div className='flex flex-row  gap-8 flex-wrap'>
          {cart.map((item, index) => (
            <div key={index} className='flex flex-row max-sm:flex-col gap-4 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] p-4 rounded-2xl'>
             <div>
              <img src={item.imgURL} alt={item.name} width={250} height={250} className='mb-6' />
              <div className='border border-slate-gray rounded-full p-4 max-h-[50px] max-w-[250px]'>
                <div className='flex justify-between items-center gap-4 '>
                  <button className='hover:bg-slate-400 '><i className="fa fa-plus text-[24px] cursor-pointer" onClick={() => handleQuantityChange(index, 1)}></i></button>
                  <button><p className='font-palanquin text-xl cursor-pointer'>{item.quantity}</p></button>
                  <button><i className="fa fa-minus text-[24px] cursor-pointer" onClick={() => handleQuantityChange(index, -1)}></i></button>
                  <button><i className='fa fa-trash text-[20px] cursor-pointer' onClick={() => handleRemoveItem(index)}></i></button>
                </div>
              </div>
              </div>
              <div className='flex  justify-between gap-4 mt-6'>
                <div className='flex flex-col gap-2'>
                <p className='font-montserrat text-xl'>{item.name}</p>
                <span className='font-palanquin text-slate-gray'>Men's Shoes</span>
                <span className='font-palanquin text-slate-gray'>Size: {item.size}</span>
                </div>
                <div>
                  <h1 className='font-montserrat text-xl ml-16'>MRP : ₹ {item.price}</h1>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-montserrat font-semibold text-2xl m-6'>Order Summary</h1>
          <hr className='border-t border-gray-300 my-4' />
          <p className='font-montserrat font-semibold text-l m-6'>Subtotal: <span className="font-palanquin text-slate-gray text-l">{totalUnits} (Units)</span></p>
          <p className='font-montserrat font-semibold text-l m-6'>Est. total: <span className="font-palanquin text-slate-gray text-l">₹ {total}</span></p>
          <hr className='border-t border-gray-300 my-4' />
          <Button hoverStyle={false} name="Proceed to Checkout " fullWidth margin  />
        </div>
      </div>
    </Fragment>
  )
}

export default CartPage