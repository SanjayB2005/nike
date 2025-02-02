import Button from "../Buttons/Button"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../Constants/index"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Components/ShoeCards"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section className='flex w-full xl:flex-row flex-col min-h-screen gap-10 max-container justify-center '>
      <div className="relative flex flex-col justify-center items-start xl:w-2/5 w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collections</p>
        <h1 className="text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap pr-10 relative z-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, 
          quality comfort, and innovation 
          for your active life.</p>
        <NavLink to={'products'}> <Button name='Shop Now' iconUrl={arrowRight} hoverStyle/> </NavLink>
        <div className="flex justify-start items-start flex-wrap mt-20 gap-16">
          {statistics.map((stat, index) => 
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
            </div>
          )}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <NavLink to={'products'}><img src={bigShoeImg} alt="shoes" width={610} height={500} className="relative z-10 object-contain"/></NavLink>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}> 
              <ShoeCard imgURL={shoe} changeBigShoeImg={(shoe) => { setBigShoeImg(shoe) }} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero