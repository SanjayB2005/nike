import React from 'react'
import PopularProductsCard from './Components/PopularProductsCard'
import { products } from './Constants/index'
import { NavLink } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div className='max-container'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 mt-16 mr-14 ml-14 mb-16 '> 
        {products.map((product) => (
          <NavLink key={product.name} to={`/productDetails/${product.name}`}>
            <PopularProductsCard {...product} hoverStyle={false} />
          </NavLink>
        ))}
      </div> 
    </div>
  )
}

export default ProductsPage