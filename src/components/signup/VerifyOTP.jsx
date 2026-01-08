import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-20">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 w-full max-w-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verify Your Email
          </h1>
          <p className="text-gray-600 text-sm">
            We sent a verification code to <strong>{email}</strong>
          </p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-900 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit code"
              maxLength={6}
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl font-mono tracking-widest"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>

          <div className="text-center text-sm text-gray-600">
            Didn't receive the code?{' '}
            <button
              type="button"
              onClick={handleResendOTP}
              className="text-blue-600 font-medium hover:text-blue-700 underline"
            >
              Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
