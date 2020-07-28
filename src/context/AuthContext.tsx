import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  access_token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const access_token = localStorage.getItem('@curseduca:token');

    if (access_token) {
      return { access_token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    
    const { access_token } = response.data;

    localStorage.setItem('@curseduca:token', access_token);

    setData({ access_token });
  }, []);

  return (
    <AuthContext.Provider value= {{ token: data.access_token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
