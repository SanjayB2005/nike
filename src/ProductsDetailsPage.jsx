import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Constants/index'
import DYO from './assets/icons/DYO.png'
import { shoeSize } from './Constants/index'
import Button from './Buttons/Button'
import { star } from './assets/icons'
import PopularProductsCard from './Components/PopularProductsCard'
import { NavLink } from 'react-router-dom'

const ProductsDetailsPage = ({ setCart }) => {
  const { productName } = useParams()
  const product = products.find(p => p.name === productName)
  const [selectedShoe, setSelectedShoe] = useState(false)
  const [selectedDYO, setSelectedDYO] = useState(false)
  const [showDescriptionDeli, setShowDescriptionDeli] = useState(false)
  const [showDescriptionPro, setShowDescriptionPro] = useState(false)
  const [showDescriptionInfo, setShowDescriptionInfo] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)
  const [cart, setLocalCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  if (!product) {
    return <div>Product not found</div>
  }

  const handleClickForShoe = () => {
    setSelectedShoe(!selectedShoe)
    setSelectedDYO(false)
  }

  const handleClickForDYO = () => {
    setSelectedDYO(!selectedDYO)
    setSelectedShoe(false)
  }

  const toggleDescriptionDeli = () => {
    setShowDescriptionDeli(!showDescriptionDeli)
  }

  const toggleDescriptionPro = () => {
    setShowDescriptionPro(!showDescriptionPro)
  }

  const toggleDescriptionInfo = () => {
    setShowDescriptionInfo(!showDescriptionInfo)
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size)
  }

  const handleAddToBag = () => {
    if (selectedSize) {
      const newCartItem = { ...product, size: selectedSize, quantity: 1 }
      const updatedCart = [...cart, newCartItem]
      setLocalCart(updatedCart)
      setCart(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      alert('Product added to bag')
    } else {
      alert('Please select a size')
    }
  }

  const filteredProducts = products.filter(p => p.name !== productName)

  return (
    <div>
      <div className='max-container flex justify-center items-center'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-14 mt-16 mr-14 ml-14 mb-16'>
          <div>
            <img src={product.imgURL} alt={product.name} className='h-[500px] w-[500px]' />
          </div>
          <div className='flex flex-col ml-10 max-w-[400px]'>
            <p className='text-xl font-montserrat'>{product.name}</p>
            <p className='text-slate-gray font-palanquin'>Men's Shoe</p>
            <h1 className='font-montserrat text-xl font-normal mt-5'>MRP: {product.price}</h1>
            <p className='font-palanquin text-sm text-slate-gray leading-6 '>Inclusive of all taxes <br />
              (Also includes all applicable duties)</p>
            <div className='flex items-center mt-5'>
              <img
                src={product.imgURL}
                alt={product.name}
                className={`h-[70px] w-[70px] rounded-m cursor-pointer ${selectedShoe ? 'border border-black' : ''} hover:border  hover:border-black`}
                onClick={handleClickForShoe}
              />
              <img
                src={DYO}
                alt='DYO'
                className={`h-[70px] w-[70px] ml-5  rounded-m  cursor-pointer ${selectedDYO ? 'border border-black' : ''} hover:border hover:border-black`}
                onClick={handleClickForDYO}
              />
            </div>
            <p className='font-montserrat font-medium mt-16'>Select Size</p>

            <div className='flex mt-5 mb-5 sm:flex-col-3 md:flex-col lg:flex-col xl:flex-row flex-wrap gap-5'>
              {shoeSize.map((size, index) => (
                <div
                  key={index}
                  className={`border border-black rounded-m p-2 mr-2 h-10 w-16 flex items-center justify-center rounded-md cursor-pointer ${selectedSize === size.size ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                  onClick={() => handleSizeClick(size.size)}
                >
                  {size.size}
                </div>
              ))}
            </div>
            <div className='mt-5'>
              <Button name='Add to Bag' fullWidth onClick={handleAddToBag} />
              <br />
              <Button name='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" fullWidth />
            </div>
            <h2 className='mt-10 font-palanquin text-xl underline'>Product Details</h2>

            <div>   {/* product description */}
              <div>
                <h1 className='mt-5 font-palanquin text-xl cursor-pointer' onClick={toggleDescriptionDeli}>
                  Delivery & Returns <span>{showDescriptionDeli ? '▲' : '▼'}</span>
                </h1>
                {showDescriptionDeli && (
                  <p className='mt-2 text-slate-gray'>
                    Here is the description for delivery and returns. You can add more details here.
                  </p>
                )}
                <hr className='mt-5 max-w-[400px]' />

                <div className='mt-5 flex items-center'>
                  <h1 className='font-palanquin text-xl cursor-pointer'>
                    Rating <span className='font-palanquin text-xl'>:</span>
                  </h1>
                  <div className='flex items-center ml-2'>
                    <img src={star} alt='star' className='w-[20px] h-[20px] mr-1' />
                    <p className='font-palanquin text-xl ml-1'>(4.5)</p>
                  </div>
                </div>
                <hr className='mt-5 max-w-[400px]' />
                <h1 className='mt-5 font-palanquin text-xl cursor-pointer' onClick={toggleDescriptionPro}>
                  Product Details <span>{showDescriptionPro ? '▲' : '▼'}</span>
                </h1>
                {showDescriptionPro && (
                  <p className='mt-2 text-slate-gray'>
                    Here is the description for product details. You can add more details here.
                  </p>
                )}
                <hr className='mt-5 max-w-[400px]' />
                <h1 className='mt-5 font-palanquin text-xl cursor-pointer' onClick={toggleDescriptionInfo}>
                  Additional Information <span>{showDescriptionInfo ? '▲' : '▼'}</span>
                </h1>
                {showDescriptionInfo && (
                  <p className='mt-2 text-slate-gray'>
                    Here is the additional information. You can add more details here.
                  </p>
                )}
                <hr className='mt-5 max-w-[400px]' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16 mb-16 block max-container'>
        <h1 className='mt-16 font-montserrat text-xl font-semibold'>You Might Also Like</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 mt-16'>
          {filteredProducts.map((product) => (
            <NavLink key={product.name} to={`/productDetails/${product.name}`}><PopularProductsCard key={product.name} {...product} hoverStyle={false} /></NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsDetailsPage