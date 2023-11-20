"use server"

import { login } from "../../services/auth";
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <Login login={login} />
  );
};

export default LoginPage;
