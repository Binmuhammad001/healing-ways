import { useState } from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
        
        {/* LOGO */}
        <div className="min-w-[10rem] md:min-w-[12rem]">
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src={Logo}
              alt="Healing Waves Logo"
              className="object-contain w-40 h-auto"
            />
          </a>
        </div>

        {/* MENU BUTTON (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <ul
          className={`md:flex md:space-x-6 lg:space-x-8 md:items-center absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ease-in 
            ${isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
            md:justify-center md:flex-1 text-center
          `}
        >
          <li>
            <a href="/" className="block py-2 px-4 text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="block py-2 px-4 text-gray-700 hover:text-blue-600">
              About
            </a>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
           <button
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  className={`block py-2 px-4 text-gray-700 flex items-center justify-center mx-auto 
  bg-white hover:text-blue-600 focus:outline-none transition-colors`}
  style={{ backgroundColor: "#fff" }}
>
  Services
  <svg
    className="w-4 h-4 ml-1 mt-0.5 text-gray-600 group-hover:text-blue-600 transition-transform duration-200"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


            {/* Dropdown menu */}
            <ul
              className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-white shadow-lg rounded-md mt-1 py-2 w-48 border border-gray-100 transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <li>
                <a
                  href="/rep_service"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Report Translation 
                </a>
              </li>
              <li>
                <a
                  href="/med_service"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Medical Tourism 
                </a>
              </li>
              <li>
                <a
                  href="/con_service"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Medical Consultancy
                </a>
              </li>
              <li>
                <a
                  href="/acc_service"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Accommodation & Logistics
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/contact" className="block py-2 px-4 text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <a href="/login" className="text-gray-700 hover:text-blue-600 transition">
            Login
          </a>
         <a href="/signup">
      <button className="bg-[#137EE8] text-white px-5 py-2.5 rounded-md hover:bg-[#0f6bc7] transition whitespace-nowrap">
        Book Appointment
      </button>
    </a>
        </div>
      </div>
    </nav>
  );
}
