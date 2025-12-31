import axios from 'axios';

// Base URL - update this for production
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add token to requests if available
api.interceptors.request.use(
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

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ============================================
// AUTH API
// ============================================
export const authAPI = {
  // Register new user
  register: (userData) => {
    return api.post('/auth/register', userData);
  },

  // Verify OTP
  verifyOTP: (email, otp) => {
    return api.post('/auth/verify-otp', { email, otp });
  },

  // Resend OTP
  resendOTP: (email) => {
    return api.post('/auth/resend-otp', { email });
  },

  // Login
  login: (credentials) => {
    return api.post('/auth/login', credentials);
  },

  // Get current user
  getCurrentUser: () => {
    return api.get('/auth/me');
  }
};

// ============================================
// CONSULTATION API
// ============================================
export const consultationAPI = {
  // Book consultation
  bookConsultation: (formData) => {
    return api.post('/consultations/book', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  // Get user's consultations
  getMyConsultations: () => {
    return api.get('/consultations/my-consultations');
  },

  // Get consultation by ID
  getConsultationById: (id) => {
    return api.get(`/consultations/${id}`);
  }
};

// ============================================
// CONTACT API
// ============================================
export const contactAPI = {
  // Submit contact form
  submitContact: (contactData) => {
    return api.post('/contact', contactData);
  }
};

export default api;
