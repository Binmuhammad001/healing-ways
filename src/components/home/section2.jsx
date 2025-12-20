import React from "react";
import section21 from "../../assets/section21.jpg";
import section22 from "../../assets/section22.jpg";
import section23 from "../../assets/section23.jpg";

export default function Section2() {
  const advantages = [
    {
      image: section21,
      title: "Access to the best doctors",
      description:
        "Our team of experts are focused on ensuring you have the right care."
    },
    {
      image: section22,
      title: "Affordable healthcare",
      description:
        "Our team of experts are focused on ensuring you have the right care."
    },
    {
      image: section23,
      title: "Hotel and medical tourism assistance",
      description:
        "Our team of experts are focused on ensuring you have the right care."
    }
  ];

  return (
    <section className="pt-16 md:pt-24 bg-[#F7F3F0] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* === Text Section === */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          
          {/* Left Column */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-blue-600 font-semibold uppercase mb-2">
              Support
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our advantages
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-600 text-sm sm:text-base">
              Our team of experts are focused on ensuring you have the right and
              adequate diagnosis to match you with a doctor for your treatment.
            </p>
          </div>
        </div>

        {/* === Cards Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="rounded-lg shadow-md object-cover w-full h-56 sm:h-64 md:h-72 mb-4"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
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
