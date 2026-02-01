import axios from 'axios';

// For Vite, use VITE_ prefix (you were correct!)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// Debug logging
console.log('🌐 API Configuration:');
console.log('   Base URL:', API_URL);
console.log('   Environment:', import.meta.env.MODE);

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false // Changed to false for Vercel
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    // Debug logs
    console.log('🔍 API Request:', {
      method: config.method.toUpperCase(),
      url: config.url,
      fullURL: `${config.baseURL}${config.url}`,
      hasToken: !!token
    });
    
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

// Handle response errors
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      url: response.config.url,
      status: response.status
    });
    return response;
  },
  (error) => {
    console.error('❌ API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.response?.data?.message || error.message
    });
    
    // Only redirect if it's a token expiration issue, not login failure
    if (error.response?.status === 401 && error.config.url !== '/api/auth/login') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('⚠️ Token expired or invalid');
    }
    return Promise.reject(error);
  }
);

// AUTH API
export const authAPI = {
  forgotPassword: (email) => api.post('/api/auth/forgot-password', { email }),
  verifyResetCode: (email, code) => api.post('/api/auth/verify-reset-code', { email, code }),
  resetPassword: (email, code, newPassword) => api.post('/api/auth/reset-password', { email, code, newPassword }),
  
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
    return api.post('/api/consultations/book', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  getMyConsultations: () => {
    return api.get('/api/consultations/my-consultations');
  },
  getConsultationById: (id) => {
    return api.get(`/api/consultations/${id}`); // Fixed: was using template literal incorrectly
  }
};

// DASHBOARD API
export const dashboardAPI = {
  getDashboard: () => {
    return api.get('/api/dashboard/dashboard');
  },
  getConsultations: (status = 'all') => {
    return api.get(`/api/dashboard/consultations?status=${status}`);
  },
  getConsultationById: (id) => {
    return api.get(`/api/dashboard/consultations/${id}`);
  },
  updateProfile: (profileData) => {
    return api.patch('/api/dashboard/profile', profileData);
  },
  changePassword: (passwordData) => {
    return api.patch('/api/dashboard/change-password', passwordData);
  }
};

// CONTACT API
export const contactAPI = {
  submitContact: (contactData) => {
    return api.post('/api/contact', contactData);
  }
};

export default api;
