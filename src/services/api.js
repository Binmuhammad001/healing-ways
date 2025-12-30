import axios from 'axios';

// API Base URL - automatically uses the right URL based on environment
const API_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-name.vercel.app/api'  // Your deployed backend
    : 'http://localhost:5001/api');  // Local development


console.log('🌐 API_URL:', API_URL);
console.log('🌐 Environment:', process.env.NODE_ENV);
console.log('🌐 All env vars:', process.env);

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
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (handle errors globally)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
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
    return apiClient.post('/auth/register', userData);
  },

  // Verify OTP
  verifyOTP: (email, otp) => {
    return apiClient.post('/auth/verify-otp', { email, otp });
  },

  // Resend OTP
  resendOTP: (email) => {
    return apiClient.post('/auth/resend-otp', { email });
  },

  // Login
  login: (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },

  // Get current user
  getCurrentUser: () => {
    return apiClient.get('/auth/me');
  },
};

// Contact API endpoints
export const contactAPI = {
  // Submit contact form
  submitContact: (contactData) => {
    return apiClient.post('/contact', contactData);
  },
};

export default apiClient;
