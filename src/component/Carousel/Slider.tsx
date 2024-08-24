import React from 'react';

interface SliderProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Slider: React.FC<SliderProps> = ({ imageUrl, title, description }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative py-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white">
        <h2 className="text-5xl sm:text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="py-4 text-lg sm:text-xl text-center max-w-lg">{description}</p>
        <div className="flex gap-4 mt-4">
        </div>
      </div>
    </div>
  );
};

export default Slider;
