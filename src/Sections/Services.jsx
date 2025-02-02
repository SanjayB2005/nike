import { services } from '../Constants/index'
import ServiceCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section id='services' className='flex justify-center flex-wrap gap-9 max-container'> 
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services