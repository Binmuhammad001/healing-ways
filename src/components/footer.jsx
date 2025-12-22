import { useState } from "react";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1a2942] text-white py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          
          {/* Company Info */}
          <div className="lg:pr-8">
            <div className="mb-6">
              <img 
                src={Logo} 
                alt="Healing Waves logo" 
                className="h-6 w-auto filter brightness-0 invert" 
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible care geared towards restoring health.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#testimonial" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#aboutus" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  About us
                </a>
              </li>
              <li>
                <a 
                  href="#contactus" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#privacy" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a 
                  href="#dataprotection" 
                  className="text-gray-300 hover:text-white transition text-sm inline-block"
                >
                  Data protection policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-base font-semibold mb-6">Subscribe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Get product updates"
                className="flex-1 px-4 py-2.5 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-r-md transition flex items-center justify-center">
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
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-3 order-2 md:order-1">
              <a
                href="#linkedin"
                className="w-9 h-9 bg-transparent border border-gray-600 hover:bg-gray-700 hover:border-gray-500 rounded-full flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="#facebook"
                className="w-9 h-9 bg-transparent border border-gray-600 hover:bg-gray-700 hover:border-gray-500 rounded-full flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="#twitter"
                className="w-9 h-9 bg-transparent border border-gray-600 hover:bg-gray-700 hover:border-gray-500 rounded-full flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm order-1 md:order-2">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
