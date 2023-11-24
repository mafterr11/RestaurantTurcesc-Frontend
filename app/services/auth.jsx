"use server";
import { cookies } from "next/headers";

export const login = async (email, password) => {
  const res = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();
  cookies().set({
    name: "token",
    value: result.token,
  });
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
  cookies().set({
    name: "token",
    value: result.token,
  });
  return result;
};

export const logout = () => {
  cookies.remove("token");
};

export const isLoggedIn = () => {
  const token = cookies().get("token");
  console.log(token);
  if (token) return true;
  return false;
};

export const getToken = () => {
  return cookies().get("token")?.value;
};
