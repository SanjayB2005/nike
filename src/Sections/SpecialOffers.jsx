import { NavLink } from "react-router-dom"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from '../Buttons/Button'


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className=" object-contain w-full " />
      </div> 
      <div className="flex flex-1 flex-col ">
      <h2 className="text-4xl font-palanquin lg:max-w-lg font-bold capitalize">
            <span className="text-coral-red inline-block mt-3">Special</span> Offer
          </h2>
          <p className="info-text mt-4 lg:max-w-lg">
                                        Embark on a shopping journey that redefines your experience with unbeatable deals. 
                                        From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

          <p className="info-text mt-6 lg:max-w-lg">
                                          Navigate a realm of possibilities designed to fulfill your unique desires,
                                          surpassing the loftiest expectations.
                                          Your journey with us is nothing short of exceptional.</p>
          <div className="mt-11 flex flex-wrap gap-4">
             <NavLink to={'products'}> <Button name='Shop now' iconUrl={arrowRight} hoverStyle/> </NavLink>
               <Button name='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray"hoverStyle textColor="text-slate-gray" />
          </div>
            
      </div>
    </section>
  )
}

export default SpecialOffers