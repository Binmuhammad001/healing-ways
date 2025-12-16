import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import major from '../../assets/major.jpg';

export default function Section5() {
  const benefits = [
    "Adequate & comprehensive diagnosis",
    "We connect you to the right doctors for best treatment.",
    "over 8 years experience please add these to the list",
    "A team of professionals"
  ];

  return (
    <section className="py-16 md:py-5 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          
            {/* Left - Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <img
                src={major}
                alt="Medical consultation"
                className="rounded-2xl shadow-xl w-full h-auto object-cover max-w-md"
                loading="lazy"
              />
            </div>
          </div>
         

          {/* Right - Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Get access to medical <br/>consultant anytime
            </h2>

            <p className="text-black mb-8">
              We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
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