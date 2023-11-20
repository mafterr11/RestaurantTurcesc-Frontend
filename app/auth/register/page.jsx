"use client";
import { register } from "@/app/services/auth";
import { useState } from "react";
 
 
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-black/40 absolute top-0 bottom-0 left-0 right-0">
    <div className='max-w-[500px] mx-auto sm:my-[10rem] my-[8rem] overflow-auto min-h-[300px] border-2 border-black border-opacity-86 shadow-standard p-5 rounded-15  bg-black bg-opacity-90 text-white'>
      <h1>Register new account</h1>
      <form>
        <div className='my-5'>
          <label className='block font-bold text-[20px]'>First Name</label>
          <input
            className='w-full h-10 my-2 p-2 text-lg border-[1px] border-black text-black'
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='my-5'>
          <label className='block font-bold text-[20px]'>Last Name</label>
          <input
            className='w-full h-10 my-2 p-2 text-lg border-[1px] border-black text-black'
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

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
          value='Register'
          className='btn btn-block'
          onClick={async(e) => {
            e.preventDefault();
            e.stopPropagation();
            const response = await register(firstName, lastName, email, password);
            console.log(response);
          }}
        />
      </form>
    </div>
    </div>
  );
};

export default Register;
