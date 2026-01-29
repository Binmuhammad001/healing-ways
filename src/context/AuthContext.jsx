import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../components/services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (!token) {
      setLoading(false);
      return;
    }

    // Set user from localStorage immediately
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (e) {
        console.error('Error parsing stored user:', e);
      }
    }

    // Verify with backend
    try {
      const response = await authAPI.getCurrentUser();
      if (response.data.success) {
        const userData = response.data.data;
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      
      if (response.data.success) {
        const { token, user, redirectTo } = response.data.data;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        setUser(user);
        setIsAuthenticated(true);
        
        // Return redirectTo for role-based routing
        return { 
          success: true, 
          user,
          redirectTo: redirectTo || (user.role === 'admin' ? '/admin/dashboard' : '/dashboard')
        };
      }
    } catch (error) {
      console.error('Login failed:', error);
      
      if (error.response?.data?.requiresVerification) {
        return { 
          success: false, 
          message: error.response.data.message,
          requiresVerification: true,
          email: credentials.email
        };
      }
      
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      
      if (response.data.success) {
        return { 
          success: true, 
          message: response.data.message,
          email: response.data.data.email 
        };
      }
    } catch (error) {
      console.error('Registration failed:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const verifyOTP = async (email, otp) => {
    try {
      const response = await authAPI.verifyOTP(email, otp);
      
      if (response.data.success) {
        const { token, user, redirectTo } = response.data.data;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        setUser(user);
        setIsAuthenticated(true);
        
        // Return redirectTo for role-based routing
        return { 
          success: true, 
          user,
          redirectTo: redirectTo || (user.role === 'admin' ? '/admin/dashboard' : '/dashboard')
        };
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Verification failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Role-based helper functions
  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const isPatient = () => {
    return user?.role === 'patient' || !user?.role; // Default to patient if no role
  };

  const getDefaultRoute = () => {
    if (!isAuthenticated) return '/';
    return isAdmin() ? '/admin/dashboard' : '/dashboard';
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    verifyOTP,
    logout,
    checkAuth,
    // New role-based helpers
    isAdmin,
    isPatient,
    getDefaultRoute
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
