import React from "react";
import Hero from "../../assets/acc_bg.jpg";
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
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Hero}
          alt="Hospital room"
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl sm:max-w-2xl">
          
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
            Accommodation and logistics
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug text-white">
            Hotels tailored to your health needs
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6">
            Connecting people or medically challenged individuals to the right
            hospitals both locally and internationally to receive the best
            possible care and support during their medical journey.
          </p>

          <button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
            Book a medical report consult
          </button>

        </div>
      </div>
    </section>
  );
}
