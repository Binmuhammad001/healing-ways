import React from "react";
import section21 from "../../assets/section21.jpg";
import section22 from "../../assets/section22.jpg";
import section23 from "../../assets/section23.jpg";

export default function Section2() {
  const advantages = [
    {
      image: section21,
      title: "Access to the best doctors",
      description: "Our team of experts are focused on ensuring you have the right"
    },
    {
      image: section22,
      title: "Affordable healthcare",
      description: "Our team of experts are focused on ensuring you have the right"
    },
    {
      image: section23,
      title: "Hotel and medical tourism assistance",
      description: "Our team of experts are focused on ensuring you have the right"
    }
  ];

  return (
    <section className="pt-15 bg-[#F7F3F0]">
      <div className="container mx-auto px-6">
        
        {/* === Text Section === */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Left Column */}
          <div className="md:w-1/2 mb-6 md:mb-0 pt-10">
            <p className="text-blue-600 font-semibold uppercase mb-2">
              Support
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our advantages
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-8 pt-20">
            <p className="mb-6 text-gray-600">
              Our team of experts are focused on ensuring you have the right & <br />adequate diagnosis to match you with a doctor for your treatment.
            </p>
          </div>
        </div>

        {/* === Image Section with Text === */}
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="rounded-lg shadow-md object-cover w-full h-64 mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}