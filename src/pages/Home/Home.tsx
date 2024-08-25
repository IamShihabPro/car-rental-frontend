import Carousel from "@/component/Carousel/Carousel";
import CustomerTestimonials from "@/component/CustomerTestimonials/CustomerTestimonials";
import FeaturedCars from "@/component/FeaturedCars/FeaturedCars";
import HeroSection from "@/component/HeroSection/HeroSection";
import WhyChooseUs from "@/component/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Carousel/>
            <FeaturedCars/>
            <WhyChooseUs/>
            <CustomerTestimonials/>
        </div>
    );
};

export default Home;