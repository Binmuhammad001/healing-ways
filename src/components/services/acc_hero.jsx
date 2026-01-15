import React from 'react';
import Hero from '../../assets/acc_bg.jpg';
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
            Accommodation and logistics
          </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug md:leading-tight text-white">
           Hotel tailored to your health needs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6">
          We assist our patients with accommodations near hospitals, travel arrangements, and other logistics to ensure patients have a comfortable and stress-free experience.
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
