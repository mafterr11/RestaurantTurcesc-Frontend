// STYLES
import { Poppins } from "next/font/google";
import "./globals.css";
// COMPONENTS
import Nav from "./components/Nav";
import Footer from "./components/Footer"

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Turkish Delirium",
  description: "Turkish themed restaurant for all the foodies out there",
  keywords: "Turkish Cuisine, Restaurant Dining, Turkish Delirium Experience, Authentic Turkish Flavors, Cultural Dining, Fine Dining Experience, Gourmet Turkish Food, Turkish Delirium Menu, Quality Hospitality, International Cuisine",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-screen bg-fixed bg-cover bg-center background tracking-wide'>
      <body className={`${poppins.className} text-white bg-black/75`}>
        <Nav/>
      {children}
        <Footer />
      </body>
    </html>
  );
}
