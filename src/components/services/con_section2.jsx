import React from 'react';
import { Heart, Droplet, HeartPulse, Newspaper, User } from 'lucide-react';

export default function MedicalServicesGrid() {
  const services = [
    {
      icon: Heart,
      title: "Needs assessment",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: Droplet,
      title: "Medical aid comparison",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: User,
      title: "Plan recommendations",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: Droplet,
      title: "Mediation",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: HeartPulse,
      title: "Appeals support",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    },
    {
      icon: Newspaper,
      title: "Application assistance",
      description: "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals while exploring the world and expanding your horizons."
    }
  ];

  return (
    <section className="bg-[#172641] py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="text-left"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-lg inline-block">
                    <Icon className="w-8 h-8 text-slate-900" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
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