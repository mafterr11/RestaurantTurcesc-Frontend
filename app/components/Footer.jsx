import Link from "next/link"

const Footer = () => {
    return (
        <footer className="text-white bg-black/90 w-full z-10">
            <div className="container px-5 py-8 gap-2 mx-auto flex items-center justify-center  flex-col text-xl">
                <Link href='/' className='hover'>
                    Home
                </Link>
                <Link href='/menu' className='hover'>
                    Menu
                </Link>
                <Link href='/about-us' className='hover'>
                    About Us
                </Link>
                <Link href='/contact' className='hover'>
                    Contact
                </Link>
            </div>
        </footer>
    )
}

export default Footer
