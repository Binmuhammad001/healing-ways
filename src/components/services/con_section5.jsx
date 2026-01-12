import React from 'react';
import Minor from '../../assets/minor.jpg';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Section8() {
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
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="bg-[#E8F2FF] rounded-2xl flex flex-col md:flex-row items-center md:justify-between overflow-hidden shadow-sm">
          
          {/* Left Side - Text */}
          <div className="p-6 sm:p-8 md:p-12 flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
              Health services or tips for healthy living, you can find here.
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
              Connecting people or medically challenged individuals to the right hospitals both locally and internationally 
              to receive the best possible care geared towards restoring health.
            </p>
            <button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
              Book a consultation
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end flex-1 p-4 sm:p-6 md:p-8 mt-6 md:mt-0">
            <img
              src={Minor}
              alt="Healthcare professional"
              className="rounded-xl w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 object-cover shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
