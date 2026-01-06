import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/changed.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsUserMenuOpen(false);
  };

  const handleBookAppointment = () => {
    if (isAuthenticated) {
      navigate("/consultation-form");
    } else {
      navigate("/signup");
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 relative">
        
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
            md:justify-center md:flex-1 text-center`}
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
              className="block py-2 px-4 text-gray-700 flex items-center justify-center mx-auto bg-white hover:text-blue-600 focus:outline-none transition-colors"
            >
              Services
              <svg
                className="w-4 h-4 ml-1 mt-0.5"
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
                <a href="/rep_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Report Translation
                </a>
              </li>
              <li>
                <a href="/med_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Medical Tourism
                </a>
              </li>
              <li>
                <a href="/con_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Medical Consultancy
                </a>
              </li>
              <li>
                <a href="/acc_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
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

          {/* MOBILE AUTH MENU */}
          {!isAuthenticated ? (
            <>
              <li className="md:hidden">
                <a href="/login" className="block py-2 px-4 text-gray-700 hover:text-blue-600">
                  Login
                </a>
              </li>
              <li className="md:hidden">
                <button
                  onClick={handleBookAppointment}
                  className="block py-2 px-4 text-gray-700 hover:text-blue-600 w-full text-center"
                >
                  Book Appointment
                </button>
              </li>
            </>
          ) : (
            <li className="md:hidden">
              <div className="border-t border-gray-200 mt-2 pt-2">
                <p className="px-4 py-2 text-sm text-gray-500">
                  {user?.firstName} {user?.lastName}
                </p>
                <a href="/my-consultations" className="block py-2 px-4 text-gray-700 hover:text-blue-600">
                  My Consultations
                </a>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-4 text-red-600 hover:text-red-700 w-full text-left"
                >
                  Logout
                </button>
              </div>
            </li>
          )}
        </ul>

        {/* RIGHT BUTTONS - DESKTOP */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {!isAuthenticated ? (
            <>
              <a href="/login" className="text-gray-700 hover:text-blue-600 transition">
                Login
              </a>
              <button
                onClick={handleBookAppointment}
                className="bg-[#137EE8] text-white px-5 py-2.5 rounded-md hover:bg-[#0f6bc7] transition whitespace-nowrap"
              >
                Book Appointment
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleBookAppointment}
                className="bg-[#137EE8] text-white px-5 py-2.5 rounded-md hover:bg-[#0f6bc7] transition whitespace-nowrap"
              >
                Book Appointment
              </button>

              {/* USER MENU */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                    {user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                  </div>
                  <span className="font-medium">{user?.firstName}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    <a
                      href="/my-consultations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      My Consultations
                    </a>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
