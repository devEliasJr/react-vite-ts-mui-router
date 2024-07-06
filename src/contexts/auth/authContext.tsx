import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  isAuth: boolean | null;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export const useAuthContext = (): AuthContextProps => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const accessToken = Cookies.get("accessToken");

  const signOut = () => {
    Cookies.remove("accessToken");
    setIsAuth(false);
    window.location.reload();
  };

  useEffect(() => {
    setIsAuth(accessToken ? true : false);
  }, [accessToken]);

  const contextValue: AuthContextProps = {
    isAuth,
    signOut
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
