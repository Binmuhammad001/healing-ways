import React from 'react';
import Hero from '../../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ Hero } 
          alt="Hospital room" 
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-base md:text-lg text-gray-200 leading-relaxed py-5">
            Medical tourism
          </p>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
            We use half the space we build
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Connecting people or medically challenged individuals to the<br/>right hospitals both locally and internationally to receive the<br/> best possible Connecting people or medically challenged
          </p>
          
          <div className="pt-5">
           <button className="w-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors">
                Book a medical report consult
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}