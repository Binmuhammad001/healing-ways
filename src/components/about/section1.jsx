import React from 'react';
import About from '../../assets/about_img.jpg';

export default function FoundedSection() {
  return (
    <section className="bg-[#F7F3F0] py-0">
      <div className="container mx-auto px-0 max-w-full">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Image */}
          <div className="relative h-full min-h-[400px] md:min-h-[450px]">
            <img 
              src={ About } 
              alt="Doctor working at desk" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Founded in 2014
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                We looked for technology that could do this and found<br/> hundreds of products—stereoscopic, ultrasound, thermal,<br/> PIR, AIR, low-res cameras, wifi tracking, bluetooth, etc. We<br/>bought them all and experimented. We learned each<br/>technology had trade-offs—they were unreliable, inaccurate,<br/> expensive, invasive, inaccessible, high latency, and so on. We<br/>decided to build it ourselves.What began as a weekend<br/>project has become the better part of a decade working to<br/>build the standard platform for counting people. There's so<br/>much left to do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}