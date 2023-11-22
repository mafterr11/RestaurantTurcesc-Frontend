"use client";
import { useState } from "react";

const Register = ({ register }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <div className="overlay pt-[5.5rem] lg:pt-[10rem]">
        <form className='max-w-[500px] mx-auto  overflow-auto max-h-fit border-2 border-black border-opacity-86 shadow-standard p-5 rounded-lg  bg-black bg-opacity-90 '>
        <h1>Register new account</h1>

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
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              await register(firstName, lastName, email, password);
            }}
          />
        </form>
      </div>
  );
};

export default Register;
