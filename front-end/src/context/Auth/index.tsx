import { IAuthProvider, IContextProvider } from './interface';
import { IUser } from '../../interfaces/user';
import { createContext, useContext, useState } from 'react';
import { getUser } from '../../services/user.service';

const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

export function AuthProvider({ children }: IContextProvider) {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [status, setStatus] = useState<string>('pending');

  const logout = async () => {};

  const loginUser = async () => {
    try {
      const resp = await getUser();
      setCurrentUser(resp);
      setStatus(resp.data.status);
    } catch (error) {
      setStatus('unauthorized');
      console.error(error);
    }
  };

  /*const load = async () => {
    const token = getCookie("token");
    if (!token) return;

    loginUser();
  };

  React.useEffect(() => {
    load();
  }, []);
*/
  return (
    <AuthContext.Provider value={{ currentUser, status, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProvider = () => {
  return useContext(AuthContext);
};
