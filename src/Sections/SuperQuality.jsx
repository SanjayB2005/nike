
import { shoe8 } from "../assets/images"
import Button from "../Buttons/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex fustify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
      <h2 className="text-4xl font-palanquin lg:max-w-lg font-bold capitalize">
            We Provide You <span className="text-coral-red inline-block mt-3"> Super </span> 
            <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
          </h2>
          <p className="info-text mt-4 lg:max-w-lg">
                            Ensuring premium comfort and style, our meticulously crafted footwear 
                            is designed to elevate your experience, providing you with unmatched quality,
                            innovation, and a touch of elegance.</p>

          <p className="info-text mt-6 lg:max-w-lg">
                        Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
              <Button name='View details' hoverStyle />
          </div>
            
      </div> 
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality