import React from 'react';
import Minor from '../../assets/minor.jpg';

export default function Section8() {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="bg-[#E8F2FF] rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

          {/* Left - Text */}
          <div className="p-6 sm:p-8 md:p-12 flex-1 text-center lg:text-left">

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Health services or tips for healthy living, you can find here.
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Connecting people or medically challenged individuals to the right
              hospitals, both locally and internationally, to receive the best
              possible care geared towards restoring health.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
                Book a consultation
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end flex-1 px-6 pb-6 lg:pb-0">
            <img
              src={Minor}
              alt="Healthcare professional"
              className="
                w-64 sm:w-72 md:w-80 lg:w-full max-w-md
                h-auto
                rounded-xl object-cover shadow-md
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
