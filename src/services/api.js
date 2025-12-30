import axios from 'axios';

// API Base URL - automatically uses the right URL based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Debug logs to see what's being used
console.log('=== API Configuration ===');
console.log('🌐 API_URL:', API_URL);
console.log('🌐 REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('🌐 NODE_ENV:', process.env.NODE_ENV);
console.log('========================');

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Request interceptor (add auth token to requests)
apiClient.interceptors.request.use(
  (config) => {
    console.log('📤 API Request:', config.method.toUpperCase(), config.url);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor (handle errors globally)
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url
    });
    
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  // Register new user
  register: (userData) => {
    console.log('🔐 Registering user:', userData.email);
    return apiClient.post('/auth/register', userData);
  },

  // Verify OTP
  verifyOTP: (email, otp) => {
    console.log('🔐 Verifying OTP for:', email);
    return apiClient.post('/auth/verify-otp', { email, otp });
  },

  // Resend OTP
  resendOTP: (email) => {
    console.log('🔐 Resending OTP to:', email);
    return apiClient.post('/auth/resend-otp', { email });
  },

  // Login
  login: (email, password) => {
    console.log('🔐 Logging in:', email);
    return apiClient.post('/auth/login', { email, password });
  },

  // Get current user
  getCurrentUser: () => {
    console.log('🔐 Getting current user');
    return apiClient.get('/auth/me');
  },
};

// Contact API endpoints
export const contactAPI = {
  // Submit contact form
  submitContact: (contactData) => {
    console.log('📧 Submitting contact form');
    return apiClient.post('/contact', contactData);
  },
};

export default apiClient;
