import React from "react";
import { CheckCircle2 } from "lucide-react";
import major from "../../assets/rep_img.jpg";

export default function Section3() {
  const benefits = [
    "8 years of experience",
    "24/7 medical services",
    "Over 30 hospitals around the world",
    "A dedicated team of professionals"
  ];

  return (
    <section className="py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={major}
              alt="Medical consultation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Experience Affordable, World-class Medical Care
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed max-w-xl">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up. Let us help
              you achieve your healthcare goals with confidence and comfort.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-[#137EE8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Book a consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
