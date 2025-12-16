import React from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";

export default function Hero() {
  return (
    <section className="pt-24 bg-[#F0F4FA]">
      <div className="container mx-auto px-6">
        
        {/* === Text Section === */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Left Column */}
          <div className="md:w-1/2 mb-6 md:mb-0 pt-10">
            <p className="text-blue-600 font-semibold uppercase mb-2">
              Medical Consulting Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Your compass to a <br/> healthy life
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-8 pt-20">
            <p className="mb-6 text-gray-600">
              Connecting people or medically challenged individuals to the right <br/>hospitals both locally and internationally to receive the best <br/>possible care geared towards restoring health. 
            </p>
            <button className="bg-[#137EE8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Book a consultation
            </button>
          </div>
        </div>

        {/* === Image Section === */}
        <div className="w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
          <img
            src={hero1}
            alt="Doctors consulting patients"
            className="rounded-lg shadow-md object-cover w-full h-96 sm:h-[450px] md:h-[550px] lg:h-[600px]"
            loading="lazy"
          />
          <img
            src={hero2}
            alt="Medical team discussion"
            className="rounded-lg shadow-md object-cover w-full h-96 sm:h-[450px] md:h-[550px] lg:h-[600px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

