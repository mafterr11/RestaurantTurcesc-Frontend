import { login } from "../../services/auth";
import Login from "../../components/Login";

export const metadata = {
  title: "Login - Delirium",
  description: "Delirium login page",
  keywords: "login, register, account, delirium login, delirium register, delirium account",
};

const LoginPage = () => {
  return (
    <Login login={login} />
  );
};

export default LoginPage;
