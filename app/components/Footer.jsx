import Link from "next/link";
import { GrRestaurant } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="flex justify-evenly items-center p-6 gap-6 bg-black/80">
            <div className="flex justify-center items-center gap-6 text-lg">
                <GrRestaurant size={50} className='hidden md:block' />
                <p>Project made by <Link href="https://github.com/mafterr11" className="hover"><span>Maftei Alexandru</span></Link></p>
            </div>
           
            <div className="flex justify-center items-center gap-4 md:gap-12">
                <Link target="_blank" href="https://tiktok.com/">
                    <FaTiktok size={40} />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/">
                    <FaInstagram size={40} />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/" >
                    <IoLogoFacebook size={40} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
