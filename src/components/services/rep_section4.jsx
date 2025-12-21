import React from 'react';
import Minor from '../../assets/minor.jpg';

export default function Section8() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="bg-[#E8F2FF] rounded-2xl flex flex-col md:flex-row items-center md:justify-between overflow-hidden shadow-sm">
          
          {/* Left Side - Text */}
          <div className="p-8 md:p-12 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Health services or tips for healthy living, you can find here.
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              Connecting people or medically challenged individuals to the right hospitals, both locally and internationally, 
              to receive the best possible care geared towards restoring health.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors">
              Book a consultation
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end flex-1 p-6">
            <img
              src={Minor}
              alt="Healthcare professional"
              className="rounded-xl w-64 h-72 md:w-80 md:h-96 object-cover shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
