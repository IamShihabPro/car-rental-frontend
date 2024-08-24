import Carousel from "@/component/Carousel/Carousel";
import FeaturedCars from "@/component/FeaturedCars/FeaturedCars";
import HeroSection from "@/component/HeroSection/HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Carousel/>
            <FeaturedCars/>
        </div>
    );
};

export default Home;