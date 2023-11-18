import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  return (
    <div>
      {/* DESKTOP MENU */}
      <div className='h-5 py-10 px-10 bg-black text-white flex items-center justify-between'>
        <h1 className='cursor-default font-bold text-2xl'>Turkish Delirium</h1>
        <ul className='hidden sm:flex justify-center items-center list-none '>
          <li className='text-2xl mx-6'>
            <Link href='/' className='hover'>
              Home
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/meniu' className='hover'>
              Menu
            </Link>
          </li>
          <li className='text-2xl mx-6'>
            <Link href='/despre-noi' className='hover'>
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
            <li className='text-xl mx-4'>
              <Link href='/auth/login' className='hover'>
                Login
              </Link>
            </li>
            <li className='text-xl mx-4'>
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
      </div>
      {/* MOBILE MENU */}
      <nav>
        <div className='block sm:hidden z-10'>
          <AiOutlineMenu size={30} />
        </div>
        <div>
          <ul className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'>
            <li className='text-2xl mx-6'>
              <Link href='/' className='hover'>
                Home
              </Link>
            </li>
            <li className='text-2xl mx-6'>
              <Link href='/meniu' className='hover'>
                Menu
              </Link>
            </li>
            <li className='text-2xl mx-6'>
              <Link href='/despre-noi' className='hover'>
                About Us
              </Link>
            </li>
            <li className='text-2xl mx-6'>
              <Link href='/contact' className='hover'>
                Contact
              </Link>
            </li>

            <li className='text-xl mx-4'>
              <Link href='/auth/login' className='hover'>
                Login
              </Link>
            </li>
            <li className='text-xl mx-4'>
              <Link href='/auth/register' className='hover'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
