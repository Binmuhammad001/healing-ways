import axios from 'axios';

// API Base URL - automatically uses the right URL based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// ✅ DEBUG LOGS - These will help us see what's happening
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
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log('📤 Request:', config.method.toUpperCase(), config.url);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ Response:', response.status);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.message);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  register: (userData) => {
    return apiClient.post('/auth/register', userData);
  },
  verifyOTP: (email, otp) => {
    return apiClient.post('/auth/verify-otp', { email, otp });
  },
  resendOTP: (email) => {
    return apiClient.post('/auth/resend-otp', { email });
  },
  login: (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },
  getCurrentUser: () => {
    return apiClient.get('/auth/me');
  },
};

// Contact API endpoints
export const contactAPI = {
  submitContact: (contactData) => {
    return apiClient.post('/contact', contactData);
  },
};

export default apiClient;
