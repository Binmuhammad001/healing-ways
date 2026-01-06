import axios from 'axios';

// For Vite, use VITE_ prefix instead of REACT_APP_
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

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
    // Only redirect if it's a token expiration issue, not login failure
    if (error.response?.status === 401 && error.config.url !== '/auth/login') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Don't redirect immediately, let the component handle it
      console.log('Token expired or invalid');
    }
    return Promise.reject(error);
  }
);

// AUTH API
export const authAPI = {
  register: (userData) => {
    return api.post('/auth/register', userData);
  },
  verifyOTP: (email, otp) => {
    return api.post('/auth/verify-otp', { email, otp });
  },
  resendOTP: (email) => {
    return api.post('/auth/resend-otp', { email });
  },
  login: (credentials) => {
    return api.post('/auth/login', credentials);
  },
  getCurrentUser: () => {
    return api.get('/auth/me');
  }
};

// CONSULTATION API
export const consultationAPI = {
  bookConsultation: (formData) => {
    return api.post('/consultations/book', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  getMyConsultations: () => {
    return api.get('/consultations/my-consultations');
  },
  getConsultationById: (id) => {
    return api.get(`/consultations/${id}`);
  }
};

// CONTACT API
export const contactAPI = {
  submitContact: (contactData) => {
    return api.post('/contact', contactData);
  }
};

export default api;
