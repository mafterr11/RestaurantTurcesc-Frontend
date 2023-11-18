// STYLES
import { Poppins } from "next/font/google";
import "./globals.css";
// COMPONENTS
import Nav from "./components/Nav";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Turkish Delirium",
  description: "Turkish themed restaurant for all the foodies out there",
  keywords: "turkish restaurant, food, delight, sucuk, turkey, kebab",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
