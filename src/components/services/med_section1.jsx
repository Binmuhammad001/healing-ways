import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Flags from '../../assets/flags.png';

export default function Section3() {
  const benefits = [
    "8 years experience",
    "24/7 Medical services",
    "Over 30 hospitals around the world",
    "A team of professionals"
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Right - Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight mb-4 sm:mb-6">
              Present in over 10+ countries across the world
            </h2>

            <p className="text-black mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. 
              Let us help you achieve your healthcare goals while exploring the world and expanding your horizons.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-black text-sm sm:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#137EE8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base">
                Book a consultation
              </button>
            </div>
          </div>

          {/* Left - Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <img
              src={Flags}
              alt="Medical consultation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
