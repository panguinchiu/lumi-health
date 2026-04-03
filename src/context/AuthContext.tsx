'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type UserRole = 'patient' | 'doctor' | null;

interface User {
  name: string;
  email: string;
  role: UserRole;
  memberId: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const DEMO_ACCOUNTS: Record<string, { password: string; user: User }> = {
  'doctor@lumi.health': {
    password: 'demo1234',
    user: {
      name: '陳醫師',
      email: 'doctor@lumi.health',
      role: 'doctor',
      memberId: 'DR-2024-001',
      avatar: '陳',
    },
  },
  'patient@lumi.health': {
    password: 'demo1234',
    user: {
      name: '王小明',
      email: 'patient@lumi.health',
      role: 'patient',
      memberId: 'LH-2024-0001',
      avatar: '王',
    },
  },
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: () => ({ success: false }),
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('lumi-auth');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const login = (email: string, password: string) => {
    const account = DEMO_ACCOUNTS[email.toLowerCase()];
    if (!account) return { success: false, error: '帳號不存在' };
    if (account.password !== password) return { success: false, error: '密碼錯誤' };
    setUser(account.user);
    localStorage.setItem('lumi-auth', JSON.stringify(account.user));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lumi-auth');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
