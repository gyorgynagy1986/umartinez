import React from "react";
import style from "./StickyNav.module.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../../public/assets/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";

const StickyNav = () => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}>
      <div className={style.stickynavContainer}>
          <Image
            priority
            className={style.logo}
            alt="umartinez étterem logója"
            src={logo}
          />
        <Navbar stickyPosition={true} nav={true} />
      </div>
    </div>
  );
};

export default StickyNav;
