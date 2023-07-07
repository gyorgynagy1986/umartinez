"use client";

import style from "./Services.module.css";
import { Orelega_One } from "next/font/google";
import Image from "next/image";
import HeroCoverPhoto from "../../../public/assets/sections/Our_services2.png";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const textContent = {
  h2: "Szolgáltatások ",
  p: "Foglalj asztalt nálunk, ha céges rendezvényt szervezel, ünnepelnél a barátaiddal, vagy egyszerűen csak élveznéd a Bartók hangulatát egy sangría társaságában. Igazi spanyol életérzéssel várunk!",
  p1: "Céges rendezvények",
  p2: "baráti összejövetelek",
  p3: "születésnapok",
};

const textContentEn = {
  h2: "Services ",
  p: "Book a table with us if you're organizing a company event, celebrating with friends, or simply looking to enjoy the ambience of Bartók with a glass of sangría. We are waiting for you with authentic Spanish vibes!",
  p1: "Corporate events",
  p2: "get-togethers",
  p3: "birthday celebrations",
};

const Services = ({ lang }) => {
  const titleLogic = !lang ? textContent.h2 : textContentEn.h2;
  const liLogic = !lang ? textContent.p1 : textContentEn.p1;
  const liLogic2 = !lang ? textContent.p2 : textContentEn.p2;
  const liLogic3 = !lang ? textContent.p3 : textContentEn.p3;
  const pLgoic = !lang ? textContent.p : textContentEn.p;

  return (
    <section className={style.container}>
      <div className={style.prefixContainer}>
        <div className={style.imageContainer}>
          <Image
            placeholder="blur"
            alt="Ultramarinos Martínez"
            src={HeroCoverPhoto}
          />
        </div>
        <div className={style.textContainer}>
          <h2 className={dosis.className}>{titleLogic}</h2>
          <ul className={style.ulContainer}>
            <li>{liLogic}</li>
            <li>{liLogic2}</li>
            <li>{liLogic3}</li>
          </ul>
          <p>{pLgoic}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
