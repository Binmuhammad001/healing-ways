import React from "react";
import { Heart, Droplet, HeartPulse, Newspaper, User } from "lucide-react";

export default function MedicalServicesGrid() {
  const services = [
    {
      icon: Heart,
      title: "Needs assessment",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals."
    },
    {
      icon: Droplet,
      title: "Medical aid comparison",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals."
    },
    {
      icon: User,
      title: "Plan recommendations",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals."
    },
    {
      icon: Droplet,
      title: "Mediation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals."
    },
    {
      icon: HeartPulse,
      title: "Appeals support",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals."
    },
    {
      icon: Newspaper,
      title: "Application assistance",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your healthcare goals."
    }
  ];

  return (
    <section className="bg-[#172641] py-14 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-left flex flex-col"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="bg-white rounded-lg p-4 shadow-lg inline-flex">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-900" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
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
