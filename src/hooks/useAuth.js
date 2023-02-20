import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState("");

  const logout = () => {
    localStorage.clear();
    setIsAuthorized(false);
  };

  const login = () => {
    setIsAuthorized(true);
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
    isLoading,
    setIsLoading,
    token,
    setToken,
    logout,
    login,
  };
};

export default useAuth;
