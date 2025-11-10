import { createContext, useContext, useState, useEffect } from 'react';
import fetchClient from './fetchClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // TODO: Validate token or fetch user info
      setUser({ id: '1', email: 'test@example.com' });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login since API is not running
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('jwt', 'mock_jwt_token');
      localStorage.setItem('refresh_token', 'mock_refresh_token');
      setUser({ id: '1', email });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};