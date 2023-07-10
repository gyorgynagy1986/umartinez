import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LogoMain from "@/components/UI/Logo/LogoMain";
import { Mukta } from "next/font/google";
import Divider from '@/components/UI/Divider/Divider'

const mukta = Mukta({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Ultramarinos Martínez",
  description:
    "Az Ultramarinos Martínez egy Deli és bár Budapesten, ahol spanyol ízekkel kényeztetünk helyben és elvitelre is. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={mukta.className}>
        <LogoMain />
        <Navbar nav={true} />
        {children}
        <Divider />
        <Navbar NavFooter={true} />
        <Footer />
      </body>
    </html>
  );
}
