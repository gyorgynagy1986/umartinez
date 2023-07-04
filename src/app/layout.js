import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/UI/Logo/Logo";
import { Mukta } from "next/font/google";

const mukta = Mukta({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Umartinez",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={mukta.className}>
        <Navbar nav={true} />
        {children}
        <Navbar NavFooter={true} />
        <Footer />
      </body>
    </html>
  );
}
