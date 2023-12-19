import Link from "next/link";
import { GrRestaurant } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex justify-evenly items-center p-6 gap-6 bg-black/80'>
      <div className='flex justify-center items-center gap-6 text-lg'>
        <GrRestaurant size={35} className='hidden md:block' />
        <p>
          Project made by{" "}
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/maftei-alexandru/'
            className='hover'
          >
            <span>Maftei Alexandru</span>
          </Link>
        </p>
      </div>

      <div className='flex justify-center items-center gap-4 md:gap-12'>
        <Link target='_blank' href='https://tiktok.com/'>
          <FaTiktok size={30} />
        </Link>
        <Link target='_blank' href='https://www.instagram.com/'>
          <FaInstagram size={30} />
        </Link>
        <Link target='_blank' href='https://www.facebook.com/'>
          <IoLogoFacebook size={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
