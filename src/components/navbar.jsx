
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
      navigate("/consultation");
    } else {
      navigate("/signup", { state: { fromBooking: true, from: "/consultation" } });
    }
  };

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 relative">
        
        <div className="min-w-[10rem] md:min-w-[12rem]">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={Logo} alt="Healing Waves Logo" className="object-contain w-40 h-auto" />
          </a>
        </div>

       <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-blue bg-transparent-600 hover:bg-transparent active:bg-transparent focus:bg-transparent focus:outline-none"
    >
      ☰
    </button>


        <ul className={isOpen ? "md:flex md:space-x-6 lg:space-x-8 md:items-center absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ease-in top-16 opacity-100 md:justify-center md:flex-1 text-center" : "md:flex md:space-x-6 lg:space-x-8 md:items-center absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ease-in top-[-400px] opacity-0 md:opacity-100 md:justify-center md:flex-1 text-center"}>
          <li>
            <a href="/" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Home</a>
          </li>

          <li>
            <a href="/about" className="block py-2 px-4 text-gray-700 hover:text-blue-600">About</a>
          </li>

          <li className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block py-2 px-4 text-gray-700 flex items-center justify-center mx-auto bg-white hover:text-blue-600 focus:outline-none transition-colors">
              Services
              <svg className="w-4 h-4 ml-1 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul className={isDropdownOpen ? "absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-white shadow-lg rounded-md mt-1 py-2 w-48 border border-gray-100 transition-all duration-300 opacity-100 visible translate-y-0" : "absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-white shadow-lg rounded-md mt-1 py-2 w-48 border border-gray-100 transition-all duration-300 opacity-0 invisible -translate-y-2"}>
              <li>
                <a href="/rep_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Report Translation</a>
              </li>
              <li>
                <a href="/med_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Medical Tourism</a>
              </li>
              <li>
                <a href="/con_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Medical Consultancy</a>
              </li>
              <li>
                <a href="/acc_service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Accommodation & Logistics</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/contact" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Contact</a>
          </li>

          {!isAuthenticated ? (
            <>
              <li className="md:hidden">
                <a href="/login" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Login</a>
              </li>
              <li className="md:hidden">
                <button onClick={handleBookAppointment} className="block py-2 px-4 text-gray-700 hover:text-blue-600 w-full text-center">
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
               <a 
          onClick={handleBookAppointment}
          className="block py-2 px-4 text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          Book Appointment
        </a>

                <a href="/my-consultations" className="block py-2 px-4 text-gray-700 hover:text-blue-600">
                  My Consultations
                </a>
                <button onClick={handleLogout} className="block py-2 px-4 text-red-600 hover:text-red-700 w-full text-left">
                  Logout
                </button>
              </div>
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {!isAuthenticated ? (
            <>
              <a href="/login" className="text-gray-700 hover:text-blue-600 transition">Login</a>
              <button onClick={handleBookAppointment} className="bg-[#137EE8] text-white px-5 py-2.5 rounded-md hover:bg-[#0f6bc7] transition whitespace-nowrap">
                Book Appointment
              </button>
            </>
          ) : (
            <>
              <button onClick={handleBookAppointment} className="bg-[#137EE8] text-white px-5 py-2.5 rounded-md hover:bg-[#0f6bc7] transition whitespace-nowrap">
                Book Appointment
              </button>

       <div className="relative">
  <button 
    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
    className="flex items-center space-x-2 px-3 py-2 border-2 border-gray-900 rounded-lg bg-white hover:bg-gray-50 transition group"
  >
    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
      {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
    </div>
    <span className="font-medium text-gray-900">{user?.firstName}</span>
    <svg className="w-4 h-4 text-gray-900 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {isUserMenuOpen && (
    <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-1 border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
        <p className="text-sm font-semibold text-gray-900">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="text-xs text-gray-600 mt-0.5">{user?.email}</p>
      </div>
      <a 
        href="/my-consultations" 
        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
      >
        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span className="text-gray-900">My Consultations</span>
      </a>
     <button 
  onClick={handleLogout} 
  className="flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 transition-colors border-t border-gray-100 mt-1 bg-white"
>
  <svg className="w-4 h-4 mr-3 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
  <span className="text-red-600">Logout</span>
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
