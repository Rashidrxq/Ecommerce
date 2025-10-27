
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://picsum.photos/id/431/1920/1080?blur=5"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
      
      <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-48 lg:px-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Designs You'll Love</h1>
        <p className="mt-4 text-xl text-white">
          Discover unique, high-quality T-shirts crafted for comfort and style. Your new favorite tee is waiting.
        </p>
        <a
          href="#products"
          className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Shop Collection
        </a>
      </div>
    </div>
  );
};

export default Hero;
