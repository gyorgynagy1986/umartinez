"use client";

import Image from "next/image";
import etlap from "../../../public/assets/menu/1.png";
import itallap from "../../../public/assets/menu/2.png";
import style from "./page.module.css";
import { Orelega_One } from "next/font/google";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  const handleClickFood = () => {
    window.location.href = "/etlap.pdf";
  };

  const handleClickDrinks = () => {
    window.location.href = "/itallap.pdf";
  };

  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>Étlap</h1>
      <div className={style.container}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickFood}
          placeholder="blur"
          priority
          alt="Ultramarinos Martínez étterem itallapja"
          src={itallap}
        />
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickDrinks}
          placeholder="blur"
          priority
          alt="Ultramarinos Martínez étterem Étlapja"
          src={etlap}
        />
      </div>
    </>
  );
};

export default Menu;
