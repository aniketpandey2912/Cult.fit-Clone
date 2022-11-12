import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoutes;
