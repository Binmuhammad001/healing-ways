import React from 'react';
import { FileText, Plane, Building, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Medical Report Translation",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Medical Consultancy/Tourism",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Accommodation and logistics",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible"
    }
  ];

  return (
    <section className="py-16 md:py-10 bg-[#FFFFFF]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connecting people or medically challenged individuals to the right <br />hospitals both locally and internationally to receive the best possible care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#137EE80A] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Learn More Link - Always at bottom */}
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