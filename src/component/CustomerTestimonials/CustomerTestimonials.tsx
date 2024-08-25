import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_"The_Rock"_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/723px-Dwayne_"The_Rock"_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg',
    rating: 5,
    review: 'The service was exceptional! The car was in pristine condition and the booking process was seamless.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_"The_Rock"_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/723px-Dwayne_"The_Rock"_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg',
    rating: 4,
    review: 'Great experience overall. The staff was friendly, and the car selection was impressive.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_"The_Rock"_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/723px-Dwayne_"The_Rock"_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg',
    rating: 5,
    review: 'I loved the luxury sedan I rented! It made my trip even more special. Highly recommend!',
  },
  // Add more testimonials here
];

const CustomerTestimonials: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-500"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
