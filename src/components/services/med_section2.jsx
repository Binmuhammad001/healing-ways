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
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-[#F7F3F0] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="bg-[#172641] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
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