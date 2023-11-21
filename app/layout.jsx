// STYLES
import { Poppins } from "next/font/google";
import "./globals.css";
// COMPONENTS
import Nav from "./components/Nav";
import Footer from "./components/Footer"

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Turkish Delirium",
  description: "Turkish themed restaurant for all the foodies out there",
  keywords: "turkish restaurant, food, delight, sucuk, turkey, kebabs and grills, istanbul dining, authentic turkish dishes, turkish hospitality",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-screen bg-fixed bg-cover bg-center background tracking-wide'>
      <body className={poppins.className}>
        <Nav/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
