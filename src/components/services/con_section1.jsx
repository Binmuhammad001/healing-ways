import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Img from '../../assets/rep_img.jpg';


export default function Section3() {


  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="container mx-auto px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          
         

          {/* Right - Content */}
          <div className="w-full lg:w-7/12">
           <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">
              Experience Affordable,<br/>World-class Medical Care
            </h2>

            <p className="text-black mb-8">
              We are committed to making your medical tourism journey a<br/> success, from initial consultation to post-treatment follow-up.<br/>Let us help you achieve your
            </p>



            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
              {/* Stat 1 */}
              <div className="bg-[#A0DDFF33] rounded-xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  80,000+
                </div>
                <div className="text-xs text-gray-500">
                  App interactions each year
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#A0DDFF33] rounded-xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  250+
                </div>
                <div className="text-xs text-gray-500">
                  App interactions each year
                </div>
              </div>
            </div>
          
          </div>

           {/* Left - Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <img
                src={Img}
                alt="Medical consultation"
                className=" shadow-xl w-full h-auto object-cover max-w-md"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}