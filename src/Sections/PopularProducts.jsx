import {products} from '../Constants/index'
import PopularProductsCard from '../Components/PopularProductsCard'
import { NavLink } from 'react-router-dom'

const PopularProducts = () => {
  return (
    <section id="Products " className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='font-palanquin font-bold text-4xl'>Our <span className='text-coral-red'>Popular </span>Products</h2>
        <p className='lg:max-w-lg font-montserrat text-slate-gray mt-2'>
            Experience top-notch quality and style 
            with our sought-after selections. 
            Discover a world of comfort, design, and value
        </p>
      </div>

      
     <NavLink to={'products'}>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16'> 
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} hoverStyle={true}/>
        ))}
      </div> 
    </NavLink>
    </section>
  )
}

export default PopularProducts