import React from 'react';
import Hero from '../../assets/hero.jpg';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function HeroSection() {
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
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={Hero} 
          alt="Hospital room" 
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="max-w-full md:max-w-2xl text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed py-2">
            Medical tourism
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6">
           We provide full support for medical tourism, connecting patients to hospitals abroad and handling logistics, consultations, and treatment plans for a seamless experience.
          </p>
          
          <div>
            <button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
              Book a medical report consult
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
