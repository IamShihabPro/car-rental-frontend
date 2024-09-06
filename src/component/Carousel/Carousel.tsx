import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousal.css';
import { Autoplay, Pagination } from 'swiper/modules';
import Slider from './Slider';

import image1 from '../../assets/images/cars/tesla.avif'
import image2 from '../../assets/images/cars/bmw-4.webp'
import image3 from '../../assets/images/cars/tesla-3.avif'

const Carousel = () => {
  const sliderData = [
    {
      imageUrl: image1,
      title: 'Luxury SUVs for Rent',
      description: 'Experience the Comfort and Power of Our Premium SUV Selection. Perfect for Family Trips.',
      buttonText: 'RENT NOW',
    },
    {
      imageUrl: image2,
      title: 'Affordable Compact Cars',
      description: 'Economical and Easy to Drive. Ideal for City Travel and Budget-Friendly Rentals.',
      buttonText: 'RENT NOW',
    },
    {
      imageUrl: image3,
      title: 'Electric Cars Available',
      description: 'Go Green with Our Eco-Friendly Electric Vehicles. Sustainable and Efficient.',
      buttonText: 'RENT NOW',
    },
  ];  

  return (
    <div className="bg-gray-900 -mt-34 sm:-mt-6 md:-mt-8 lg:-mt-8 py-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slider
              imageUrl={slide.imageUrl}
              title={slide.title}
              description={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
