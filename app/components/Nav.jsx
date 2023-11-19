"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black bg-opacity-70'>
      <div className='max-w[1240px] mx-4 flex justify-between items-center p-5 text-white'>
        <h1 className='cursor-default font-bold text-[25px]'>
          Turkish Delirium
        </h1>
        <ul className='hidden sm:flex justify-center items-center list-none '>
          <li className='text-2xl mx-6'>
            <Link href='/' className='hover'>
              Home
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/menu' className='hover'>
              Menu
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/about-us' className='hover'>
              About Us
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/contact' className='hover'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='hidden sm:flex justify-center items-center'>
          <ul className='flex justify-center items-center'>
            <li className='text-lg mx-4'>
              <Link href='/auth/login' className='hover'>
                Login
              </Link>
            </li>
            <li className='text-lg mx-4'>
              <Link href='/auth/register' className='hover'>
                Register
              </Link>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faCartShopping}
            className='w-9 h-9 ml-3 cursor-pointer'
          />
        </div>

        {/* MOBILE BUTTON */}
        <div className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={30} onClick={handleNav} />
          ) : (
            <AiOutlineMenu size={30} onClick={handleNav} />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              className='text-4xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/' className='hover'>
                Home
              </Link>
            </li>
            <li
              className='text-4xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/meniu' className='hover'>
                Menu
              </Link>
            </li>
            <li
              className='text-4xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/despre-noi' className='hover'>
                About Us
              </Link>
            </li>
            <li
              className='text-4xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/contact' className='hover'>
                Contact
              </Link>
            </li>
            <li
              className='text-2xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/auth/login' className='hover'>
                Login
              </Link>
            </li>
            <li
              className='text-2xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/auth/register' className='hover'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
