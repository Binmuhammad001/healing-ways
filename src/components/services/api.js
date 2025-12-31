// src/services/api.js
import axios from 'axios';

// API Base URL - Update this for production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-name.vercel.app/api'  // ← Update this when deploying
  : 'http://localhost:5001/api';  // ← Changed from 5000 to 5001 to match your port

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

// Request interceptor - Add token to requests automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle responses and errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
      const { status } = error.response;
      
      if (status === 401) {
        // Token expired or invalid - clear storage and redirect
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('pendingEmail');
        localStorage.removeItem('userData');
        window.location.href = '/login';
      }
      
      if (status === 429) {
        // Rate limit exceeded
        console.error('Too many requests. Please try again later.');
      }
    } else if (error.request) {
      // Request made but no response
      console.error('Backend server not responding. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);

// ============================================
// AUTHENTICATION API CALLS
// ============================================
export const authAPI = {
  // Register new user
  register: (userData) => api.post('/auth/register', userData),
  
  // Verify OTP
  verifyOTP: (data) => api.post('/auth/verify-otp', data),
  
  // Resend OTP
  resendOTP: (data) => api.post('/auth/resend-otp', data),
  
  // Login
  login: (credentials) => api.post('/auth/login', credentials),
  
  // Forgot Password
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  
  // Reset Password
  resetPassword: (data) => api.post('/auth/reset-password', data),
  
  // Get current user profile
  getMe: () => api.get('/auth/me'),
  
  // Logout (client-side only)
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('pendingEmail');
    localStorage.removeItem('userData');
    window.location.href = '/login';
  }
};

// ============================================
// CONSULTATION API CALLS
// ============================================
export const consultationAPI = {
  // Book a new consultation
  book: (formData) => {
    return api.post('/consultations/book', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  
  // Get user's consultations
  getMyConsultations: (params = {}) => {
    return api.get('/consultations/my-consultations', { params });
  },
  
  // Get single consultation by ID
  getById: (id) => {
    return api.get(`/consultations/${id}`);
  },
  
  // Cancel consultation
  cancel: (id) => {
    return api.patch(`/consultations/${id}/cancel`);
  }
};

// ============================================
// CONTACT API CALLS (if you have contact routes)
// ============================================
export const contactAPI = {
  // Submit contact form
  submit: (contactData) => api.post('/contact', contactData),
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Health check
export const healthCheck = () => {
  return api.get('/health');
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

// Get user from localStorage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }
  return null;
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

export default api;
