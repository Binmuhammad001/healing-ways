import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  
  const inputRefs = useRef([]);

  useEffect(() => {
    // Get email from localStorage
    const savedEmail = localStorage.getItem('pendingEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      // No pending email, redirect to registration
      navigate('/book-consultation');
    }
  }, [navigate]);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value !== "" && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move focus to previous input on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    if (pasteData.length === 6 && !isNaN(pasteData)) {
      const newOtp = pasteData.split('');
      setOtp(newOtp);
      // Focus the last input after paste
      inputRefs.current[5].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      setLoading(false);
      return;
    }

    try {
      // ✅ FIXED: Pass email and OTP as separate parameters
      const response = await authAPI.verifyOTP(email, otpCode);

      if (response.data.success) {
        // Save token and user data
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data));
        localStorage.removeItem('pendingEmail');
        localStorage.removeItem('userData');

        // Show success message briefly
        setResendSuccess(false);
        setError("");
        
        // Redirect to dashboard or home
        setTimeout(() => {
          navigate('/dashboard'); // Change this to wherever you want
        }, 1000);
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      setError(
        error.response?.data?.message || 
        "Invalid or expired OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    setError("");
    
    try {
      // ✅ FIXED: Pass email as parameter, not object
      const response = await authAPI.resendOTP(email);
      
      if (response.data.success) {
        setResendSuccess(true);
        // Clear OTP fields
        setOtp(["", "", "", "", "", ""]);
        // Focus first input
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }
    } catch (error) {
      console.error('Resend OTP error:', error);
      setError(
        error.response?.data?.message || 
        "Failed to resend OTP. Please try again."
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center px-4 py-8">
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        {/* Form Container */}
        <div className="w-full bg-white p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Verify email
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Enter the 6 digit OTP we sent to{" "}
            <span className="font-semibold">{email || "your email"}</span>
            <br />
            to complete your registration
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {resendSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
              OTP has been resent successfully! Check your email.
            </div>
          )}

          <form onSubmit={handleVerify}>
            {/* OTP Inputs */}
            <div className="flex justify-between gap-3 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-14 h-14 border border-gray-300 rounded-xl text-center text-2xl font-bold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                />
              ))}
            </div>

            {/* Resend OTP */}
            <div className="text-center mb-8">
              <span className="text-gray-600">Didn't get an email? </span>
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={resendLoading}
                className="text-blue-600 font-semibold hover:text-blue-700 disabled:opacity-50 underline"
              >
                {resendLoading ? "Sending..." : "Resend OTP"}
              </button>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={loading || otp.join('').length !== 6}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              {loading ? "Verifying..." : "Verify email"}
            </button>
          </form>

          {/* Back to Registration */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/book-consultation')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Back to Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
