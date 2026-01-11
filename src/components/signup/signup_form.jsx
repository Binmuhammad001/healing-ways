import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

export default function BookConsultationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { address, ...userData } = formData;
      const response = await authAPI.register(userData);
      
      if (response.data.success) {
        setSuccess("Registration successful! Check your email for OTP verification.");
        localStorage.setItem('pendingEmail', formData.email);
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/verify-otp');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(
        error.response?.data?.message || 
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-16 sm:pt-24 md:pt-32 pb-8">
      {/* Top Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Book a consultation
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Connecting people to the right hospitals
        </p>
      </div>

      {/* Stepper - Responsive */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mt-6 sm:mt-8 md:mt-10 flex-wrap">
        {/* Step 1 */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs sm:text-sm font-semibold">
            1
          </div>
          <span className="text-blue-600 font-medium text-xs sm:text-sm">Register</span>
        </div>

        {/* Line 1 */}
        <div className="h-px bg-gray-300 w-6 sm:w-8 md:w-12"></div>

        {/* Step 2 */}
        <div className="flex items-center gap-1 sm:gap-2 opacity-50">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center text-xs sm:text-sm font-semibold">
            2
          </div>
          <span className="text-gray-600 font-medium text-xs sm:text-sm">Confirm</span>
        </div>

        {/* Line 2 */}
        <div className="h-px bg-gray-300 w-6 sm:w-8 md:w-12"></div>

        {/* Step 3 */}
        <div className="flex items-center gap-1 sm:gap-2 opacity-50">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center text-xs sm:text-sm font-semibold">
            3
          </div>
          <span className="text-gray-600 font-medium text-xs sm:text-sm">Consultation</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white shadow-md rounded-lg p-6 sm:p-8 mt-8 sm:mt-10">
      
        <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
          Provide some information
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Connecting people to the right hospitals
        </p>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded text-sm sm:text-base">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded text-sm sm:text-base">
            {error}
          </div>
        )}

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password (min. 6 characters)"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium mt-6 sm:mt-8 transition ${
              loading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-700 active:bg-blue-800'
            }`}
          >
            {loading ? 'Registering...' : 'Next'}
          </button>
        </form>
      </div>
    </div>
  );
}
