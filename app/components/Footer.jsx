import Link from "next/link"

const Footer = () => {
    return (
        <footer className="text-white bg-black/90 static right-0 bottom-0 left-0">
            <div className="container px-5 py-8 gap-2 mx-auto flex items-center justify-center  flex-col text-xl">
                <Link href='/' className='hover'>
                    <span>Home</span>
                </Link>
                <Link href='/menu' className='hover'>
                    <span>
                        Menu
                    </span>
                </Link>
                <Link href='/about-us' className='hover'>
                    <span>
                        About Us
                    </span>
                </Link>
                <Link href='/contact' className='hover'>
                    <span>
                        Contact
                    </span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
