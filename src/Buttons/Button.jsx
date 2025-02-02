import React from 'react'

const Button = ({ name, iconUrl, backgroundColor, borderColor, textColor, fullWidth, hoverStyle, margin, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full  ${fullWidth && "w-[400px]"} border font-montserrat  
                       ${backgroundColor ? backgroundColor : "bg-coral-red"} 
                       ${borderColor ? borderColor : "border-coral-red"} 
                       ${textColor ? textColor : "text-white"} 
                       ${hoverStyle && 'hover-eff'}
                       ${margin && "mt-6"}`}
      onClick={onClick}
    >
      {name}
      {iconUrl && <img src={iconUrl} alt="iconUrl" className='ml-5 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button