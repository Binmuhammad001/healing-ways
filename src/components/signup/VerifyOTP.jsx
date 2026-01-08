import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyOTP } = useAuth();
  
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Get email from location state (passed from registration)
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      // If no email, redirect to signup
      navigate('/signup');
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !otp) {
      setError('Please enter the OTP code');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await verifyOTP(email, otp);
      
      if (result.success) {
        setSuccess('Verification successful! Redirecting...');
        
        // Check if user came from "Book Appointment" flow
        const intendedRoute = location.state?.from || '/';
        
        // Wait 1 second then redirect
        setTimeout(() => {
          if (location.state?.fromBooking) {
            // If they came from booking, take them to consultation form
            navigate('/consultation');
          } else {
            // Otherwise take them to homepage
            navigate(intendedRoute);
          }
        }, 1000);
      } else {
        setError(result.message || 'Verification failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    // Add resend OTP logic here if you have it
    console.log('Resend OTP for:', email);
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
