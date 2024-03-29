"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import { Orelega_One } from "next/font/google";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import ButtonGetInTouch from "../UI/Buttons/ButtonGetInTouch";
import HeroCoverPhoto from "../../../public/assets/hero/hero.webp";

const orelega = Orelega_One({ subsets: ["latin"], weight: "400" });


const textContent = {
  h1: "Ultramarinos Martínez Deli & Bar",
  p: "Deli és bár, bár és deli, spanyol ízek helyben és elvitelre is. Gyere és kóstold meg finomságainkat, kedvenceidet pedig vidd haza!",
  btn: "asztalfoglalás",
  btn2: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h1: "Ultramarinos Martínez Deli & Bar",
  p: "Deli and bar, bar and deli, Spanish flavors on site and for takeaway. Come and taste our delicacies, and take your favourites home!",
  btn: "BOOK a table now",
  btn2: "Get in touch",
  url: "/en/contact",
};

const Hero = ({ reservation, lang }) => {
  const [stickyNav, setStickyNav] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false);
        } else {
          setStickyNav(true);
        }
      },
      { rootMargin: "0px 20px 20px 20px" }
    );

    observer.observe(menuRef.current);
  }, []);

  return (
    <header ref={menuRef} className={style.container}>
      {stickyNav && <StickyNav />}
      <div className={style.imageContainer}>
        <Image
          placeholder="blur"
          alt="Ultramarinos Martínez"
          priority
          src={HeroCoverPhoto}
        />
      </div>
      <div className={style.textContainer}>
      <h1 className={orelega.className}>
         Ultramarinos Martínez <span style={{whiteSpace:"nowrap"}}>Deli & Bar</span>
        </h1> 
        <p>{!lang ? textContent.p : textContentEn.p}</p>
        <div className={style.btnContainer}>
          <Button
            btnBlue={true}
            engColorPrefix={lang ? true : false}
            url={reservation}
            name={!lang ? textContent.btn : textContentEn.btn}
          />
          <ButtonGetInTouch
            url={!lang ? textContent.url : textContentEn.url}
            name={!lang ? textContent.btn2 : textContentEn.btn2}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
