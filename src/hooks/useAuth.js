import { useState, useEffect } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState("");

  const logout = () => {
    localStorage.clear();
    setAuthorized(false);
  };

  const login = () => {
    setAuthorized(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthorized(true);
    }
  }, []);

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    token,
    setToken,
    logout,
    login,
  };
};

export default useAuth;
