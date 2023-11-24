"use client";
import { useState } from "react";

const Login = ({ login }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="overlay pt-[1rem] lg:pt-[5rem]">
      <form className='max-w-[500px] mx-auto my-[10rem] max-h-fit p-5  border-2 overflow-auto border-black border-opacity-86 shadow-standard rounded-lg  bg-black bg-opacity-90'>
        <h1>Login</h1>
        <div className='my-5'>
          <label className='block font-bold text-[20px]'>Email</label>
          <input
            className='w-full h-10 my-2 p-2 text-lg border-[1px] border-black text-black'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='my-5'>
          <label className='block font-bold text-[20px]'>Password</label>
          <input
            className='w-full h-10 my-2 p-2 text-lg border-[1px] border-black text-black'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-block'
          onClick={async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await login(email, password)
          }}
        />
      </form>
    </div>
  )
}

export default Login;
