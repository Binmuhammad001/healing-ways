import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import major from '../../assets/rep_img.jpg';


export default function Section3() {
  const benefits = [
    "8 years experience",
    "24/7 Medical services",
    "Over 30 hospitals around the world",
    "A team of professionals"
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Left - Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <img
                src={major}
                alt="Medical consultation"
                className="shadow-xl w-full h-auto object-cover max-w-md"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-7/12">
           <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">
              Experience Affordable,<br/>World-class Medical Care
            </h2>

            <p className="text-black mb-8">
              We are committed to making your medical tourism journey a success, from<br/> initial consultation to post-treatment follow-up.Let us help you achieve your<br/> healthcare goals while exploring the world and expanding your horizons.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
              <p className="text-black">{benefit}</p>
            </div>
          ))}
        </div>


            {/* CTA Button */}
            <button className="bg-[#137EE8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Book a consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}