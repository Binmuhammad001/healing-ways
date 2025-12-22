import React from "react";
import { CheckCircle2 } from "lucide-react";
import major from "../../assets/major.jpg";

export default function Section3() {
  const benefits = [
    "Adequate and comprehensive diagnosis",
    "We connect you to the right doctors for the best treatment",
    "Over 8 years of experience in medical consulting and tourism",
    "A dedicated team of healthcare professionals"
  ];

  return (
    <section className="py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left - Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={major}
              alt="Medical consultation"
              className="rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug mb-6">
              Save more on your medical procedures and overall expenses with
              Healing Ways
            </h2>

            <div className="text-gray-700 text-sm sm:text-base mb-8">
              <p>We are committed to making your medical tourism journey a success,</p>
              <p>from initial consultation to post-treatment follow-up.</p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#137EE8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
