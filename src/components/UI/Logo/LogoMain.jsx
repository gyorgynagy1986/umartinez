import React from "react";
import logo from "../../../../public/assets/logo/logo.svg";
import Link from "next/link";
import Image from "next/image";
import style from "./LogoMain.module.css";

const Logo = ({ onClick, mobileClose }) => {
  return (
    <div className={style.container}>
      <Link onClick={onClick} className={style.logo} href="/">
        <Image
          onClick={mobileClose}
          priority
          alt="Ultramarinos Martínez étterem logója"
          src={logo}
        />
      </Link>
    </div>
  );
};

export default Logo;
