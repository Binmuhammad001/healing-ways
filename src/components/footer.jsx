import { useState } from "react";
import Logo from "../assets/logo.svg";


export default function Footer() {
  return (
    <footer className="bg-[#172641] text-white w-full">
      
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1.5fr] gap-16">
          
          {/* Company Info */}
          <div>
            <img
              src={Logo}
              alt="Healing Ways logo"
              className="w-40 mb-4 filter invert brightness-0"
            />

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Connecting people or medically challenged individuals to the right
              hospitals both locally and internationally to receive the best
              possible care geared towards restoring health.
            </p>
          </div>

          {/* Links Group */}
          <div className="grid grid-cols-2 gap-20">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#testimonial" className="hover:text-white transition">Testimonial</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#aboutus" className="hover:text-white transition">About us</a></li>
                <li><a href="#contactus" className="hover:text-white transition">Contact us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#privacy" className="hover:text-white transition">Privacy policy</a></li>
                <li><a href="#terms" className="hover:text-white transition">Terms of use</a></li>
                <li><a href="#dataprotection" className="hover:text-white transition">Data protection policy</a></li>
              </ul>
            </div>

          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Get product updates"
                className="flex-1 bg-white px-4 py-2 text-sm text-gray-900 rounded-l-md placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-md transition">
                →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Social icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {["in", "f", "x"].map((icon, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-sm cursor-pointer transition"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 All rights reserved
          </p>

        </div>
      </div>

    </footer>
  );
}
