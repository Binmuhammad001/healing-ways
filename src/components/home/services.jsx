import React from "react";
import { FileText, Plane, Building, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Medical Report Translation",
      description:
        "Medical reports are one of the most important part of the whole process, The reports helps us understand or at least have an idea of the patient diagnosis With that we can identify the best doctor for that particular patient to ensure smooth treatment plan and process, accurate communication with the medical professionals."
    },
    {
      icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Medical Consultancy/Tourism",
      description:
        "We provide full support for medical tourism, connecting patients to hospitals abroad and handling logistics, consultations, and treatment plans for a seamless experience."
    },
    {
      icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Accommodation and Logistics",
      description:
        "We assist our patients with accommodations near hospitals, travel arrangements, and other logistics to ensure patients have a comfortable and stress-free experience."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Connecting patients to the right hospitals, and doctors worldwide to receive the best possible care geared towards restoring health and hope,
          To be reborn and thrive even better 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#137EE80A] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
