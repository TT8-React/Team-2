import useAuth from "../hooks/useAuth";
import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const {isAuthorized} = useAuth();
  console.log("AuthProvider",isAuthorized)
  return <AuthContext.Provider value={isAuthorized}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
