import { useState } from "react";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#162745] text-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="Healing Ways"
              className="w-40 mb-6 filter invert brightness-0"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Connecting people or medically challenged individuals to the right
              hospitals both locally and internationally to receive the best
              possible care geared towards restoring health.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#testimonial" className="hover:text-white">Testimonial</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#privacy" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of use</a></li>
              <li><a href="#data" className="hover:text-white">Data protection policy</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Subscribe</h4>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Get product updates"
                className="flex-1 px-4 py-2 text-sm text-gray-900 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#137EE8] hover:bg-blue-700 px-4 rounded-r-md transition flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.94 2.94a.75.75 0 01.82-.16l13 6a.75.75 0 010 1.36l-13 6A.75.75 0 012.5 15.5V4.5a.75.75 0 01.44-.56z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-14 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Social Icons */}
            <div className="flex gap-4">
              {["linkedin", "facebook", "twitter"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-[#162745] transition"
                >
                  <span className="text-xs font-semibold">
                    {item[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
