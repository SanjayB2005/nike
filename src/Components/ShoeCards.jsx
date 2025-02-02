import React from 'react'


const ShoeCards = ({imgURL, changeBigShoeImg, bigShoeImg}) => {

  const handleClick= () =>{
    if(bigShoeImg !== imgURL.bigShoe){
      changeBigShoeImg(imgURL.bigShoe)
    } 
  }

  return (
    <div className={`border-2 hover-eff rounded-xl ${bigShoeImg == imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 `}  onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt='shoes'  width={127} height={103} className='object-contain '/>
      </div>
    </div>
  )
}

export default ShoeCards