"use client";

import React from "react";
import style from "./JoinUs.module.css";
import Button from "../UI/Buttons/Button";
import { Orelega_One } from "next/font/google";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const textContent = {
  h2: "Dolgozz velünk!",
  btn: "Jelentkezem",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Join our team! ",
  btn: "I want to join",
  url: "/en/contact",
};

const text = (
  <p className={style.h2}>
    Küldd el az önéletrajzod az <span>hola@umartinez.hu</span>  e-mail címre, és hamarosan keresni fogunk!
  </p>
);
const textEn = (
  <p className={style.h2}>
    Send us your CV to <span>hola@umartinez.hu</span> and we’ll get back to you
    soon!
  </p>
);

const JoinUs = ({ lang }) => {
  const btnLogic = !lang ? textContent.btn : textContentEn.btn;
  const btnUrl = !lang ? textContent.url : textContentEn.url;
  const h2Logic = !lang ? textContent.h2 : textContentEn.h2;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <h2 className={dosis.className}>{h2Logic}</h2>
        {!lang ? text : textEn}
        <Button
          btnBlue={true}
          engColorPrefixJoin={lang ? true : false}
          differentTexMainColor={true}
          name={btnLogic}
          url={btnUrl}
        />
      </div>
    </section>
  );
};

export default JoinUs;
