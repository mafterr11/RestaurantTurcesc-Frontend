import { register } from "../../services/auth";
import Register from "../../components/Register"; 
 
const RegisterPage = () => {
  return (
    <Register register={register}/>
  );
};

export default RegisterPage;
