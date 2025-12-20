import React from "react";
import { HeartPulse, UserCheck, Plane, FileCheck, Users } from "lucide-react";
import HeroMajor from "../../assets/major.jpg";

export default function Section6() {
  return (
    <section className="bg-white py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why choose us
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
            Connecting people or medically challenged individuals to the right
            hospitals both locally and internationally to receive the best
            possible care.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left: Features */}
          <div className="space-y-6">
            {[
              {
                icon: HeartPulse,
                title: "Affordable, high-quality medical care",
                text:
                  "We connect patients to trusted hospitals locally and internationally for quality care."
              },
              {
                icon: UserCheck,
                title: "Expert guidance every step of the way",
                text:
                  "Our team supports you from consultation to recovery with professional guidance."
              },
              {
                icon: Plane,
                title: "Stress-free medical travel experience",
                text:
                  "We manage logistics and coordination to ensure a smooth medical journey."
              },
              {
                icon: FileCheck,
                title: "Visa processing and support services",
                text:
                  "We assist with visa documentation and travel arrangements."
              },
              {
                icon: Users,
                title: "Trusted medical collaboration",
                text:
                  "We work with certified healthcare professionals and institutions."
              }
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                  <Icon className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors">
                Book a consultation
              </button>
              <button className="w-full sm:w-auto bg-[#137EE81A] hover:bg-blue-100 text-[#137EE8] px-6 py-3 rounded-md font-medium text-sm transition-colors">
                Learn more
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={HeroMajor}
              alt="Medical consultation"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
