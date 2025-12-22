import React, { useState } from 'react';
import { Linkedin, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your email submission logic here
  };

  return (
    <footer className="bg-[#1a2942] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-light tracking-[0.3em] mb-6">
              HEALING WAYS
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible care geared towards restoring health.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#testimonial" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 text-sm hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#data-protection" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Data protection policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-medium mb-6">Subscribe</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Get product updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white text-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-3 transition-colors rounded-r"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#linkedin"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#facebook"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#twitter"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-300 text-sm">
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
