import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import major from '../../assets/major.jpg';

export default function Section4() {
  const benefits = [
    "Adequate & comprehensive diagnosis",
    "We connect you to the right doctors for best treatment.",
    "Over 8 years experience",
    "A team of professionals"
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F7F3F0] overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={major}
              alt="Medical consultation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Save more on your medical procedures and overall expenses with Healing Ways
            </h2>

            <p className="text-black text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 justify-center lg:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-black text-sm sm:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-[#137EE8] hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Book a consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
