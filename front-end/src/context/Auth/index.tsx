import { IAuthProvider, IContextProvider } from './interface';
import { IUser } from '../../interfaces/user';
import { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../../services/user.service';
import { getTokenToLocalStorage } from '../../services/localStorage.service';

const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

export function AuthProvider({ children }: IContextProvider) {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [status, setStatus] = useState<string>('pending');

  const logout = async () => {
    localStorage.clear();
    window.location.replace('/');
  };

  const loginUser = async () => {
    try {
      const resp = await getUser();
      setCurrentUser(resp);
    } catch (error) {
      setStatus('unauthorized');
      console.error(error);
    }
  };

  const load = async () => {
    const token = getTokenToLocalStorage();
    if (!token) return;

    loginUser();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, status, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProvider = () => {
  return useContext(AuthContext);
};
