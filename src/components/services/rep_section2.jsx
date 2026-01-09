import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import major from '../../assets/rep_img.jpg';

export default function Section3() {
  const benefits = [
    "8 years experience",
    "24/7 Medical services",
    "Over 30 hospitals around the world",
    "A team of professionals"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={major}
              alt="Medical consultation"
              className="w-64 sm:w-72 md:w-80 lg:w-full max-w-md rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-snug mb-4 sm:mb-6">
              Experience Affordable, World-class Medical Care
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-black mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up. Let us help
              you achieve your healthcare goals while exploring the world.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-black">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#137EE8] hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base">
                Book a consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
