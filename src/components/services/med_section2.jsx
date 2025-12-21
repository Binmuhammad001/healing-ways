import React from 'react';
import { Plane, Hotel, Stethoscope } from 'lucide-react';

export default function ServicesCardsSection() {
  const services = [
    {
      icon: Plane,
      title: "Flight Arrangements",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: Hotel,
      title: "Hotel Bookings",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: Stethoscope,
      title: "Medical process",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    }
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-[#F7F3F0] rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="bg-[#172641] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
