import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  const handleUserLogin = () => {
    setIsAuth(true);
  };

  const handleUserLogout = () => {
    setIsAuth(false);
  };

  const value = { isAuth, handleUserLogin, handleUserLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
