import React from "react";
import Minor from "../../assets/minor.jpg";
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
    <section className="bg-white py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#E8F2FF] rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-sm">
          
          {/* Left - Text */}
          <div className="p-6 sm:p-8 md:p-12 flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Health services and tips for healthy living — all in one place.
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
              Connecting people or medically challenged individuals to the right
              hospitals both locally and internationally to receive the best
              possible care geared towards restoring health.
            </p>

           <button className="bg-[#137EE8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-fit">
  Book a consultation
</button>

          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end flex-1 p-6">
            <img
              src={Minor}
              alt="Healthcare professional"
              className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover shadow-md"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
