import { TCar } from '@/types/userTypes';
import carImage from '../../assets/images/cars/demo.webp';

export const cars: TCar[] = [
  {
    brand: "Tesla",
    name: "Model S",
    description: "A high-performance electric sedan with advanced features.",
    color: "Midnight Silver",
    isElectric: true,
    status: "available", // Explicitly typed as 'available'
    features: [
      "Autopilot",
      "Long Range",
      "Premium Interior",
      "All-Wheel Drive"
    ],
    pricePerHour: 50,
    // isDeleted: false,
    image: carImage
  },
  {
    brand: "Ford",
    name: "Mustang",
    description: "A classic American muscle car with powerful engine options.",
    color: "Rapid Red",
    isElectric: false,
    status: "unavailable", // Explicitly typed as 'unavailable'
    features: [
      "V8 Engine",
      "Leather Seats",
      "Bluetooth Connectivity",
      "Navigation System"
    ],
    pricePerHour: 40,
    // isDeleted: false,
    image: carImage
  },
  {
    brand: "Chevrolet",
    name: "Bolt EV",
    description: "A compact electric car with impressive range and affordability.",
    color: "Kinetic Blue",
    isElectric: true,
    status: "available", // Explicitly typed as 'available'
    features: [
      "Rapid Charging",
      "Apple CarPlay",
      "Lane Departure Warning",
      "Rearview Camera"
    ],
    pricePerHour: 30,
    // isDeleted: false,
    image: carImage
  },
  {
    brand: "BMW",
    name: "3 Series",
    description: "A luxury sedan known for its driving dynamics and comfort.",
    color: "Alpine White",
    isElectric: false,
    status: "available", // Explicitly typed as 'available'
    features: [
      "Turbocharged Engine",
      "Leather Upholstery",
      "Sunroof",
      "Adaptive Cruise Control"
    ],
    pricePerHour: 45,
    // isDeleted: false,
    image: carImage
  },
  {
    brand: "Audi",
    name: "Q5",
    description: "A premium SUV with advanced technology and a spacious interior.",
    color: "Mythos Black",
    isElectric: false,
    status: "unavailable", // Explicitly typed as 'unavailable'
    features: [
      "Quattro All-Wheel Drive",
      "Navigation System",
      "Heated Seats",
      "Panoramic Sunroof"
    ],
    pricePerHour: 55,
    // isDeleted: false,
    image: carImage
  }
];
