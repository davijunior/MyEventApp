import React, { createContext, useState, ReactNode } from 'react';
import { mockUsers, User } from '../mocks/data';

interface AuthContextType {
  user: User | null;
  login: (userId: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userId: string) => {
    const found = mockUsers.find(u => u.id === userId) || null;
    setUser(found);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};