"use client";

import Image from "next/image";
import etlap from "../../../../public/assets/menu/1.jpg";
import itallap from "../../../../public/assets/menu/2_eng.jpg";
import style from "./page.module.css";
import { Orelega_One } from "next/font/google";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  const handleClickFood = () => {
    window.location.href = "/menu_eng.pdf";
  };

  const handleClickDrinks = () => {
    window.location.href = "/itallap.pdf";
  };

  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>Menu</h1>
      <div className={style.container}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickFood}
          placeholder="blur"
          priority
          alt="Drink menu of Ultramarinos Martínez restaurant"
          src={itallap}
        />
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickDrinks}
          placeholder="blur"
          priority
          alt="Ultramarinos Martínez Restaurant Menu"
          src={etlap}
        />
      </div>
    </>
  );
};

export default Menu;
