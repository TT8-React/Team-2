import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../Routes";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState("");
  const navagate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setIsAuthorized(false);
    console.log("logouttttttt", !isAuthorized);
    navagate(PATHS.LOGIN);
  };

  const login = () => {
    setIsAuthorized(true);
    console.log("Authorizeddd", isAuthorized);
    navagate(PATHS.DASHBOARD);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  }, []);

  return {
    isAuthorized,
    setIsAuthorized,
    loading,
    setLoading,
    token,
    setToken,
    logout,
    login,
  };
};

export default useAuth;
