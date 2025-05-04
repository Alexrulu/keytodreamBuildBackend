import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Token inválido o expirado");

        const data = await res.json();
        setIsLoggedIn(true);
        setUser(data);
      } catch (error) {
        console.error("Error al obtener usuario:", error.message);
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);

  const login = (token, userData, rememberMe) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("token", token);
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
