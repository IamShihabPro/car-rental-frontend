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
      title: 'Lismore Family Tent',
      description: 'An Enclosed Front Awning, King Size Bedrooms, Sewn-in Groundsheet, All in One Package',
      buttonText: 'SHOP NOW',
    },
    {
      imageUrl: image2,
      title: 'Lowe Alpine Backpacks',
      description: 'With Over 50 years of Experience Designing World-Class Carry Systems',
      buttonText: 'SHOP NOW',
    },
    {
      imageUrl: image3,
      title: 'SKPR 2.0',
      description: 'Dedicated Focus on the Integration of Responsible Materials & on Performance',
      buttonText: 'SHOP NOW',
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
