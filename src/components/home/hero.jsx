import React from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function Hero() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleBookConsultation = () => {
    if (isAuthenticated) {
      navigate("/consultation");   // or /consultation if that’s your route
    } else {
      navigate("/signup");
    }
  };

  return (
    <section className="pt-16 md:pt-24 bg-[#F0F4FA] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* === Text Section === */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          
          {/* Left Column */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="font-semibold uppercase mb-2" style={{ color: '#137EE8' }}>
              Medical Consulting Services
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your compass to <br />
              healthy living
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 flex flex-col justify-end">
            <p className="mb-6 text-gray-600 text-sm sm:text-base">
              Connecting people or medically challenged individuals to the right
              hospitals both locally and internationally to receive the best
              possible care geared towards restoring health.
            </p>
           <button
  onClick={handleBookConsultation}
  className="bg-[#137EE8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-fit"
>
  Book a consultation
</button>

          </div>
        </div>

        {/* === Image Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
          <img
            src={hero1}
            alt="Doctors consulting patients"
            className="rounded-lg shadow-md object-cover w-full h-64 sm:h-80 md:h-[450px]"
            loading="lazy"
          />
          <img
            src={hero2}
            alt="Medical team discussion"
            className="rounded-lg shadow-md object-cover w-full h-64 sm:h-80 md:h-[450px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
