import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { authAPI } from "../../services/api";

export default function BookConsultationForm() {
  const navigate = useNavigate(); // Initialize navigate
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
      // Prepare data for backend (remove address as it's not in our backend model)
      const { address, ...userData } = formData;

      // Call the backend API
      const response = await authAPI.register(userData);
      
      if (response.data.success) {
        setSuccess("Registration successful! Check your email for OTP verification.");
        
        // Save user email for OTP verification page
        localStorage.setItem('pendingEmail', formData.email);
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Redirect to OTP verification page immediately
        navigate('/verify-otp'); // Use navigate instead of window.location.href
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

  // Rest of your component remains the same...
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-32">
      {/* Top Title */}
      <h1 className="text-3xl font-semibold text-center text-gray">Book a consultation</h1>

      <h1 className="text-black text-center mt-2">
        Book a consultation
      </h1>
      <p className="text-gray-500 text-center mt-2">
        Connecting people or medically challenged individuals to the right hospitals
      </p>

      {/* Stepper */}
      <div className="flex items-center gap-8 mt-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
            1
          </div>
          <span className="text-blue-600 font-medium">Register</span>
        </div>

        <div className="h-px bg-gray-300 w-12"></div>

        <div className="flex items-center gap-2 opacity-50">
          <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center text-sm">
            2
          </div>
          <span className="text-gray-600 font-medium">Confirm</span>
        </div>

        <div className="h-px bg-gray-300 w-12"></div>

        <div className="flex items-center gap-2 opacity-50">
          <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center text-sm">
            3
          </div>
          <span className="text-gray-600 font-medium">Consultation</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-8 mt-10">
      
        <h2 className="text-gray-700 mt-2 mb-6 text-lg font-bold">
          Provide some information
        </h2>
        <p className="text-gray-500 mt-1 mb-6">
          Connecting people or medically challenged individuals to the right hospitals
        </p>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="mt-1 w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="mt-1 w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-1 w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Address (Optional - not sent to backend) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address (Optional)</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="mt-1 w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password (min. 6 characters)"
              className="mt-1 w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
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
            className={`w-full bg-blue-600 text-white py-2 rounded-md text-center mt-6 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Registering...' : 'Next'}
          </button>
        </form>
      </div>
    </div>
  );
}
