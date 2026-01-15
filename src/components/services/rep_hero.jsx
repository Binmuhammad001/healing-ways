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
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden pt-12">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={Hero}
          alt="Hospital room"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-full sm:max-w-lg md:max-w-2xl text-center md:text-left space-y-3 sm:space-y-4 md:space-y-6">
          
          <p className="text-xs sm:text-sm md:text-base text-gray-100 uppercase tracking-wider font-medium">
            Medical report translation
          </p>

           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Medical Reports and Translation if needed 
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-xl mx-auto md:mx-0">
           Medical reports are one of the most important part of the whole process 
            The reports helps us understand or at least have an idea of the patient diagnosis 
            With that we can identify the best doctor for  that particular patient to ensure smooth treatment plan and process, accurate communication with the medical professionals.
                      </p>
          
          <div className="pt-2 flex justify-center md:justify-start">
            <button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-medium text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Book a medical report consult
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
