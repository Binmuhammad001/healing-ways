import React from "react";
import { CheckCircle2 } from "lucide-react";
import Flags from "../../assets/flags.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Section3() {
  const benefits = [
    "8 years of experience",
    "24/7 medical services",
    "Over 30 hospitals around the world",
    "A dedicated team of professionals"
  ];
 const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleBookConsultation = () => {
    if (isAuthenticated) {
      navigate("/consultation");
    } else {
      navigate("/signup");
    }
  };
  
  return (
    <section className="py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Present in over 10+ countries across the world
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up. Let us help
              you achieve your healthcare goals while exploring the world and
              expanding your horizons.
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
            <button onClick={handleBookConsultation} className="bg-[#137EE8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Book a consultation
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={Flags}
              alt="Global healthcare presence"
              className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
