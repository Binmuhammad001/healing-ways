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
    <section className="py-16 md:py-20 bg-[#F7F3F0]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left - Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <img
              src={major}
              alt="Medical consultation"
              className="rounded-2xl shadow-xl w-full max-w-md h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Save more on your medical procedures and overall expenses with Healing Ways
            </h2>

            <p className="text-black text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-black text-sm sm:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#137EE8] hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Book a consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
