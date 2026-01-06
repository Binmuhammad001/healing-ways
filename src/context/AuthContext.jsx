import { createContext, useContext, useState } from "react";
import api from "../components/services/api"; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData);

      if (res.data.success) {
        setUser(res.data.user);
        setIsAuthenticated(true);

        return { success: true };
      } else {
        return { success: false, message: res.data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: "Login failed. Please check your credentials."
      };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
