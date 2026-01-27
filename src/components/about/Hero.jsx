import React from 'react';
import Hero from '../../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-start overflow-hidden">
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
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
            Who we are
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            We are a premier medical consultancy firm dedicated to providing seamless access to top-tier healthcare solutions. With headquarters in India and a growing presence in Nigeria, Cameroon, and across Africa, we specialize in medical referrals, expert consultations, treatment coordination, and holistic wellness solutions.

          </p>
        </div>
      </div>
    </section>
  );
}
