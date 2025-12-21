import React from "react";
import Img from "../../assets/rep_img.jpg";

export default function Section3() {
  return (
    <section className="py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Experience Affordable, World-class Medical Care
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed max-w-xl">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up. Let us help
              you achieve the care you deserve.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md">
              <div className="bg-[#A0DDFF33] rounded-xl p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  80,000+
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  App interactions each year
                </div>
              </div>

              <div className="bg-[#A0DDFF33] rounded-xl p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  250+
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Trusted medical partners
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={Img}
              alt="Medical consultation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover shadow-xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
