import { useState } from "react";
import Logo from "../assets/logo.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#172641] text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content - 4 columns as in screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Company Info - Leftmost column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={Logo} 
                alt="HEALING WAYS logo" 
                className="w-48 h-10 object-contain invert brightness-0" 
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible care geared towards restoring health.
            </p>
          </div>

          {/* Quick Links - Second column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#testimonial" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#aboutus" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  About us
                </a>
              </li>
              <li>
                <a 
                  href="#contactus" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal - Third column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#privacy" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a 
                  href="#dataprotection" 
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  Data protection policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe - Rightmost column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base">Subscribe</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Get product updates"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section - Social Icons and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 space-y-4 md:space-y-0">
          {/* Social Icons - Left side */}
          <div className="flex items-center space-x-4">
            <a
              href="#linkedin"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-sm font-medium">In</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#facebook"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <span className="text-sm font-medium">f</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#twitter"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <span className="text-sm font-medium">v</span>
            </a>
          </div>

          {/* Copyright - Right side */}
          <div className="text-gray-400 text-sm">
            <span>© 2024</span>
            <span className="ml-1">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
