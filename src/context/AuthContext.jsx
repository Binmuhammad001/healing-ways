import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
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

    // First, set user from localStorage immediately for faster UI update
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        console.log('✅ User loaded from localStorage:', parsedUser);
      } catch (e) {
        console.error('Error parsing stored user:', e);
      }
    }

    // Then verify with backend
    try {
      const response = await authAPI.getCurrentUser();
      if (response.data.success) {
        const userData = response.data.data;
        setUser(userData);
        setIsAuthenticated(true);
        // Update localStorage with latest user data
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('✅ User verified with backend:', userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // Only clear if it's actually an auth error
      if (error.response?.status === 401) {
        console.log('❌ Token invalid, clearing auth');
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
        const { token, user } = response.data.data;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        setUser(user);
        setIsAuthenticated(true);
        
        console.log('✅ Login successful:', user);
        
        return { success: true, user };
      }
    } catch (error) {
      console.error('Login failed:', error);
      
      // Handle specific error cases
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
        const { token, user } = response.data.data;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        setUser(user);
        setIsAuthenticated(true);
        
        console.log('✅ OTP verified, user logged in:', user);
        
        return { success: true, user };
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
    console.log('🔴 Logging out...');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    verifyOTP,
    logout,
    checkAuth
  };

  // Show loading screen while checking auth
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#666',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '32px', 
            marginBottom: '16px' 
          }}>⏳</div>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

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
