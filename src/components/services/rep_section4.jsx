import React from 'react';
import Minor from '../../assets/minor.jpg';

export default function Section8() {
  return (
    <section className="bg-white py-14 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="bg-[#E8F2FF] rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-sm">

          {/* Left - Text */}
          <div className="p-6 sm:p-8 md:p-12 flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Health services or tips for healthy living, you can find here.
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              Connecting people or medically challenged individuals to the right
              hospitals, both locally and internationally, to receive the best
              possible care geared towards restoring health.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
              Book a consultation
            </button>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end flex-1 p-4 sm:p-6">
            <img
              src={Minor}
              alt="Healthcare professional"
              className="
                w-full max-w-xs sm:max-w-sm md:max-w-md
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
