"use client";

import "../../../src/app/page.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import Button from "../UI/Buttons/Button";
import facebook from "../../../public/assets/social/facebook.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import logo_footer from "../../../public/assets/logo/logo.svg";
import logo from "../../../public/assets/logo/logo.svg";
import hambiOpen from "../../../public/assets/hambi/hambi_open.svg";
import hambiClose from "../../../public/assets/hambi/hambi_close.svg";
import MobileMenu from "../Mobile/MobileMenu";
import NavItems from "./NavItems";
import LanguageLinks from "./LanguageLinks";
import { usePathname } from "next/navigation";
import { links } from '../../app/links'

const textContentHu = {
  btnName: "asztalfoglalás",
};

const textContentEng = {
  btnName: "book a table now",
};

const Navbar = ({ NavFooter, nav, stickyPosition, colorMobileMenu }) => {
  const [mobileMenu, SetMobileMene] = useState(false);
  const pathname = usePathname();

  const mobileMenuHandeler = () => {
    SetMobileMene((prevmobileMenu) => !prevmobileMenu);
  };

  const mobileClose = () => {
    SetMobileMene(false);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [mobileMenu]);

  const navClass = `${style.nav} ${nav && style.navNav} ${nav && style.navSizePrefix} ${
    NavFooter && style.footerNav
  } ${colorMobileMenu && style.colorMobileMenu} ${
    stickyPosition && style.stickyContainer
  }`;

  const linkClass = `${NavFooter && style.logoFooterMobile}`;

  const containerLogic = `${style.rightItemsContainer} ${
    NavFooter && style.ulCenter
  } ${NavFooter && style.containerUlMobile}`;

  const ulLogic = `${style.ul} ${nav && style.ulHide} ${
    NavFooter && style.ulMobile}  ${stickyPosition && style.ulPrefixSticky} }`;

  const socialLinkContainerLogic = `${style.social} ${nav && style.socialNav} ${
    NavFooter && style.socialNavFooter
  }`;

  const languageLinksLogic = `${style.lng} ${NavFooter && style.lngHide} ${
    nav && style.lngNav
  }`;
  const btnEngLogic = `${
    pathname === "/en" ||
    pathname === "/en/menu" ||
    pathname === "/en/contact" ||
    pathname === "/en/gallery"
      ? textContentEng.btnName
      : textContentHu.btnName
  }`;
  const btnHoverPrefix = `${
    pathname === "/en" ||
    pathname === "/en/menu" ||
    pathname === "/en/contact" ||
    pathname === "/en/gallery"
  }`;

  return (
    <>
      {mobileMenu && <MobileMenu mobileClose={mobileClose} />}

      <nav className={navClass}>
        {NavFooter && (
          <Link className={linkClass} href="/">
            <Image
              alt="Ultramarinos Martínez étterem logója"
              src={logo_footer}
            />
          </Link>
        )}

        <div className={containerLogic}>
          {nav && (
            <Link href="/">
              <Image
                priority
                className={` ${stickyPosition && style.stickylogo} ${style.logo}`}
                alt="umartinez étterem logója"
                src={logo}
              />
            </Link>
          )}
          <ul className={ulLogic}>
            <NavItems />
          </ul>
          <div className={socialLinkContainerLogic}>
            <Link href={links.facebook}>
              <Image
                src={facebook}
                alt="Ultramarinos Martínez facebbok oldala"
              />
            </Link>
            <Link href={links.instagram}>
              <Image
                src={instagram}
                alt="Ultramarinos Martínez instagram oldala"
              />
            </Link>
          </div>
          <div className={languageLinksLogic}>
            <LanguageLinks />
          </div>
          <div className={`${nav && style.btnNav}`}>
            <Button
              btnHoverPrefix={btnHoverPrefix === "true" ? true : false}
              url={links.reservation}
              name={btnEngLogic}
            />
          </div>
        </div>
        {nav && (
          <Image
            width={25}
            onClick={mobileMenuHandeler}
            className={style.hambi}
            src={mobileMenu ? hambiOpen : hambiClose}
            alt="hamburger menu"
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
