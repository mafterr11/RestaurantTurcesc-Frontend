"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black/70'
    >
      <div style={{ color: `${textColor}` }} className='max-w[1240px] mx-4 flex justify-between items-center p-5'>
        <h1
          className='cursor-default'
        >
          Turkish.<span className="text-accent">Delirium</span>
        </h1>
        <ul
          style={{ color: `${textColor}` }}
          className='hidden sm:flex justify-center items-center list-none'
        >
          <li className='text-2xl mx-6' >
            <Link href='/' className='hover'>
              <span>Home</span>
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/menu' className='hover'>
              <span>
                Menu
              </span>
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/gallery' className='hover'>
              <span>
                Gallery
              </span>
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/contact' className='hover'>
              <span>
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <div className='hidden sm:flex justify-center items-center'>
          <ul
            style={{ color: `${textColor}` }}
            className='flex justify-center items-center'
          >
            <li className='text-lg mx-4'>
              <Link href='/auth/login' className='hover'>
                <span>
                  Login
                </span>
              </Link>
            </li>
            <li className='text-lg mx-4'>
              <Link href='/auth/register' className='hover'>
                <span>
                  Register
                </span>
              </Link>
            </li>
          </ul>
          <FontAwesomeIcon
            style={{ color: `${textColor}` }}
            icon={faCartShopping}
            className='w-7 h-7 ml-3 cursor-pointer'
          />
        </div>

        {/* MOBILE BUTTON */}
        <div className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose
              size={30}
              color="white"
              onClick={handleNav}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              onClick={handleNav}
            />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-black text-center ease-in-out duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              className='text-3xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/' className='hover'>
                <span>
                  Home
                </span>
              </Link>
            </li>
            <li
              className='text-3xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/menu' className='hover'>
                <span>
                  Menu
                </span>
              </Link>
            </li>
            <li
              className='text-3xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/gallery' className='hover'>
                <span>
                  Gallery
                </span>
              </Link>
            </li>
            <li
              className='text-3xl p-4 hover:text-gray-500'
              onClick={handleNav}
            >
              <Link href='/contact' className='hover'>
                <span>
                  Contact
                </span>
              </Link>
            </li>
            {/* Login/Register */}
            <div className="flex flex-col items-center justify-evenly gap-y-2 mt-2">
            <li
              className='text-2xl hover:text-gray-500'
              onClick={handleNav}
              >
              <Link href='/auth/login' className='hover'>
                <span>
                  Login
                </span>
              </Link>
            </li>
            <li
              className='text-2xl hover:text-gray-500'
              onClick={handleNav}
              >
              <Link href='/auth/register' className='hover'>
                <span>
                  Register
                </span>
              </Link>
            </li>
              </div>
            <li>
              <FontAwesomeIcon
                icon={faCartShopping}
                className='w-9 h-9 cursor-pointer mt-6'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
