import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  // user login
  const handleUserLogin = () => {
    setIsAuth(true);
  };

  // user logout
  const handleUserLogout = () => {
    setIsAuth(false);
  };

  // set token
  const handleToken = (val) => {
    setToken(val);
  };

  const value = {
    isAuth,
    token,
    handleUserLogin,
    handleUserLogout,
    handleToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
