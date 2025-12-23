import { useState } from "react";
import Logo from "../assets/logo.svg";


export default function Footer() {
  return (
    <footer className="bg-[#172641] text-white py-12 px-4 w-full">
      <div className="w-full px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8  m-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="Healing Waves logo" className="w-40 h-auto filter invert brightness-0 mr-2" />
            </div>


            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible care geared towards restoring health.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pl-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#testimonial" className="text-gray-300 hover:text-white transition text-sm">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#aboutus" className="text-gray-300 hover:text-white transition text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contactus" className="text-gray-300 hover:text-white transition text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition text-sm">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition text-sm">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#Dataprotection" className="text-gray-300 hover:text-white transition text-sm">
                  Data protection policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <div className="flex">
             <input
                type="email"
                placeholder="Get product updates"
                className="flex-1 bg-white px-4 py-2 rounded-l-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">

 <a
                href="#linkedin"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

                <a
                href="#facebook"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="#twitter"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            
             
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025  All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
