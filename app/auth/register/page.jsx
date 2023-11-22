import { register } from "../../services/auth";
import Register from "../../components/Register"; 
 
export const metadata = {
  title: "Register - Delirium",
  description: "Delirium register page",
  keywords: "login, register, account, delirium login, delirium register, delirium account",
};

const RegisterPage = () => {
  return (
    <Register register={register}/>
  );
};

export default RegisterPage;
