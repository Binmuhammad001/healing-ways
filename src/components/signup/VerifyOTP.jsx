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
    const savedEmail = localStorage.getItem('pendingEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      navigate('/book-consultation');
    }
  }, [navigate]);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    if (pasteData.length === 6 && !isNaN(pasteData)) {
      const newOtp = pasteData.split('');
      setOtp(newOtp);
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
      const response = await authAPI.verifyOTP(email, otpCode);

      if (response.data.success) {
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        localStorage.removeItem('pendingEmail');
        localStorage.removeItem('userData');

        setResendSuccess(false);
        setError("");
        
        setTimeout(() => {
          navigate('/consultation');
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
      const response = await authAPI.resendOTP(email);
      
      if (response.data.success) {
        setResendSuccess(true);
        setOtp(["", "", "", "", "", ""]);
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
    <div className="min-h-screen bg-gray-50 flex flex-col pt-8 sm:pt-12 pb-8 px-4 sm:px-6 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
          Book a consultation
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
          Connecting people or medically challenged individuals to the right hospitals
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-center mb-8 sm:mb-12 px-2 overflow-x-auto">
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 whitespace-nowrap">
          {/* Step 1 */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
              1
            </div>
            <span className="text-gray-700 font-medium text-xs sm:text-sm">Register</span>
          </div>

          {/* Line 1 */}
          <div className="w-6 sm:w-12 h-0.5 bg-gray-300 flex-shrink-0"></div>

          {/* Step 2 */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
              2
            </div>
            <span className="text-gray-600 font-medium text-xs sm:text-sm">Confirm</span>
          </div>

          {/* Line 2 */}
          <div className="w-6 sm:w-12 h-0.5 bg-gray-300 flex-shrink-0"></div>

          {/* Step 3 */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
              3
            </div>
            <span className="text-gray-600 font-medium text-xs sm:text-sm">Consultation</span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto w-full bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
          Verify email
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
          Enter the 6 digit OTP we sent to <span className="font-semibold break-all">{email || "your email"}</span> to proceed with your password reset process
        </p>

        {/* Resend Link */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-600 text-xs sm:text-sm">
            Didn't get an email?{" "}
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={resendLoading}
              className="bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 rounded px-3 sm:px-4 py-1.5 sm:py-2 inline-block text-xs sm:text-sm"
            >
              {resendLoading ? "Sending..." : "Resend OTP"}
            </button>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-6 text-xs sm:text-sm">
            {error}
          </div>
        )}

        {resendSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-6 text-xs sm:text-sm">
            OTP has been resent successfully! Check your email.
          </div>
        )}

        <form onSubmit={handleVerify}>
          {/* Enter OTP Label */}
          <label className="block text-gray-900 font-semibold mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            Enter OTP
          </label>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-gray-300 rounded-lg text-center text-lg sm:text-xl md:text-2xl font-bold text-gray-900 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-colors flex-shrink-0"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={loading || otp.join('').length !== 6}
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Verifying..." : "Verify email"}
          </button>
        </form>
      </div>
    </div>
  );
}
