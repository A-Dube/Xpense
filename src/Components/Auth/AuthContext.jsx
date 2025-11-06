import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUserData = async (jwt) => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/auth/me", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      if (res.status === 200 && res.data.user) {
        setUser(res.data.user);
      } else {
        logout();
      }
    } catch (err) {
      console.error("Error fetching user:", err.response?.data || err.message);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
