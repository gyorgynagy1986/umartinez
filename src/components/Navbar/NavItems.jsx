//import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import style from "./Navbar.module.css";
import Link from "next/link";

const items = [
  {
    id: 1,
    name: "Főoldal",
    url: "/",
  },
  {
    id: 2,
    name: "Galéria",
    url: "/galeria",
  },
  {
    id: 3,
    name: "Étlap",
    url: "/etlap",
  },
  {
    id: 4,
    name: "Kapcsolat",
    url: "/kapcsolat",
  },
  {
    id: 5,
    name: "Nyitvatartás",
    url: "/#opening",
  },
];

const itemsEng = [
  {
    id: 1,
    name: "Home",
    url: "/en",
  },
  {
    id: 2,
    name: "Gallery",
    url: "/en/gallery",
  },
  {
    id: 3,
    name: "Menu",
    url: "/en/menu",
  },
  {
    id: 4,
    name: "Contact",
    url: "/en/contact",
  },
  {
    id: 5,
    name: "opening hours",
    url: "en/#opening",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/en" ||
      pathname === "/en/menu" ||
      pathname === "/en/contact" ||
      pathname === "/en/gallery"
        ? itemsEng.map((item) => (
            <li
              className={`${pathname === item.url ? style.activeLi : ""}`}
              key={item.id}
            >
              <Link
                className={`${style.link} ${
                  pathname === item.url ? style.active : ""
                }`}
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          ))
        : items.map((item) => (
            <li
              className={`${pathname === item.url ? style.activeLi : ""}`}
              key={item.id}
            >
              <Link
                className={`${style.link} ${
                  pathname === item.url ? style.active : ""
                }`}
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          ))}
    </>
  );
};

export default NavItems;
