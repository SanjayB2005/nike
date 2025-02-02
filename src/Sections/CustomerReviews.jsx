import ReviewCard from "../Components/ReviewCard"
import { reviews } from '../Constants/index'

const CustomerReviews = () => {
  return (
    <section>
      <h3 className="text-4xl font-palanquin font-bold text-center">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} 
                      imgURL ={review.imgURL}
                      rating = {review.rating}
                      feedback = {review.feedback}
                      customerName = {review.customerName} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews