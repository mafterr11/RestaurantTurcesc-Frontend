"use server";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const login = async (email, password) => {
  const res = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();
  cookies.set("token", result.token); 
  return result;
};

export const register = async (firstName, lastName, email, password) => {
  const res = await fetch("http://localhost:8080/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  const result = await res.json();
  cookies.set("token", result.token); 
  return result;
};

export const logout = () => {
  cookies.remove("token");
};

export const isLoggedIn = () => {
  return !!cookies.get("token");
};

export const getToken = () => {
  return cookies.get("token");
};
