import React from 'react';
import Hero from '../../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Hero}
          alt="Hospital room"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full md:max-w-2xl text-center md:text-left space-y-4 md:space-y-6">
          
          <p className="text-xs sm:text-sm md:text-base text-gray-100 uppercase tracking-wide font-medium">
            Medical report translation
          </p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            We use half the space we build
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-xl">
            Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible care.
          </p>
          
          <div className="pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-medium text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Book a medical report consult
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
