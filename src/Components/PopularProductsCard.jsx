import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL, name, price, hoverStyle}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className={`w-[280] h-[280]  ${hoverStyle ? 'transition-all duration-300 hover:scale-90' : ' scale-100' }`} />
        <div className='flex  gap-2.5 justify-start  mt-8'>
            <img src={star} alt='rating' width={24} height={24}  />
            <p className='font-montserrat text-xl text-slate-gray leading-normal'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductsCard