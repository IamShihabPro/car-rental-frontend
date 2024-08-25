import Carousel from "@/component/Carousel/Carousel";
import CustomerTestimonials from "@/component/CustomerTestimonials/CustomerTestimonials";
import Discover from "@/component/Discover/Discover";
import FeaturedCars from "@/component/FeaturedCars/FeaturedCars";
import Footer from "@/component/Footer/Footer";
import HeroSection from "@/component/HeroSection/HeroSection";
import UniqueSection from "@/component/UniqueSection/UniqueSection";
import WhyChooseUs from "@/component/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Carousel/>
            <FeaturedCars/>
            <Discover/>
            <WhyChooseUs/>
            <UniqueSection/>
            <CustomerTestimonials/>
            <Footer/>
        </div>
    );
};

export default Home;