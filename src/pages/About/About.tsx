import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Bg from '../../assets/images/cars/tesla-6.avif';

const About: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white py-16" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center my-10 relative z-10">About Us</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="bg-transparent p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                At [Your Company Name], our mission is to provide the best car rental experience possible. We offer a wide selection of high-quality vehicles to meet your needs, whether you’re looking for a sleek sports car, a reliable sedan, or a spacious SUV. Our commitment is to ensure every customer has a seamless and enjoyable experience from booking to driving.
              </p>
              <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Wide Selection:</strong> Choose from a diverse range of cars to suit your needs.</li>
                <li><strong>Best Prices:</strong> Competitive pricing with no hidden fees.</li>
                <li><strong>24/7 Support:</strong> Our dedicated team is available around the clock to assist you.</li>
                <li><strong>Quality Assurance:</strong> All our vehicles are regularly maintained and inspected for safety and reliability.</li>
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="bg-transparent p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
              <p className="text-lg leading-relaxed mb-4">
                Founded in [Year], [Your Company Name] started with a simple idea: to make car rental easy and accessible for everyone. Over the years, we’ve grown into a trusted name in the industry, thanks to our dedication to customer satisfaction and our extensive fleet of top-notch vehicles.
              </p>
              <p className="text-lg leading-relaxed">
                Our team is passionate about cars and committed to providing exceptional service. Whether you’re planning a weekend getaway or a cross-country road trip, we’re here to make sure you have the perfect vehicle for your journey.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-200 text-center">Our Location</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5736200408355!2d91.8441997!3d22.36972295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2777c9c1cf83%3A0xb8796c419fa1021b!2z4Kas4Ka54Kam4KeN4Kam4Ka-4Kaw4Ka54Ka-4KafLCDgpprgpp_gp43gpp_gppfgp43gprDgpr7gpq4!5e0!3m2!1sbn!2sbd!4v1721150524377!5m2!1sbn!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-200 text-center">Follow Us</h2>
          <div className="flex space-x-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={32} />
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border text-white py-3 px-8 rounded-sm shadow-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
