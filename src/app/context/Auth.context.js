"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "../utils/axios";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  let storedUser = null;
  let storedToken = null;
  if (typeof window !== "undefined") {
    storedUser = localStorage.getItem("user");
    storedToken = localStorage.getItem("token");
  }
  const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
  ); // Replace 'any' with your actual user type

  const [token, setToken] = useState(storedToken ? storedToken : null); // Replace 'any' with your actual user type
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(()=>{
  //   if(user !== null) setLoading(false)
  // },[user])

  const login = async (email, password) => {
    // Simulate a login by setting a mock user object
    setLoading(true)

    try {
      const response = await axios.post("/auth/local/login", {
        email,
        password,
      });
      // Do something with the response, like storing tokens or redirecting
      console.log("Response:", response.data);
      const resuser = response.data.user;
      const accessToken = response.data.accessToken;
      setUser(resuser);
      setToken(accessToken);
      localStorage.setItem("user", JSON.stringify(resuser));
      localStorage.setItem("token", accessToken);
      setLoading(false)
      // router.replace("/dashboard");
    } catch (error) {
      // Handle error
      setLoading(false)
      console.log("Error:", error?.response?.data);
    }
  };

  const logout = () => {
    // Simulate a logout by removing the user object
    
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
