import React from 'react';
import Hero from '../../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-x-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={Hero}
          alt="Hospital room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-full md:max-w-2xl text-center md:text-left">
          
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-3">
            Medical report translation
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            We use half the space we build
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
            Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible care.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
            Book a medical report consult
          </button>

        </div>
      </div>
    </section>
  );
}
