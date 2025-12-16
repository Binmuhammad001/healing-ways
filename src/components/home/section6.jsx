import React from 'react';
import { HeartPulse, UserCheck, Plane, FileCheck, Users } from "lucide-react";
import HeroMajor from '../../assets/major.jpg'

export default function Section6() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Why choose us</h2>
          <p className="text-black text-base max-w-2xl mx-auto">
            Connecting people or medically challenged individuals to the right<br/>hospitals both locally and internationally to receive the best possible
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-4 items-start mt-12">
          {/* Left side: features */}
          <div className="space-y-5 pl-10">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                <HeartPulse className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#010101] mb-1.5 text-base">Affordable, high-quality medical care</h3>
                <p className="text-[#010101CC] text-sm leading-relaxed">Connecting people or medically challenged individuals to the right<br/> hospitals both locally and internationally to receive the best possible</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                <UserCheck className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#010101] mb-1.5 text-base">Expert guidance every step of the way</h3>
                <p className="text-[#010101CC] text-sm leading-relaxed">Connecting people or medically challenged individuals to the right<br/> hospitals both locally and internationally to receive the best possible</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                <Plane className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#010101] mb-1.5 text-base">Stress-free medical travel experience</h3>
                <p className="text-[#010101CC] text-sm leading-relaxed">Connecting people or medically challenged individuals to the right<br/> hospitals both locally and internationally to receive the best possible</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                <FileCheck className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#010101] mb-1.5 text-base">Visa Processing & Support Services</h3>
                <p className="text-[#010101CC] text-sm leading-relaxed">Connecting people or medically challenged individuals to the right<br/> hospitals both locally and internationally to receive the best possible</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                <Users className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#010101] mb-1.5 text-base">Safely collaborate</h3>
                <p className="text-[#010101CC] text-sm leading-relaxed">Connecting people or medically challenged individuals to the right<br/> hospitals both locally and internationally to receive the best possible</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4 pt-2">
            <button className="w-48 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors">
                Book a consultation
            </button>
            <button className="w-48 bg-[#137EE81A] hover:bg-blue-700 text-[#137EE8] px-6 py-2.5 rounded-md font-medium text-sm transition-colors">
                Learn more
            </button>
            </div>

          </div>

          {/* Right side: image */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={HeroMajor} 
              alt="Medical consultation" 
              className="rounded-xl shadow-lg w-full max-w-lg object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}